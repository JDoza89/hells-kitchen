export type WaitlistEntry = {
  email: string;
  finish: string;
  createdAt: string;
};

const globalStore = globalThis as unknown as {
  __waitlistEntries?: WaitlistEntry[];
};

function getStore(): WaitlistEntry[] {
  if (!globalStore.__waitlistEntries) {
    globalStore.__waitlistEntries = [];
  }
  return globalStore.__waitlistEntries;
}

export function addWaitlistEntry(entry: Omit<WaitlistEntry, "createdAt">): WaitlistEntry {
  const record: WaitlistEntry = {
    ...entry,
    createdAt: new Date().toISOString(),
  };
  getStore().push(record);
  return record;
}

export function listWaitlistEntries(): WaitlistEntry[] {
  return [...getStore()];
}
