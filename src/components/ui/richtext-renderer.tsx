import { cn } from "@/lib/utils";

interface RichTextProps {
  html: string;
  className?: string;
}

export function RichTextRenderer(props: RichTextProps) {
  return (
    <div
      className={cn(
        "prose prose-sm md:prose-lg lg:prose-lg dark:prose-invert prose-slate",
        props.className
      )}
      dangerouslySetInnerHTML={{ __html: props.html }}
    />
  );
}
