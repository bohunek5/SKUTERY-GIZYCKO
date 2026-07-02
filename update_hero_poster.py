import cv2

video_path = "public/videos/hero.mp4"
poster_path = "public/videos/hero.png"

cap = cv2.VideoCapture(video_path)
cap.set(cv2.CAP_PROP_POS_FRAMES, 15)
ret, frame = cap.read()

if ret:
    cv2.imwrite(poster_path, frame)
    print("Generated poster for hero.mp4")
else:
    print("Failed to generate poster")

cap.release()
