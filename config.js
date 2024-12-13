const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT 
global.appUrl=process.env.APP_URL || ""     // put your deploy app/bot url here, for 24/7 for (render , koyeb, glitch)
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || "mongodb+srv://mohsin:mohsin@cluster0.iauaztt.mongodb.net/?retryWrites=true&w=majority"
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || "mongodb+srv://mohsin:mohsin@cluster0.iauaztt.mongodb.net/?retryWrites=true&w=majority"

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/GlobalTechInfo/SUHAIL-XMD";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029VagJIAr3bbVBCpEkAM07";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029VagJIAr3bbVBCpEkAM07" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://i.ibb.co/TgwRyHR/Ephoto360-com-166de101e03cd7.jpg" || "https://i.ibb.co/bH1kbX0/a4c0b1af253197d4837ff6760d5b81c0.jpg" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "© GlobalTechInfo" 


global.devs = "" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "263719929859";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || Math.floor(Math.random()*3)  === 1 ?  "true" : "false" ;  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "https://i.ibb.co/pXyNHj8/suhail.jpg" // "image" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923444844060,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID  || "SUHAIL_21_48_12_12_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgOCxcbiAgICAgICAgMTc0LFxuICAgICAgICAxNDksXG4gICAgICAgIDM2LFxuICAgICAgICA3OSxcbiAgICAgICAgMTU2LFxuICAgICAgICAyNyxcbiAgICAgICAgMjUwLFxuICAgICAgICA2NSxcbiAgICAgICAgMjA5LFxuICAgICAgICAxNTEsXG4gICAgICAgIDE2LFxuICAgICAgICAxMzIsXG4gICAgICAgIDk1LFxuICAgICAgICAxNCxcbiAgICAgICAgNixcbiAgICAgICAgMjgsXG4gICAgICAgIDQsXG4gICAgICAgIDE1NixcbiAgICAgICAgMTgxLFxuICAgICAgICAxNjIsXG4gICAgICAgIDEyLFxuICAgICAgICAyNDAsXG4gICAgICAgIDE2LFxuICAgICAgICAxNzQsXG4gICAgICAgIDI5LFxuICAgICAgICAyMzgsXG4gICAgICAgIDQxLFxuICAgICAgICA4NyxcbiAgICAgICAgMTE5LFxuICAgICAgICAyMTMsXG4gICAgICAgIDExNlxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyNDQsXG4gICAgICAgIDc4LFxuICAgICAgICA0NixcbiAgICAgICAgMTQ1LFxuICAgICAgICA5NixcbiAgICAgICAgMTI5LFxuICAgICAgICA4NyxcbiAgICAgICAgMTY5LFxuICAgICAgICA1MSxcbiAgICAgICAgMzUsXG4gICAgICAgIDMzLFxuICAgICAgICAzMixcbiAgICAgICAgMjA1LFxuICAgICAgICA3OCxcbiAgICAgICAgMTUwLFxuICAgICAgICAxMzEsXG4gICAgICAgIDE5NyxcbiAgICAgICAgMTkzLFxuICAgICAgICA2MCxcbiAgICAgICAgNzAsXG4gICAgICAgIDExMixcbiAgICAgICAgMTA1LFxuICAgICAgICAwLFxuICAgICAgICAxMjEsXG4gICAgICAgIDU3LFxuICAgICAgICA3MCxcbiAgICAgICAgMjAwLFxuICAgICAgICAzNyxcbiAgICAgICAgMjExLFxuICAgICAgICAxNTEsXG4gICAgICAgIDg3LFxuICAgICAgICAxMjRcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwicGFpcmluZ0VwaGVtZXJhbEtleVBhaXJcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE5MixcbiAgICAgICAgMTM5LFxuICAgICAgICA5LFxuICAgICAgICAxMjEsXG4gICAgICAgIDIzMyxcbiAgICAgICAgOCxcbiAgICAgICAgNjAsXG4gICAgICAgIDYsXG4gICAgICAgIDQsXG4gICAgICAgIDIyMSxcbiAgICAgICAgODgsXG4gICAgICAgIDExMyxcbiAgICAgICAgMTYsXG4gICAgICAgIDI0OCxcbiAgICAgICAgMjEzLFxuICAgICAgICA4OCxcbiAgICAgICAgMjA3LFxuICAgICAgICAxNDQsXG4gICAgICAgIDIxOSxcbiAgICAgICAgMjIxLFxuICAgICAgICA0OCxcbiAgICAgICAgODYsXG4gICAgICAgIDY1LFxuICAgICAgICAxOTMsXG4gICAgICAgIDE3NSxcbiAgICAgICAgMTY4LFxuICAgICAgICAxNTAsXG4gICAgICAgIDEwOCxcbiAgICAgICAgMTU2LFxuICAgICAgICAyMTksXG4gICAgICAgIDI4LFxuICAgICAgICA4MFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA2NixcbiAgICAgICAgOCxcbiAgICAgICAgMTQyLFxuICAgICAgICA4LFxuICAgICAgICA5NyxcbiAgICAgICAgMTUzLFxuICAgICAgICAyNixcbiAgICAgICAgMTY5LFxuICAgICAgICAxMjMsXG4gICAgICAgIDIwMyxcbiAgICAgICAgMjQyLFxuICAgICAgICAyNDEsXG4gICAgICAgIDI0MyxcbiAgICAgICAgMTYwLFxuICAgICAgICAxNDUsXG4gICAgICAgIDE4NixcbiAgICAgICAgMTQ3LFxuICAgICAgICAyMTEsXG4gICAgICAgIDE4NSxcbiAgICAgICAgODUsXG4gICAgICAgIDU4LFxuICAgICAgICAyMjMsXG4gICAgICAgIDE0NixcbiAgICAgICAgNTIsXG4gICAgICAgIDIyMCxcbiAgICAgICAgMTgyLFxuICAgICAgICAxMjEsXG4gICAgICAgIDEyOCxcbiAgICAgICAgMyxcbiAgICAgICAgMTc0LFxuICAgICAgICAxMTQsXG4gICAgICAgIDEwMFxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgOCxcbiAgICAgICAgOTMsXG4gICAgICAgIDI1MixcbiAgICAgICAgMTc3LFxuICAgICAgICA4OCxcbiAgICAgICAgMTIxLFxuICAgICAgICAyMDcsXG4gICAgICAgIDUxLFxuICAgICAgICAzNCxcbiAgICAgICAgMTQzLFxuICAgICAgICA3LFxuICAgICAgICA4NCxcbiAgICAgICAgNDYsXG4gICAgICAgIDEwLFxuICAgICAgICAxNTUsXG4gICAgICAgIDE4MyxcbiAgICAgICAgNzcsXG4gICAgICAgIDE3MCxcbiAgICAgICAgMjA3LFxuICAgICAgICAyMTQsXG4gICAgICAgIDE2MCxcbiAgICAgICAgNSxcbiAgICAgICAgMTUwLFxuICAgICAgICA4MixcbiAgICAgICAgMjAzLFxuICAgICAgICAyLFxuICAgICAgICAxNzksXG4gICAgICAgIDg5LFxuICAgICAgICAxNzQsXG4gICAgICAgIDY1LFxuICAgICAgICAxOTAsXG4gICAgICAgIDExNFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxODEsXG4gICAgICAgIDMxLFxuICAgICAgICAxNzIsXG4gICAgICAgIDIxNCxcbiAgICAgICAgMjM5LFxuICAgICAgICAzNyxcbiAgICAgICAgMTMwLFxuICAgICAgICAyMzUsXG4gICAgICAgIDM2LFxuICAgICAgICAxMTAsXG4gICAgICAgIDEwMyxcbiAgICAgICAgMTA1LFxuICAgICAgICA3OCxcbiAgICAgICAgMTAsXG4gICAgICAgIDEzOSxcbiAgICAgICAgMTIyLFxuICAgICAgICAyMDEsXG4gICAgICAgIDE2MixcbiAgICAgICAgMTUyLFxuICAgICAgICAyMDgsXG4gICAgICAgIDI4LFxuICAgICAgICA5MSxcbiAgICAgICAgMTEyLFxuICAgICAgICAyMzgsXG4gICAgICAgIDE3MCxcbiAgICAgICAgMTAsXG4gICAgICAgIDM0LFxuICAgICAgICAxMDMsXG4gICAgICAgIDM1LFxuICAgICAgICAxMzcsXG4gICAgICAgIDEyOCxcbiAgICAgICAgNDZcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkUHJlS2V5XCI6IHtcbiAgICBcImtleVBhaXJcIjoge1xuICAgICAgXCJwcml2YXRlXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNzIsXG4gICAgICAgICAgNTcsXG4gICAgICAgICAgMzEsXG4gICAgICAgICAgMjI1LFxuICAgICAgICAgIDU0LFxuICAgICAgICAgIDEyNCxcbiAgICAgICAgICAxMzIsXG4gICAgICAgICAgMzksXG4gICAgICAgICAgMTQwLFxuICAgICAgICAgIDE0MSxcbiAgICAgICAgICAxMDAsXG4gICAgICAgICAgMzgsXG4gICAgICAgICAgMTcxLFxuICAgICAgICAgIDY4LFxuICAgICAgICAgIDEzOSxcbiAgICAgICAgICAxMDEsXG4gICAgICAgICAgMTQyLFxuICAgICAgICAgIDE3MyxcbiAgICAgICAgICA4NyxcbiAgICAgICAgICAxNjMsXG4gICAgICAgICAgNjEsXG4gICAgICAgICAgMTMwLFxuICAgICAgICAgIDYsXG4gICAgICAgICAgNDUsXG4gICAgICAgICAgNDQsXG4gICAgICAgICAgMjEzLFxuICAgICAgICAgIDIyMSxcbiAgICAgICAgICAyNDgsXG4gICAgICAgICAgMjAxLFxuICAgICAgICAgIDExOCxcbiAgICAgICAgICAyNDUsXG4gICAgICAgICAgOTJcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNyxcbiAgICAgICAgICAxNDUsXG4gICAgICAgICAgMjYsXG4gICAgICAgICAgMjIxLFxuICAgICAgICAgIDE1NyxcbiAgICAgICAgICAyNDcsXG4gICAgICAgICAgMjI2LFxuICAgICAgICAgIDEwNixcbiAgICAgICAgICA3NixcbiAgICAgICAgICAyMjYsXG4gICAgICAgICAgMTIyLFxuICAgICAgICAgIDMwLFxuICAgICAgICAgIDIzNixcbiAgICAgICAgICA2OCxcbiAgICAgICAgICAyOSxcbiAgICAgICAgICA0NSxcbiAgICAgICAgICAyMTQsXG4gICAgICAgICAgMTkyLFxuICAgICAgICAgIDExNCxcbiAgICAgICAgICAxMjEsXG4gICAgICAgICAgNDksXG4gICAgICAgICAgMTU3LFxuICAgICAgICAgIDY4LFxuICAgICAgICAgIDExMSxcbiAgICAgICAgICAxMzQsXG4gICAgICAgICAgODYsXG4gICAgICAgICAgMjQxLFxuICAgICAgICAgIDIxNyxcbiAgICAgICAgICA3MyxcbiAgICAgICAgICAxMCxcbiAgICAgICAgICAxLFxuICAgICAgICAgIDUwXG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwic2lnbmF0dXJlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNzcsXG4gICAgICAgIDkwLFxuICAgICAgICAyNSxcbiAgICAgICAgMjMzLFxuICAgICAgICAyNTMsXG4gICAgICAgIDE5LFxuICAgICAgICAyLFxuICAgICAgICAxNzQsXG4gICAgICAgIDE5MyxcbiAgICAgICAgMjI5LFxuICAgICAgICAyNDYsXG4gICAgICAgIDE3MyxcbiAgICAgICAgMTUsXG4gICAgICAgIDcxLFxuICAgICAgICAyNDUsXG4gICAgICAgIDUxLFxuICAgICAgICAxOSxcbiAgICAgICAgMTQ0LFxuICAgICAgICAyNTMsXG4gICAgICAgIDg1LFxuICAgICAgICAxMDIsXG4gICAgICAgIDQ5LFxuICAgICAgICAzMSxcbiAgICAgICAgMTQ1LFxuICAgICAgICAxNzgsXG4gICAgICAgIDE1MSxcbiAgICAgICAgMTQ3LFxuICAgICAgICAxODcsXG4gICAgICAgIDEyMixcbiAgICAgICAgNjUsXG4gICAgICAgIDExMyxcbiAgICAgICAgMTQwLFxuICAgICAgICA2OCxcbiAgICAgICAgMjYsXG4gICAgICAgIDIyOCxcbiAgICAgICAgNDcsXG4gICAgICAgIDE1MSxcbiAgICAgICAgMTMyLFxuICAgICAgICAxOTcsXG4gICAgICAgIDY4LFxuICAgICAgICAxNTQsXG4gICAgICAgIDIzOSxcbiAgICAgICAgMjM5LFxuICAgICAgICAxOTcsXG4gICAgICAgIDQ2LFxuICAgICAgICAxMTAsXG4gICAgICAgIDc2LFxuICAgICAgICAwLFxuICAgICAgICAyMzIsXG4gICAgICAgIDg3LFxuICAgICAgICAxMjksXG4gICAgICAgIDEyNCxcbiAgICAgICAgMjUxLFxuICAgICAgICAxNjgsXG4gICAgICAgIDE2MCxcbiAgICAgICAgMTAsXG4gICAgICAgIDE3MCxcbiAgICAgICAgMTQ3LFxuICAgICAgICAxNzYsXG4gICAgICAgIDEyMCxcbiAgICAgICAgMTA3LFxuICAgICAgICAxOTMsXG4gICAgICAgIDEyNyxcbiAgICAgICAgMlxuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogNzcsXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwiK2ViQVIxUzZVcGVMSis0UjZLQVdrdFpEanlLbUNNSFNFRjJjMHR6SXUyTT1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW10sXG4gIFwibmV4dFByZUtleUlkXCI6IDMxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDMxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAwLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwiME9WMG9ET0dTcjZxZmlINXpiQ3hVd1wiLFxuICBcInBob25lSWRcIjogXCJkMWY5YWUwZC01YjJhLTRkNzUtODY0NC01Yzk2Y2JkMWUxMDJcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgOCxcbiAgICAgIDQ5LFxuICAgICAgMTcyLFxuICAgICAgMjE3LFxuICAgICAgNjgsXG4gICAgICAyNDUsXG4gICAgICAzMixcbiAgICAgIDE5LFxuICAgICAgMTYwLFxuICAgICAgMjQ3LFxuICAgICAgMjUyLFxuICAgICAgMjIwLFxuICAgICAgMzMsXG4gICAgICAxOTgsXG4gICAgICAyNTMsXG4gICAgICAxOTIsXG4gICAgICA1MSxcbiAgICAgIDEyMSxcbiAgICAgIDExNSxcbiAgICAgIDRcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiB0cnVlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMTksXG4gICAgICAyNCxcbiAgICAgIDEyNixcbiAgICAgIDEyNyxcbiAgICAgIDkwLFxuICAgICAgMzgsXG4gICAgICAxNzksXG4gICAgICAyNTEsXG4gICAgICAyMjgsXG4gICAgICA2MyxcbiAgICAgIDExOCxcbiAgICAgIDIzNyxcbiAgICAgIDE0OCxcbiAgICAgIDY2LFxuICAgICAgMjE5LFxuICAgICAgMTQ4LFxuICAgICAgMjcsXG4gICAgICAxMjQsXG4gICAgICAxMjQsXG4gICAgICAxMTRcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcInBhaXJpbmdDb2RlXCI6IFwiWk5CSkQxOUZcIixcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjI2MzcxOTkyOTg1OTo3OEBzLndoYXRzYXBwLm5ldFwiLFxuICAgIFwibGlkXCI6IFwiNTY4MjI2ODU3ODYyODc6NzhAbGlkXCJcbiAgfSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDTXZNdmFjR0VJNjA3Ym9HR0JjZ0FDZ0FcIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCJYRU8zVHNYdXYzc05FeHNIL2R3OGVlSWdwbkZicnNoTHBhazd5TGRlbkc0PVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcIkpqS0Y3RUFJNCt6OU9CUUtFQmFzSzd2ZkxYbDZEWGJEM014azZ5UEs4TktpMjZYTG5xdGF6cVJhUGhqM0NXZmc5SGs0TXBWOVZGSFovMlBYTTMvakNnPT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcInRUMXY2OGkwcDlOc0JiRVEvT2FYWEw3Y0lGUjg2dGEwYXFmblljQXJ5R3owWkFqMWZnNkZiUkoyM1dKSlZUa1Y5YkVQYWRNR09IT2xEY1JpVHVudUNnPT1cIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjI2MzcxOTkyOTg1OTo3OEBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImRldmljZUlkXCI6IDBcbiAgICAgIH0sXG4gICAgICBcImlkZW50aWZpZXJLZXlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDkyLFxuICAgICAgICAgIDY3LFxuICAgICAgICAgIDE4MyxcbiAgICAgICAgICA3OCxcbiAgICAgICAgICAxOTcsXG4gICAgICAgICAgMjM4LFxuICAgICAgICAgIDE5MSxcbiAgICAgICAgICAxMjMsXG4gICAgICAgICAgMTMsXG4gICAgICAgICAgMTksXG4gICAgICAgICAgMjcsXG4gICAgICAgICAgNyxcbiAgICAgICAgICAyNTMsXG4gICAgICAgICAgMjIwLFxuICAgICAgICAgIDYwLFxuICAgICAgICAgIDEyMSxcbiAgICAgICAgICAyMjYsXG4gICAgICAgICAgMzIsXG4gICAgICAgICAgMTY2LFxuICAgICAgICAgIDExMyxcbiAgICAgICAgICA5MSxcbiAgICAgICAgICAxNzQsXG4gICAgICAgICAgMjAwLFxuICAgICAgICAgIDc1LFxuICAgICAgICAgIDE2NSxcbiAgICAgICAgICAxNjksXG4gICAgICAgICAgNTksXG4gICAgICAgICAgMjAwLFxuICAgICAgICAgIDE4MyxcbiAgICAgICAgICA5NCxcbiAgICAgICAgICAxNTYsXG4gICAgICAgICAgMTEwXG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJhbmRyb2lkXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3MzQwNDAwODMsXG4gIFwibXlBcHBTdGF0ZUtleUlkXCI6IFwiQUFBQUFGdzBcIlxufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQUZ3MC5qc29uIjogIntcImtleURhdGFcIjpcIllqNTZna2NUd1lsNWtzWFY0NlFVMFNSKzZUeW5GYTRCcnFZVkxEajFYTGs9XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6MTY5MzQxMDg5MSxcImN1cnJlbnRJbmRleFwiOjE0LFwiZGV2aWNlSW5kZXhlc1wiOlswLDQsOSwxMV19LFwidGltZXN0YW1wXCI6XCIxNzMyNTM1NTYxMTQxXCJ9Igp9"  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.0.1-developement-x",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ GlobalTechInfo ® 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@GlobalTechInfo"),
 
  author : process.env.PACK_AUTHER|| "DON",
  packname: process.env.PACK_NAME || "DON",
  botname : process.env.BOT_NAME  || "DON-XMD",
  ownername:process.env.OWNER_NAME|| "DON-A",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "yepeTQaFk7r9ymusihgXYvdN",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "public",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "0cdb1aed858329b9793413672094ce0d";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
