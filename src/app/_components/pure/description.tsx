export function Description({ text }: { text?: string }) {
  return text?.length ? <p className="text-sm text-auto">{text}</p> : null;
}
