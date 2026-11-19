import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function formatLKR(value: number, opts: { compact?: boolean; decimals?: number } = {}) {
  if (opts.compact) {
    if (Math.abs(value) >= 1_000_000) return `LKR ${(value / 1_000_000).toFixed(opts.decimals ?? 1)}M`;
    if (Math.abs(value) >= 1_000) return `LKR ${(value / 1_000).toFixed(opts.decimals ?? 0)}K`;
  }
  return `LKR ${formatNumber(value, opts.decimals ?? 0)}`;
}

export function formatNumber(value: number, decimals = 0) {
  return value.toLocaleString("en-US", { minimumFractionDigits: decimals, maximumFractionDigits: decimals });
}

export function initials(name: string) {
  return name
    .split(/\s+/)
    .filter(Boolean)
    .slice(0, 2)
    .map((part) => part[0]!.toUpperCase())
    .join("");
}
