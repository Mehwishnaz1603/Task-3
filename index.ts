/////Task # 3 ////

//Name Cases: Store a person’s name in a variable, and then print that 
//person’s name in lowercase, uppercase, and titlecase.

let personName: string = "Mehwish Naz";

// in lowercase
console.log("lowercase:", personName.toLowerCase());

//in upper case
console.log("uppercase:", personName.toLocaleUpperCase());

//in title case
console.log("titlecase:", personName.replace(/\bw/g,c=>c.toUpperCase()));