"use client";

import Link from "next/link";
import { useState } from "react";
import { CheckCircle2, Mail, ShieldCheck } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Field, Input } from "@/components/ui/form";
import { currentUser } from "@/lib/mock/common";

export default function ForgotPasswordPage() {
  const [sent, setSent] = useState(false);

  return (
    <form
      className="flex flex-col gap-5"
      onSubmit={(e) => {
        e.preventDefault();
        setSent(true);
      }}
    >
      <div className="flex flex-col gap-2">
        <h2 className="text-[30px] leading-[38px] font-bold text-ink">Forgot your password?</h2>
        <p className="text-sm text-ink-2">
          Enter the work email linked to your Liveroom Technologies account and we&apos;ll send you a secure link to
          reset your password.
        </p>
      </div>
      <Field label="Work email">
        <Input icon={Mail} type="email" defaultValue={currentUser.email} required />
      </Field>
      {sent ? (
        <div className="flex items-start gap-2.5 rounded-control bg-success-soft px-3.5 py-3 text-[13px] font-medium text-success">
          <CheckCircle2 className="mt-0.5 size-4 shrink-0" />
          Reset link sent. Check your inbox at {currentUser.email}.
        </div>
      ) : (
        <Button type="submit" variant="primary" size="lg" className="w-full">
          Send reset link
        </Button>
      )}
      <div className="flex items-center gap-2.5 rounded-control bg-primary-softer px-3.5 py-3 text-xs leading-[17px] text-ink-2">
        <ShieldCheck className="size-4 shrink-0 text-primary" strokeWidth={1.9} />
        The reset link expires in 30 minutes and can be used only once. Check your spam folder if it doesn&apos;t arrive.
      </div>
      <p className="text-[13px] text-muted">
        Remembered your password?{" "}
        <Link href="/login" className="font-semibold text-primary hover:underline">
          Back to sign in
        </Link>
      </p>
    </form>
  );
}