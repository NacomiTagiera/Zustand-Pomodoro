import { renderHook, act } from "@testing-library/react";
import { useTimerStore } from "@/store/timerStore";

describe("useTimerStore", () => {
  it("should have initial state", () => {
    const { result } = renderHook(() => useTimerStore());

    expect(result.current.mode).toEqual("work");
    expect(result.current.workLength).toEqual(25);
    expect(result.current.breakLength).toEqual(5);
    expect(result.current.timeLeft).toEqual(25 * 60);
    expect(result.current.isRunning).toEqual(false);
  });

  it("should toggle isRunning when toggleTimer is called", () => {
    const { result } = renderHook(() => useTimerStore());

    expect(result.current.isRunning).toEqual(false);
    act(() => result.current.toggleTimer());
    expect(result.current.isRunning).toEqual(true);
    act(() => result.current.toggleTimer());
    expect(result.current.isRunning).toEqual(false);
  });

  it("should decrement timeLeft every second when isRunning is true", () => {
    const { result } = renderHook(() => useTimerStore());

    expect(result.current.timeLeft).toEqual(25 * 60);
    act(() => result.current.countDown());
    expect(result.current.timeLeft).toEqual(25 * 60 - 1);
  });

  it("should reset timeLeft and isRunning when resetTimer is called", () => {
    const { result } = renderHook(() => useTimerStore());
    const prevTimeLeft = result.current.timeLeft;

    act(() => {
      result.current.toggleTimer();
      result.current.countDown();
    });
    expect(result.current.timeLeft).toEqual(prevTimeLeft - 1);
    act(() => result.current.resetTimer());
    expect(result.current.timeLeft).toEqual(25 * 60);
    expect(result.current.isRunning).toEqual(false);
  });

  it("should change the mode when changeMode is called", () => {
    const { result } = renderHook(() => useTimerStore());

    expect(result.current.mode).toEqual("work");
    act(() => result.current.changeMode("break"));
    expect(result.current.mode).toEqual("break");
  });

  it("should change the session length when changeLength is called", () => {
    const { result } = renderHook(() => useTimerStore());

    expect(result.current.workLength).toEqual(25);
    expect(result.current.breakLength).toEqual(5);
    act(() => result.current.changeLength("work", 30));
    act(() => result.current.changeLength("break", 30));
    expect(result.current.workLength).toEqual(30);
    expect(result.current.breakLength).toEqual(30);
  });
});
