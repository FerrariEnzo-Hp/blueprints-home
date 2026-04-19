export function SectionLabel({ index, children }: { index: string; children: React.ReactNode }) {
  return (
    <div className="flex items-center gap-3 font-mono text-xs uppercase tracking-[0.25em] text-primary">
      <span className="text-muted-foreground">{index}</span>
      <span className="h-px w-8 bg-primary/40" />
      <span>{children}</span>
    </div>
  );
}
