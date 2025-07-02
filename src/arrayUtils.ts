export class ArrayUtils {
  static findMax(arr: number[]): number {
    if (arr.length === 0) {
      throw new Error('Array cannot be empty');
    }
    return Math.max(...arr);
  }

  static findMin(arr: number[]): number {
    if (arr.length === 0) {
      throw new Error('Array cannot be empty');
    }
    return Math.min(...arr);
  }

  static average(arr: number[]): number {
    if (arr.length === 0) {
      throw new Error('Array cannot be empty');
    }
    const sum = arr.reduce((acc, num) => acc + num, 0);
    return sum / arr.length;
  }

  static removeDuplicates<T>(arr: T[]): T[] {
    return [...new Set(arr)];
  }

  static chunk<T>(arr: T[], size: number): T[][] {
    if (size <= 0) {
      throw new Error('Chunk size must be positive');
    }
    const result: T[][] = [];
    for (let i = 0; i < arr.length; i += size) {
      result.push(arr.slice(i, i + size));
    }
    return result;
  }

  static flatten<T>(arr: (T | T[])[]): T[] {
    const result: T[] = [];
    for (const item of arr) {
      if (Array.isArray(item)) {
        result.push(...item);
      } else {
        result.push(item);
      }
    }
    return result;
  }

  static sortByProperty<T>(
    arr: T[],
    property: keyof T,
    ascending: boolean = true
  ): T[] {
    return [...arr].sort((a, b) => {
      const aVal = a[property];
      const bVal = b[property];
      if (aVal < bVal) return ascending ? -1 : 1;
      if (aVal > bVal) return ascending ? 1 : -1;
      return 0;
    });
  }
}
