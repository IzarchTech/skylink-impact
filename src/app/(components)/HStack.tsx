export default function HStack({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return <div className={`flex flex-row ${className}`}>{children}</div>;
}
