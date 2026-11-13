export default function Tag({ children }: { children: string }) {
  return (
    <li className="tag rounded-full border border-accent/60 px-2.5 py-1 text-xs font-medium leading-none text-zinc-700 dark:text-zinc-300">{children}</li>
  );
}
