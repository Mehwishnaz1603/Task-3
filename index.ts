let personName: string = "Mehwish Naz";

// in lowercase
console.log("lowercase:", personName.toLowerCase());

//in upper case
console.log("uppercase:", personName.toLocaleUpperCase());

//in title case
console.log("titlecase:", personName.replace(/\bw/g,c=>c.toUpperCase()));