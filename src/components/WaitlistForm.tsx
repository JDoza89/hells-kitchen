"use client";

import { useState } from "react";

type Props = {
  ctaLabel: string;
  successMessage: string;
  defaultFinish?: string;
};

export function WaitlistForm({
  ctaLabel,
  successMessage,
  defaultFinish = "brushed_steel",
}: Props) {
  const [email, setEmail] = useState("");
  const [finish] = useState(defaultFinish);
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
        body: JSON.stringify({ email, finish }),
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
    return (
      <p className="text-lg text-copper font-serif" role="status">
        {successMessage}
      </p>
    );
  }

  return (
    <form onSubmit={onSubmit} className="flex flex-col gap-4 w-full max-w-md">
      <label className="sr-only" htmlFor="waitlist-email">Email</label>
      <input
        id="waitlist-email"
        type="email"
        required
        autoComplete="email"
        placeholder="you@example.com"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        className="border border-ink/15 bg-white/50 px-4 py-3 text-ink placeholder:text-ink-muted/60 focus:outline-none focus:ring-1 focus:ring-copper"
      />
      <input type="hidden" name="finish" value={finish} />
      <button
        type="submit"
        disabled={status === "loading"}
        className="bg-copper text-plaster px-6 py-3 text-sm font-medium tracking-wide uppercase hover:bg-ink transition-colors disabled:opacity-60"
      >
        {status === "loading" ? "…" : ctaLabel}
      </button>
      {error && (
        <p className="text-sm text-red-800" role="alert">{error}</p>
      )}
    </form>
  );
}

export function WaitlistFormWithFinish({
  ctaLabel,
  successMessage,
  finishes,
  defaultFinish = "brushed_steel",
}: Props & {
  finishes?: { slug: string; name: string }[];
}) {
  const [finish, setFinish] = useState(defaultFinish);

  return (
    <div className="flex flex-col gap-4 w-full max-w-md">
      {finishes && finishes.length > 0 && (
        <fieldset className="flex flex-wrap gap-3">
          <legend className="sr-only">Finish</legend>
          {finishes.map((f) => (
            <label
              key={f.slug}
              className={`cursor-pointer border px-3 py-1.5 text-sm ${
                finish === f.slug
                  ? "border-copper bg-copper/10"
                  : "border-ink/15"
              }`}
            >
              <input
                type="radio"
                name="finish"
                value={f.slug}
                checked={finish === f.slug}
                onChange={() => setFinish(f.slug)}
                className="sr-only"
              />
              {f.name}
            </label>
          ))}
        </fieldset>
      )}
      <WaitlistForm
        ctaLabel={ctaLabel}
        successMessage={successMessage}
        defaultFinish={finish}
        key={finish}
      />
    </div>
  );
}
