const url = require("url");
const myUrl = new URL("http://127.0.0.1:5500/node_modules/index.html");

//Serialized URL
console.log(myUrl.href);
console.log(myUrl.toString());

//host(root domain) URL
console.log(myUrl.host);

//URL hostnames
console.log(myUrl.hostname);

//URL pathname
console.log(myUrl.pathname);

//URL serialized query
console.log(myUrl.search);

//URL params object
console.log(myUrl.searchParams);

//URL params add
myUrl.searchParams.append("abc", "123");
console.log(myUrl.searchParams);

//URL loop through params
myUrl.searchParams.forEach((value, name) => console.log(`${name}:${value}`));
