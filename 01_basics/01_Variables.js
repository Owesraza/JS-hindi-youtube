const accountId = 14455 // for constant can't change 
let accountEmail = "Owais@google.com"
var accountpassword = "12345"
/*
Prefer not to use var
because of issue in block scope and functional scope
*/
let accountState;
accountCity = "Pune"

accountEmail = "Owesraz@google.com"
accountpassword = "2313"
accountCity = "Arni"

console.log(accountId);// for print single line
console.table([accountId,accountEmail,accountpassword,accountCity,accountState]); //for print in table form we can print multiple 