# Claude Code Memory

## Project Overview

This is a TypeScript-based black-box testing training environment. The project contains utility classes and their specifications to practice various black-box testing techniques.

## Project Structure

```
/workspaces/testTrain/
├── src/
│   ├── __tests__/
│   │   └── calculator.test.ts       # Unit tests for Calculator class
│   ├── calculator.ts                # Basic mathematical operations
│   ├── arrayUtils.ts               # Array manipulation utilities
│   ├── dateUtils.ts                # Date calculation utilities
│   └── stringUtils.ts              # String processing utilities
├── SPECIFICATIONS.md               # Calculator class specifications
├── ARRAY_UTILS_SPECIFICATIONS.md  # ArrayUtils class specifications
├── DATE_UTILS_SPECIFICATIONS.md   # DateUtils class specifications
├── STRING_UTILS_SPECIFICATIONS.md # StringUtils class specifications
├── package.json                   # Project dependencies and scripts
├── tsconfig.json                  # TypeScript configuration
└── vitest.config.ts              # Vitest testing configuration
```

## Available Classes and Methods

### Calculator Class

- `add(a, b)` - Addition
- `subtract(a, b)` - Subtraction
- `multiply(a, b)` - Multiplication
- `divide(a, b)` - Division (throws error on division by zero)
- `power(base, exponent)` - Power calculation (throws error on negative exponents)
- `factorial(n)` - Factorial calculation (throws error on negative numbers)

### ArrayUtils Class

- `findMax(arr)` - Find maximum value in array
- `findMin(arr)` - Find minimum value in array
- `average(arr)` - Calculate average of array elements
- `removeDuplicates(arr)` - Remove duplicate elements
- `chunk(arr, size)` - Split array into chunks
- `flatten(arr)` - Flatten nested arrays (1 level)
- `sortByProperty(arr, property, ascending)` - Sort object arrays by property

### DateUtils Class

- `formatDate(date, format)` - Format date with YYYY/MM/DD patterns
- `addDays(date, days)` - Add/subtract days from date
- `daysBetween(date1, date2)` - Calculate days between dates
- `isWeekend(date)` - Check if date is weekend
- `getQuarter(date)` - Get quarter (1-4) for date
- `isLeapYear(year)` - Check if year is leap year
- `getAge(birthDate, currentDate)` - Calculate age

### StringUtils Class

- `reverse(str)` - Reverse string
- `isPalindrome(str)` - Check if string is palindrome
- `capitalize(str)` - Capitalize first letter
- `countWords(str)` - Count words in string
- `truncate(str, maxLength)` - Truncate string with ellipsis
- `extractNumbers(str)` - Extract numbers from string

## Testing Framework

- **Framework**: Vitest
- **Test Location**: `src/__tests__/`
- **Configuration**: `vitest.config.ts`

## NPM Scripts

- `npm test` - Run tests
- `npm run test:ui` - Run tests with UI
- `npm run test:coverage` - Run tests with coverage report

## Black-Box Testing Techniques

This project is designed to practice:

1. **Equivalence Partitioning**: Valid/invalid input classes
2. **Boundary Value Analysis**: Edge cases and boundaries
3. **Error Guessing**: Exception handling scenarios
4. **Decision Table Testing**: Complex logic combinations

## Testing Guidelines

- Use specification documents instead of source code for test design
- Focus on input/output behavior without knowing implementation
- Cover normal cases, boundary cases, and error cases
- Test both positive and negative scenarios

## Development Commands

```bash
# Install dependencies
npm install

# Run tests
npm test

# Run tests with coverage
npm run test:coverage

# Run tests with UI
npm run test:ui

# Build project
npx tsc
```

## Notes

- All utility classes use static methods
- Error handling is implemented where specified in documentation
- Generic types are used for reusable array operations
- Date operations handle edge cases like month boundaries and leap years
