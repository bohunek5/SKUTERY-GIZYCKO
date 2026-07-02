import cv2
import glob
import os

for video_path in glob.glob('public/videos/*.mp4'):
    poster_path = video_path.replace('.mp4', '.png')
    cap = cv2.VideoCapture(video_path)
    ret, frame = cap.read()
    if ret:
        cv2.imwrite(poster_path, frame)
        print(f"Generated {poster_path}")
    else:
        print(f"Failed to read {video_path}")
    cap.release()
