'use client';
import { useEffect, useState } from 'react';

function getMsUntilMidnight(): number {
  const now = new Date();
  const midnight = new Date(now);
  midnight.setHours(24, 0, 0, 0);
  return midnight.getTime() - now.getTime();
}

function formatTime(ms: number): string {
  const totalSeconds = Math.max(0, Math.floor(ms / 1000));
  const h = Math.floor(totalSeconds / 3600);
  const m = Math.floor((totalSeconds % 3600) / 60);
  const s = totalSeconds % 60;
  return [h, m, s].map((v) => String(v).padStart(2, '0')).join(':');
}

export default function CountdownTimer() {
  const [timeLeft, setTimeLeft] = useState<number | null>(null);

  useEffect(() => {
    setTimeLeft(getMsUntilMidnight());
    const interval = setInterval(() => {
      setTimeLeft(getMsUntilMidnight());
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  if (timeLeft === null) return null;

  return (
    <div className="flex items-center justify-center gap-2 bg-emerald-500/10 border border-emerald-500/30 rounded-full px-4 py-2 text-sm">
      <span className="text-zinc-400 font-medium">⚡ Akce platí ještě:</span>
      <span className="text-emerald-400 font-black tabular-nums tracking-widest">
        {formatTime(timeLeft)}
      </span>
    </div>
  );
}
