type SectionHeaderProps = {
  eyebrow?: string;
  title: string;
  text?: string;
  align?: "left" | "center";
};

export function SectionHeader({
  eyebrow,
  title,
  text,
  align = "left",
}: SectionHeaderProps) {
  return (
    <div
      className={`max-w-3xl ${align === "center" ? "mx-auto text-center" : ""}`}
    >
      {eyebrow ? <p className="eyebrow mb-3">{eyebrow}</p> : null}
      <h2 className="text-3xl font-black tracking-tight text-foreground sm:text-4xl lg:text-5xl">
        {title}
      </h2>
      {text ? <p className="mt-5 text-lg leading-8 text-muted">{text}</p> : null}
    </div>
  );
}
