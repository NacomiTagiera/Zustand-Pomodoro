import { act, renderHook } from '@testing-library/react';

import { useTimerStore } from './timerStore';

describe('useTimerStore', () => {
  describe('Initial state', () => {
    it('should have initial state', () => {
      const {
        result: { current },
      } = renderHook(() => useTimerStore());

      expect(current.mode).toEqual('work');
      expect(current.workLength).toEqual(25);
      expect(current.breakLength).toEqual(5);
      expect(current.timeLeft).toEqual(25 * 60);
      expect(current.isRunning).toEqual(false);
    });
  });

  describe('Timer operations', () => {
    it('should start and pause the timer', () => {
      const { result } = renderHook(() => useTimerStore());

      expect(result.current.isRunning).toEqual(false);
      act(() => result.current.toggleTimer());
      expect(result.current.isRunning).toEqual(true);
      act(() => result.current.toggleTimer());
      expect(result.current.isRunning).toEqual(false);
    });

    it('should count down when the timer is running', () => {
      const { result } = renderHook(() => useTimerStore());

      expect(result.current.timeLeft).toEqual(25 * 60);
      act(() => result.current.countDown());
      expect(result.current.timeLeft).toEqual(25 * 60 - 1);
    });

    it('should reset the timer', () => {
      const { result } = renderHook(() => useTimerStore());

      const prevTimeLeft = result.current.timeLeft;

      act(() => {
        result.current.toggleTimer();
        result.current.countDown();
      });
      expect(result.current.timeLeft).toEqual(prevTimeLeft - 1);
      act(() => result.current.resetTimer());
      expect(result.current.timeLeft).toEqual(25 * 60);
      expect(result.current.isRunning).toEqual(true);
    });
  });

  describe('Mode changes', () => {
    it('should change the timer mode', () => {
      const { result } = renderHook(() => useTimerStore());

      expect(result.current.mode).toEqual('work');
      act(() => result.current.changeMode('break'));
      expect(result.current.mode).toEqual('break');
    });
  });

  describe('Session length changes', () => {
    it('should change session length', () => {
      const { result } = renderHook(() => useTimerStore());

      expect(result.current.workLength).toEqual(25);
      expect(result.current.breakLength).toEqual(5);
      act(() => result.current.changeLength('work', 30));
      act(() => result.current.changeLength('break', 30));
      expect(result.current.workLength).toEqual(30);
      expect(result.current.breakLength).toEqual(30);
    });
  });
});
