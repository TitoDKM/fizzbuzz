import { checkFizzBuzz } from "../main/fizzbuzz";

describe("Fizzbuzz test", () => {
	it("Should give Fizz if its divisible by 3", () => {
		const fizzNumbers:number[] = [3, 6, 9, 12, 18, 21, 24, 27, 33, 36, 39, 42, 48, 51, 54, 57, 63, 66, 69, 72, 78, 81, 84, 87, 93, 96, 99];

		for(const n of fizzNumbers)
			expect(checkFizzBuzz(n)).toBe("Fizz");
	});

	it("Should give Buzz if its divisible by 5", () => {
		const fizzNumbers:number[] = [5, 10, 20, 25, 35, 40, 50, 55, 65, 70, 80, 85, 95, 100];

		for(const n of fizzNumbers)
			expect(checkFizzBuzz(n)).toBe("Buzz");
	});

	it("Should give FizzBuzz if its divisible by 3 and 5", () => {
		const fizzNumbers:number[] = [15, 30, 45, 60, 75, 90];

		for(const n of fizzNumbers)
			expect(checkFizzBuzz(n)).toBe("FizzBuzz");
	});

	it("Should give Number if its not divisible by 3, 5 or 3 and 5", () => {
		const fizzNumbers:number[] = [1, 2, 4, 7, 8, 11, 13, 14, 16, 17, 19, 22, 23, 26, 28, 29, 31, 32, 34, 37, 38, 41, 43, 44, 46, 47, 49, 52, 53, 56, 58, 59, 61, 62, 67, 68, 71, 73, 74, 76, 77, 79, 82, 83, 86, 88, 89, 91, 92, 94, 97, 98];

		for(const n of fizzNumbers)
			expect(checkFizzBuzz(n)).toBe(n);
	});
});