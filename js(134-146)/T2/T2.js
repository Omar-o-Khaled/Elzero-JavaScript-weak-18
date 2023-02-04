let specialNames = "Os10O OsO Os100O Osa100O Os1000 Os100m";

let regx=/os\d*o/ig


console.log(specialNames.match(regx))

// Output
// ['Os10O', 'OsO', 'Os100O']