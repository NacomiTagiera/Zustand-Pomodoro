import { formatTime } from './formatTime';

describe('formatTime function returns correct time when', () => {
  it('minutes and seconds are expected to be both single digits', () => {
    expect(formatTime(127)).toBe('02:07');
    expect(formatTime(63)).toBe('01:03');
  });

  it('minutes and seconds are expected to be both double digits', () => {
    expect(formatTime(1405)).toBe('23:25');
    expect(formatTime(792)).toBe('13:12');
  });

  it('only minutes or seconds are expected to be single digits', () => {
    expect(formatTime(600)).toBe('10:00');
    expect(formatTime(10)).toBe('00:10');
  });

  it('zero is provided to the function', () => {
    expect(formatTime(0)).toBe('00:00');
  });
});
