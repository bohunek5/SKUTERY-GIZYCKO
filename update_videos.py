import cv2
import os
import shutil

# 1. Replace hero.mp4
src_hero = "/Users/karolbohdanowicz/Downloads/aerial-drone-shot-of-a-jetski-riding-in-the-middle-2025-12-17-07-37-55-utc.mp4"
dst_hero = "public/videos/hero.mp4"
shutil.copy2(src_hero, dst_hero)
print("Replaced hero.mp4")

# 2. Extract first frame (or frame at 1s) for every mp4
videos_dir = "public/videos"
for filename in os.listdir(videos_dir):
    if filename.endswith(".mp4"):
        video_path = os.path.join(videos_dir, filename)
        poster_path = os.path.join(videos_dir, filename.replace(".mp4", ".png"))
        
        cap = cv2.VideoCapture(video_path)
        # Read the very first frame or maybe frame at 1s (frame 30)?
        # A frame slightly into the video is usually better to avoid black screens
        cap.set(cv2.CAP_PROP_POS_FRAMES, 15)
        ret, frame = cap.read()
        
        if ret:
            cv2.imwrite(poster_path, frame)
            print(f"Generated poster for {filename}")
        else:
            print(f"Failed to generate poster for {filename}")
        
        cap.release()
