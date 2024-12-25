interface VersionBadgeProps {
  version: string;
}

export function VersionBadge({ version }: VersionBadgeProps) {
  return (
    <span className="inline-flex items-center rounded-md bg-primary/10 px-2 py-1 text-xs font-medium text-primary ring-1 ring-inset ring-primary/20">
      v{version}
    </span>
  );
}