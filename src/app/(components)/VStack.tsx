export default function VStack({
  children,
  className,
  isFull,
}: {
  children: React.ReactNode;
  className?: string;
  isFull?: boolean;
}) {
  return (
    <div
      className={`${
        isFull ? "w-full" : ""
      } flex flex-col ${className}`}
    >
      {children}
    </div>
  );
}
