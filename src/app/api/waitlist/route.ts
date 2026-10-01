import { NextResponse } from "next/server";
import { z } from "zod";
import { addWaitlistEntry } from "@/lib/waitlist-store";

const bodySchema = z.object({
  email: z.string().email("Valid email is required"),
  finish: z
    .string()
    .min(1)
    .max(64)
    .optional()
    .default("brushed_steel"),
});

export async function POST(request: Request) {
  let json: unknown;
  try {
    json = await request.json();
  } catch {
    return NextResponse.json({ error: "Invalid JSON body" }, { status: 400 });
  }

  const parsed = bodySchema.safeParse(json);
  if (!parsed.success) {
    return NextResponse.json(
      { error: parsed.error.errors[0]?.message ?? "Validation failed" },
      { status: 400 },
    );
  }

  const entry = addWaitlistEntry({
    email: parsed.data.email.toLowerCase().trim(),
    finish: parsed.data.finish,
  });

  return NextResponse.json({ ok: true, id: entry.createdAt });
}
