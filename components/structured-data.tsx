// Server-safe (no "use client", no hooks) — renders a single JSON-LD
// <script> tag for whatever schema.org object is passed in.
export function StructuredData({
  data,
  nonce,
}: {
  data: Record<string, unknown>;
  nonce?: string;
}) {
  return (
    <script
      nonce={nonce}
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
