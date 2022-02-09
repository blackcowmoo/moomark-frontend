const timeForToday = (value: Date, todayValue?: Date): string => {
  const today = todayValue || new Date();
  const timeValue = new Date(value);

  const betweenTime = Math.floor((today.getTime() - timeValue.getTime()) / 1000 / 60);
  if (betweenTime < 1) return '방금전';
  if (betweenTime < 60) {
    return `${betweenTime}분전`;
  }

  const betweenTimeHour = Math.floor(betweenTime / 60);
  if (betweenTimeHour < 24) {
    return `${betweenTimeHour}시간전`;
  }

  const betweenTimeDay = Math.floor(betweenTime / 60 / 24);
  if (betweenTimeDay < 30) {
    return `${betweenTimeDay}일전`;
  }
  return `${value.getFullYear()}년 ${value.getMonth() + 1}월 ${value.getDate()}일`;
};

const isNumeric = (num: any) => (typeof num === 'number' || (typeof num === 'string' && num.trim() !== '')) && !Number.isNaN(num as number);

export { timeForToday, isNumeric };
