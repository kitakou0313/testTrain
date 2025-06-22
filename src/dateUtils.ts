export class DateUtils {
  static formatDate(date: Date, format: string): string {
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const day = String(date.getDate()).padStart(2, '0');
    
    return format
      .replace('YYYY', year.toString())
      .replace('MM', month)
      .replace('DD', day);
  }

  static addDays(date: Date, days: number): Date {
    const result = new Date(date);
    result.setDate(result.getDate() + days);
    return result;
  }

  static daysBetween(date1: Date, date2: Date): number {
    const timeDiff = Math.abs(date2.getTime() - date1.getTime());
    return Math.ceil(timeDiff / (1000 * 3600 * 24));
  }

  static isWeekend(date: Date): boolean {
    const day = date.getDay();
    return day === 0 || day === 6;
  }

  static getQuarter(date: Date): number {
    return Math.ceil((date.getMonth() + 1) / 3);
  }

  static isLeapYear(year: number): boolean {
    if (year < 1) {
      throw new Error('Year must be positive');
    }
    return (year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0);
  }

  static getAge(birthDate: Date, currentDate: Date = new Date()): number {
    if (birthDate > currentDate) {
      throw new Error('Birth date cannot be in the future');
    }
    
    let age = currentDate.getFullYear() - birthDate.getFullYear();
    const monthDiff = currentDate.getMonth() - birthDate.getMonth();
    
    if (monthDiff < 0 || (monthDiff === 0 && currentDate.getDate() < birthDate.getDate())) {
      age--;
    }
    
    return age;
  }
}