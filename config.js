//#ENJOY
const fs = require("fs-extra");
if (fs.existsSync(".env"))
  require("dotenv").config({ path: __dirname + "/.env" });
global.audio = "";
global.video = "";
global.port = process.env.PORT;
global.appUrl = process.env.APP_URL || "";
global.email = "losrios755@gmail.com";
global.location = "Njombe,Tanzania.";
global.mongodb = process.env.MONGODB_URI || "";
global.allowJids = process.env.ALLOW_JID || "null";
global.blockJids = process.env.BLOCK_JID || "null";
global.DATABASE_URL = process.env.DATABASE_URL || "";
global.timezone = process.env.TZ || process.env.TIME_ZONE || "Africa/Dar es salaam";
global.github = process.env.GITHUB || "https://github.com/Kingjux/Venocyber-md";
global.gurl = process.env.GURL || "https://whatsapp.com/channel/0029VaYauR9ISTkHTj4xvi1l";
global.website = process.env.GURL || "https://whatsapp.com/channel/0029VaYauR9ISTkHTj4xvi1l";
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://telegra.ph/file/12b0fb245e6b8ba4bf718.jpg";
global.devs = "255625774543";
global.sudo = process.env.SUDO || "255625774543";
global.owner = process.env.OWNER_NUMBER || "255625774543";
global.style = process.env.STYLE || "3";
global.gdbye = process.env.GOODBYE || "false";
global.wlcm = process.env.WELCOME || "false";
global.warncount = process.env.WARN_COUNT || 3;
global.disablepm = process.env.DISABLE_PM || "false";
global.disablegroup = process.env.DISABLE_GROUPS || "false",
global.MsgsInLog = process.env.MSGS_IN_LOG || "true";
global.userImages = process.env.USER_IMAGES || "";
global.waPresence = process.env.WAPRESENCE || "online";
global.readcmds = process.env.READ_COMMAND || "false";
global.readmessage = process.env.READ_MESSAGE || "false";
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "";
global.read_status = process.env.AUTO_READ_STATUS || "true";
global.save_status = process.env.AUTO_SAVE_STATUS || "false";
global.save_status_from = process.env.SAVE_STATUS_FROM || "";
global.read_status_from = process.env.READ_STATUS_FROM || "";

global.api_smd = "https://api-smd-1.vercel.app";
global.scan = "https://rb.gy/nl69nj";

