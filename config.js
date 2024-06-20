const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || ""
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/tboy-t/Suhail-Md";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://github.com/SuhailTechInfo/Suhail-Md/blob/main/lib/assets/suhail.jpg?raw=true" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ" 


global.devs = "923184474176" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "2349130371354";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "" // "text" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_13_24_06_20_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTI4LFxuICAgICAgICA3MCxcbiAgICAgICAgMjYsXG4gICAgICAgIDIzMCxcbiAgICAgICAgNjQsXG4gICAgICAgIDM4LFxuICAgICAgICAyMjQsXG4gICAgICAgIDEwNCxcbiAgICAgICAgMjQwLFxuICAgICAgICAxMjgsXG4gICAgICAgIDE2NixcbiAgICAgICAgMTQ3LFxuICAgICAgICAyMDgsXG4gICAgICAgIDE0MixcbiAgICAgICAgMjI4LFxuICAgICAgICA4MSxcbiAgICAgICAgOTUsXG4gICAgICAgIDg2LFxuICAgICAgICAxMjEsXG4gICAgICAgIDE1MCxcbiAgICAgICAgMTUxLFxuICAgICAgICA1MCxcbiAgICAgICAgMjE2LFxuICAgICAgICAyMDUsXG4gICAgICAgIDIyNCxcbiAgICAgICAgMzIsXG4gICAgICAgIDEwMCxcbiAgICAgICAgMjA5LFxuICAgICAgICA5NixcbiAgICAgICAgMjM2LFxuICAgICAgICAzMCxcbiAgICAgICAgNzhcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTM4LFxuICAgICAgICAxMjcsXG4gICAgICAgIDIzMyxcbiAgICAgICAgMTA1LFxuICAgICAgICAxMjQsXG4gICAgICAgIDEyNCxcbiAgICAgICAgODYsXG4gICAgICAgIDEzNyxcbiAgICAgICAgMjM0LFxuICAgICAgICAxMDgsXG4gICAgICAgIDIyOSxcbiAgICAgICAgOTEsXG4gICAgICAgIDc2LFxuICAgICAgICAxMDMsXG4gICAgICAgIDk4LFxuICAgICAgICA4MSxcbiAgICAgICAgMixcbiAgICAgICAgMTczLFxuICAgICAgICAxMzgsXG4gICAgICAgIDg3LFxuICAgICAgICAzMSxcbiAgICAgICAgMjUxLFxuICAgICAgICAzNyxcbiAgICAgICAgMjUzLFxuICAgICAgICAxMzYsXG4gICAgICAgIDksXG4gICAgICAgIDIxOCxcbiAgICAgICAgNSxcbiAgICAgICAgNjksXG4gICAgICAgIDE1MixcbiAgICAgICAgMjMyLFxuICAgICAgICA5OFxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTYsXG4gICAgICAgIDQ1LFxuICAgICAgICA3MyxcbiAgICAgICAgNTIsXG4gICAgICAgIDIzNixcbiAgICAgICAgMTcsXG4gICAgICAgIDEwOCxcbiAgICAgICAgOCxcbiAgICAgICAgMjQ0LFxuICAgICAgICAxMzAsXG4gICAgICAgIDQxLFxuICAgICAgICAxMzMsXG4gICAgICAgIDUxLFxuICAgICAgICAxMzksXG4gICAgICAgIDM1LFxuICAgICAgICAyOSxcbiAgICAgICAgODEsXG4gICAgICAgIDIwOSxcbiAgICAgICAgMjA3LFxuICAgICAgICA0OCxcbiAgICAgICAgMjEwLFxuICAgICAgICA2NSxcbiAgICAgICAgMjAzLFxuICAgICAgICAyMzAsXG4gICAgICAgIDE5MyxcbiAgICAgICAgMjQ2LFxuICAgICAgICAxOSxcbiAgICAgICAgMjI3LFxuICAgICAgICA2NCxcbiAgICAgICAgMTU1LFxuICAgICAgICAxODksXG4gICAgICAgIDgxXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE0MixcbiAgICAgICAgMjEwLFxuICAgICAgICA0MixcbiAgICAgICAgMjIyLFxuICAgICAgICAxLFxuICAgICAgICAxNzEsXG4gICAgICAgIDE0OCxcbiAgICAgICAgMjU1LFxuICAgICAgICAxOTYsXG4gICAgICAgIDk3LFxuICAgICAgICAxMDMsXG4gICAgICAgIDI0OCxcbiAgICAgICAgMjEwLFxuICAgICAgICAyMTYsXG4gICAgICAgIDUzLFxuICAgICAgICAyMjMsXG4gICAgICAgIDEwLFxuICAgICAgICAxMjYsXG4gICAgICAgIDIxNCxcbiAgICAgICAgMjEzLFxuICAgICAgICAxNDUsXG4gICAgICAgIDEyNyxcbiAgICAgICAgMTcsXG4gICAgICAgIDEsXG4gICAgICAgIDEyOCxcbiAgICAgICAgNjUsXG4gICAgICAgIDg2LFxuICAgICAgICA3OSxcbiAgICAgICAgNTMsXG4gICAgICAgIDEzOSxcbiAgICAgICAgMjI5LFxuICAgICAgICAxNlxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNDAsXG4gICAgICAgIDk4LFxuICAgICAgICA3NSxcbiAgICAgICAgMTg2LFxuICAgICAgICAzOSxcbiAgICAgICAgMTY0LFxuICAgICAgICAyMjAsXG4gICAgICAgIDE5NyxcbiAgICAgICAgMTE3LFxuICAgICAgICAyOSxcbiAgICAgICAgMjI0LFxuICAgICAgICAxMzgsXG4gICAgICAgIDEwNSxcbiAgICAgICAgMTEwLFxuICAgICAgICA2OCxcbiAgICAgICAgMjExLFxuICAgICAgICAxOTIsXG4gICAgICAgIDE0MSxcbiAgICAgICAgOSxcbiAgICAgICAgNzcsXG4gICAgICAgIDg5LFxuICAgICAgICA5MCxcbiAgICAgICAgMjExLFxuICAgICAgICAxMjQsXG4gICAgICAgIDIyNCxcbiAgICAgICAgMjM3LFxuICAgICAgICAxNDYsXG4gICAgICAgIDIzMCxcbiAgICAgICAgODYsXG4gICAgICAgIDE5NyxcbiAgICAgICAgMjAxLFxuICAgICAgICAxMjRcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTU3LFxuICAgICAgICAxOTEsXG4gICAgICAgIDYxLFxuICAgICAgICAyMTEsXG4gICAgICAgIDExNixcbiAgICAgICAgMjM3LFxuICAgICAgICAxMDIsXG4gICAgICAgIDcwLFxuICAgICAgICAxNDAsXG4gICAgICAgIDIyNixcbiAgICAgICAgMjQ0LFxuICAgICAgICAxNjYsXG4gICAgICAgIDI1MixcbiAgICAgICAgMjAyLFxuICAgICAgICA4NCxcbiAgICAgICAgMTk5LFxuICAgICAgICAzOCxcbiAgICAgICAgMTU4LFxuICAgICAgICA4OSxcbiAgICAgICAgMzcsXG4gICAgICAgIDk5LFxuICAgICAgICAyNTQsXG4gICAgICAgIDIxLFxuICAgICAgICAxNDYsXG4gICAgICAgIDE4OSxcbiAgICAgICAgMTg5LFxuICAgICAgICAyNDcsXG4gICAgICAgIDIyNixcbiAgICAgICAgMjAyLFxuICAgICAgICAxNTYsXG4gICAgICAgIDEyOSxcbiAgICAgICAgOTRcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkUHJlS2V5XCI6IHtcbiAgICBcImtleVBhaXJcIjoge1xuICAgICAgXCJwcml2YXRlXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMTUyLFxuICAgICAgICAgIDg5LFxuICAgICAgICAgIDQwLFxuICAgICAgICAgIDE3LFxuICAgICAgICAgIDE4NSxcbiAgICAgICAgICAxMjgsXG4gICAgICAgICAgMjEzLFxuICAgICAgICAgIDE1NyxcbiAgICAgICAgICAzLFxuICAgICAgICAgIDQ2LFxuICAgICAgICAgIDEwNCxcbiAgICAgICAgICA1OSxcbiAgICAgICAgICAyNCxcbiAgICAgICAgICAxNDYsXG4gICAgICAgICAgMjQsXG4gICAgICAgICAgMTU3LFxuICAgICAgICAgIDI0OSxcbiAgICAgICAgICA4MyxcbiAgICAgICAgICAzMSxcbiAgICAgICAgICAyMjYsXG4gICAgICAgICAgMTM1LFxuICAgICAgICAgIDE0NSxcbiAgICAgICAgICAxMixcbiAgICAgICAgICAyMjIsXG4gICAgICAgICAgMjM3LFxuICAgICAgICAgIDIxOSxcbiAgICAgICAgICAzNyxcbiAgICAgICAgICAxOTgsXG4gICAgICAgICAgMTIwLFxuICAgICAgICAgIDE5NixcbiAgICAgICAgICAyMDQsXG4gICAgICAgICAgMTE2XG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInB1YmxpY1wiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDg2LFxuICAgICAgICAgIDkzLFxuICAgICAgICAgIDI0OSxcbiAgICAgICAgICAxMTQsXG4gICAgICAgICAgNyxcbiAgICAgICAgICAxNjksXG4gICAgICAgICAgMTYxLFxuICAgICAgICAgIDExMSxcbiAgICAgICAgICAxMjYsXG4gICAgICAgICAgMjI1LFxuICAgICAgICAgIDkxLFxuICAgICAgICAgIDE0NixcbiAgICAgICAgICA1LFxuICAgICAgICAgIDE0NyxcbiAgICAgICAgICAyLFxuICAgICAgICAgIDI0NCxcbiAgICAgICAgICAxNTQsXG4gICAgICAgICAgMTQ4LFxuICAgICAgICAgIDE1MyxcbiAgICAgICAgICAxMixcbiAgICAgICAgICAyMCxcbiAgICAgICAgICAxNzUsXG4gICAgICAgICAgNzMsXG4gICAgICAgICAgMjM5LFxuICAgICAgICAgIDE2MSxcbiAgICAgICAgICA0NCxcbiAgICAgICAgICAxMDUsXG4gICAgICAgICAgMjI4LFxuICAgICAgICAgIDc1LFxuICAgICAgICAgIDIwOSxcbiAgICAgICAgICAxNSxcbiAgICAgICAgICA3M1xuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDg0LFxuICAgICAgICAyMjgsXG4gICAgICAgIDEwMCxcbiAgICAgICAgMjA1LFxuICAgICAgICAxMDksXG4gICAgICAgIDE2MCxcbiAgICAgICAgMTUsXG4gICAgICAgIDE0MixcbiAgICAgICAgMTc2LFxuICAgICAgICAxNjksXG4gICAgICAgIDk2LFxuICAgICAgICAxMjksXG4gICAgICAgIDIxMSxcbiAgICAgICAgNTMsXG4gICAgICAgIDE2NCxcbiAgICAgICAgMjI5LFxuICAgICAgICAxMjAsXG4gICAgICAgIDE0NyxcbiAgICAgICAgNTAsXG4gICAgICAgIDU2LFxuICAgICAgICA2LFxuICAgICAgICAxNzgsXG4gICAgICAgIDcxLFxuICAgICAgICA0NSxcbiAgICAgICAgMTkyLFxuICAgICAgICAzMSxcbiAgICAgICAgMTUxLFxuICAgICAgICAyMzUsXG4gICAgICAgIDE0NSxcbiAgICAgICAgNDYsXG4gICAgICAgIDEwMyxcbiAgICAgICAgMjUwLFxuICAgICAgICA5NixcbiAgICAgICAgMTgsXG4gICAgICAgIDE1LFxuICAgICAgICAxMTEsXG4gICAgICAgIDQwLFxuICAgICAgICA2MCxcbiAgICAgICAgMTQ1LFxuICAgICAgICAxOTgsXG4gICAgICAgIDEzNCxcbiAgICAgICAgMTMyLFxuICAgICAgICA5OSxcbiAgICAgICAgMTQ3LFxuICAgICAgICAyMTgsXG4gICAgICAgIDgwLFxuICAgICAgICA3MyxcbiAgICAgICAgMjA1LFxuICAgICAgICA5NixcbiAgICAgICAgMjA0LFxuICAgICAgICAxOTcsXG4gICAgICAgIDE3OSxcbiAgICAgICAgMTkwLFxuICAgICAgICAyMjUsXG4gICAgICAgIDQsXG4gICAgICAgIDk1LFxuICAgICAgICA3MixcbiAgICAgICAgNDAsXG4gICAgICAgIDE3NyxcbiAgICAgICAgMTE3LFxuICAgICAgICA0MSxcbiAgICAgICAgODEsXG4gICAgICAgIDE1NCxcbiAgICAgICAgMTFcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDg1LFxuICBcImFkdlNlY3JldEtleVwiOiBcImpZMWZrZ2syMEVlSU90RHVKUkQ4OUdFWElSWWtJMHJnRHRDWVd3S2lWSHc9XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtdLFxuICBcIm5leHRQcmVLZXlJZFwiOiAzMSxcbiAgXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOiAzMSxcbiAgXCJhY2NvdW50U3luY0NvdW50ZXJcIjogMCxcbiAgXCJhY2NvdW50U2V0dGluZ3NcIjoge1xuICAgIFwidW5hcmNoaXZlQ2hhdHNcIjogZmFsc2VcbiAgfSxcbiAgXCJkZXZpY2VJZFwiOiBcIlgwSWwyVnMzVHVPU2dxWU5WYkwwYWdcIixcbiAgXCJwaG9uZUlkXCI6IFwiMmM4MjRhMTYtNjk0MC00OGQ3LWFhMTAtMDk3NzQ0ZWExNmJiXCIsXG4gIFwiaWRlbnRpdHlJZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDE0NyxcbiAgICAgIDI1NSxcbiAgICAgIDI0NSxcbiAgICAgIDEzNyxcbiAgICAgIDU0LFxuICAgICAgMjA3LFxuICAgICAgMjQzLFxuICAgICAgMTUyLFxuICAgICAgMjA5LFxuICAgICAgMTM4LFxuICAgICAgMTE0LFxuICAgICAgMjQ0LFxuICAgICAgMTc0LFxuICAgICAgNjUsXG4gICAgICA5OSxcbiAgICAgIDYyLFxuICAgICAgMjEzLFxuICAgICAgNTksXG4gICAgICAxODQsXG4gICAgICA5NFxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IHRydWUsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICA2LFxuICAgICAgNjAsXG4gICAgICAwLFxuICAgICAgMTUsXG4gICAgICAyMDMsXG4gICAgICAxMDksXG4gICAgICAzNCxcbiAgICAgIDIyNixcbiAgICAgIDYyLFxuICAgICAgMjQ5LFxuICAgICAgNTQsXG4gICAgICAzNixcbiAgICAgIDM5LFxuICAgICAgMTkxLFxuICAgICAgMzksXG4gICAgICAxMjksXG4gICAgICAxNjUsXG4gICAgICAyMTgsXG4gICAgICAxNSxcbiAgICAgIDE1OFxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25cIjoge30sXG4gIFwicGFpcmluZ0NvZGVcIjogXCIxREI4QzY4S1wiLFxuICBcIm1lXCI6IHtcbiAgICBcImlkXCI6IFwiMjM0OTEzMDM3MTM1NDo0QHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJsaWRcIjogXCIxMDY1NDU2NzMxNzUxODU6NEBsaWRcIlxuICB9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNLSGUxT3dIRUkvYjBMTUdHQU1nQUNnQVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcImhGd0JMMkFjaFpBcmYzU3JGUDNCNVpEZWQ3aGhXRnQya3Vsd2lNUzBUMWc9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwid3ZRS1RtdnpjWnE1QVI1MWcrNEExaFRkTDZJRFowdkdSZFlWWEVsUGJ1SER3VTg0R1VhZkxocGxEYThOVllaem9OYlBuaHRnejdTb2pNeU1MTUNCQXc9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwiaXpXNTRLZzU2Q0l0ZXZocjNWL3JaQytkWVJjU2U4U25sTThiMnVWSDhVTDMrR2YzR2tQSG5lLzExb0xkb1h0L1pLSHp4VldpL2FxbVRndlUwUDdPRFE9PVwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiMjM0OTEzMDM3MTM1NDo0QHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgMTMyLFxuICAgICAgICAgIDkyLFxuICAgICAgICAgIDEsXG4gICAgICAgICAgNDcsXG4gICAgICAgICAgOTYsXG4gICAgICAgICAgMjgsXG4gICAgICAgICAgMTMzLFxuICAgICAgICAgIDE0NCxcbiAgICAgICAgICA0MyxcbiAgICAgICAgICAxMjcsXG4gICAgICAgICAgMTE2LFxuICAgICAgICAgIDE3MSxcbiAgICAgICAgICAyMCxcbiAgICAgICAgICAyNTMsXG4gICAgICAgICAgMTkzLFxuICAgICAgICAgIDIyOSxcbiAgICAgICAgICAxNDQsXG4gICAgICAgICAgMjIyLFxuICAgICAgICAgIDExOSxcbiAgICAgICAgICAxODQsXG4gICAgICAgICAgOTcsXG4gICAgICAgICAgODgsXG4gICAgICAgICAgOTEsXG4gICAgICAgICAgMTE4LFxuICAgICAgICAgIDE0NixcbiAgICAgICAgICAyMzMsXG4gICAgICAgICAgMTEyLFxuICAgICAgICAgIDEzNixcbiAgICAgICAgICAxOTYsXG4gICAgICAgICAgMTgwLFxuICAgICAgICAgIDc5LFxuICAgICAgICAgIDg4XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJhbmRyb2lkXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3MTg4ODk4NzVcbn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktdW5kZWZpbmVkLmpzb24iOiB7fQp9"  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ",",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.8",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "ꪻ᥇ꪮꪗ™",
  packname: process.env.PACK_NAME || "†",
  botname : process.env.BOT_NAME  || "ꪻ᥇ꪮꪗ™",
  ownername:process.env.OWNER_NAME|| "ꪻ᥇ꪮꪗ™",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "eM8Wi4GuwnipWihNVFe65rAJ",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "601a300339f538ac289f4f731cc4815d";
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
