console.log("tut6.js");
const name = "Harry";
const greeting = "Good Morning ";
console.log(name + greeting);
console.log(name + " " + greeting);

let html = `<h1>   This is heading </h1>
`

console.log(html.length);
console.log(html.toLowerCase());
console.log(html.toUpperCase());

// Indexing 
console.log(html[0]);

let constance_value = html.length - 1;
console.log(constance_value);
// console.log(html[-1]); This is possible in python only 
console.log(html[constance_value - 5]);
console.log(html.lastIndexOf("<"));
console.log(html.charAt(3));
console.log(html.endsWith("chetan"));
console.log(html.includes("is"));
console.log(html.substring(5,8));
console.log(html.substr(5,8));

console.log(html.slice(-4,-2));
console.log(html.slice(-4));
console.log(html.split(" "));

console.log(html.repeat(3))
console.log(html.replace("is","that",));
console.log(html.replace(/is/g,"that",));


let myHtml = `Hello ${name}
<h1>This is the heading </h1>
`;
document.body.innerHTML = myHtml;


