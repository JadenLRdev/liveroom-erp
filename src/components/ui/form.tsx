import type { LucideIcon } from "lucide-react";
import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";

const controlBase =
  "w-full rounded-control border border-line bg-surface text-sm font-medium text-ink placeholder:text-muted outline-none transition-colors focus:border-primary focus:ring-2 focus:ring-primary/15";

export function Field({
  label,
  aside,
  hint,
  children,
  className,
}: {
  label: React.ReactNode;
  aside?: React.ReactNode;
  hint?: React.ReactNode;
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <label className={cn("flex min-w-0 flex-col gap-1.5", className)}>
      <span className="flex items-center justify-between text-[13px] font-semibold text-ink">
        {label}
        {aside}
      </span>
      {children}
      {hint && <span className="text-xs text-muted">{hint}</span>}
    </label>
  );
}

export function Input({
  icon: Icon,
  trailing,
  className,
  ...props
}: React.InputHTMLAttributes<HTMLInputElement> & { icon?: LucideIcon; trailing?: React.ReactNode }) {
  return (
    <div className="relative flex items-center">
      {Icon && <Icon className="pointer-events-none absolute left-3.5 size-4 text-muted" strokeWidth={1.9} />}
      <input className={cn(controlBase, "h-[42px] px-3.5", Icon && "pl-10", trailing && "pr-10", className)} {...props} />
      {trailing && <div className="absolute right-3.5 flex items-center text-muted">{trailing}</div>}
    </div>
  );
}

export function Select({
  icon: Icon,
  options,
  className,
  ...props
}: React.SelectHTMLAttributes<HTMLSelectElement> & { icon?: LucideIcon; options: string[] }) {
  return (
    <div className="relative flex items-center">
      {Icon && <Icon className="pointer-events-none absolute left-3.5 size-4 text-muted" strokeWidth={1.9} />}
      <select className={cn(controlBase, "h-[42px] appearance-none pr-10 pl-3.5", Icon && "pl-10", className)} {...props}>
        {options.map((o) => (
          <option key={o}>{o}</option>
        ))}
      </select>
      <ChevronDown className="pointer-events-none absolute right-3.5 size-4 text-muted" strokeWidth={1.9} />
    </div>
  );
}

export function Textarea({ className, ...props }: React.TextareaHTMLAttributes<HTMLTextAreaElement>) {
  return <textarea className={cn(controlBase, "min-h-[84px] resize-y px-3.5 py-2.5 leading-[21px]", className)} {...props} />;
}

export function SearchInput({ placeholder, className }: { placeholder: string; className?: string }) {
  return (
    <div className={cn("relative flex h-10 items-center", className)}>
      <svg className="pointer-events-none absolute left-3 size-4 text-muted" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.9">
        <circle cx="11" cy="11" r="7" />
        <path d="m20 20-3.5-3.5" strokeLinecap="round" />
      </svg>
      <input
        placeholder={placeholder}
        className="h-10 w-full rounded-control border border-line bg-subtle pr-3 pl-9 text-[13px] font-medium text-ink outline-none placeholder:text-muted focus:border-primary focus:bg-surface"
      />
    </div>
  );
}

export function Checkbox({
  checked,
  onChange,
  label,
  className,
}: {
  checked: boolean;
  onChange?: (v: boolean) => void;
  label?: React.ReactNode;
  className?: string;
}) {
  return (
    <label className={cn("inline-flex cursor-pointer items-center gap-2.5 text-[13px] font-medium text-ink-2", className)}>
      <span
        className={cn(
          "flex size-[18px] shrink-0 items-center justify-center rounded-[5px] border transition-colors",
          checked ? "border-primary-strong bg-primary-strong" : "border-line-strong bg-surface",
        )}
      >
        {checked && (
          <svg viewBox="0 0 24 24" className="size-3 text-ink" fill="none" stroke="currentColor" strokeWidth="3">
            <path d="M5 12.5 10 17l9-10" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        )}
      </span>
      <input type="checkbox" className="sr-only" checked={checked} onChange={(e) => onChange?.(e.target.checked)} />
      {label}
    </label>
  );
}

export function Switch({ checked, onChange }: { checked: boolean; onChange?: (v: boolean) => void }) {
  return (
    <button
      type="button"
      role="switch"
      aria-checked={checked}
      onClick={() => onChange?.(!checked)}
      className={cn("relative h-[22px] w-[38px] shrink-0 rounded-full transition-colors", checked ? "bg-primary-strong" : "bg-line-strong")}
    >
      <span className={cn("absolute top-[3px] size-4 rounded-full bg-white shadow transition-all", checked ? "left-[19px]" : "left-[3px]")} />
    </button>
  );
}
