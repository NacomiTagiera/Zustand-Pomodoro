import formatTime from "./formatTime";

describe("formatTime", () => {
  it("should format time correctly when minutes and seconds are both single digits", () => {
    expect(formatTime(59)).toBe("00:59");
    expect(formatTime(3)).toBe("00:03");
    expect(formatTime(7)).toBe("00:07");
  });

  it("should format time correctly when minutes and seconds are both double digits", () => {
    expect(formatTime(125)).toBe("02:05");
    expect(formatTime(360)).toBe("06:00");
    expect(formatTime(789)).toBe("13:09");
  });

  it("should format time correctly when minutes and seconds are both zero", () => {
    expect(formatTime(0)).toBe("00:00");
  });

  it("should format time correctly when only minutes or seconds are zero", () => {
    expect(formatTime(75)).toBe("01:15");
    expect(formatTime(240)).toBe("04:00");
    expect(formatTime(10)).toBe("00:10");
  });
});
