import { timeForToday } from 'utils/common';

describe('timeForToday', () => {
  const today = new Date('1995-12-17T03:24:30');
  it('recent', () => {
    const timeValue = '1995-12-17T03:24:00';
    expect(timeForToday(timeValue, today)).toBe('방금전');
  });
  it('10 minute ago', () => {
    const timeValue = '1995-12-17T03:14:00';
    expect(timeForToday(timeValue, today)).toBe('10분전');
  });
  it('1hour ago', () => {
    const timeValue = '1995-12-17T03:14:00';
    expect(timeForToday(timeValue, today)).toBe('1시간전');
  });
  it('23hour ago', () => {
    const timeValue = '1995-12-16T03:14:00';
    expect(timeForToday(timeValue, today)).toBe('23시간전');
  });
  it('1 day ago', () => {
    const timeValue = '1995-12-17T02:14:00';
    expect(timeForToday(timeValue, today)).toBe('1일전');
  });
  it('default describe', () => {
    const timeValue = '1995-12-17T02:14:00';
    expect(timeForToday(timeValue, today)).toBe('1995년 12월 17일');
  });
});
