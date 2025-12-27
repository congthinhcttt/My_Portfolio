"use client";

import React, { useEffect, useRef, useState } from "react";
import { Volume2, VolumeX, Music } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function MusicPlayer() {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  // ✅ Nhạc local của bạn (public/audio/nhacnen.mp3)
  const audioUrl = "/audio/nhacnen.mp3";

  // ✅ Setup 1 lần, KHÔNG đổi dependency array
  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    audio.volume = 0.2;
    audio.loop = true;

    const onPlay = () => setIsPlaying(true);
    const onPause = () => setIsPlaying(false);

    audio.addEventListener("play", onPlay);
    audio.addEventListener("pause", onPause);

    return () => {
      audio.pause();
      audio.removeEventListener("play", onPlay);
      audio.removeEventListener("pause", onPause);
    };
  }, []);

  // ✅ Play/Pause ngay trong click để tránh bị browser chặn
  const togglePlay = async () => {
    const audio = audioRef.current;
    if (!audio) return;

    try {
      if (audio.paused) {
        await audio.play();
        // state sẽ tự sync qua event "play"
      } else {
        audio.pause();
        // state sẽ tự sync qua event "pause"
      }
    } catch (e) {
      console.log("Play blocked:", e);
      setIsPlaying(false);
    }
  };

  return (
    <div className="fixed bottom-8 left-8 z-[9999] pointer-events-auto">
      <audio ref={audioRef} src={audioUrl} preload="auto" />

      <motion.button
        type="button"
        onClick={togglePlay}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className={`group relative flex items-center gap-3 px-4 py-3 rounded-2xl border transition-all duration-500 backdrop-blur-xl ${
          isPlaying
            ? "bg-indigo-500/10 border-indigo-500/50 text-indigo-400"
            : "bg-zinc-900/80 border-zinc-800 text-zinc-500 hover:border-zinc-700"
        }`}
        aria-label={isPlaying ? "Turn music off" : "Turn music on"}
      >
        {/* Visualizer Bars */}
        <div className="flex items-end gap-0.5 h-4 w-4">
          {[0.6, 1, 0.8, 0.5].map((h, i) => (
            <motion.div
              key={i}
              animate={
                isPlaying
                  ? { height: ["20%", "100%", "40%", "80%", "20%"] }
                  : { height: "20%" }
              }
              transition={{
                duration: 1 + i * 0.2,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className={`w-1 rounded-full ${isPlaying ? "bg-indigo-400" : "bg-zinc-600"}`}
              style={{ height: `${h * 100}%` }}
            />
          ))}
        </div>

        <span className="text-xs font-bold uppercase tracking-widest hidden md:block">
          {isPlaying ? "Music On" : "Music Off"}
        </span>

        <div className="p-1 rounded-lg bg-zinc-950/50">
          {isPlaying ? <Volume2 size={16} /> : <VolumeX size={16} />}
        </div>

        {/* Floating notes */}
        <AnimatePresence>
          {isPlaying && (
            <>
              <motion.div
                initial={{ opacity: 0, y: 0, x: 0 }}
                animate={{ opacity: [0, 1, 0], y: -40, x: -20, rotate: 20 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 2, repeat: Infinity, delay: 0.5 }}
                className="absolute top-0 left-4 text-indigo-400/40 pointer-events-none"
              >
                <Music size={12} />
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 0, x: 0 }}
                animate={{ opacity: [0, 1, 0], y: -50, x: 10, rotate: -20 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 2.5, repeat: Infinity, delay: 0 }}
                className="absolute top-0 right-4 text-purple-400/40 pointer-events-none"
              >
                <Music size={14} />
              </motion.div>
            </>
          )}
        </AnimatePresence>
      </motion.button>
    </div>
  );
}
