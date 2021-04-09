function restFunction(a = "one", b, c, ...z) {
/* the rest parameter - not to be confused with the spread operator - "mops up" 
all values after the final comma and turns them into an array
*/ 
	console.log(z);
/* a is a default parameter, so it will have the given value even if a function call 
is made without arguments*/
	console.log(a);
	const first_two_args = Array.prototype.slice.call(arguments, 0, 2);
	return first_two_args;
}



function spreadFunction(v, w, x, y, z) { 
	console.log(`v is ${v}, w is ${w}, x is ${x}, y is ${y}, z is ${z}.`);
	const letter_args = Array.from(arguments);
	return letter_args;
 }

let args = [0, 1];

// args and "3" are interpolated where they are invoked 
spreadFunction(-1, ...args, 2, ...[3]);