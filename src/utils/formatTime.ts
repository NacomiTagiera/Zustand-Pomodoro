export const formatTime = (time: number) => {
  const mins = Math.floor(time / 60);
  const secs = time % 60;

  const minsStr = mins < 10 ? '0' + mins : String(mins);
  const secsStr = secs < 10 ? '0' + secs : String(secs);

  return `${minsStr}:${secsStr}`;
};
