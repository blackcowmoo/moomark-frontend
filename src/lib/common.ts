const debounce = (func: any, delay: number) => {
  let inDebounce: NodeJS.Timeout;
  return function (...args: any[]) {
    if (inDebounce) {
      clearTimeout(inDebounce);
    }
    inDebounce = setTimeout(() => func(...args), delay);
  };
};

export { debounce };
