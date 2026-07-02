import cv2
import os
import glob

videos_dir = 'public/videos'
videos = glob.glob(os.path.join(videos_dir, '*.mp4'))

for video_path in videos:
    png_path = video_path.replace('.mp4', '.png')
    cap = cv2.VideoCapture(video_path)
    
    fps = cap.get(cv2.CAP_PROP_FPS)
    if fps <= 0:
        fps = 30  # fallback
        
    # We want frame at 1.0 second
    frame_no = int(fps * 1.0)
    
    cap.set(cv2.CAP_PROP_POS_FRAMES, frame_no)
    ret, frame = cap.read()
    
    if ret:
        cv2.imwrite(png_path, frame)
        print(f"Extracted {png_path} at frame {frame_no}")
    else:
        print(f"Failed to read frame at 1s for {video_path}")
        
    cap.release()
