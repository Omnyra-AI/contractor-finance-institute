"use client";

import { useState, useRef, useEffect } from "react";

interface AudioPlayerProps {
  lessonId: string;
  transcript: string;
  onComplete: () => void;
}

export function AudioPlayer({ lessonId, transcript, onComplete }: AudioPlayerProps) {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [progress, setProgress] = useState(0);
  const [duration, setDuration] = useState(0);
  const [audioUrl, setAudioUrl] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [useStaticAudio, setUseStaticAudio] = useState(true);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  // Check if static audio file exists
  const staticAudioUrl = `/audio/${lessonId}.mp3`;

  // Load static audio on mount
  useEffect(() => {
    // Reset state when lesson changes
    setIsPlaying(false);
    setProgress(0);
    setDuration(0);
    setError(null);
    setAudioUrl(null);
    setUseStaticAudio(true);

    if (audioRef.current) {
      audioRef.current.pause();
      audioRef.current = null;
    }
  }, [lessonId]);

  // Generate audio via API as fallback
  const generateAudio = async () => {
    setIsLoading(true);
    setError(null);

    try {
      const response = await fetch("/api/audio", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ text: transcript, lessonId }),
      });

      if (!response.ok) {
        throw new Error("Failed to generate audio");
      }

      const blob = await response.blob();
      const url = URL.createObjectURL(blob);
      setAudioUrl(url);
      return url;
    } catch (err) {
      setError("Audio unavailable. Please read the transcript below.");
      return null;
    } finally {
      setIsLoading(false);
    }
  };

  const setupAudioElement = (audio: HTMLAudioElement) => {
    audio.addEventListener("loadedmetadata", () => {
      setDuration(audio.duration);
    });

    audio.addEventListener("timeupdate", () => {
      setProgress(audio.currentTime);
    });

    audio.addEventListener("ended", () => {
      setIsPlaying(false);
      onComplete();
    });

    audio.addEventListener("error", async () => {
      // Static file failed, try API fallback
      if (useStaticAudio) {
        console.log("Static audio not found, trying API fallback...");
        setUseStaticAudio(false);
        audioRef.current = null;
        const url = await generateAudio();
        if (url) {
          const newAudio = new Audio(url);
          audioRef.current = newAudio;
          setupAudioElement(newAudio);
          newAudio.play();
          setIsPlaying(true);
        }
      }
    });
  };

  const handlePlayPause = async () => {
    if (!audioRef.current) {
      setIsLoading(true);

      // Try static file first
      if (useStaticAudio) {
        const audio = new Audio(staticAudioUrl);
        audioRef.current = audio;
        setupAudioElement(audio);

        try {
          await audio.play();
          setIsPlaying(true);
          setIsLoading(false);
        } catch {
          // Will be handled by error event
          setIsLoading(false);
        }
      } else {
        // Use API-generated audio
        const url = await generateAudio();
        if (!url) return;

        const audio = new Audio(url);
        audioRef.current = audio;
        setupAudioElement(audio);
        audio.play();
        setIsPlaying(true);
      }
    } else {
      if (isPlaying) {
        audioRef.current.pause();
      } else {
        audioRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  const handleSeek = (e: React.ChangeEvent<HTMLInputElement>) => {
    const time = parseFloat(e.target.value);
    if (audioRef.current) {
      audioRef.current.currentTime = time;
      setProgress(time);
    }
  };

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = Math.floor(seconds % 60);
    return `${mins}:${secs.toString().padStart(2, "0")}`;
  };

  const handleSkip = (seconds: number) => {
    if (audioRef.current) {
      audioRef.current.currentTime = Math.max(0, Math.min(audioRef.current.currentTime + seconds, duration));
    }
  };

  // Cleanup
  useEffect(() => {
    return () => {
      if (audioRef.current) {
        audioRef.current.pause();
        audioRef.current = null;
      }
      if (audioUrl && !useStaticAudio) {
        URL.revokeObjectURL(audioUrl);
      }
    };
  }, [audioUrl, useStaticAudio]);

  return (
    <div className="flex items-center gap-4">
      {/* Skip back */}
      <button
        onClick={() => handleSkip(-15)}
        disabled={!audioRef.current || isLoading}
        className="p-2 text-[var(--muted)] hover:text-[var(--text)] disabled:opacity-50 disabled:cursor-not-allowed"
        title="Skip back 15 seconds"
      >
        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12.066 11.2a1 1 0 000 1.6l5.334 4A1 1 0 0019 16V8a1 1 0 00-1.6-.8l-5.333 4zM4.066 11.2a1 1 0 000 1.6l5.334 4A1 1 0 0011 16V8a1 1 0 00-1.6-.8l-5.334 4z" />
        </svg>
      </button>

      {/* Play/Pause */}
      <button
        onClick={handlePlayPause}
        disabled={isLoading}
        className="w-12 h-12 rounded-full bg-[var(--teal)] hover:bg-[var(--teal)]/80 text-black flex items-center justify-center disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
      >
        {isLoading ? (
          <svg className="w-5 h-5 animate-spin" fill="none" viewBox="0 0 24 24">
            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
          </svg>
        ) : isPlaying ? (
          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
            <path d="M6 4h4v16H6V4zm8 0h4v16h-4V4z" />
          </svg>
        ) : (
          <svg className="w-5 h-5 ml-0.5" fill="currentColor" viewBox="0 0 24 24">
            <path d="M8 5v14l11-7z" />
          </svg>
        )}
      </button>

      {/* Skip forward */}
      <button
        onClick={() => handleSkip(15)}
        disabled={!audioRef.current || isLoading}
        className="p-2 text-[var(--muted)] hover:text-[var(--text)] disabled:opacity-50 disabled:cursor-not-allowed"
        title="Skip forward 15 seconds"
      >
        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11.933 12.8a1 1 0 000-1.6L6.6 7.2A1 1 0 005 8v8a1 1 0 001.6.8l5.333-4zM19.933 12.8a1 1 0 000-1.6l-5.333-4A1 1 0 0013 8v8a1 1 0 001.6.8l5.333-4z" />
        </svg>
      </button>

      {/* Progress bar */}
      <div className="flex-1">
        <input
          type="range"
          min={0}
          max={duration || 100}
          value={progress}
          onChange={handleSeek}
          disabled={!audioRef.current}
          className="w-full h-2 bg-white/10 rounded-full appearance-none cursor-pointer disabled:cursor-not-allowed [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:w-3 [&::-webkit-slider-thumb]:h-3 [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:bg-[var(--teal)]"
        />
      </div>

      {/* Time */}
      <div className="text-xs text-[var(--muted)] tabular-nums min-w-[80px] text-right">
        {formatTime(progress)} / {formatTime(duration)}
      </div>

      {error && (
        <span className="text-xs text-red-400">{error}</span>
      )}
    </div>
  );
}
