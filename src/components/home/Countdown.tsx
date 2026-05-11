"use client";

import { useEffect, useState } from "react";
import { WORKSHOP_EVENT } from "@/lib/data";

interface TimeLeft {
  d: number;
  h: number;
  m: number;
  s: number;
}

function calcTimeLeft(target: number): TimeLeft {
  const diff = Math.max(0, Math.floor((target - Date.now()) / 1000));
  const d = Math.floor(diff / 86400);
  const r1 = diff - d * 86400;
  const h = Math.floor(r1 / 3600);
  const r2 = r1 - h * 3600;
  const m = Math.floor(r2 / 60);
  const s = r2 - m * 60;
  return { d, h, m, s };
}

export function Countdown() {
  const target = WORKSHOP_EVENT.targetDate.getTime();
  const [mounted, setMounted] = useState(false);
  const [time, setTime] = useState<TimeLeft>({ d: 0, h: 0, m: 0, s: 0 });

  useEffect(() => {
    setTime(calcTimeLeft(target));
    setMounted(true);
    const id = setInterval(() => setTime(calcTimeLeft(target)), 1000);
    return () => clearInterval(id);
  }, [target]);

  if (!mounted) {
    return (
      <div className="countdown inline-flex items-end gap-2.5 mx-auto my-2.5 px-5 py-3 border border-rule bg-paper-2">
        <Placeholder />
      </div>
    );
  }

  return (
    <div
      className="countdown inline-flex items-end gap-2.5 mx-auto my-2.5 px-5 py-3 border border-rule bg-paper-2"
      aria-label="Time until workshop"
    >
      <LiveCountdown time={time} />
    </div>
  );
}

function Placeholder() {
  const labels = ["Days", "Hours", "Minutes", "Seconds"];
  return (
    <>
      {labels.map((label, i) => (
        <span key={label} className="flex justify-center items-center min-w-[60px]">
          <span className="font-serif text-[30px] leading-none tracking-[-0.02em] text-ink tabular-nums">
            --
          </span>
          <span className="font-mono text-[9px] tracking-[0.16em] uppercase text-muted mt-1.5">
            {label}
          </span>
          {i < labels.length - 1 && (
            <span className="font-serif text-2xl text-muted-2 leading-none pb-[18px]">:</span>
          )}
        </span>
      ))}
    </>
  );
}

function LiveCountdown({ time }: { time: TimeLeft }) {
  const items: { value: number; label: string }[] = [
    { value: time.d, label: "Days" },
    { value: time.h, label: "Hours" },
    { value: time.m, label: "Minutes" },
    { value: time.s, label: "Seconds" },
  ];

  const pad = (n: number) => String(n).padStart(2, "0");

  return (
    <>
      {items.map((item, i) => (
        <span key={item.label} className="flex flex-col items-center min-w-[44px]">
          <span className="font-serif text-[30px] leading-none tracking-[-0.02em] text-ink tabular-nums">
            {pad(item.value)}
          </span>
          <span className="font-mono text-[9px] tracking-[0.16em] uppercase text-muted mt-1.5">
            {item.label}
          </span>
          {i < items.length - 1 && (
            <span className="font-serif text-2xl text-muted-2 leading-none pb-[18px]">:</span>
          )}
        </span>
      ))}
    </>
  );
}
