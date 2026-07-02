import cv2

input_file = '/Users/karolbohdanowicz/Downloads/girl-on-the-jet-ski-in-the-river-aerial-video-2025-12-17-04-00-06-utc.mov'
output_file = 'public/videos/hero.mp4'

cap = cv2.VideoCapture(input_file)
fps = cap.get(cv2.CAP_PROP_FPS)
width = int(cap.get(cv2.CAP_PROP_FRAME_WIDTH))
height = int(cap.get(cv2.CAP_PROP_FRAME_HEIGHT))

fourcc = cv2.VideoWriter_fourcc(*'mp4v')
out = cv2.VideoWriter(output_file, fourcc, fps, (width, height))

while cap.isOpened():
    ret, frame = cap.read()
    if not ret:
        break
    out.write(frame)

cap.release()
out.release()
print("Conversion done.")
