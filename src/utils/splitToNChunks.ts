export function splitToNChunks<T>(array: T[], n: number): Array<T[]> {
  return array.reduce((all, one, i) => {
    const ch = Math.floor(i / n);
    // @ts-ignore
    all[ch] = [].concat(all[ch] || [], one);
    return all;
  }, []);
}

// const chunk = (target, size) => {

// }
