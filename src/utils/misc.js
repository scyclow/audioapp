export function betweenLinear(n, max, min) {
  return min + ((max - min) * n);
}

export function portion(max, center) {
  return (max - center) / (max+1);
}

function *timeGen(t) {
  for (let i = 0; i < t; i++) yield i;
}

export function times(t, fn) {
  return [...timeGen(t)].map(fn);
}

export function between(n, max, min) {
  return Math.max(
    Math.min(n, max), min
  );
}

export function compact(arr) {
  return arr.filter(i => i || i === 0)
}
