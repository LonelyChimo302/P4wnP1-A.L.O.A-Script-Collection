# Scripts and what they do:

* This is just a summary tho, i'd highly recommend reading the comments in the actual code before using any of these.

## AndroidPINUnlocker:

* Should be fairly obvious, just plug your P4wnP1 into any Android Phone via OTG Adapter and it starts trying out predetermined PINs till you gain access to the Phone.

## RickRoll

* Even more self explanatory then the PhoneUnlocker. It will automatically play the Youtubevideo of Rick Astley's "Never Gonna Give You Up" upon being recognized as an HID. This will work on any Windows PC (Tho i only tested this on WIN 10 and 11, WIN + R and typing in a link should work on older WIN versions aswell). To make this one work on OSX just replace the line "press("WIN R");" with "press("WIN SPACE");"

## WiFiSnagger

* Steals the key of previously connected WiFi Networks and puts them on your P4wnP1s flashdrive (wich you will have to create using 'cd /usr/local/P4wnP1/helper' './genimg -s *SIZE OF THE DRIVE* -o *NAME OF THE BINFILE*' Max size is 4Gb because the Format is FAT32. Size is in MB so for 4Gb you will have to type -s 4000

* After the .bin is created you will have to select "Mass Storage" in the USB settings and choose your new .bin file

* DISCLAIMER: Having more then 4 USB options enabled will make your Startup Template fail and reset to default. So if you have 5 enabled after the last step, i'd recommend disabling "CDC ECM" wich makes USBETH work on Linux, Unix and OSX, wich we won't need here, since this is a windows-only script.

## More soon
