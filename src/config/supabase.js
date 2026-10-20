// Supabase publishable keys are intended for browser use. Row-level security
// and insert-only grants protect the visitor submissions in these tables.
const SUPABASE_URL = "https://hqqixkqipnjmmwqugcfh.supabase.co";
const SUPABASE_PUBLISHABLE_KEY = "sb_publishable_gohxHINIIHG1-XSUXi-l-Q_YIAOI613";

export async function insertSupabaseRow(table, row) {
  const response = await fetch(`${SUPABASE_URL}/rest/v1/${table}`, {
    method: "POST",
    headers: {
      apikey: SUPABASE_PUBLISHABLE_KEY,
      Authorization: `Bearer ${SUPABASE_PUBLISHABLE_KEY}`,
      "Content-Type": "application/json",
      Prefer: "return=minimal",
    },
    body: JSON.stringify(row),
  });

  if (!response.ok) {
    throw new Error(`Supabase submission failed (${response.status}).`);
  }
}
