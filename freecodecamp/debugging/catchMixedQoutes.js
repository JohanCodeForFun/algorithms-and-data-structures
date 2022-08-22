// Fix the string so it either uses different quotes for the href value, or escape the existing ones. Keep the double quote marks around the entire string.

// before 
// let innerHtml = "<p>Click here to <a href="#Home">return home</a></p>";
// console.log(innerHtml);


// after
let innerHtml = "<p>Click here to <a href='#Home'>return home</a></p>";
console.log(innerHtml);