import { cn } from "@/lib/utils";

export function Logo({ size = 36, inverse = true, className }: { size?: number; inverse?: boolean; className?: string }) {
  return (
    <span className={cn("flex items-center gap-2.5", className)}>
      <span
        className="flex shrink-0 items-center justify-center rounded-[10px] bg-gradient-to-br from-[#f9a865] to-primary-strong font-extrabold text-ink"
        style={{ width: size, height: size, fontSize: size * 0.36 }}
      >
        LR
      </span>
      <span className="flex flex-col">
        <span className={cn("text-[17px] leading-[21px] font-bold", inverse ? "text-white" : "text-ink")}>LiveroomOne</span>
        <span className={cn("text-[11px] leading-[14px]", inverse ? "text-sidebar-muted" : "text-muted")}>Enterprise Resource Planning</span>
      </span>
    </span>
  );
}