export class StringUtils {
  static reverse(str: string): string {
    return str.split('').reverse().join('');
  }

  static isPalindrome(str: string): boolean {
    const cleaned = str.toLowerCase().replace(/[^a-z0-9]/g, '');
    return cleaned === cleaned.split('').reverse().join('');
  }

  static capitalize(str: string): string {
    if (!str) return str;
    return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
  }

  static countWords(str: string): number {
    if (!str || str.trim() === '') return 0;
    return str.trim().split(/\s+/).length;
  }

  static truncate(str: string, maxLength: number): string {
    if (maxLength < 0) {
      throw new Error('Maximum length cannot be negative');
    }
    if (str.length <= maxLength) return str;
    return str.substring(0, maxLength) + '...';
  }

  static extractNumbers(str: string): number[] {
    const matches = str.match(/\d+/g);
    return matches ? matches.map(Number) : [];
  }
}
