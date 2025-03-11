const accountId = 1444553
let accountEmail = "abc@gmail.com"
var accountPassword = "12345"
accountCity = "Jaipur"
// accountId = 2 Not allowed since it is const
/*
Prefer not to use var
because of issue of block scope and functional scope
*/
accountEmail = "hc@hc.com"
accountPassword = "212121"
accountCity = "Benagluru"

console.log(accountId);

console.table([accountId, accountEmail, accountPassword, accountCity])
