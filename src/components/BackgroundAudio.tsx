"use client";

import { useEffect, useRef, useState } from "react";
import { Volume2, VolumeX } from "lucide-react";

export default function BackgroundAudio() {
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [hasInteracted, setHasInteracted] = useState(false);

  useEffect(() => {
    // Only initialize once
    if (audioRef.current) return;
    
    // We use the basePath /SKUTERY-GIZYCKO as configured in next.config.ts
    const audio = new Audio("/SKUTERY-GIZYCKO/bg-music.mp3");
    audio.loop = true;
    audio.volume = 0.3;
    audioRef.current = audio;

    let interacted = false;

    const playAudio = () => {
      if (audioRef.current && !interacted) {
        interacted = true;
        audioRef.current.play().then(() => {
          setIsPlaying(true);
        }).catch((e) => {
          console.log("Audio play blocked by browser:", e);
          interacted = false; // Reset if failed so next click works
        });
      }
    };

    // Browsers require interaction to play audio
    document.addEventListener("click", playAudio);
    document.addEventListener("touchstart", playAudio);
    document.addEventListener("keydown", playAudio);

    return () => {
      document.removeEventListener("click", playAudio);
      document.removeEventListener("touchstart", playAudio);
      document.removeEventListener("keydown", playAudio);
      // We don't pause the audio on cleanup because layout doesn't unmount
      // If we did, HMR or navigating might stop the music.
    };
  }, []);

  const togglePlay = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
        setIsPlaying(false);
      } else {
        audioRef.current.play();
        setIsPlaying(true);
      }
    }
  };

  return (
    <button
      onClick={togglePlay}
      style={{
        position: "fixed",
        bottom: "80px", // slightly higher to avoid overlapping with other bottom bars
        left: "20px",
        zIndex: 9999,
        background: "rgba(255, 255, 255, 0.1)",
        border: "1px solid rgba(255, 255, 255, 0.2)",
        borderRadius: "50%",
        width: "44px",
        height: "44px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        color: "white",
        cursor: "pointer",
        backdropFilter: "blur(10px)",
        WebkitBackdropFilter: "blur(10px)",
        boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
        transition: "all 0.3s ease",
      }}
      aria-label="Toggle background music"
      onMouseEnter={(e) => {
        e.currentTarget.style.transform = "scale(1.1)";
        e.currentTarget.style.background = "rgba(255, 255, 255, 0.2)";
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.transform = "scale(1)";
        e.currentTarget.style.background = "rgba(255, 255, 255, 0.1)";
      }}
    >
      {isPlaying ? <Volume2 size={20} /> : <VolumeX size={20} />}
    </button>
  );
}
