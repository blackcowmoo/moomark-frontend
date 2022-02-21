import { timeForToday } from 'utils/common';

describe('timeForToday', () => {
  it('recent', () => {
    const today = new Date('1995-12-17T03:24:30');
    const timeValue = new Date('1995-12-17T03:24:00');
    expect(timeForToday(timeValue, today)).toBe('방금전');
  });
  it('10 minute ago', () => {
    const today = new Date('1995-12-17T03:24:00');
    const timeValue = new Date('1995-12-17T03:14:00');
    expect(timeForToday(timeValue, today)).toBe('10분전');
  });
  it('1hour ago', () => {
    const today = new Date('1995-12-17T04:24:00');
    const timeValue = new Date('1995-12-17T03:14:00');
    expect(timeForToday(timeValue, today)).toBe('1시간전');
  });
  it('23hour ago', () => {
    const today = new Date('1995-12-17T02:14:00');
    const timeValue = new Date('1995-12-16T03:14:00');
    expect(timeForToday(timeValue, today)).toBe('23시간전');
  });
  it('1 day ago', () => {
    const today = new Date('1995-12-18T02:14:00');
    const timeValue = new Date('1995-12-17T02:14:00');
    expect(timeForToday(timeValue, today)).toBe('1일전');
  });
  it('default describe', () => {
    const today = new Date('2000-12-18T02:14:00');
    const timeValue = new Date('1995-12-17T02:14:00');
    expect(timeForToday(timeValue, today)).toBe('1995년 12월 17일');
  });
});
