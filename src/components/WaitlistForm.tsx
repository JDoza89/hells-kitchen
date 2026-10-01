"use client";

import { useState } from "react";

type Props = {
  ctaLabel: string;
};

export function WaitlistForm({ ctaLabel }: Props) {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">(
    "idle",
  );
  const [error, setError] = useState<string | null>(null);

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    setStatus("loading");
    setError(null);

    try {
      const res = await fetch("/api/waitlist", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, finish: "brushed_steel" }),
      });
      const data = (await res.json()) as { error?: string };
      if (!res.ok) {
        setError(data.error ?? "Something went wrong");
        setStatus("error");
        return;
      }
      setStatus("success");
      setEmail("");
    } catch {
      setError("Network error. Please try again.");
      setStatus("error");
    }
  }

  if (status === "success") {
    return <div className="h-12" role="status" aria-live="polite" />;
  }

  return (
    <form onSubmit={onSubmit} className="flex flex-col sm:flex-row gap-3 w-full max-w-md">
      <label className="sr-only" htmlFor="waitlist-email">Email</label>
      <input
        id="waitlist-email"
        type="email"
        required
        autoComplete="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        className="flex-1 border border-ink/20 bg-plaster px-4 py-3 text-ink placeholder:text-ink/40 focus:outline-none focus:ring-1 focus:ring-ink/30"
      />
      <button
        type="submit"
        disabled={status === "loading" || !ctaLabel}
        className="bg-ink text-plaster px-6 py-3 text-sm font-medium tracking-wide hover:bg-ink/85 transition-colors disabled:opacity-60 whitespace-nowrap"
      >
        {status === "loading" ? "…" : ctaLabel}
      </button>
      {error && (
        <p className="sm:absolute sm:mt-14 text-sm text-red-800 w-full" role="alert">
          {error}
        </p>
      )}
    </form>
  );
}
