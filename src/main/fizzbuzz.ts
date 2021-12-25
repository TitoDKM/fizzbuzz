export const checkFizzBuzz = (n: number) => {
	if(n % 3 === 0 && n % 5 === 0)
		return "FizzBuzz";
	else if(n % 3 === 0 || n.toString().includes("3")) 
		return "Fizz";
	else if(n % 5 === 0 || n.toString().includes("5"))
		return "Buzz";
	else
		return n;
}