export function formatBytes(value: number): string {
  if (value >= 1073741824) return Math.round(value * 100000) / 100 + "GB";
  if (value >= 1048576) return Math.round(value / 1000) / 100 + "MB";
  if (value >= 1000) return Math.round(value / 10) / 100 + "KB";
  else return value + "B";
}
export function formatTime(timestamp: number): string {
  let options = {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  };
  const date = new Date(timestamp);
  // @ts-ignore
  return date.toLocaleString("en-US", options);
}
