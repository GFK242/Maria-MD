const fs = require('fs');
const chalk = require('chalk');
require('dotenv').config();

//contact details
global.ownernumber = [ process.env.OWNER_NUMBER || "+242044363224"],
global.ownername = process.env.OWNER_NAME || "—͟͟͞͞𖣘𝕲𝕱𝕶 𝕶𝖎𝖑𝖑𝖊𝖗 1𝖘𝖙 𝕱𝖎𝖗𝖘𝖙༒",
global.ytname = "YT: ꧁☠︎𝕾𝖚𝖗𝖕𝖗𝖎𝖘𝖊 𝕸𝖔𝖙𝖍𝖊𝖗𝖋𝖚𝖈𝖐𝖊𝖗 ꧂.inc"
global.socialm = "GitHub: GFK242"
global.location = "Congo"

global.botname = process.env.BOTNAME || "𝕲𝕱𝕶-𝕳𝕺𝕸𝕰",//name of the bot

//sticker details
global.stickername = process.env.STICKER || "—͟͟͞͞𖣘𝕲𝕱𝕶 𝕶𝖎𝖑𝖑𝖊𝖗 1𝖘𝖙 𝕱𝖎𝖗𝖘𝖙༒",
global.packname = 'Sticker By'
global.author = process.env.AUTHOR || "—͟͟͞͞𖣘𝕲𝕱𝕶 𝕶𝖎𝖑𝖑𝖊𝖗 1𝖘𝖙 𝕱𝖎𝖗𝖘𝖙༒",
//console view/theme
global.themeemoji = '🎮'
global.wm = "—͟͟͞͞𖣘𝕲𝕱𝕶 𝕶𝖎𝖑𝖑𝖊𝖗 1𝖘𝖙 𝕱𝖎𝖗𝖘𝖙༒ botz inc."

//theme link
global.link = 'https://whatsapp.com/dl/code=xGILr6PjmU'

//custom prefix
global.prefa = process.env.PREFIX || ".",

//false=disable and true=enable
global.welcome = process.env.WELCOME || "false", //auto welcome
global.autoRecording = false //auto recording
global.autoTyping = false //auto typing
global.autorecordtype = false //auto typing + recording
global.autoread = false //auto read messages
global.autobio = false //auto update bio
global.anti212 = true //auto block +212
global.autoread_status = false //auto view status/story



//reply messages
global.mess = {
    done: '🍭 *Here you go, what you want* ',
    prem: '🍭 *this feature is reserved for premium users only*',
    admin: '🍭 *this feature is reserved for admins only*',
    botAdmin: '🍭 *this feature can only be used when the bot is a group admin* ',
    owner: '🍭 *sorry!,ut this is for me*',
    group: '🍭 *HI!!! everybody*',
    private: '🍭 *what is said here is strictly private *',
    wait: '🍭 *Im in  the game, just wait* ',    
    error: '🍭 *oups! sorry!*',
}what is said here is strictly private 

module.exports = {
ownernumber: global.ownernumber,
ownername: global.ownername,
sessionId: process.env.id,
AUTO_BLOCK : process.env.PM_BLOCKER,
STATUS_SAVER : "true",
ANTI_BOT:"true",
}


global.picture = fs.readFileSync('./Gallery/picture.jpg')

let file = require.resolve(__filename)
fs.watchFile(file, () => {
    fs.unwatchFile(file)
    console.log(chalk.redBright(`Update'${__filename}'`))
    delete require.cache[file]
    require(file)
})
