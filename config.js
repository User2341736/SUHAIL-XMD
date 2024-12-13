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


global.SESSION_ID = process.env.SESSION_ID  || "SUHAIL_21_21_12_13_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjA4LFxuICAgICAgICAxMjksXG4gICAgICAgIDAsXG4gICAgICAgIDg2LFxuICAgICAgICAxMTAsXG4gICAgICAgIDEyMyxcbiAgICAgICAgODIsXG4gICAgICAgIDE0NyxcbiAgICAgICAgMTYwLFxuICAgICAgICAyMDIsXG4gICAgICAgIDI0OSxcbiAgICAgICAgMzMsXG4gICAgICAgIDE3NyxcbiAgICAgICAgMjE3LFxuICAgICAgICA1MyxcbiAgICAgICAgMTc2LFxuICAgICAgICAxMzgsXG4gICAgICAgIDYwLFxuICAgICAgICAxOSxcbiAgICAgICAgMTM3LFxuICAgICAgICA3NyxcbiAgICAgICAgMTcxLFxuICAgICAgICAxNixcbiAgICAgICAgMzIsXG4gICAgICAgIDQ5LFxuICAgICAgICAxNjYsXG4gICAgICAgIDIsXG4gICAgICAgIDIwNyxcbiAgICAgICAgNjYsXG4gICAgICAgIDc4LFxuICAgICAgICAxNzAsXG4gICAgICAgIDExMlxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyNDYsXG4gICAgICAgIDU0LFxuICAgICAgICA0MixcbiAgICAgICAgMjMzLFxuICAgICAgICAyMjMsXG4gICAgICAgIDI0NyxcbiAgICAgICAgODgsXG4gICAgICAgIDE3OSxcbiAgICAgICAgMTgyLFxuICAgICAgICAyMDUsXG4gICAgICAgIDIzNCxcbiAgICAgICAgMjUwLFxuICAgICAgICAxOTMsXG4gICAgICAgIDEsXG4gICAgICAgIDEyMCxcbiAgICAgICAgMTE0LFxuICAgICAgICAzNSxcbiAgICAgICAgMjUwLFxuICAgICAgICAyMDEsXG4gICAgICAgIDEwMSxcbiAgICAgICAgMTA3LFxuICAgICAgICAyMzksXG4gICAgICAgIDE2NCxcbiAgICAgICAgMTEwLFxuICAgICAgICAxMzIsXG4gICAgICAgIDcyLFxuICAgICAgICA4NyxcbiAgICAgICAgMTAzLFxuICAgICAgICA2NSxcbiAgICAgICAgNDAsXG4gICAgICAgIDE2NixcbiAgICAgICAgMThcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwicGFpcmluZ0VwaGVtZXJhbEtleVBhaXJcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDg4LFxuICAgICAgICA1NCxcbiAgICAgICAgNDksXG4gICAgICAgIDI4LFxuICAgICAgICAxNTQsXG4gICAgICAgIDIzOSxcbiAgICAgICAgNzQsXG4gICAgICAgIDIyNCxcbiAgICAgICAgMjAyLFxuICAgICAgICAxNDEsXG4gICAgICAgIDkwLFxuICAgICAgICA1NyxcbiAgICAgICAgMjEsXG4gICAgICAgIDg0LFxuICAgICAgICAxNDAsXG4gICAgICAgIDI0LFxuICAgICAgICAyNDMsXG4gICAgICAgIDg0LFxuICAgICAgICAxMjksXG4gICAgICAgIDE2MSxcbiAgICAgICAgNjcsXG4gICAgICAgIDI0MSxcbiAgICAgICAgMTU2LFxuICAgICAgICA1NCxcbiAgICAgICAgOTksXG4gICAgICAgIDIxNSxcbiAgICAgICAgMjA4LFxuICAgICAgICAxODgsXG4gICAgICAgIDE4NixcbiAgICAgICAgOCxcbiAgICAgICAgMTQ5LFxuICAgICAgICAxMDJcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTE3LFxuICAgICAgICAxMSxcbiAgICAgICAgMTg0LFxuICAgICAgICA4OCxcbiAgICAgICAgNDMsXG4gICAgICAgIDExNCxcbiAgICAgICAgMTU0LFxuICAgICAgICA4OCxcbiAgICAgICAgNTUsXG4gICAgICAgIDQ5LFxuICAgICAgICAxMjUsXG4gICAgICAgIDg1LFxuICAgICAgICAxODQsXG4gICAgICAgIDE0NSxcbiAgICAgICAgMjQwLFxuICAgICAgICAxMjIsXG4gICAgICAgIDEwNixcbiAgICAgICAgMTcxLFxuICAgICAgICAxODcsXG4gICAgICAgIDk0LFxuICAgICAgICA2MyxcbiAgICAgICAgMjQ2LFxuICAgICAgICAxNzYsXG4gICAgICAgIDExMyxcbiAgICAgICAgMzIsXG4gICAgICAgIDMwLFxuICAgICAgICAxNTIsXG4gICAgICAgIDMyLFxuICAgICAgICA2MCxcbiAgICAgICAgMjcsXG4gICAgICAgIDgzLFxuICAgICAgICAxOFxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjQ4LFxuICAgICAgICAxNjAsXG4gICAgICAgIDE3OCxcbiAgICAgICAgMjI4LFxuICAgICAgICAxNTUsXG4gICAgICAgIDU2LFxuICAgICAgICAyMjYsXG4gICAgICAgIDE4NyxcbiAgICAgICAgODksXG4gICAgICAgIDI0MSxcbiAgICAgICAgNjAsXG4gICAgICAgIDMsXG4gICAgICAgIDI2LFxuICAgICAgICAxMjMsXG4gICAgICAgIDE4NixcbiAgICAgICAgNzksXG4gICAgICAgIDIxMyxcbiAgICAgICAgMjgsXG4gICAgICAgIDQyLFxuICAgICAgICAyMDksXG4gICAgICAgIDIwOCxcbiAgICAgICAgMjIwLFxuICAgICAgICA3OSxcbiAgICAgICAgMTYxLFxuICAgICAgICAxOTUsXG4gICAgICAgIDE3OCxcbiAgICAgICAgMTQ0LFxuICAgICAgICAxNzYsXG4gICAgICAgIDE3NixcbiAgICAgICAgOTksXG4gICAgICAgIDI2LFxuICAgICAgICAxMDBcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTc0LFxuICAgICAgICA2MCxcbiAgICAgICAgMjQwLFxuICAgICAgICAxMjEsXG4gICAgICAgIDIzOCxcbiAgICAgICAgMTQ3LFxuICAgICAgICAxODMsXG4gICAgICAgIDEyNCxcbiAgICAgICAgMTg4LFxuICAgICAgICAxODEsXG4gICAgICAgIDQzLFxuICAgICAgICAxNjAsXG4gICAgICAgIDcsXG4gICAgICAgIDE5NixcbiAgICAgICAgOTksXG4gICAgICAgIDU2LFxuICAgICAgICAyMzAsXG4gICAgICAgIDIwNyxcbiAgICAgICAgNTUsXG4gICAgICAgIDE2MCxcbiAgICAgICAgMjI3LFxuICAgICAgICA0MixcbiAgICAgICAgMjQzLFxuICAgICAgICAyMjYsXG4gICAgICAgIDIwNyxcbiAgICAgICAgNzQsXG4gICAgICAgIDEyNyxcbiAgICAgICAgMjI5LFxuICAgICAgICAxLFxuICAgICAgICAxMDMsXG4gICAgICAgIDQ0LFxuICAgICAgICAxMTJcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkUHJlS2V5XCI6IHtcbiAgICBcImtleVBhaXJcIjoge1xuICAgICAgXCJwcml2YXRlXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgOCxcbiAgICAgICAgICAxMTgsXG4gICAgICAgICAgMTk3LFxuICAgICAgICAgIDI1MixcbiAgICAgICAgICAxMzUsXG4gICAgICAgICAgMTY2LFxuICAgICAgICAgIDIsXG4gICAgICAgICAgMjA2LFxuICAgICAgICAgIDE0OCxcbiAgICAgICAgICAyMTAsXG4gICAgICAgICAgMTYwLFxuICAgICAgICAgIDk3LFxuICAgICAgICAgIDIyMCxcbiAgICAgICAgICAyNDQsXG4gICAgICAgICAgOTYsXG4gICAgICAgICAgMjExLFxuICAgICAgICAgIDEwMixcbiAgICAgICAgICAxMzcsXG4gICAgICAgICAgMTU1LFxuICAgICAgICAgIDYyLFxuICAgICAgICAgIDIwNCxcbiAgICAgICAgICAxMDYsXG4gICAgICAgICAgMjM5LFxuICAgICAgICAgIDE5OSxcbiAgICAgICAgICAyNixcbiAgICAgICAgICAxMTUsXG4gICAgICAgICAgNDcsXG4gICAgICAgICAgMTI0LFxuICAgICAgICAgIDIzNyxcbiAgICAgICAgICAyMjEsXG4gICAgICAgICAgMjExLFxuICAgICAgICAgIDcyXG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInB1YmxpY1wiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDIzMyxcbiAgICAgICAgICAxMDAsXG4gICAgICAgICAgMjE0LFxuICAgICAgICAgIDY0LFxuICAgICAgICAgIDY2LFxuICAgICAgICAgIDE0OCxcbiAgICAgICAgICAxNTYsXG4gICAgICAgICAgNjUsXG4gICAgICAgICAgMTk3LFxuICAgICAgICAgIDE4MSxcbiAgICAgICAgICA4NSxcbiAgICAgICAgICAxOTcsXG4gICAgICAgICAgMjAyLFxuICAgICAgICAgIDIxNyxcbiAgICAgICAgICAxMDIsXG4gICAgICAgICAgMjA1LFxuICAgICAgICAgIDE3OCxcbiAgICAgICAgICAxNjUsXG4gICAgICAgICAgMTk4LFxuICAgICAgICAgIDE3MixcbiAgICAgICAgICAxMzksXG4gICAgICAgICAgNCxcbiAgICAgICAgICAxMzgsXG4gICAgICAgICAgNTQsXG4gICAgICAgICAgOTksXG4gICAgICAgICAgODIsXG4gICAgICAgICAgMTM4LFxuICAgICAgICAgIDk0LFxuICAgICAgICAgIDk0LFxuICAgICAgICAgIDk0LFxuICAgICAgICAgIDE0OCxcbiAgICAgICAgICA3MVxuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIwNSxcbiAgICAgICAgMTM2LFxuICAgICAgICA2MCxcbiAgICAgICAgMTcwLFxuICAgICAgICAyMjgsXG4gICAgICAgIDE4NyxcbiAgICAgICAgMTE0LFxuICAgICAgICAyNTEsXG4gICAgICAgIDY4LFxuICAgICAgICAxMCxcbiAgICAgICAgMTQxLFxuICAgICAgICAwLFxuICAgICAgICAxMzEsXG4gICAgICAgIDEwLFxuICAgICAgICAxNzUsXG4gICAgICAgIDc0LFxuICAgICAgICAxMDIsXG4gICAgICAgIDc5LFxuICAgICAgICAxNCxcbiAgICAgICAgMTMxLFxuICAgICAgICAyMjYsXG4gICAgICAgIDQ4LFxuICAgICAgICAyMixcbiAgICAgICAgNTcsXG4gICAgICAgIDYsXG4gICAgICAgIDc4LFxuICAgICAgICAyMDgsXG4gICAgICAgIDExMCxcbiAgICAgICAgMTI1LFxuICAgICAgICA3MSxcbiAgICAgICAgMjAyLFxuICAgICAgICAxMDIsXG4gICAgICAgIDI4LFxuICAgICAgICAyMSxcbiAgICAgICAgMTI4LFxuICAgICAgICAyMjAsXG4gICAgICAgIDEyMCxcbiAgICAgICAgMTE3LFxuICAgICAgICAxMDYsXG4gICAgICAgIDQ5LFxuICAgICAgICA2MyxcbiAgICAgICAgMTM4LFxuICAgICAgICA3LFxuICAgICAgICAxNTcsXG4gICAgICAgIDExNixcbiAgICAgICAgNixcbiAgICAgICAgMTIwLFxuICAgICAgICAxMDMsXG4gICAgICAgIDEzLFxuICAgICAgICAxNTcsXG4gICAgICAgIDE4MixcbiAgICAgICAgODQsXG4gICAgICAgIDIzMSxcbiAgICAgICAgMjQzLFxuICAgICAgICAyLFxuICAgICAgICAyOSxcbiAgICAgICAgMjE3LFxuICAgICAgICAyMDQsXG4gICAgICAgIDEyMixcbiAgICAgICAgMjMyLFxuICAgICAgICAxMjUsXG4gICAgICAgIDM1LFxuICAgICAgICAxNDUsXG4gICAgICAgIDE0MVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogNzEsXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwiaFJVOVkxOGFyK2NzU3g2QUZCWndtbmRmNHk1ZDRUdFF3cElta0FmbEtOZz1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW10sXG4gIFwibmV4dFByZUtleUlkXCI6IDMxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDMxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAwLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwiWXVmWnZoTVlUY1dKaFRZa0lMQTZmUVwiLFxuICBcInBob25lSWRcIjogXCIwMDRiOTdhMC00ODFmLTQxOGEtYTQ3Zi00NzUyNmVlMDExNDlcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgNDMsXG4gICAgICA0MixcbiAgICAgIDI2LFxuICAgICAgMjI5LFxuICAgICAgMjUxLFxuICAgICAgMTczLFxuICAgICAgNzUsXG4gICAgICAyNSxcbiAgICAgIDMsXG4gICAgICAxNzUsXG4gICAgICAxMjEsXG4gICAgICAyMTEsXG4gICAgICAxMjMsXG4gICAgICAxMDgsXG4gICAgICAyMTcsXG4gICAgICA4MCxcbiAgICAgIDQwLFxuICAgICAgMjQ1LFxuICAgICAgMTc0LFxuICAgICAgOTdcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiB0cnVlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMjA0LFxuICAgICAgMjQzLFxuICAgICAgMTYzLFxuICAgICAgMjEsXG4gICAgICAyNDMsXG4gICAgICAxODksXG4gICAgICA0MCxcbiAgICAgIDE1OCxcbiAgICAgIDEzMSxcbiAgICAgIDE3MixcbiAgICAgIDU1LFxuICAgICAgMTksXG4gICAgICAyMzgsXG4gICAgICA0MyxcbiAgICAgIDE5OCxcbiAgICAgIDExNCxcbiAgICAgIDE0MixcbiAgICAgIDE2OSxcbiAgICAgIDEzMCxcbiAgICAgIDI0M1xuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25cIjoge30sXG4gIFwicGFpcmluZ0NvZGVcIjogXCJXMlpBV1lKRlwiLFxuICBcIm1lXCI6IHtcbiAgICBcImlkXCI6IFwiMjYzNzE5OTI5ODU5OjgwQHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJsaWRcIjogXCI1NjgyMjY4NTc4NjI4Nzo4MEBsaWRcIlxuICB9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNNdk12YWNHRU5MSzhyb0dHQmtnQUNnQVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcIlhFTzNUc1h1djNzTkV4c0gvZHc4ZWVJZ3BuRmJyc2hMcGFrN3lMZGVuRzQ9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwiRlNzVzRNTlBWWkFILzdwdzN2bHhNaDJJbnhLQzJrSURRMHpaL2xQVFlnWFlLQlc4RnlSWWxreXFtRitadmhtNyt1ZmREWVR1ZW1MR01kSFdORHpnQnc9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwiamRSSVNFNVcyQW9UV2kwSjZsR2JpS2x2UHJ0bERLVVFNNUxCMGpWd2trYzAvQVlsbm9tMklhTjZKekkxNFJaV3J2WGNzeHpNMThEdHc5c0hqakpnalE9PVwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiMjYzNzE5OTI5ODU5OjgwQHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgOTIsXG4gICAgICAgICAgNjcsXG4gICAgICAgICAgMTgzLFxuICAgICAgICAgIDc4LFxuICAgICAgICAgIDE5NyxcbiAgICAgICAgICAyMzgsXG4gICAgICAgICAgMTkxLFxuICAgICAgICAgIDEyMyxcbiAgICAgICAgICAxMyxcbiAgICAgICAgICAxOSxcbiAgICAgICAgICAyNyxcbiAgICAgICAgICA3LFxuICAgICAgICAgIDI1MyxcbiAgICAgICAgICAyMjAsXG4gICAgICAgICAgNjAsXG4gICAgICAgICAgMTIxLFxuICAgICAgICAgIDIyNixcbiAgICAgICAgICAzMixcbiAgICAgICAgICAxNjYsXG4gICAgICAgICAgMTEzLFxuICAgICAgICAgIDkxLFxuICAgICAgICAgIDE3NCxcbiAgICAgICAgICAyMDAsXG4gICAgICAgICAgNzUsXG4gICAgICAgICAgMTY1LFxuICAgICAgICAgIDE2OSxcbiAgICAgICAgICA1OSxcbiAgICAgICAgICAyMDAsXG4gICAgICAgICAgMTgzLFxuICAgICAgICAgIDk0LFxuICAgICAgICAgIDE1NixcbiAgICAgICAgICAxMTBcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcImFuZHJvaWRcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTczNDEyNDg4NyxcbiAgXCJteUFwcFN0YXRlS2V5SWRcIjogXCJBQUFBQUZ3MFwiXG59IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBRncwLmpzb24iOiAie1wia2V5RGF0YVwiOlwiWWo1NmdrY1R3WWw1a3NYVjQ2UVUwU1IrNlR5bkZhNEJycVlWTERqMVhMaz1cIixcImZpbmdlcnByaW50XCI6e1wicmF3SWRcIjoxNjkzNDEwODkxLFwiY3VycmVudEluZGV4XCI6MTQsXCJkZXZpY2VJbmRleGVzXCI6WzAsNCw5LDExXX0sXCJ0aW1lc3RhbXBcIjpcIjE3MzI1MzU1NjExNDFcIn0iCn0="  // PUT your SESSION_ID 


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
