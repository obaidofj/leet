import requests

video_url = "https://us02web.zoom.us/rec/share/zVd-YW-rQUXzFPI5DUa0rJJnLvkcT5_qbXGrzzHIJsHYmzluRPOLZqT-O37_cpNO.MQw5osGAIm5XYnbd"
output_file = "zoom_video.mp4"

response = requests.get(video_url, stream=True)

if response.status_code == 200:
    with open(output_file, "wb") as file:
        for chunk in response.iter_content(chunk_size=1024):
            file.write(chunk)
    print("Video downloaded successfully.")
else:
    print("Failed to download the video.")