global.SESSION_ID =
  process.env.SESSION_ID ||
  "eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoid0Rzem0wRS90QlpERmZtOXNTRUkvOVUyMk55RWR4LzVSMThZL3dMb3NrVT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiTno5Tms5Z2p1Zm5oOWNWTThwcHRUa0pYbExPb0lBQ1Z6R2FIenl6bkpRWT0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJnTW1QdyszK0VUTGMxYU1md2k5UGZOVk9COUVJSHJoSXhBbnV0S3ZJSDJJPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJVTDJIbG02VmlVemFGV1lvSXJUYk10RnAxVXFmN3hVTm0vaWRpTlp0MlY4PSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImNGemw4Y1c4Z0o0WlN5OE5qaFcvdGYxaXZRZXh1NkhsaVRycDJOSEZ6MWM9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6InNPNW5DVXJkUUhDdnJZWXE5TkxKQVVPZTFDQ3J2bkMyQW9mNDhKQVF1ekk9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiOEwrUEw3UHo5RmlNOTNEWFg5UUhvT3Fhcno4SHRJVmM4S3hTZm9ZNEtVUT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiWXlHZk9YdGM1d243aU9oRXBBanRZbW9sSUdqL3hsZ090STkxYzVuZS9RVT0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IncyWU9hc3lhWG0yTDhKa3J0czdiUUtVQmtSQ0JrTStrV1V6MXZmWjJGLys4bmlVUHRZVUp5TzcrMmYrWm1zU1NUWG1wVmpEVi8wamd2RC9Xa3Nuc0RnPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MTY1LCJhZHZTZWNyZXRLZXkiOiIzQUYrMXM2L2s5S0czWnRsNFQweUdFeGJJNHk0d1hTeVdKTjRjT1h5TzhJPSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W10sIm5leHRQcmVLZXlJZCI6MzEsImZpcnN0VW51cGxvYWRlZFByZUtleUlkIjozMSwiYWNjb3VudFN5bmNDb3VudGVyIjowLCJhY2NvdW50U2V0dGluZ3MiOnsidW5hcmNoaXZlQ2hhdHMiOmZhbHNlfSwiZGV2aWNlSWQiOiJDS1ExbG9pZ1J3T1dNblRTdWRkSEtRIiwicGhvbmVJZCI6IjZiNmNiMWMwLTc4YTUtNDFlYS1hOWExLTgyNGNkZDFiM2Q3MSIsImlkZW50aXR5SWQiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJTcUtrR0h2NGxYamVqOHJEd3Z5QWV5ejVUSE09In0sInJlZ2lzdGVyZWQiOnRydWUsImJhY2t1cFRva2VuIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiZXhhRFdkWGNFZnpZckRqbTZaaDJ0a1pOOFVRPSJ9LCJyZWdpc3RyYXRpb24iOnt9LCJwYWlyaW5nQ29kZSI6IlBMQkpWS1BEIiwibWUiOnsiaWQiOiI5MjMzMjQyNTU1MTE6MjNAcy53aGF0c2FwcC5uZXQifSwiYWNjb3VudCI6eyJkZXRhaWxzIjoiQ1BXRms5Y0dFTXEzbGJVR0dBRWdBQ2dBIiwiYWNjb3VudFNpZ25hdHVyZUtleSI6IkN4MGNqc016aWdWZmQwSTJIb2p2OWIwWXNvMXVROXNzOFNNU2syQmcxQzg9IiwiYWNjb3VudFNpZ25hdHVyZSI6ImFoUkNOU0hxd3VRekxpQ1BiYzJETXJhSFdmdHRBeW9qdVlWZTdrUEo2ODgyTTRzWTh0NFovQWtpQTFwSGliQUZVMlJYUndabll2c0NoVTNmNmJiTUJnPT0iLCJkZXZpY2VTaWduYXR1cmUiOiJ3UkowREw1MDUva08xTEdYVFF1UXZ5YjBpYlJGRjdsWXNxY2xNNlBpSy9kbVducUZMRzBPNGdQVFpDUUdNbDNVMU5ydk03OG90dmlScFJlV2hvMXhEdz09In0sInNpZ25hbElkZW50aXRpZXMiOlt7ImlkZW50aWZpZXIiOnsibmFtZSI6IjkyMzMyNDI1NTUxMToyM0BzLndoYXRzYXBwLm5ldCIsImRldmljZUlkIjowfSwiaWRlbnRpZmllcktleSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkJRc2RISTdETTRvRlgzZENOaDZJNy9XOUdMS05ia1BiTFBFakVwTmdZTlF2In19XSwicGxhdGZvcm0iOiJhbmRyb2lkIiwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wIjoxNzIyMTEyOTgyLCJteUFwcFN0YXRlS2V5SWQiOiJBQUFBQUdndyJ9"
module.exports = {
  menu: process.env.MENU || "",
  HANDLERS: process.env.PREFIX || ".",
  BRANCH: process.env.BRANCH || "main",
  VERSION: process.env.VERSION || "1.0.0",
  caption: process.env.CAPTION || "𝐅𝐈𝐋𝐄-𝐆𝐄𝐍𝐄𝐑𝐀𝐓𝐄𝐃-𝐁𝐘-𝐕𝐄𝐍𝐎𝐂𝐘𝐁𝐄𝐑-𝐌𝐃 ╠════ need support then ☞ https://rb.gy/izabex ═════╣",
  author: process.env.PACK_AUTHER || "VENOCYBER",
  packname: process.env.PACK_NAME || "♥️",
  botname: process.env.BOT_NAME || "VENOCYBER-𝐌𝐃",
  ownername: process.env.OWNER_NAME || "VENOCYBER",
  errorChat: process.env.ERROR_CHAT || "",
  KOYEB_API: process.env.KOYEB_API || "false",
  REMOVE_BG_KEY: process.env.REMOVE_BG_KEY || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME: process.env.HEROKU_APP_NAME || "",
  antilink_values: process.env.ANTILINK_VALUES || "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,
  aitts_Voice_Id: process.env.AITTS_ID || "37",
  ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY || "",
  WORKTYPE: process.env.WORKTYPE || process.env.MODE || "public",
  LANG: (process.env.THEME || "VENOCYBER").toUpperCase(),
};
global.rank = "updated";
global.isMongodb = false;
let file = require.resolve(__filename);
fs.watchFile(file, () => {
  fs.unwatchFile(file);
  console.log(`Update'${__filename}'`);
  delete require.cache[file];
  require(file);
});
