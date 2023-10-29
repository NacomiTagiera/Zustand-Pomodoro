import { formatTime } from './formatTime';

describe('formatTime', () => {
  it('should format time correctly when minutes and seconds are both single digits', () => {
    expect(formatTime(127)).toBe('02:07');
    expect(formatTime(63)).toBe('01:03');
  });

  it('should format time correctly when minutes and seconds are both double digits', () => {
    expect(formatTime(1405)).toBe('23:25');
    expect(formatTime(792)).toBe('13:12');
  });

  it('should format time correctly when minutes and seconds are both zero', () => {
    expect(formatTime(0)).toBe('00:00');
  });

  it('should format time correctly when only minutes or seconds are zero', () => {
    expect(formatTime(600)).toBe('10:00');
    expect(formatTime(10)).toBe('00:10');
  });
});
