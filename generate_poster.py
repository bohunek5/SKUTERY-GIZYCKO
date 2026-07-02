import cv2
import sys

def extract_poster(video_path, output_path):
    cap = cv2.VideoCapture(video_path)
    ret, frame = cap.read()
    if ret:
        cv2.imwrite(output_path, frame)
    cap.release()

extract_poster('public/videos/hero.mp4', 'public/videos/hero.png')
print("Poster generated.")
