//BASE BY SUNEO XZ
//NB: JANGAN HPUS TQTO YA BANG:)
//SAYA BUKAN MASTAH BANG:)
//SAYA HANYA COPASTER YANG BELAJAR BUAT BASE:)
const
	{
		WAConnection,
		MessageType,
		Presence,
		MessageOptions,
		Mimetype,
		WALocationMessage,
		WA_MESSAGE_STUB_TYPES,
		WA_DEFAULT_EPHEMERAL,
		ReconnectMode,
		ProxyAgent,
		GroupSettingChange,
		waChatKey,
		mentionedJid,
		processTime,
	} = require("@adiwajshing/baileys")
const simple = require('./lib/simple.js')
const hx = require('hxz-api')
const qrcode = require("qrcode-terminal")
const moment = require("moment-timezone")
const speed = require('performance-now')
const request = require('request');
const { spawn, exec, execSync } = require("child_process")
const fs = require("fs")
const util = require('util');
const axios = require("axios")
const ffmpeg = require('fluent-ffmpeg')
const { EmojiAPI } = require("emoji-api");
const ig = require('insta-fetcher')
const emoji = new EmojiAPI()
const fetch = require('node-fetch');
const phoneNum = require('awesome-phonenumber')
const gis = require('g-i-s');
const got = require("got");
const imageToBase64 = require('image-to-base64');
const ID3Writer = require('browser-id3-writer');		
const brainly = require('brainly-scraper')
//////const yts = require( 'yt-search')
const ms = require('parse-ms')
const toMs = require('ms')
const { error } = require("qrcode-terminal")
const { getBuffer, h2k, generateMessageID, getGroupAdmins, getRandom, banner, start, info, success, close } = require('./lib/functions')
const { color, bgcolor } = require('./lib/color')
const { fetchJson, getBase64, kyun, createExif } = require('./lib/fetcher')
const { yta, ytv, igdl, upload, formatDate } = require('./lib/ytdl')
const { webp2mp4File} = require('./lib/webp2mp4')
const time = moment().tz('Asia/Jakarta').format("HH:mm:ss")
const afk = require("./lib/afk");
const voting = JSON.parse(fs.readFileSync('./lib/voting.json'))
const { addVote, delVote } = require('./lib/vote')
const { jadibot, stopjadibot, listjadibot } = require('./lib/jadibot')
let _scommand = JSON.parse(fs.readFileSync("./database/scommand.json"))
const setting = JSON.parse(fs.readFileSync('./setting.json'))
let antilink = JSON.parse(fs.readFileSync('./database/group/antilink.json'));

let welkom = JSON.parse(fs.readFileSync('./database/group/welcome.json'))
let _afk = JSON.parse(fs.readFileSync('./database/user/afk.json'));
/***************** BATAS COEG **********/
ownerNumber = ["6281555807465@s.whatsapp.net"]// EDIT JADI NO LU
shp = '✘⃝🛠'//*KALO EDIT KETIK .setlogo ya
hit_today = []
ky_ttt = []
banChats = false
publik = false
menuall = false
const a = '```'
tttawal= ["0️⃣","1️⃣","2️⃣","3️⃣","4️⃣","5️⃣","6️⃣","7️⃣","8️⃣","9️⃣"]
// apikey kalo habis beli tod
lolkey = `Deffbotz`
//-------------------- Batas ---------------------------------

const getCmd = (id) => {
  let position = null;
  Object.keys(_scommand).forEach((i) => {
    if (_scommand[i].id === id) {
      position = i;
    }
  });
  if (position !== null) {
    return _scommand[position].chats;
  }
};  
function parseMention(text = '') {
return [...text.matchAll(/@([0-9]{5,16}|0)/g)].map(v => v[1] + '@s.whatsapp.net')
}
const math = (teks) => {
  return Math.floor(teks)
}
//=================================================//
module.exports = Suneo = async (Suneo, neo) => {
	try {
        if (!neo.hasNewMessage) return
        neo = neo.messages.all()[0]
		if (!neo.message) return
		if (neo.key && neo.key.remoteJid == 'status@broadcast') return
		global.blocked
		global.ky_ttt
        	neo.message = (Object.keys(neo.message)[0] === 'ephemeralMessage') ? neo.message.ephemeralMessage.message : neo.message
        	const content = JSON.stringify(neo.message)
		const from = neo.key.remoteJid
		const { text, extendedText, contact, location, liveLocation, image, video, sticker, document, audio, product } = MessageType
		const time = moment.tz('Asia/Jakarta').format('DD/MM HH:mm:ss')
                const type = Object.keys(neo.message)[0]        
                const cmd = (type === 'conversation' && neo.message.conversation) ? neo.message.conversation : (type == 'imageMessage') && neo.message.imageMessage.caption ? neo.message.imageMessage.caption : (type == 'videoMessage') && neo.message.videoMessage.caption ? neo.message.videoMessage.caption : (type == 'extendedTextMessage') && neo.message.extendedTextMessage.text ? neo.message.extendedTextMessage.text : ''.slice(1).trim().split(/ +/).shift().toLowerCase()
                const prefix = /^[°•π÷×¶∆£¢€¥®™=|~!#$%^&.?/\\©^z+*@,;]/.test(cmd) ? cmd.match(/^[°•π÷×¶∆£¢€¥®™=|~!#$%^&.?/\\©^z+*,;]/gi) : '-'          	
        body = (type === 'conversation' && neo.message.conversation.startsWith(prefix)) ? neo.message.conversation : (type == 'imageMessage') && neo.message[type].caption.startsWith(prefix) ? neo.message[type].caption : (type == 'videoMessage') && neo.message[type].caption.startsWith(prefix) ? neo.message[type].caption : (type == 'extendedTextMessage') && neo.message[type].text.startsWith(prefix) ? neo.message[type].text : (type == 'listResponseMessage') && neo.message[type].singleSelectReply.selectedRowId ? neo.message[type].singleSelectReply.selectedRowId : (type == 'buttonsResponseMessage') && neo.message[type].selectedButtonId ? neo.message[type].selectedButtonId : (type == 'stickerMessage') && (getCmd(neo.message[type].fileSha256.toString('base64')) !== null && getCmd(neo.message[type].fileSha256.toString('base64')) !== undefined) ? getCmd(neo.message[type].fileSha256.toString('base64')) : ""
		budy = (type === 'conversation') ? neo.message.conversation : (type === 'extendedTextMessage') ? neo.message.extendedTextMessage.text : ''
		selectedButton = (type == 'buttonsResponseMessage') ? neo.message.buttonsResponseMessage.selectedButtonId : ''
        responseButton = (type == 'listResponseMessage') ? neo.message.listResponseMessage.title : ''
		button = (type == 'buttonsResponseMessage') ? neo.message.buttonsResponseMessage.selectedDisplayText : ''
		isImage = (type === 'imageMessage')
		const mentionByTag = type == "extendedTextMessage" && neo.message.extendedTextMessage.contextInfo != null ? neo.message.extendedTextMessage.contextInfo.mentionedJid : []
  const mentionByreply = type == "extendedTextMessage" && neo.message.extendedTextMessage.contextInfo != null ? neo.message.extendedTextMessage.contextInfo.participant || "" : ""
		const command = body.slice(1).trim().split(/ +/).shift().toLowerCase()	
		const mention = typeof(mentionByTag) == 'string' ? [mentionByTag] : mentionByTag
  mention != undefined ? mention.push(mentionByreply) : []
	   const mentionUser = mention != undefined ? mention.filter(n => n) : []
	idttt = []
	    players1 = []
	    players2 = []
	    gilir = []
	    for (let t of ky_ttt){
	    idttt.push(t.id)
	    players1.push(t.player1)
	    players2.push(t.player2)
	    gilir.push(t.gilir)
}
  ///////////// const isTTT = isGroup ? idttt.includes(from) : false
		const args = body.trim().split(/ +/).slice(1)
		hit_today.push(command)
		const arg = body.substring(body.indexOf(' ') + 1)
		const ar = args.map((v) => v.toLowerCase())
		const argz = body.trim().split(/ +/).slice(1)
		const isCmd = body.startsWith(prefix) 
        const q = args.join(' ')
		const botNumber = Suneo.user.jid
		const botNumberss = Suneo.user.jid + '@c.us'
		const isGroup = from.endsWith('@g.us')
		let sender = isGroup ? neo.participant : neo.key.remoteJid
		const isTTT = isGroup ? idttt.includes(from) : false
		isPlayer1 = isGroup ? players1.includes(sender) : false
        isPlayer2 = isGroup ? players2.includes(sender) : false
		///////////let sender = isGroup ? neo.participant : neo.key.remoteJid
		// const isSelfNumber = config.NomorSELF
		// const isOwner = sender.id === isSelfNumber
		const totalchat = await Suneo.chats.all()
		const groupMetadata = isGroup ? await Suneo.groupMetadata(from) : ''
		const groupName = isGroup ? groupMetadata.subject : ''
		const groupId = isGroup ? groupMetadata.jid : ''
		const groupMembers = isGroup ? groupMetadata.participants : ''
		const groupDesc = isGroup ? groupMetadata.desc : ''
		const groupOwner = isGroup ? groupMetadata.owner : ''
		const groupAdmins = isGroup ? getGroupAdmins(groupMembers) : ''
		const isBotGroupAdmins = groupAdmins.includes(botNumber) || false
		const isGroupAdmins = groupAdmins.includes(sender) || false
		const isAfkOn = afk.checkAfkUser(sender, _afk)
        const isVote = isGroup ? voting.includes(from) : false
        const isWelkom = isGroup ? welkom.includes(from) : false
        const isAntiLink = isGroup ? antilink.includes(from) : false
        const conts = neo.key.fromMe ? Suneo.user.jid : Suneo.contacts[sender] || { notify: jid.replace(/@.+/, '') }
        const pushname = neo.key.fromMe ? Suneo.user.name : conts.notify || conts.vname || conts.name || '-'
        const isOwner = ownerNumber.includes(sender)
		const isMybot = isOwner || neo.key.fromMe
let d = new Date
let locale = 'en'
let gmt = new Date(0).getTime() - new Date('1 January 1970').getTime()
let weton = ['Pahing', 'Pon','Wage','Kliwon','Legi'][Math.floor(((d * 1) + gmt) / 84600000) % 5]
let week = d.toLocaleDateString(locale, { weekday: 'long' })
let date = d.toLocaleDateString(locale, { day: 'numeric', month: 'long', year: 'numeric' })

        //MESS
		mess = {
			wait: 'Wait A minute...',
			success: 'Berhasil!',
			wrongFormat: 'Format salah, coba liat lagi di menu',
			error: {
				stick: 'bukan sticker itu:v',
				Iv: 'Linknya error:v'
			},
			only: {
				group: 'Khusus grup ngab',
			}
		}
		const isUrl = (url) => {
        return url.match(new RegExp(/https?:\/\/(www\.)?[-a-zA-Z0-9@:%.+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%+.~#?&/=]*)/, 'gi'))
        }

        const listmsg = (from, title, desc, list) => { // ngeread nya pake rowsId, jadi command nya ga keliatan
            let po = Suneo.prepareMessageFromContent(from, {"listMessage": {"title": title,"description": desc,"buttonText": "SELECT","footerText": "_*©SuneoX4·Team*_","listType": "SINGLE_SELECT","sections": list}}, {})
            return Suneo.relayWAMessage(po, {waitForAck: true})
        }
        
        const runtime = function(seconds) {
seconds = Number(seconds);
var d = Math.floor(seconds / (3600 * 24));
var h = Math.floor(seconds % (3600 * 24) / 3600);
var m = Math.floor(seconds % 3600 / 60);
var s = Math.floor(seconds % 60);
var dDisplay = d > 0 ? d + (d == 1 ? " Hari, " : " Hari, ") : "";
var hDisplay = h > 0 ? h + (h == 1 ? " Jam, " : " Jam, ") : "";
var mDisplay = m > 0 ? m + (m == 1 ? " Menit, " : " Menit, ") : "";
var sDisplay = s > 0 ? s + (s == 1 ? " Detik" : " Detik") : "";
return dDisplay + hDisplay + mDisplay + sDisplay;
                }
               
                const fakevo = {
  key: {
    fromMe: false,
    participant: '0@s.whatsapp.net',
    remoteJid: 'status@broadcast'
  },
  message: {
    imageMessage: {
      mimetype: 'image/jpeg',
      caption: 'KirBotz',
      jpegThumbnail: fs.readFileSync('./stik/thumb.jpeg'),
      viewOnce: true
    }
  }
}
        const reply = (teks) => {
            Suneo.sendMessage(from, teks, text, {quoted:ftroli})
        }
        const reply2 = (teks) => {
            Suneo.sendMessage(from, teks, text, {quoted:neo})
        }
        // AFK
if (isGroup) {
  for (let x of mentionUser) {
 if (afk.checkAfkUser(x, _afk)) {
const getId = afk.getAfkId(x, _afk)
const getReason = afk.getAfkReason(getId, _afk)
const getTime = afk.getAfkTime(getId, _afk)
const cptl = `*「 AFK MODE 」*\n
*Sssttt! Orangnya lagi AFK, jangan diganggu!*
➸ *Alasan*  : ${getReason}
➸ *Sejak* : ${getTime}`
mentions(cptl, x, true)
 }}
  if (afk.checkAfkUser(sender, _afk) && !isCmd) {
const getTime = afk.getAfkTime(sender, _afk)
const getReason = afk.getAfkReason(sender, _afk)
const ittung = ms(await Date.now() - getTime)
const pep = `*${pushname}* telah kembali dari AFK! Selamat datang kembali~`
reply2(pep)
_afk.splice(afk.getAfkPosition(sender, _afk), 1)
fs.writeFileSync('./database/user/afk.json', JSON.stringify(_afk))
 }
  } 
  /*====================================================[ GAME ]==============================================================*/                    	 
            const sotoy = ['🍊 : 🍒 : 🍐','🍒 : 🔔 : 🍊','🍇 : 🍇 : 🍇','🍊 : 🍋 : 🔔','🔔 : 🍒 : 🍐','🔔 : 🍒 : 🍊','🍊 : 🍋 : 🔔',		'🍐 : 🍒 : 🍋','🍐 : 🍐 : 🍐','🍊 : 🍒 : 🍒','🔔 : 🔔 : 🍇','🍌 : 🍒 : 🔔','🍐 : 🔔 : 🔔','🍊 : 🍋 : 🍒','🍋 : 🍋 : 🍌','🔔 : 🔔 : 🍇','🔔 : 🍐 : 🍇','🔔 : 🔔 : 🔔','🍒 : 🍒 : 🍒','🍌 : 🍌 : 🍌']
            const sotoy2 = ['🍊 : 🍒 : 🍐','🍒 : 🔔 : 🍊','🍊 : 🍋 : 🔔','🔔 : 🍒 : 🍐','🔔 : 🍒 : 🍊','🍊 : 🍋 : 🔔',		'🍐 : 🍒 : 🍋','🍊 : 🍒 : 🍒','🔔 : 🔔 : 🍇','🍌 : 🍒 : 🔔','🍐 : 🔔 : 🔔','🍊 : 🍋 : 🍒','🍋 : 🍋 : 🍌','🔔 : 🔔 : 🍇','🔔 : 🍐 : 🍇']
            const sotoy1 = ['🍊 : 🍒 : 🍐','🍒 : 🔔 : 🍊','🍊 : 🍋 : 🔔','🔔 : 🍒 : 🍐','🔔 : 🍒 : 🍊','🍊 : 🍋 : 🔔',		'🍐 : 🍒 : 🍋','🍊 : 🍒 : 🍒','🔔 : 🔔 : 🍇','🍌 : 🍒 : 🔔','🍐 : 🔔 : 🔔','🍊 : 🍋 : 🍒','🍋 : 🍋 : 🍌','🔔 : 🔔 : 🍇','🔔 : 🍐 : 🍇']
            const sotoy3 = ['🔔 : 🔔 : 🔔','🍒 : 🍒 : 🍒','🍌 : 🍌 : 🍌']
            const buruh1 = ['🐳','🦈','🐬','🐋','🐟','🐠','🦐','🦑','🦀','🐚']
            const buruh2 = ['🐔','🦃','🐿','🐐','🐏','🐖','🐑','🐎','🐺','🦩']
            const buruh3 = ['🦋','🕷','🐝','🐉','🦆','🦅','🕊','🐧','🐦','🦇']
            const buruh11 = buruh1[Math.floor(Math.random() * (buruh1.length))]
		    const buruh22 = buruh2[Math.floor(Math.random() * (buruh2.length))]
		    const buruh33 = buruh3[Math.floor(Math.random() * (buruh3.length))]
/*====================================================[ ROLE LEVELING ]==============================================================*/                    	  
//Button
const sendButImage = async(id, text1, desc1, gam1, but = [], options = {}) => {
            let kma = gam1
            let mhan = await Suneo.prepareMessage(from, kma, image)
        const buttonMessages = {
            imageMessage: mhan.message.imageMessage,
            contentText: text1,
            footerText: desc1,
            buttons: but,
            headerType: 4
        }
            Suneo.sendMessage(id, buttonMessages, MessageType.buttonsMessage, options)
        }
        const sendButMessage = (id, text1, desc1, but = [], options = {}) => {
const buttonMessage = {
contentText: text1,
footerText: desc1,
buttons: but,
headerType: 1
}
Suneo.sendMessage(id, buttonMessage, MessageType.buttonsMessage, options)
}
const sendButVideo = async(id, text1, desc1, vid1, but = [], options = {}) => {
kma = vid1
mhan = await Suneo.prepareMessage(from, kma, video)
const buttonMessages = {
videoMessage: mhan.message.videoMessage,
contentText: text1,
footerText: desc1,
buttons: but,
headerType: 5
}
Suneo.sendMessage(id, buttonMessages, MessageType.buttonsMessage, options)
}
        const sendMess = (hehe, teks) => {
            Suneo.sendMessage(hehe, teks, text)
        }

        const mentions = (teks, memberr, id) => {
            (id == null || id == undefined || id == false) ? Suneo.sendMessage(from, teks.trim(), extendedText, { contextInfo: { "mentionedJid": memberr } }) : Suneo.sendMessage(from, teks.trim(), extendedText, { quoted: neo, contextInfo: { "mentionedJid": memberr } })
        }

        const fakestatus = (teks) => {
            Suneo.sendMessage(from, teks, text, {
                quoted: {
                    key: {
                        fromMe: false,
                        participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {})
                    },
                    message: {
                        "imageMessage": {
                            "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc",
                            "mimetype": "image/jpeg",
                            "caption": fake,
                            "fileSha256": "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=",
                            "fileLength": "28777",
                            "height": 1080,
                            "width": 1079,
                            "mediaKey": "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=",
                            "fileEncSha256": "sR9D2RS5JSifw49HeBADguI23fWDz1aZu4faWG/CyRY=",
                            "directPath": "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69",
                            "mediaKeyTimestamp": "1610993486",
                            "jpegThumbnail": fs.readFileSync('./stik/thumb.jpeg'),
                            "scansSidecar": "1W0XhfaAcDwc7xh1R8lca6Qg/1bB4naFCSngM2LKO2NoP5RI7K+zLw=="
                        }
                    }
                }
            })
        }
        const fakethumb = (teks, yes) => {
            Suneo.sendMessage(from, teks, image, {thumbnail:fs.readFileSync('./stik/fake.jpeg'),quoted:neo,caption:yes})
        }
        const fakegroup = (teks) => {
            Suneo.sendMessage(from, teks, text, {
                quoted: {
                    key: {
                        fromMe: false,
                        participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "6289523258649-1604595598@g.us" } : {})
                    },
                    message: {
                        "imageMessage": {
                            "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc",
                            "mimetype": "image/jpeg",
                            "caption": fake,
                            "fileSha256": "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=",
                            "fileLength": "28777",
                            "height": 1080,
                            "width": 1079,
                            "mediaKey": "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=",
                            "fileEncSha256": "sR9D2RS5JSifw49HeBADguI23fWDz1aZu4faWG/CyRY=",
                            "directPath": "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69",
                            "mediaKeyTimestamp": "1610993486",
                            "jpegThumbnail": fs.readFileSync('./stik/thumb.jpeg'),
                            "scansSidecar": "1W0XhfaAcDwc7xh1R8lca6Qg/1bB4naFCSngM2LKO2NoP5RI7K+zLw=="
                        }
                    }
                }
            })
        }
        const sendStickerFromUrl = async(to, url) => {
                var names = Date.now() / 10000;
                var download = function (uri, filename, callback) {
                    request.head(uri, function (err, res, body) {
                        request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
                    });
                };
                download(url, './stik' + names + '.png', async function () {
                    console.log('selesai');
                    let filess = './stik' + names + '.png'
                    let asw = './stik' + names + '.webp'
                    exec(`ffmpeg -i ${filess} -vcodec libwebp -filter:v fps=fps=20 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${asw}`, (err) => {
                        let media = fs.readFileSync(asw)
                        Suneo.sendMessage(to, media, MessageType.sticker,{quoted:neo})
                        fs.unlinkSync(filess)
                        fs.unlinkSync(asw)
                    });
                });
            }
            const kickMember = async(id, target = []) => {
           let group = await Suneo.groupMetadata(id)
           let owner = group.owner.replace("c.us", "s.whatsapp.net")
           let me = Suneo.user.jid
           for (i of target) {
           if (!i.includes(me) && !i.includes(owner)) {
           await Suneo.groupRemove(to, [i])
        } else {
           await Suneo.sendMessage(id, "Not Premited!", "conversation")
           break
        }
    }
}
            const sticOwner = (hehe) => {
			ano = fs.readFileSync('./sticker/anime/owner.webp')
			Suneo.sendMessage(hehe, ano, sticker, { quoted: fgi})
		}
		const sticNotAdmin = (hehe) => {
			ano = fs.readFileSync('./sticker/anime/notadmin.webp')
			Suneo.sendMessage(hehe, ano, sticker, { quoted: fgi})
		}
		const sticAdmin = (hehe) => {
			ano = fs.readFileSync('./sticker/anime/admin.webp')
			Suneo.sendMessage(hehe, ano, sticker, { quoted: fgi})
		}
		const sticWait = (hehe) => {
			ano = fs.readFileSync('./sticker/anime/wait.webp')
			Suneo.sendMessage(hehe, ano, sticker, { quoted: fgi})
		}
		const sticOk = (hehe) => {
			ano = fs.readFileSync('./sticker/anime/ok.webp')
			Suneo.sendMessage(hehe, ano, sticker, { quoted: fgi})
		}
        const sendMediaURL = async(to, url, text="", mids=[]) =>{
                if(mids.length > 0){
                    text = normalizeMention(to, text, mids)
                }
                const fn = Date.now() / 10000;
                const filename = fn.toString()
                let mime = ""
                var download = function (uri, filename, callback) {
                    request.head(uri, function (err, res, body) {
                        mime = res.headers['content-type']
                        request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
                    });
                };
                download(url, filename, async function () {
                    console.log('done');
                    let media = fs.readFileSync(filename)
                    let type = mime.split("/")[0]+"Message"
                    if(mime === "image/gif"){
                        type = MessageType.video
                        mime = Mimetype.gif
                    }
                    if(mime.split("/")[0] === "audio"){
                        mime = Mimetype.mp4Audio
                    }
                    Suneo.sendMessage(to, media, type, { quoted: neo, mimetype: mime, caption: text,contextInfo: {"mentionedJid": mids}})
                    
                    fs.unlinkSync(filename)
                });
            }   
 
    const time2 = moment().tz('Asia/Jakarta').format('HH:mm:ss')
        if(time2 < "23:59:00"){
        var ucapanWaktu = '𝐒𝐞𝐥𝐚𝐦𝐚𝐭 𝐌𝐚𝐥𝐚𝐦🌌'
}
        if(time2 < "19:00:00"){
        var ucapanWaktu = '𝐒𝐞𝐥𝐚𝐦𝐚𝐭 𝐏𝐞𝐭𝐚𝐧𝐠🌆'
}
        if(time2 < "18:00:00"){
        var ucapanWaktu = '𝐒𝐞𝐥𝐚𝐦𝐚𝐭 𝐒𝐨𝐫𝐞🌇'
}
        if(time2 < "15:00:00"){
        var ucapanWaktu = '𝐒𝐞𝐥𝐚𝐦𝐚𝐭 𝐒𝐢𝐚𝐧𝐠🏞'
}
        if(time2 < "11:00:00"){
        var ucapanWaktu = '𝐒𝐞𝐥𝐚𝐦𝐚𝐭 𝐏𝐚𝐠𝐢🌅'
}
        if(time2 < "05:00:00"){
        var ucapanWaktu = '𝐒𝐞𝐥𝐚𝐦𝐚𝐭 𝐌𝐚𝐥𝐚𝐦🏙'
}
const fdoc = {
	key : {
           participant : '0@s.whatsapp.net'
                        },
       message: {
                    documentMessage: {
                    title: `${ucapanWaktu} ${pushname}`, 
                    jpegThumbnail: fs.readFileSync('./stik/thumb.jpeg')
                          }
                        }
                      }
                      const floc = {
	key : {
           participant : '0@s.whatsapp.net'
                        },
       message: {
                    liveLocationMessage: {
                    caption: `${ucapanWaktu} ${pushname}`,
                    jpegThumbnail: fs.readFileSync('./stik/thumb.jpeg')
                          }
                        }
                      }
                      ///Button Location
const sendButLocation = async (id, text1, desc1, gam1, but = [], options = {}) => {
kma = gam1
mhan = await Suneo.prepareMessage(from, kma, location)
const buttonMessages = {
locationMessage: mhan.message.locationMessage,
contentText: text1,
footerText: desc1,
buttons: but,
headerType: 6
}
Suneo.sendMessage(id, buttonMessages, MessageType.buttonsMessage, options)
}
                      const ftroli = {
	key : {
                          participant : '0@s.whatsapp.net'
                        },
       message: {
                    orderMessage: {
                            itemCount : 2022,
                            status: 1,
                            surface : 1,
                            message: `©Created By Suneo404`,
                            orderTitle: 'Bang',
                            thumbnail: fs.readFileSync('./media/fake2.jpg'), 
                            sellerJid: '0@s.whatsapp.net'
          
                          }
                        }
                      }
                          if (!publik) {
		if (!isOwner && !neo.key.fromMe) return
		}
                      const fgi = {
	 key: { 
         fromMe: false,
	      participant: `0@s.whatsapp.net`, ...(from ? 
	 { remoteJid: "6289643739077-1613049930@g.us" } : {}) 
                },
	 message: { 
                 "videoMessage": { 
                 "title": `${ucapanWaktu} ${pushname}`,
                 "h": `${ucapanWaktu} ${pushname}`,
                 'duration': '99999', 
                 'gifPlayback': 'true', 
                 'caption': `${ucapanWaktu} ${pushname}`,
                 'jpegThumbnail': fs.readFileSync('./stik/thumb.jpeg')
                        }
                       }
	                  } 
                      const fvid = {
	 key: { 
          fromMe: false,
	      participant: `0@s.whatsapp.net`, ...(from ? 
	 { remoteJid: "6289643739077-1613049930@g.us" } : {}) 
                },
	 message: { 
                 "videoMessage": { 
                 "title": `${ucapanWaktu}`,
                 "h": `${ucapanWaktu}`,
                 'duration': '99999', 
                 'caption': `${ucapanWaktu}`,
                 'jpegThumbnail': fs.readFileSync('./stik/thumb.jpeg')
                        }
                       }
	                  }
	                  function clockString(ms) {
      let h = isNaN(ms) ? '--' : Math.floor(ms / 3600000);
      let m = isNaN(ms) ? '--' : Math.floor(ms / 60000) % 60;
      let s = isNaN(ms) ? '--' : Math.floor(ms / 1000) % 60;
      return [h, m, s].map((v) => v.toString().padStart(2, 0)).join(':');
    }
                      if (isGroup && !neo.key.fromMe && isAntiLink) {
if (budy.includes("://chat.whatsapp.com/")) {
if (isGroupAdmins) return reply('Your is Admin!! Bot not Found kick You :D')
console.log(color('[KICK]', 'red'), color('Received a link!', 'yellow'))
reply(`「 *LINK GRUP TERDETEKSI* 」\n\n_Link Group terdeteksi!!_\n_Kamu akan di kick dari Group!!_`)
setTimeout(() => {
Suneo.groupRemove(from, [sender])
}, 2000);
}
}
let settingstatus = 0;
      if (new Date() * 1 - settingstatus > 1000) {
      let _uptime = process.uptime() * 1000;
      let uptime = clockString(_uptime);

      await Suneo.setStatus(`Aktif Selama: ${runtime(process.uptime())} || Bot By Suneo404`).catch((_) => _);
      settingstatus = new Date() * 1;            
          }
          thu = await Suneo.getStatus(`${sender.split('@')[0]}@s.whatsapp.net`, MessageType.text)
            groups = Suneo.chats.array.filter(v => v.jid.endsWith('g.us'))
privat = Suneo.chats.array.filter(v => v.jid.endsWith('s.whatsapp.net'))
            uptime = process.uptime();
              timestampe = speed();
              uptime = process.uptime();
              totalChat = await Suneo.chats.all()
              latensie = speed() - timestampe
              total = math(`${groups.length}*${privat.length}`)
    if (!neo.key.fromMe && banChats === true) return;
//========================================================================================================================//
		colors = ['red', 'white', 'black', 'blue', 'yellow', 'green']
		const isMedia = (type === 'imageMessage' || type === 'videoMessage')
		const isQuotedImage = type === 'extendedTextMessage' && content.includes('imageMessage')
		const isQuotedVideo = type === 'extendedTextMessage' && content.includes('videoMessage')
		const isQuotedAudio = type === 'extendedTextMessage' && content.includes('audioMessage')
		const isQuotedSticker = type === 'extendedTextMessage' && content.includes('stickerMessage')
      	if (!isGroup && isCmd) console.log('\x1b[1;31m~\x1b[1;37m>', '[\x1b[1;32mEXEC\x1b[1;37m]', time, color(command), 'from', color(sender.split('@')[0]), 'args :', color(args.length))
      	//if (!isGroup && !isCmd) console.log('\x1b[1;31m~\x1b[1;37m>', '[\x1b[1;31mTEXT\x1b[1;37m]', time, color('Message'), 'from', color(sender.split('@')[0]), 'args :', color(args.length))
     	if (isCmd && isGroup) console.log('\x1b[1;31m~\x1b[1;37m>', '[\x1b[1;32mEXEC\x1b[1;37m]', time, color(command), 'from', color(sender.split('@')[0]), 'in', color(groupName), 'args :', color(args.length))
      	//if (!isCmd && isGroup) console.log('\x1b[1;31m~\x1b[1;37m>', '[\x1b[1;31mTEXT\x1b[1;37m]', time, color('Message'), 'from', color(sender.split('@')[0]), 'in', color(groupName), 'args :', color(args.length))
	    if(isGroup && !isVote) {
        if (budy.toLowerCase() === 'vote'){
        let vote = JSON.parse(fs.readFileSync(`./lib/${from}.json`))
        let _votes = JSON.parse(fs.readFileSync(`./lib/vote/${from}.json`))  
        let fil = vote.map(v => v.participant)
        let id_vote = sender ? sender : '6287705048235@s.whatsapp.net'
        if(fil.includes(id_vote)) {
        return mentions('@'+sender.split('@')[0]+' Anda sudah vote', fil, true)
        } else {
        vote.push({
            participant: id_vote,
            voting: '✅'
        })
        fs.writeFileSync(`./lib/${from}.json`,JSON.stringify(vote))
        let _p = []
        let _vote = '*Vote* '+ '@'+ _votes[0].votes.split('@')[0] + `\n\n*Alasan*: ${_votes[0].reason}\n*Jumlah Vote* : ${vote.length} Vote\n*Durasi* : ${_votes[0].durasi} Menit\n\n` 
        for(let i = 0; i < vote.length; i++) {
        _vote +=  `@${vote[i].participant.split('@')[0]}\n*Vote* : ${vote[i].voting}\n\n`
        _p.push(vote[i].participant)
        }  
        _p.push(_votes[0].votes)
        mentions(_vote,_p,true)   
        }
        } else if (budy.toLowerCase() === 'devote'){
        const vote = JSON.parse(fs.readFileSync(`./lib/${from}.json`))
        let _votes = JSON.parse(fs.readFileSync(`./lib/vote/${from}.json`))  
        let fil = vote.map(v => v.participant)
        let id_vote = sender ? sender : '6287705048235@s.whatsapp.net'
        if(fil.includes(id_vote)) {
        return mentions('@'+sender.split('@')[0]+' Anda sudah vote', fil, true)
        } else {
        vote.push({
            participant: id_vote,
            voting: '❌'
        })
        fs.writeFileSync(`./lib/${from}.json`,JSON.stringify(vote))
        let _p = []
        let _vote = '*Vote* '+ '@'+ _votes[0].votes.split('@')[0] + `\n\n*Alasan*: ${_votes[0].reason}\n*Jumlah Vote* : ${vote.length} Vote\n*Durasi* : ${_votes[0].durasi} Menit\n\n` 
        for(let i = 0; i < vote.length; i++) {
        _vote +=  `@${vote[i].participant.split('@')[0]}\n*Vote* : ${vote[i].voting}\n\n`
        _p.push(vote[i].participant)
        }  
        _p.push(_votes[0].votes)
        mentions(_vote,_p,true)   
        }
    }
}	

if (!isCmd && from.endsWith('@s.whatsapp.net')) {
  Suneo.anonymous = Suneo.anonymous ? Suneo.anonymous: {}
  let room = Object.values(Suneo.anonymous).find(room => [room.a, room.b].includes(sender) && room.state === 'CHATTING')
  if (room) {
    if (/^.*(next|leave|start)/.test(body)) return
    if ([`${prefix}next`, `${prefix}leave`, `${prefix}start`, 'Cari Partner', 'Keluar', 'Next'].includes(body)) return
    let other = [room.a,
      room.b].find(user => user !== sender)
    if (type === "conversation") {
      Suneo.sendMessage(other, neo.message.conversation, text);
    } else {
      Suneo.sendMessageFromContent(other, neo.message)
    }
  }
}

let fyt = {
"title": `Hai Kak ${pushname}`,
"body": `${ucapanWaktu}`,
"mediaType": 2,
"thumbnailUrl": `https://e.top4top.io/p_2080sdxiy0.jpg`,
"mediaUrl": "https://youtu.be/UHrLAQHjSVY",
"thumbnail": fs.readFileSync('./stik/thumb.jpeg')
}

let mengt =`SuneoX4·Team`  
const jam = moment.tz('Asia/Jakarta').format('HH:mm:ss z')
const isBtMsg = (type == 'buttonsResponseMessage') ? neo.message.buttonsResponseMessage.selectedButtonId : ''
const isStMsg = (type == 'listResponseMessage') ? neo.message.listResponseMessage.singleSelectReply.selectedRowId : ''
        if (!neo.key.fromMe && banChats === true) return

// Auto 
       Suneo.updatePresence(from, Presence.recording)
         Suneo.chatRead(from, "read")
        if (!neo.key.fromMe && banChats === true) return
switch (command) {
	case 'test':
	case 'tes':
	reply(`okehh`)
	break
                case 'menu':
                case 'help':
                fake = `ＳＵＮＥＯ ＢＯＴ`
men = ` 
\`\`\` INFO USER \`\`\`
_👤*Nama :${pushname}*_
_🗣️*Sender :@${sender.split('@')[0]}*
_📖*Bio Info :${thu.status}*
_🏅*Status :*${isOwner ? 'Owner' : 'Not Owner'}*_

\`\`\`🤖 INFO BOT\`\`\`
_✘⃝⚔️  * Prefix* : Multi - Prefix_
_✘⃝🥏  *Group Total* : ${groups.length}_
_✘⃝🔐  *Private Chat* : ${privat.length}_
_✘⃝📃  *Total Chat* : ${totalChat.length}_
_✘⃝⏳  *Speed* : ${latensie.toFixed(4)} _Second_
_🎟*Link Group Suneo Bot* : https://chat.whatsapp.com/GbVgCIAKqNr8ELsRMRWOXh
-----------------------------------------------
✘⃝⚠️ 𝙋𝙇𝙀𝘼𝙎𝙀 𝙒𝘼𝙍𝙉𝙄𝙉𝙂  ⚠️

🇬🇧 𝙀𝙂𝙎:
- IF THERE IS A BUG / ERROR PLEASE TYPE #report (the bug)
- IF THE PLAY REPORT WILL NOT BE HANDLED
- THANK YOU ALL PARTNER BOTS WHO HAVE HELPED WITH THIS SCRIPT
- WANT SCRIPT BOT?, CHAT OWNER
- IF YOU WANT TO TYPE #owner
- BEGGING? BLOCK!
- WAIT FOR NEW FEATURES, DEFINITELY BETTER :)

🇮🇩 𝙄𝙉𝘿:
- JIKA ADA BUG / EROR SILAHKAN KETIK #report (bugnya)
- JIKA LAPORAN MAIN² TIDAK AKAN DI TANGANI
- TERIMAKASIH ALL PARTNER BOT YANG SUDAH MEMBANTU SCRIPT INI
- MAU SCRIPT BOT?, CHAT OWNER 
- JIKA MAU KETIK #owner
- NGEMIS? BAN!
- NANTIKAN FITUR BARU, YANG PASTINYA LEBIH BAGUS:)

-------------------------------------------------

「 *SUNEO BOT* 」
`
    buttons = [{buttonId:`${prefix}allmenu`,buttonText:{displayText:'LIST MENU 🗒'},type:1},{buttonId:`${prefix}rules`,buttonText:{displayText:'RULES BOT🔖'},type:1},{buttonId:`${prefix}owner`,buttonText:{displayText:'OWNER🔖'},type:1}]

               imageMsg = (await Suneo.prepareMessageMedia(fs.readFileSync(`./image/thumb.jpeg`), 'imageMessage', {thumbnail: fs.readFileSync(`./image/thumb.jpeg`)})).imageMessage

               buttonsMessage = {
               contentText: `${fake}`,
               footerText: `${men}`
              , imageMessage: imageMsg,
               buttons: buttons,
               headerType: 4
}
prep = await Suneo.prepareMessageFromContent(from,{buttonsMessage},{quoted: ftroli, contextInfo:{ mentionedJid: parseMention(fake), externalAdReply: fyt}})
             Suneo.relayWAMessage(prep)
              break
            case 'allmenu':
            case 'allhelp':
            ownerJid = "6281803609324@s.whatsapp.net"
            thu2 = await Suneo.getStatus(`${sender.split('@')[0]}@s.whatsapp.net`, MessageType.text)
            nama = `LIST ALL MENU SUNEO BOT🗒`
            manu = `
\`\`\` INFO USER \`\`\`
_👤*Nama :${pushname}*_
_🗣️*Sender :@${sender.split('@')[0]}*
_📖*Bio Info :${thu2.status}*
_🏅*Status :*${isOwner ? 'Owner' : 'Not Owner'}*_

\`\`\`🤖 INFO BOT\`\`\`
_🖥*Versi* : 3.0.0
_⚔️*Prefix* : Multi - Prefix_
_📝*Owner* : Habibi_
_🚀*Speed* : ${latensie.toFixed(4)} _Second_
_🎟*Link Group Suneo Bot* : https://chat.whatsapp.com/GbVgCIAKqNr8ELsRMRWOXh

\`\`\` LIST MENU📝 \`\`\`

「 *OWNER MENU* 」
*${shp} ${prefix}self*
*${shp} ${prefix}public*
*${shp} ${prefix}bc*
*${shp} ${prefix}setlogo*
*${shp} ${prefix}setthumb*
*${shp} ${prefix}settflink*
*${shp} ${prefix}settppmenu*
*${shp} ${prefix}setmenuall _ori/catalog_*
*${shp} ${prefix}readall*

「 *MAKER MENU* 」
*${shp} ${prefix}costumgfx*
*${shp} ${prefix}costumgfx2*
*${shp} ${prefix}costumgfx3*
*${shp} ${prefix}hartatahta*
*${shp} ${prefix}naruto*
*${shp} ${prefix}wasted*

「 *ISLAMI MENU* 」
*${shp} ${prefix}jadwalsholat*
*${shp} ${prefix}kisahnabi*
*${shp} ${prefix}quotesislami*

「 *RANDOM MENU* 」
*${shp} ${prefix}translate*
*${shp} ${prefix}kbbi*
*${shp} ${prefix}getbio*
*${shp} ${prefix}pinterest*
*${shp} ${prefix}cecan*
*${shp} ${prefix}cogan*
*${shp} ${prefix}darkjoke*

「 *ANIME MENU* 」
*${shp} ${prefix}waifu*
*${shp} ${prefix}loli*
*${shp} ${prefix}husbu*
*${shp} ${prefix}storyanime*
*${shp} ${prefix}quotesanime*
*${shp} ${prefix}wallpaperanime*

「 *PRIMBON MENU* 」
*${shp} ${prefix}artinama*

「 *ASUPAN MENU* 」
*${shp} ${prefix}viona*
*${shp} ${prefix}riri*
*${shp} ${prefix}bocil*
*${shp} ${prefix}ukhty*

「 *STICKER MENU* 」
*${shp} ${prefix}ttp*
*${shp} ${prefix}attp*
*${shp} ${prefix}sticker*
*${shp} ${prefix}toimg*
*${shp} ${prefix}patrickstik*

「 *GROUP MENU* 」
*${shp} ${prefix}welcome* enable/disable
*${shp} ${prefix}add*
*${shp} ${prefix}kick*
*${shp} ${prefix}setdesc*
*${shp} ${prefix}setpp*
*${shp} ${prefix}hidetag*
*${shp} ${prefix}tagall*
*${shp} ${prefix}promote*
*${shp} ${prefix}demote*
*${shp} ${prefix}linkgc*
*${shp} ${prefix}afk*

「 *FUN & GAME MENU* 」
*${shp} ${prefix}tembak* udara/laut/darat
*${shp} ${prefix}slot*
*${shp} ${prefix}wangy*
*${shp} ${prefix}cekwatak*
*${shp} ${prefix}aduayam*🐥|🐓|🦃
*${shp} ${prefix}apakah*
*${shp} ${prefix}bisakah*
*${shp} ${prefix}kapankah*

Nb: Jika ada fitur yang tidak work Silahkan Ketik .report (bugnya)🙏

 「 *SUNEO BOT* 」
 `
 if(menuall == false){
   //Masih langka
anu = Suneo.prepareMessageFromContent(from,{
					"productMessage": {
						"product": {
							"productImage": {
								"url": "https://mmg.whatsapp.net/d/f/AkZ8d19O4Z680SMbfTYSp6K-FbV1iP4MyRyGpAetkqAy.enc",
						"mimetype": "image/jpeg",
						"fileSha256": "HZ7GZtD+MZleBjG1flbeTuZkDThPV6frfERXi4zTBvs=",
						"fileLength": "66214",
						"height": 720,
						"width": 720,
								"mediaKey": "3ucdrq0UyCuNG5YcUD9aKX4qkuvcip+OonjhACusy5Q=",
						"fileEncSha256": "ifE4O/SNQnPWVe8ya6QZlshnaqIDLcvWFJT4RQ4Bbvk=",
						"jpegThumbnail": fs.readFileSync("./stik/thumb.jpeg")
                                },
                            "productId": "9999999",
							"title": `${nama}`, 
							"description": `${manu}`,
							"productImageCount": 1
						},
						"businessOwnerJid": `${ownerJid}`,
						"contextInfo": {
							"forwardingScore": 9999,
							"isForwarded": true
						}
					}
				},{quoted: ftroli, contextInfo: { mentionedJid: [sender]}})
                  Suneo.relayWAMessage(anu)
                  } else if(menuall = true){
 buttons = [{buttonId:`${prefix}credit`,buttonText:{displayText:'TQTO 🕹'},type:1},{buttonId:`${prefix}rules`,buttonText:{displayText:'RULES BOT🔖'},type:1},{buttonId:`${prefix}owner`,buttonText:{displayText:'OWNER🔖'},type:1}]

               imageMsg = (await Suneo.prepareMessageMedia(fs.readFileSync(`./image/thumb.jpeg`), 'imageMessage', {thumbnail: fs.readFileSync(`./image/thumb.jpeg`)})).imageMessage

               buttonsMessage = {
               contentText: `${manu}`,
               footerText: `© MadeWith By Habibi📸`
              , imageMessage: imageMsg,
               buttons: buttons,
               headerType: 4
}

await Suneo.sendMessage(from, buttonsMessage, MessageType.buttonsMessage,{ quoted:ftroli, sendEphemeral: true, contextInfo: { forwardingScore: 508, isForwarded: true, "externalAdReply": {
"title": `Hallo Kak ${pushname}\n${ucapanWaktu}`,
"body": "",
"previewType": "PHOTO",
"thumbnailUrl": `https://ibb.co/FzLx165/Nakano.jpg`,
"thumbnail": fs.readFileSync('./stik/thumb.jpeg'),
"sourceUrl": ""
}
}
})
break
}
case 'setmenuall':
if (!isOwner && !fiz.key.fromMe) return reply(mess.only.ownerB)
if(args[0] == 'ori'){
menuall = true
reply('Sucsess')
}else if(args[0] == 'catalog'){
menuall = false
reply('Sucsess')
}else{
}
break
 case 'aduayam':
txtt =`Hai Kak ${pushname}\nGame Ini sama Dengan Gunting Batu Kertas ya  Artinya: 🐥 = Gunting, 🐓 = kertas,  🦃 = batu`

               buttons = [{buttonId: '!aduayam2 🐥',buttonText:{displayText: 'ADU AYAM🐥'},type:1},{buttonId:'!aduayam2 🐓',buttonText:{displayText:'ADU AYAM 🐓'},type:1},{buttonId:'!aduayam2 🦃',buttonText:{displayText:'ADU AYAM 🦃'},type:1}]

               buttonsMessage = {
               contentText: `${txtt}`,
               footerText: 'PILIH SALAH SATU AYAM DI BAWAH',
               buttons: buttons,
               headerType: 1
}

          prep = await Suneo.prepareMessageFromContent(from,{buttonsMessage},{quoted: ftroli})
               Suneo.relayWAMessage(prep)
               break
case 'aduayam2': //Case By Habibi
          ////////////////////    if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: ftrol})
  if (args.length < 1) return reply('Pilih 🐥/🐓/🦃')
					if (args[0] === '🐥' ) {
					  gunting = [
					    "Kamu *🐥*\nAku *🐓*\nKamu Menang 😔",
					    "Kamu *🐥*\nAku *🦃*\nKamu Kalah 🙂",
					    "Kamu *🐥*\nAku *🐥*\nKita Seri 😏"
					    ]
					  gun = gunting[Math.floor(Math.random() * gunting.length)]
					Suneo.sendButton(from, '_KLIK DI BAWAH UNTUK MAIN LAGI🐥_', `©HabibiGz`, 'COBA LAGI', prefix+'aduayam')
					  reply(gun)
					} else if (args[0] === '🐓') {
					  ker = [
					    "Kamu *🐓*\nAku *🦃*\nKamu Menang 😔",
					    "Kamu *🐓*\nAku *🐥*\nKamu Kalah 🙂",
					    "Kamu *🐓*\nAku *🐓*\nKita Seri 😏"
					    ]
					  kertas = ker[Math.floor(Math.random() * ker.length)]
					Suneo.sendButton(from, 'KLIK DI BAWAH UNTUK MAIN LAGI🐥_', `©HabibiGz`, 'COBA LAGI', prefix+'aduayam')
						reply(kertas)
					} else if (args[0] === '🦃') {
					  bat = [
					    "Kamu *🦃*\nAku *🐥*\nKamu Menang ??",
					    "Kamu *🦃*\nAku *🐓*\nKamu Kalah 🙂",
					    "Kamu *🦃*\nAku *🦃*\nKita Seri 😏"
					    ]
					  batu = bat[Math.floor(Math.random() * bat.length)]
					  reply(batu)
					Suneo.sendButton(from, '_KLIK DI BAWAH UNTUK MAIN LAGI🐥_', `©HabibiGz`, 'COBA LAGI', prefix+'aduayam')
					} else {
					  reply('Pilih 🐥/🐓/🦃')
					}
break
// MASI ERROR DI TUNGGU SAJA UPDATE SELANJUTNYA!!!!!
case 'delsesittt':
        case 'resetgame':
    /////////////    if (!isRegister) return sendButMessage (from, daftar1, daftar2, daftar3, { quoted: freply})
               if (!isGroup) return reply(mess.only.group)
               if (!isTTT) return reply('Tidak Ada Permainan Di Grub Ini')
               naa = ky_ttt.filter(toek => !toek.id.includes(from)) 
               ky_ttt = naa 
               reply('Sukses Mereset Game')
               break
        case 'tictactoe':
        case 'ttt':
  //////////      if (!isRegister) return sendButMessage (from, daftar1, daftar2, daftar3, { quoted: freply})
         /////////////     if (isGame(sender, isPremium, gcount, glimit)) return reply(`Limit game kamu sudah habis`)
              if (!isGroup) return reply(mess.only.group)
              if (args.length < 1) return reply('Tag Lawan Anda! ')
              if (isTTT) return reply('Sedang Ada Permainan Di Grub Ini, Harap Tunggu')
              if (neo.message.extendedTextMessage === undefined || neo.message.extendedTextMessage === null) return reply('Tag target Lawan!')
              ment = neo.message.extendedTextMessage.contextInfo.mentionedJid
              player1 = sender
              player2 = ment[0]
              angka = ["0️⃣","1️⃣","2️⃣","3️⃣","4️⃣","5️⃣","6️⃣","7️⃣","8️⃣","9️⃣"]
              id = from
              gilir = player2
              ky_ttt.push({player1,player2,id,angka,gilir})
              Suneo.sendMessage(from, 
`*🎳 Memulai Game Tictactoe 🎲*

[@${player2.split('@')[0]}] Menantang anda untuk menjadi lawan Game🔥
Ketik Y/N untuk menerima atau menolak permainan

Ket : Ketik /resetgame , Untuk Mereset Permainan Yg Ada Di Grup!`, text, {contextInfo: {mentionedJid: [player2]}})
              break
case 'tembak':
                    if (args[0] == 'udara') {
                    setTimeout( () => {
                    reply(`[ *PERINTAH DILAKSANAKAN* ]`)
                    }, 1000)
                    setTimeout( () => {
                    reply(`[ *SEDANG BERBURU* ]`)
                    }, 5000)
                    setTimeout( () => {
                    reply(`[ *SUKSES !! DAN ANDA MENDAPATKAN* ]`)
                    }, 8000)
                    setTimeout( () => {
                    reply(`[ *WOW ANDA MENDAPATKAN* ]\n[ *${buruh33}* ]`)
                    }, 12000)
                    }
                    if (args[0] == 'darat') {
                    setTimeout( () => {
                    reply(`[ *PERINTAH DILAKSANAKAN* ]`)
                    }, 1000)
                    setTimeout( () => {
                    reply(`[ *SEDANG BERBURU* ]`)
                    }, 5000)
                    setTimeout( () => {
                    reply(`[ *SUKSES !! DAN ANDA MENDAPATKAN* ]`)
                    }, 8000)
                    setTimeout( () => {
                    reply(`[ *WOW ANDA MENDAPATKAN* ]\n[ *${buruh22}* ]`)
                    }, 12000)
                    }
                    if (args[0] == 'laut') {
                    setTimeout( () => {
                    reply(`[ *PERINTAH DILAKSANAKAN* ]`)
                    }, 1000)
                    setTimeout( () => {
                    reply(`[ *SEDANG BERBURU* ]`)
                    }, 5000)
                    setTimeout( () => {
                    reply(`[ *SUKSES !! DAN ANDA MENDAPATKAN* ]`)
                    }, 8000)
                    setTimeout( () => {
                    reply(`[ *WOW ANDA MENDAPATKAN* ]\n[ *${buruh11}* ]`)
                    }, 12000)
                    }
                    break
                    case 'slot': //SLOT BY M4N1K
            const somtoy = sotoy[Math.floor(Math.random() * sotoy.length)]
            const somtoy2 = sotoy1[Math.floor(Math.random() * sotoy1.length)]
            const somtoy3 = sotoy2[Math.floor(Math.random() * sotoy2.length)]
            const somtoy4 = sotoy3[Math.floor(Math.random() * sotoy3.length)]
            Suneo.sendMessage(from, `
[ SLOTS ]\n-----------------
${somtoy2}
${somtoy}<=====
${somtoy3}
[ SLOTS ]
Keterangan : Jika anda Mendapatkan 3Buah Sama Berarti Kamu Win
Contoh : ${somtoy4}<=====`, text, { quoted: ftroli })
            break
case 'afk': 
 if (!isGroup) return reply(mess.only.group)
if (isAfkOn) return reply('Woe Kalo Mau Afk Jangan Nimbrung di sini')
  const reason = q ? q : 'Nothing.'
afk.addAfkUser(sender, time, reason, _afk)
const aluty = `Fitur AFK berhasil *diaktifkan!*\n\n➸ *Ussername*: ${pushname}\n➸ *Alasan*: ${reason}`
reply(aluty)
break
case 'me':
 case 'profile':

 Suneo.updatePresence(from, Presence.composing)
 try {
profil = await Suneo.getProfilePicture(`${sender.split('@')[0]}@s.whatsapp.net`)
 } catch {
profil = errorImg
 }
 thu = await Suneo.getStatus(`${sender.split('@')[0]}@s.whatsapp.net`, MessageType.text)
 me = Suneo.user
 uptime = process.uptime()
 profile = `-----[ *USER INFO* ]-----\n\n➸ *Username:* ${pushname}\n➸ *Status:* ${thu.status}\n➸ *Premium*: ${isPremium ? 'Ya' : 'No'}\n➸ *Admin*: ${isGroupAdmins ? 'Ya' : 'No'}\n➸ *Prefix :* Multi Prefix\n\n=_=_=_=_=_=_=_=_=_=_=_=_=\n\nYour progress:\n➸ *Level*: ${Levelnye}\n➸ *XP*: ${Xpluu} / ${requiredXplu}`
 buff = await getBuffer(profil)
 Suneo.sendMessage(from, buff, image, {quoted: freply, caption: profile})
 break
case 'infogrup':
case 'infogrouup':
case 'grupinfo':
case 'groupinfo':
if (!isGroup) return reply(mess.only.group)
  try {
 var pic = await Suneo.getProfilePicture(from)
  } catch {
 var pic = 'https://i.ibb.co/Tq7d7TZ/age-hananta-495-photo.png'
  }
  let ingfo = `*G R O U P I N F O*\n\n*Name :* ${groupName}\n*ID Grup :* ${from}\n*Dibuat :* ${moment(`${groupMetadata.creation}` * 1000).tz('Asia/Jakarta').format('DD/MM/YYYY HH:mm:ss')}\n*Owner Grup :* @${groupMetadata.owner.split('@')[0]}\n*Jumlah Admin :* ${groupAdmins.length}\n*Jumlah Peserta :* ${groupMembers.length}\n*Welcome :* ${isWelkom ? 'Aktif' : 'Mati'}\n*AntiLink :* ${isAntiLink ? 'Aktif' : 'Mati'}\n*Desc :* \n${groupMetadata.desc}`
  Suneo.sendMessage(from, await getBuffer(pic), image, {quoted: freply, caption: ingfo, contextInfo: {"mentionedJid": [groupMetadata.owner.replace('@c.us', '@s.whatsapp.net')]}})
  break
case 'leave':
if (!isOwner) return 
  if (!isGroup) return reply(mess.only.group)
 setTimeout( () => {
Suneo.groupLeave(from) 
 }, 2000)
  setTimeout( () => {
 reply('Byee...')
  }, 0)
  break
case 'online':
  case 'listonline':
  case 'here':
  if (!isGroup) return reply(`Only group`)
try {
  let ido = args && /\d+\-\d+@g.us/.test(args[0]) ? args[0] : from
  let online = [...Object.keys(Suneo.chats.get(ido).presences), Suneo.user.jid]
  Suneo.sendMessage(from, 'List Online:\n' + online.map(v => '- @' + v.replace(/@.+/, '')).join `\n`, text, { quoted: freply, contextInfo: { mentionedJid: online }})
} catch (e) {
  reply(`${e}`)
}
break
case 'linkgc': 
case 'linkgrup':
 case 'linkgroup':
if (!isGroup) return reply('ONLY GRUP')
  if (!isBotGroupAdmins) return reply('ONLY OWNER')
 Suneo.groupInviteCode(from)
  .then((res) => reply('https://chat.whatsapp.com/' + res))
  break
  case 'kick':
if (!isBotGroupAdmins) return reply(mess.only.Badmin)
  if (!isGroupAdmins) return reply(mess.only.admin)
if (!isGroup) return reply(mess.only.group)
  kick(from, mentionUser)
break
case 'add':
if (neo.message.extendedTextMessage === null || neo.message.extendedTextMessage === undefined) {
  entah = arg.split("|")[0]
  entah = entah.replace(new RegExp("[()+-/ +/]", "gi"), "")
  entah = `${entah}@s.whatsapp.net`
  Suneo.groupAdd(from, [entah])
} else {
  entah = neo.message.extendedTextMessage.contextInfo.participant
  Suneo.groupAdd(from, [entah])
}
break
case 'tagall':
if (!isGroup) return reply(mess.only.group)
if (!isGroupAdmins) return reply(mess.only.admin)
if (!isBotGroupAdmins) return reply(mess.only.Badmin)
members_id = []
teks = (args.length > 1) ? args.join(' ').trim() : ''
teks += '\n\n'
for (let mem of groupMembers) {
teks += `• @${mem.jid.split('@')[0]}\n`
members_id.push(mem.jid)
}
mentions(teks, members_id, true)
break
case 'setname':
if (!isGroup) return reply(mess.only.group)
if (!isGroupAdmins) return reply(mess.only.admin)
if (!isBotGroupAdmins) return reply(mess.only.Badmin)
if (args.length < 1) return Suneo.sendMessage(from, `Textnya mana kak? contoh : ${prefix}setname testing`, text, { quoted: neo })
Suneo.groupUpdateSubject(from, `${body.slice(9)}`)
Suneo.sendMessage(from, `\`\`\`✓Sukses Mengganti Nama Group Menjadi\`\`\` *${body.slice(9)}*`, text, { quoted: ftroli })
break
case 'setdesc':
if (!isGroup) return reply(mess.only.group)
if (!isGroupAdmins) return reply(mess.only.admin)
if (!isBotGroupAdmins) return reply(mess.only.Badmin)
if (args.length < 1) return Suneo.sendMessage(from, `Textnya mana kak? contoh : ${prefix}setdesc testing`, text, { quoted: neo })
Suneo.groupUpdateDescription(from, `${body.slice(9)}`)
Suneo.sendMessage(from, `\`\`\`✓Sukses Mengganti Deskripsi Group\`\`\` *${groupMetadata.subject}* Menjadi: *${body.slice(9)}*`, text, { quoted: ftroli })
break
case 'setpp':
if (!isGroup) return reply(mess.only.group)
if (!isGroupAdmins) return reply(mess.only.admin)
if (!isBotGroupAdmins) return reply(mess.only.Badmin)
media = await Suneo.downloadAndSaveMediaMessage(neo, './database/media_user')
await Suneo.updateProfilePicture(from, media)
reply(mess.wait)
reply(`\`\`\`✓Sukses Mengganti Profil Group\`\`\` *${groupMetadata.subject}*`)
break
case 'hidetag':
if (!isGroup) return reply(mess.only.group)
if (!isGroupAdmins) return reply(mess.only.admin)
if (!isBotGroupAdmins) return reply(mess.only.Badmin)
if (args.length < 1) return Suneo.sendMessage(from, `Textnya mana kak? contoh : ${prefix}hidetag testing`, text, { quoted: neo })
var value = body.slice(9)
var group = await Suneo.groupMetadata(from)
var member = group['participants']
var mem = []
member.map(async adm => {
mem.push(adm.id.replace('c.us', 's.whatsapp.net'))
})
var options = {
text: value,
contextInfo: { mentionedJid: mem },
quoted: neo
}
Suneo.sendMessage(from, options, text)
break
case 'demote':
			//////////////////if (!isRegister) return sendButMessage (from, daftar1, daftar2, daftar3, { quoted: ftroli})
				if (!isGroup) return reply(mess.only.group)
				if (!isGroupAdmins) return reply(mess.only.admin)
                   if (!isBotGroupAdmins) return reply(mess.only.Badmin)
					if (neo.message.extendedTextMessage === undefined || neo.message.extendedTextMessage === null) return reply('Reply targetnya!')
			demote = neo.message.extendedTextMessage.contextInfo.participant
		    Suneo.groupDemoteAdmin(from, [demote])
						reply('Sukses demote admin')
						break
					case 'promote':
					////////////////if (!isRegister) return sendButMessage (from, daftar1, daftar2, daftar3, { quoted: ftroli})
					if (!isGroup) return reply(mess.only.group)
					if (!isGroupAdmins) return reply(mess.only.admin)
                   if (!isBotGroupAdmins) return reply(mess.only.Badmin)
				  if (neo.message.extendedTextMessage === undefined || neo.message.extendedTextMessage === null) return reply('Reply targetnya!')
			promote = neo.message.extendedTextMessage.contextInfo.participant
		    Suneo.groupMakeAdmin(from, [promote])
						reply('Sukses promote member')
						break
 case 'delthischat':
 case 'dell':
 if (!neo.key.fromMe) return reply('*Kamu Owner?*')
                reply('*succes delete this chat*')
                console.log('succes delete chat = ' + from)
                await sleep(4000)
                Suneo.modifyChat(from, ChatModification.delete)
                break
case 'getbio':
                var yy = Suneo.message.extendedTextMessage.contextInfo.mentionedJid[0]
                var p = await Suneo.getStatus(`${yy}`, MessageType.text)
                reply(p.status)
                if (p.status == 401) {
                reply("Status Profile Not Found")
                }
                break
                case 'kbbi':
              //////////////////    if (!isRegister) return sendButMessage (from, daftar1, daftar2, daftar3, { quoted: ftroli})
 Suneo.updatePresence(from, Presence.composing)
 if (args.length < 1) return reply(`Masukan teks\nContoh : ${prefix}kbbi manusia`)
tels = args.join(' ')
res = await axios.get(`https://freerestapi.herokuapp.com/api/KBBI?text=${tels}`)
gg = res.data.arti[0]
mess = `*KAMUS BAHASA BESAR INDONESIA*`
reply(mess + gg)
                   break
case 'apakah':
///////////////if (!isRegister) return sendButMessage (from, daftar1, daftar2, daftar3, { quoted: ftroli})
apakah = body.slice(1)
const apa =['Iya','Tidak','Bisa Jadi','Coba Ulangi']
const kah = apa[Math.floor(Math.random() * apa.length)]
Seneo.sendMessage(from, '*Pertanyaan :* '+apakah+'\n*Jawaban :* '+ kah, text, { quoted: ftroli })
break
case 'bisakah':
/////////////if (!isRegister) return sendButMessage (from, daftar1, daftar2, daftar3, { quoted: ftroli})
bisakah = body.slice(1)
const bisa =['Bisa','Tidak Bisa','Coba Ulangi','MANA GW TAU']
const keh = bisa[Math.floor(Math.random() * bisa.length)]
Seneo.sendMessage(from, '*Pertanyaan :* '+bisakah+'\n*Jawaban :* '+ keh, text, { quoted: ftroli })
break
case 'kapankah':
////////////////if (!isRegister) return sendButMessage (from, daftar1, daftar2, daftar3, { quoted: ftroli})
kapankah = body.slice(1)
const kapan =['Besok','Lusa','Tadi','4 Hari Lagi','5 Hari Lagi','6 Hari Lagi','1 Minggu Lagi','2 Minggu Lagi','3 Minggu Lagi','1 Bulan Lagi','2 Bulan Lagi','3 Bulan Lagi','4 Bulan Lagi','5 Bulan Lagi','6 Bulan Lagi','1 Tahun Lagi','2 Tahun Lagi','3 Tahun Lagi','4 Tahun Lagi','5 Tahun Lagi','6 Tahun Lagi','1 Abad lagi','3 Hari Lagi']
const koh = kapan[Math.floor(Math.random() * kapan.length)]
Seneo.sendMessage(from, '*Pertanyaan :* '+kapankah+'\n*Jawaban :* '+ koh, text, { quoted: ftroli })
break
case 'tourl':
			///////////////if (!isRegister) return sendButMessage (from, daftar1, daftar2, daftar3, { quoted: ftroli})
    if ((isMedia && !neo.message.videoMessage || isQuotedImage || isQuotedVideo ) && args.length == 0) {
            boij = isQuotedImage || isQuotedVideo ? JSON.parse(JSON.stringify(neo).replace('quotedM','m')).message.extendedTextMessage.contextInfo : neo
            owgi = await Suneo.downloadMediaMessage(boij)
            res = await upload(owgi)
            reply(res)
            } else {
            reply('kirim/reply gambar/video')
            }
            break
case 'credit':
case 'tqto':
case 'credits':
tq = `
╭─❒ 「 *TQTO ALL PARTNER* 」
├ Habibi
├ Akira
├ Denis
├ Yuzzu
├ Deff
├ RidhoKontl
├ Iky Ads
├ Arifi Razzaq
├ Manik
├ Kahfz
├ itsmeVall 
├ Faiz 
├ Angga
├ HopeFully Team
├ LolHuman
├ All partner
├ All apikey
├ All Team Bot
└❏
`
reply(tq)
break
case 'bc':
					if (!isOwner && !neo.key.fromMe) return reply(`Perintah ini khusus owner`)
					if (args.length < 1) return reply('Teksnya?')
					anu = await Suneo.chats.all()
					if (isMedia && !neo.message.videoMessage || isQuotedImage) {
						const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(neo).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : neo
						buff = await Suneo.downloadMediaMessage(encmedia)
						for (let _ of anu) {
							Suneo.sendMessage(_.jid, buff, image, { viewOnce:true, caption: `${body.slice(4)}`})
						}
						reply(`Sukses mengirim Broadcast ${body.slice(4)}`)
						} else if (isMedia && !neo.message.videoMessage || isQuotedVideo) {
						const encmedia = isQuotedVideo ? JSON.parse(JSON.stringify(neo).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : neo
						buff = await Suneo.downloadMediaMessage(encmedia)
						for (let _ of anu) {
							Suneo.sendMessage(_.jid, buff, video, { viewOnce:true, caption: `${body.slice(4)}`})
						}
						reply(`Sukses mengirim Broadcast ${body.slice(4)}`)
						} else if (isMedia && !neo.message.videoMessage || isQuotedVideo) {
						const encmedia = isQuotedVideo ? JSON.parse(JSON.stringify(neo).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : neo
						buff = await Suneo.downloadMediaMessage(encmedia)
						for (let _ of anu) {
							Suneo.sendMessage(_.jid, buff, video, { mimetype: Mimetype.gif, quoted: finv, contextInfo: { forwardingScore: 508, isForwarded: true}, caption: `${body.slice(4)}` })
						}
						reply(`Sukses mengirim Broadcast ${body.slice(4)}`)
					} else {
						for (let _ of anu) {
							waduh = `*「 SUNEO BOT BROADCAST 」*\n\n${body.slice(4)}`
							Suneo.sendButton(_.jid,waduh,`Broadcast At ${time}, ${ucapanWaktu}`,'MENU BOT',`${prefix}help`,'OWNER BOT',`${prefix}owner`,{quoted: ftroli})
						}
						reply(`Sukses mengirim Broadcast:\n${body.slice(4)}`)
					}
					break
					case 'owner':
case 'admin':
let ini_lisst = []
ownerContact = ['6281555807465','6281555807465','6281555807465']
for (let i of ownerContact.map(v => v + '@s.whatsapp.net')) {
const vname = Suneo.contacts[i] != undefined ? Suneo.contacts[i].vname || Suneo.contacts[i].notify : undefined
ini_lisst.push({
"displayName": "HabibiGz",
"vcard": "BEGIN:VCARD\nVERSION:3.0\nN:Sy;Bot;;;\nFN:HabibiGz :3\nitem1.TEL;waid=6281555807465:6281555807465\nitem1.X-ABLabel:👑 Creator\nitem2.EMAIL;type=INTERNET:Habibigz@gmail.com\nitem2.X-ABLabel:📧 Email\nitem3.URL:https://github.com/HABIBIGANZ2021/\nitem3.X-ABLabel:⚙️ website git\nitem4.ADR:;;Indonesia🇮🇩;;;;\nitem4.X-ABADR:ac\nitem4.X-ABLabel:🌍 Region\nitem5.X-ABLabel:HabibiGnz Development\nEND:VCARD"
})
}
hehe = await Suneo.sendMessage(from, {
"displayName": `${ini_lisst.length} kontak`,
"contacts": ini_lisst 
}, 'contactsArrayMessage', { quoted: neo })
Suneo.sendMessage(from,'Tuh Owner Saya Jangan Spam Ya kak😁',text,{quoted: hehe})
break
					case 'tesbtn':
					ajr = ` TEST NI `
					Suneo.sendButton(from, ajr, `\n\nBroadcast At ${time}, ${ucapanWaktu}`,'MENU BOT',`${prefix}help`,'OWNER BOT',`${prefix}owner`,{quoted: ftroli})
case 'setthumb':
if (!isOwner && neo.key.fromMe) return reply(`LU OWNER?`)
	        if ((isMedia && !neo.message.videoMessage || isQuotedImage || isQuotedSticker) && args.length == 0) {
          	boij = isQuotedImage || isQuotedSticker ? JSON.parse(JSON.stringify(neo).replace('quotedM','m')).message.extendedTextMessage.contextInfo : neo
			delb = await Suneo.downloadMediaMessage(boij)
			fs.writeFileSync(`./Media/fake2.jpg`, delb)
			reply('Sukses')
        	} else {
            reply(`Kirim gambar dengan caption ${prefix}sethumb`)
          	}
			break
			case 'settflink':
			if (!isOwner && neo.key.fromMe) return reply(`LU OWNER?`)
	        if ((isMedia && !neo.message.videoMessage || isQuotedImage || isQuotedSticker) && args.length == 0) {
          	boiij = isQuotedImage || isQuotedSticker ? JSON.parse(JSON.stringify(neo).replace('quotedM','m')).message.extendedTextMessage.contextInfo : neo
			dellb = await Suneo.downloadMediaMessage(boiij)
			fs.writeFileSync(`./stik/thumb.jpeg`, dellb)
			reply('Sukses')
        	} else {
            reply(`Kirim gambar dengan caption ${prefix}sethumb`)
          	}
			break
			case 'settppmenu':
			if (!isOwner && neo.key.fromMe) return reply(`LU OWNER?`)
	        if ((isMedia && !neo.message.videoMessage || isQuotedImage || isQuotedSticker) && args.length == 0) {
          	boijj = isQuotedImage || isQuotedSticker ? JSON.parse(JSON.stringify(neo).replace('quotedM','m')).message.extendedTextMessage.contextInfo : neo
			delbb = await Suneo.downloadMediaMessage(boijj)
			fs.writeFileSync(`./image/thumb.jpeg`, delbb)
			reply('Sukses')
        	} else {
            reply(`Kirim gambar dengan caption ${prefix}sethumb`)
          	}
			break
			case "sticker":
      case "stiker":
      case "sg":
      case "s":
/////////////      if (!isRegister) return sendButMessage (from, daftar1, daftar2, daftar3, { quoted: ftroli})
        if (
          ((isMedia && !neo.message.videoMessage) || isQuotedImage) &&
          args.length == 0
        ) {
          const encmedia = isQuotedImage
            ? JSON.parse(JSON.stringify(neo).replace("quotedM", "m")).message
                .extendedTextMessage.contextInfo
            : neo;
          const media = await Suneo.downloadAndSaveMediaMessage(encmedia);
          ran = "666.webp";
          await ffmpeg(`./${media}`)
            .input(media)
            .on("start", function (cmd) {
              console.log(`Started : ${cmd}`);
            })
            .on("error", function (err) {
              console.log(`Error : ${err}`);
              fs.unlinkSync(media);
              reply("error");
            })
            .on("end", function () {
              console.log("Finish");
              Suneo.sendMessage(from, fs.readFileSync(ran), sticker, {
                quoted: neo,
              });
              fs.unlinkSync(media);
              fs.unlinkSync(ran);
            })
            .addOutputOptions([
              `-vcodec`,
              `libwebp`,
              `-vf`,
              `scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decrease,fps=15, pad=320:320:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse`,
            ])
            .toFormat("webp")
            .save(ran);
        } else if (
          ((isMedia && neo.message.videoMessage.seconds < 11) ||
            (isQuotedVideo &&
              neo.message.extendedTextMessage.contextInfo.quotedMessage
                .videoMessage.seconds < 11)) &&
          args.length == 0
        ) {
          const encmedia = isQuotedVideo
            ? JSON.parse(JSON.stringify(neo).replace("quotedM", "m")).message
                .extendedTextMessage.contextInfo
            : neo;
          const media = await Suneo.downloadAndSaveMediaMessage(encmedia);
          ran = "999.webp";
          reply(mess.wait);
          await ffmpeg(`./${media}`)
            .inputFormat(media.split(".")[1])
            .on("start", function (cmd) {
              console.log(`Started : ${cmd}`);
            })
            .on("error", function (err) {
              console.log(`Error : ${err}`);
              fs.unlinkSync(media);
              tipe = media.endsWith(".mp4") ? "video" : "gif";
              reply(`Gagal, pada saat mengkonversi ${tipe} ke stiker`);
            })
            .on("end", function () {
              console.log("Finish");
              Suneo.sendMessage(from, fs.readFileSync(ran), sticker, {
                quoted: neo,
              });
              fs.unlinkSync(media);
              fs.unlinkSync(ran);
            })
            .addOutputOptions([
              `-vcodec`,
              `libwebp`,
              `-vf`,
              `scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decrease,fps=15, pad=320:320:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse`,
            ])
            .toFormat("webp")
            .save(ran);
        } else {
          reply(
            `Kirim gambar dengan caption ${prefix}sticker\nDurasi Sticker Video 1-9 Detik`
          );
        }
        break
        case 'toimg':
/////////////if (!isRegister) return sendButMessage (from, daftar1, daftar2, daftar3, { quoted: ftroli})
  if (!isQuotedSticker) return reply('reply stickernya')
 reply(mess.wait)
  encmedia = JSON.parse(JSON.stringify(neo).replace('quotedM','m')).message.extendedTextMessage.contextInfo
  media = await Suneo.downloadAndSaveMediaMessage(encmedia)
  ran = getRandom('.png')
  exec(`ffmpeg -i ${media} ${ran}`, (err) => {
 fs.unlinkSync(media)
 if (err) return reply('Gagal, pada saat mengkonversi sticker ke gambar')
buffer = fs.readFileSync(ran)
 Suneo.sendMessage(from, buffer, image, {quoted: ftroli, caption: 'BY Suneo7 TEAM'})
 fs.unlinkSync(ran)
  })
  break
 case 'ttp':
				////////////if (!isRegister) return sendButMessage (from, daftar1, daftar2, daftar3, { quoted: ftroli})
                    if (args.length == 0) return reply(`Usage: ${prefix + command} query\nContoh: ${prefix + command} Kata`)
                    txt = args.join(" ")
                    buffer = await getBuffer(`https://api.lolhuman.xyz/api/ttp?apikey=Deffbotz&text=${txt}`)
                    Suneo.sendMessage(from, buffer, sticker, { quoted: ftroli })
                    break
                    case 'kickall': // Anti Banned
////////////if (!isRegister) return sendButMessage (from, daftar1, daftar2, daftar3, { quoted: freply})
if (!isGroupAdmins && !isOwner)return reply(mess.admin)
              for (let i of groupMembers) {
              await kickMember(from, [i.jid])
}
              break
                    case 'asupan':
                    case 'viona':
                    case 'riri':
                    case 'bocil':
                    case 'ukhty':
                    reply(`wait..`)
                    anu = await getBuffer(`https://api-alphabot.herokuapp.com/api/asupan/v2/${command}?apikey=Alphabot`)
					////////ana = await getBuffer(anu.result.url)
			       Suneo.sendMessage(from, anu, video, {quoted: ftroli})
					break 
case 'setlogo':
	case 'setfake':
	if (!isOwner && neo.key.fromMe) return reply(`LU OWNER?`)
			if (!q) return reply(mess.wrongFormat)
			shp = q
			reply(`Succes Mengganti Conversation Logo : ${q}`)
			break
case 'public':
				if (!isOwner && !neo.key.fromMe) return reply(`LU OWNER?`)
			publik = true
				reply('```PUBLIC MODE```')
			break
			case 'self':
			if (!isOwner && neo.key.fromMe) return reply(`LU OWNER?`)
				publik = false
				reply('```SELF MODE```')
			break
case 'costumgfx':
					//////////////if (!isRegister) return sendButMessage (from, daftar1, daftar2, daftar3, { quoted: ftroli})
					if (args.length < 1) return reply(`text nya mana contoh: ${prefix}costumgfx Habibi`)
					cokk = body.slice(11)
					reply(mess.wait)
					aruga = await getBuffer(`https://rivalxc.herokuapp.com/api/canvas/gfx1?teks=${cokk}`)
			       Suneo.sendMessage(from, aruga, image, {quoted: ftroli})
					break 
					case 'wasted':
 var imgbb = require('imgbb-uploader')
 if ((isMedia && !neo.message.videoMessage || isQuotedImage) && args.length == 0) {
ger = isQuotedImage ? JSON.parse(JSON.stringify(neo).replace('quotedM','m')).message.extendedTextMessage.contextInfo : neo
owgi = await Suneo.downloadAndSaveMediaMessage(ger)
data = await imgbb("39d895963468b814fad0514bd28787e2", owgi)
buff = await getBuffer(`https://leyscoders-api.herokuapp.com/api/img/wasted?url=${data.display_url}&apikey=IkyOgiwara`)
Suneo.sendMessage(from, buff, image, {quoted: ftroli})
 } else {
reply(`Kirim foto atau reply foto yang sudah dikirim, dengan caption ${prefix}wasted`)
 }
 break
   case 'bugreport':
  if (args.length < 1) return reply(`Ketik ${prefix}bugreport [fiturnya] [Error Nya Gimana]`) 
 teks = args.join(' ')
  reply('Terima Kasih Telah Melaporkan Bug Pada Owner, Jika Itu Sekedar Iseng Maka Akan Di Ban Oleh Bot!')
  Suneo.sendMessage('6281555807465@s.whatsapp.net',`*Bug Report:* ${teks}`, text)
  break
  case 'readall':
  if (!isOwner && !neo.key.fromMe) return reply(`LU OWNER?`)
  totalchat.map( async ({ jid }) => {
 await Suneo.chatRead(jid)
  })
  reply(`\`\`\`Berhasil membaca ${unread.length} Chat !\`\`\``)
  console.log(totalchat.length)
  break	
					case 'kisahnabi': // Like My Video
					if (args.length < 1) return reply(`*Example :*\n${prefix}kisahnabi Muhammad`)
				reply(`[❕] Loading`)
				query = args.join(" ")
                    get_result = await fetchJson(`https://api.lolhuman.xyz/api/kisahnabi/${query}?apikey=${lolkey}`)
                    get_result = get_result.result
                    ini_txt = `Name : ${get_result.name}\n`
                    ini_txt += `Lahir : ${get_result.thn_kelahiran}\n`
                    ini_txt += `Umur : ${get_result.age}\n`
                    ini_txt += `Tempat : ${get_result.place}\n`
                    ini_txt += `Kisah : \n${get_result.story}`
                    reply(ini_txt)
                    break
                    case 'jadwalsholat': // Like My Video
					if (args.length < 1) return reply(`*Example :*\n${prefix}jadwalsholat Blitar`)
				reply(`[❕] Loading`)
				query = args.join(" ")
                    get_result = await fetchJson(`https://api.lolhuman.xyz/api/sholat/${query}?apikey=${lolkey}`)
                    get_result = get_result.result
                    ini_txt = `Wilayah : ${get_result.wilayah}\n`
                    ini_txt += `Tanggal : ${get_result.tanggal}\n`
                    ini_txt += `Subuh : ${get_result.subuh}\n`
                    ini_txt += `Dzuhur : ${get_result.dzuhur}\n`
                    ini_txt += `Ashar : ${get_result.ashar}\n`
                    ini_txt += `Maghrib : ${get_result.maghrib}\n`
                    ini_txt += `Isya : ${get_result.isya}`
                    reply(ini_txt)
                    break
                    case 'loli': 
     ////////////////   if (!isRegister) return sendButMessage (from, daftar1, daftar2, daftar3, { quoted: ftroli})
					anu = await getBuffer(`https://rivalxc.herokuapp.com/api/randomimage/loli`)
					////////ana = await getBuffer(anu.result.url)
					buttons = [{buttonId: `${prefix + command}`,buttonText:{displayText: `➡️Next`},type:1}]
              imageMsg = (await Suneo.prepareMessageMedia(anu, "imageMessage", { thumbnail: anu, })).imageMessage
              buttonsMessage = {footerText:'Nih:)', imageMessage: imageMsg,
              contentText:`© By Habibi`,buttons,headerType:4}
              prep = await Suneo.prepareMessageFromContent(from,{buttonsMessage},{quoted: ftroli})
              Suneo.relayWAMessage(prep)
           break
           case 'cecan': 
     ////////////////   if (!isRegister) return sendButMessage (from, daftar1, daftar2, daftar3, { quoted: ftroli})
					anu = await getBuffer(`https://api.lolhuman.xyz/api/random/cecan?apikey=${lolkey}`)
					////////ana = await getBuffer(anu.result.url)
					buttons = [{buttonId: `${prefix + command}`,buttonText:{displayText: `➡️Next`},type:1}]
              imageMsg = (await Suneo.prepareMessageMedia(anu, "imageMessage", { thumbnail: anu, })).imageMessage
              buttonsMessage = {footerText:'Nih:)', imageMessage: imageMsg,
              contentText:`© By Habibi`,buttons,headerType:4}
              prep = await Suneo.prepareMessageFromContent(from,{buttonsMessage},{quoted: ftroli})
              Suneo.relayWAMessage(prep)
           break 
					case 'darkjoke': 
     ////////////////   if (!isRegister) return sendButMessage (from, daftar1, daftar2, daftar3, { quoted: ftroli})
					anu = await getBuffer(`https://api.lolhuman.xyz/api/meme/darkjoke?apikey=${lolkey}`)
					////////ana = await getBuffer(anu.result.url)
					buttons = [{buttonId: `${prefix + command}`,buttonText:{displayText: `➡️Next`},type:1}]
              imageMsg = (await Suneo.prepareMessageMedia(anu, "imageMessage", { thumbnail: anu, })).imageMessage
              buttonsMessage = {footerText:'Nih:)', imageMessage: imageMsg,
              contentText:`© By Habibi`,buttons,headerType:4}
              prep = await Suneo.prepareMessageFromContent(from,{buttonsMessage},{quoted: ftroli})
              Suneo.relayWAMessage(prep)
           break
					break 
					case 'wallnime': 
					case 'wallpaperanime':
     ////////////////   if (!isRegister) return sendButMessage (from, daftar1, daftar2, daftar3, { quoted: ftroli})
					anu = await getBuffer(`https://api.lolhuman.xyz/api/random/wallnime?apikey=${lolkey}`)
					////////ana = await getBuffer(anu.result.url)
			       Suneo.sendMessage(from, anu, image, {quoted: ftroli})
					break 
					case 'patrickstik': 
					case 'stickerpatrick':
     ////////////////   if (!isRegister) return sendButMessage (from, daftar1, daftar2, daftar3, { quoted: ftroli})
					anu = await getBuffer(`https://api.lolhuman.xyz/api/sticker/patrick?apikey=${lolkey}`)
					////////ana = await getBuffer(anu.result.url)
			       Suneo.sendMessage(from, anu, sticker, {quoted: ftroli})
					break 
					case 'cogan': 
     ////////////////   if (!isRegister) return sendButMessage (from, daftar1, daftar2, daftar3, { quoted: ftroli})
					anu = await getBuffer(`https://api.lolhuman.xyz/api/random/cogan?apikey=Deffbotz`)
					////////ana = await getBuffer(anu.result.url)
					////////ana = await getBuffer(anu.result.url)
					buttons = [{buttonId: `${prefix + command}`,buttonText:{displayText: `➡️Next`},type:1}]
              imageMsg = (await Suneo.prepareMessageMedia(anu, "imageMessage", { thumbnail: anu, })).imageMessage
              buttonsMessage = {footerText:'Nih:)', imageMessage: imageMsg,
              contentText:`© By Habibi`,buttons,headerType:4}
              prep = await Suneo.prepareMessageFromContent(from,{buttonsMessage},{quoted: ftroli})
              Suneo.relayWAMessage(prep)
           break
           break
           case 'husbu': 
     ////////////////   if (!isRegister) return sendButMessage (from, daftar1, daftar2, daftar3, { quoted: ftroli})
					anu = await getBuffer(`https://rivalxc.herokuapp.com/api/randomimage/husbu`)
					////////ana = await getBuffer(anu.result.url)
					buttons = [{buttonId: `${prefix + command}`,buttonText:{displayText: `➡️Next`},type:1}]
              imageMsg = (await Suneo.prepareMessageMedia(anu, "imageMessage", { thumbnail: anu, })).imageMessage
              buttonsMessage = {footerText:'Nih:)', imageMessage: imageMsg,
              contentText:`© By Habibi`,buttons,headerType:4}
              prep = await Suneo.prepareMessageFromContent(from,{buttonsMessage},{quoted: ftroli})
              Suneo.relayWAMessage(prep)
           break
           case 'waifu': 
     ////////////////   if (!isRegister) return sendButMessage (from, daftar1, daftar2, daftar3, { quoted: ftroli})
					anu = await getBuffer(`https://rivalxc.herokuapp.com/api/randomimage/waifu`)
					////////ana = await getBuffer(anu.result.url)
					buttons = [{buttonId: `${prefix + command}`,buttonText:{displayText: `➡️Next`},type:1}]
              imageMsg = (await Suneo.prepareMessageMedia(anu, "imageMessage", { thumbnail: anu, })).imageMessage
              buttonsMessage = {footerText:'Nih:)', imageMessage: imageMsg,
              contentText:`© By Habibi`,buttons,headerType:4}
              prep = await Suneo.prepareMessageFromContent(from,{buttonsMessage},{quoted: ftroli})
              Suneo.relayWAMessage(prep)
           break
                    case 'quotesislami':
                    reply(`Waitt.....`)
                    get_result = await fetchJson(`https://api.lolhuman.xyz/api/quotes/islami?apikey=${lolkey}`)
                    get_result = get_result.result
                    nani = `Kata Kata: ${get_result}`
                    reply(nani)
                    break
                    case 'quotesanime':
                    reply(`Waitt.....`)
                    get_result = await fetchJson(`https://vallz-api.herokuapp.com/api/random/quotesanime?apikey=vall:v`)
                    get_result = get_result.quote
                    nani = `Kata Kata: ${get_result}`
                    reply(nani)
                    break
                    case 'artinama':
                    if (args.length < 1) return reply(`*Example :*\n${prefix}artinama Habibi`)
                    reply(`Waitt.....`)
                    query = args.join(" ")
                    get_result = await fetchJson(`https://api.lolhuman.xyz/api/artinama?apikey=${lolkey}&nama=${query}`)
                    get_result = get_result.result
                    nani = `Artinya : ${get_result}`
                    reply(nani)
                    break
                    case 'translate': // Like My Video
                 //////   //////////if (!isRegister) return sendButMessage (from, daftar1, daftar2, daftar3, { quoted: ftroli})
                 if (args.length < 1) return reply(`*Example :*\n${prefix}translate my name is`)
				reply(`[❕] Loading`)
				query = args.join(" ")
                    get_result = await fetchJson(`https://api-habib.herokuapp.com/api/translate?kata=${query}&apikey=Alphabot`)
                    get_result = get_result.result
                    trann = `
- TRANSLATE -
Arti Dari: ${query}
To translate: ${get_result.text}
Translete Ke Bahasa: ${get_result.to}`
reply(trann)
				break
					case 'hartatahta':
					///////////////if (!isRegister) return sendButMessage (from, daftar1, daftar2, daftar3, { quoted: ftroli})
					if (args.length < 1) return reply(`text nya mana contoh: ${prefix}hartatahta Habibi`)
					cokk = body.slice(12)
					reply(mess.wait)
					aruga = await getBuffer(`https://rivalxc.herokuapp.com/api/maker/harta-tahta?text=${cokk}`)
					Suneo.sendMessage(from, aruga, image, {quoted: ftroli})
					break 
					case 'naruto':
					///////////////if (!isRegister) return sendButMessage (from, daftar1, daftar2, daftar3, { quoted: ftroli})
					if (args.length < 1) return reply(`text nya mana contoh: ${prefix}naruto Habibi`)
					cokk = body.slice(8)
					reply(mess.wait)
					aruga = await getBuffer(`https://vallz-api.herokuapp.com/api/textpro/naruto?apikey=vall:v&text=${cokk}`)
					Suneo.sendMessage(from, aruga, image, {quoted: ftroli})
					break 
					case 'welcome':
     ///))///////  if (!isRegister) return sendButMessage (from, daftar1, daftar2, daftar3, { quoted: freply})
        if (!isGroupAdmins && !isOwner)return reply(mess.admin)
               if (!isGroup) return reply(mess.only.group)
               if (args.length < 1) return reply('!welcome enable/disable')
               if ((args[0]) === 'enable') {
               if (isWelkom) return reply('Udah aktif')
               welkom.push(from)
               fs.writeFileSync('./database/group/welcome.json', JSON.stringify(welkom))
               reply('Sukses mengaktifkan fitur welcome di group ini ✔️')
               } else if ((args[0]) === 'disable') {
               welkom.splice(from, 1)
               fs.writeFileSync('./database/group/welcome.json', JSON.stringify(welkom))
               reply('Sukses menonaktifkan fitur welcome di group ini ✔️')
               } else {
               reply('Enable untuk mengaktifkan, disable untuk menonaktifkan')
}
               break
					case 'storyanime':
					///////////////if (!isRegister) return sendButMessage (from, daftar1, daftar2, daftar3, { quoted: ftroli})
					reply(`Otewe, Maaf Kalo fitur ini ngirim nya lama karna kadang lag🙏`)
					aruga = await getBuffer(`https://vallz-api.herokuapp.com/api/anime/storyanime?apikey=vall:v`)
					Suneo.sendMessage(from, aruga, video, {quoted: ftroli})
					break 
					case 'costumgfx2':
					/////////////if (!isRegister) return sendButMessage (from, daftar1, daftar2, daftar3, { quoted: ftroli})
					if (args.length < 1) return reply(`text nya mana contoh: ${prefix}costumgfx2 Habibi`)
					cokk = body.slice(12)
					reply(mess.wait)
					aruga = await getBuffer(`https://rivalxc.herokuapp.com/api/canvas/gfx5?teks=${cokk}`)
					Suneo.sendMessage(from, aruga, image, {quoted: ftroli})
					break 
					case 'costumgfx3':
					/////////////if (!isRegister) return sendButMessage (from, daftar1, daftar2, daftar3, { quoted: ftroli})
					if (args.length < 1) return reply(`text nya mana contoh: ${prefix}costumgfx Habibi`)
					ct = body.slice(12)
					kntl1 = ct.split(" ")[0];
					kntl2 = ct.split("|")[1];
					reply(mess.wait)
					aruga = await getBuffer(`https://rivalxc.herokuapp.com/api/canvas/gfx3?teks1=${kntl1}&teks2=${kntl2}`)
					Suneo.sendMessage(from, aruga, image, {quoted: ftroli})
					break 
case 'rules':
ruls =`
╭─❒ 「 RULES BOT 」 ❒
├ 🪀 JANGAN TELFON BOT!
├ 🪀 JANGAN SPAM BOT!
├ 🪀 JANGAN SPAM OWNER BOT!
├ 🪀 JANGAN BULLY OWNER:)
├ 🪀 BERI JEDA 7 DETIK KETIKA MENGGUNAKAN BOT!
└❏
Nb: Jika Melanggar Block Permanen:b`
buttons = [{buttonId:`${prefix}allmenu`,buttonText:{displayText:'ALL MENU🕹'},type:1},{buttonId:`${prefix}rules`,buttonText:{displayText:'RULES BOT🔖'},type:1},{buttonId:`${prefix}owner`,buttonText:{displayText:'OWNER🔖'},type:1}]

               imageMsg = (await Suneo.prepareMessageMedia(fs.readFileSync(`./image/thumb.jpeg`), 'imageMessage', {thumbnail: fs.readFileSync(`./image/thumb.jpeg`)})).imageMessage

               buttonsMessage = {
               contentText: `${ruls}`,
               footerText: `© 2021 Simple Bot\nCreated By Soneo404`
              , imageMessage: imageMsg,
               buttons: buttons,
               headerType: 4
}

await Suneo.sendMessage(from, buttonsMessage, MessageType.buttonsMessage,{ quoted:ftroli, sendEphemeral: true, contextInfo: { forwardingScore: 508, isForwarded: true, "externalAdReply": {
"title": `Hallo Kak ${pushname}\n${ucapanWaktu}`,
"body": "",
"previewType": "PHOTO",
"thumbnailUrl": `https://ibb.co/FzLx165/Nakano.jpg`,
"thumbnail": fs.readFileSync('./stik/thumb.jpeg'),
"sourceUrl": ""
}
}
})
break
case 'attp':
           /////////////   if (!isRegister) return sendButMessage (from, daftar1, daftar2, daftar3, { quoted: ftroli})
              if (args.length == 0) return reply(`Example: ${prefix + command} itsmevall`)
              attp2 = await getBuffer(`https://api.lolhuman.xyz/api/attp?apikey=Deffbotz&text=${body.slice(6)}`)
				Suneo.sendMessage(from, attp2, sticker, {quoted: ftroli})
				break
 case 'pinterest':
		   if (args.length == 0) return reply(`Example: ${prefix + command} loli`)
    query = args.join(" ")
 reply (mess.wait)
    ini_url = await fetchJson(`http://api.lolhuman.xyz/api/pinterest?apikey=${lolkey}&query=${query}`)
    ini_url = ini_url.result
    buff = await getBuffer(ini_url)
    buttons = [{buttonId: `${prefix + command} ${query}`,buttonText:{displayText: `➡️Next`},type:1}]
              imageMsg = (await Suneo.prepareMessageMedia(buff, "imageMessage", { thumbnail: buff, })).imageMessage
              buttonsMessage = {footerText:'Jangan Lupa Donasi🗿', imageMessage: imageMsg,
              contentText:`klik Next untuk ke gambar selanjut nya`,buttons,headerType:4}
              prep = await Suneo.prepareMessageFromContent(from,{buttonsMessage},{quoted: ftroli})
              Suneo.relayWAMessage(prep)
        break
        case 'add':
        //////////      if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: ftrol})
			if (!isGroup) return reply(mess.only.group)
			if (!isGroupAdmins) return reply (mess.only.admin)
			if (!isBotGroupAdmins) return reply (`Bot Harus Jadi Admin`)
			if (!c) { 
			if (neo.message.extendedTextMessage === undefined || neo.message.extendedTextMessage === null) return reply('Reply targetnya!')
			add = neo.message.extendedTextMessage.contextInfo.participant
		    Suneo.groupAdd(from, [add])
			reply('Sukses menambahkan peserta')
			} else if (c) {
if (args[0].startsWith('08')) return reply('Gunakan kode negara')
orang = args[0] + '@s.whatsapp.net'
response = await Suneo.groupAdd(from, [orang])
o = response.participants[0]
let inv = (Object.values(o))
reply('Sukses menambahkan peserta')
if(inv[0].code == 409) return reply('Orang yang anda add sudah ada didalam Group!')
else if(inv[0].code == 403){
Suneo.sendMessage(from, `User private\n\nMengirim Undangan Group Ke @${c.split('@')[0]}`, MessageType.text, {quoted: neo, contextInfo: {mentionedJid: [orang]}})
Suneo.sendMessage(from, orang, inv[0].invite_code, inv[0].invite_code_exp, groupMetadata.subject , `Salah Satu Admin Mengundang Anda Masuk Ke Sini Silahkan Klik Bergabung Untuk Masuk`)
}
			}
				break
case 'owner2':
            case 'creato2e':
            case 'developer2':
            let ini_list = []
            for (let i of ownerNumber) {
            const vname = Suneo.contacts[i] != undefined ? Suneo.contacts[i].vname || Suneo.contacts[i].notify : undefined
            ini_list.push({
            "displayName": 'Suneo gx',
            "vcard": `BEGIN:VCARD\nVERSION:3.0\nN:Sy;Bot;;;\nFN:HabibiGZ\nORG:Sibuk!!;\nitem1.TEL;waid=6281555807465:+62 81555807465\nitem1.X-ABLabel:Ponsel\nEND:VCARD`
})
            }
            hehe = await Suneo.sendMessage(from, {
            "displayName": `${ini_list.length} kontak`,
            "contacts": ini_list 
            }, 'contactsArrayMessage', { quoted: ftroli })
            Suneo.sendMessage(from,`Nih Kak Owner Ku:)`,text,{quoted: hehe})
            break		
	case 'wangy':
if (!isRegister) return sendButMessage (from, daftar1, daftar2, daftar3, { quoted: ftroli})
if (!q) return
  qq = q.toUpperCase()
awikwok = `${qq} ${qq} ${qq} ❤️ ❤️ ❤️ WANGY WANGY WANGY WANGY HU HA HU HA HU HA, aaaah baunya rambut ${qq} wangyy aku mau nyiumin aroma wangynya ${qq} AAAAAAAAH ~ Rambutnya.... aaah rambutnya juga pengen aku elus-elus ~~ AAAAAH ${qq} keluar pertama kali di anime juga manis ❤️ ❤️ ❤️ banget AAAAAAAAH ${qq} AAAAA LUCCUUUUUUUUUUUUUUU............ ${qq} AAAAAAAAAAAAAAAAAAAAGH ❤️ ❤️ ❤️apa ? ${qq} itu gak nyata ? Cuma HALU katamu ? nggak, ngak ngak ngak ngak NGAAAAAAAAK GUA GAK PERCAYA ITU DIA NYATA NGAAAAAAAAAAAAAAAAAK PEDULI BANGSAAAAAT !! GUA GAK PEDULI SAMA KENYATAAN POKOKNYA GAK PEDULI. ❤️ ❤️ ❤️ ${qq} gw ... ${qq} di laptop ngeliatin gw, ${qq} .. kamu percaya sama aku ? aaaaaaaaaaah syukur ${q} aku gak mau merelakan ${qq} aaaaaah ❤️ ❤️ ❤️ YEAAAAAAAAAAAH GUA MASIH PUNYA ${qq} SENDIRI PUN NGGAK SAMA AAAAAAAAAAAAAAH`
reply(awikwok)
break
case 'cekwatak':
///////////////if (!isRegister) return sendButMessage (from, daftar1, daftar2, daftar3, { quoted: ftroli})
var namao = pushname
var prfx = await Seneo.getProfilePicture(sender)
const watak = ['top deh pokoknya','penyayang','pemurah','Pemarah','Pemaaf','Penurut','Baik','baperan','Baik-Hati','penyabar','UwU','Suka Membantu']
const wtk = watak[Math.floor(Math.random() * (watak.length))]
const ratenyaasu = ['100%','95%','90%','85%','80%','75%','70%','65%','60%','55%','50%','45%','40%','35%','30%','25%','20%','15%','10%','5%']
const akhlak = ratenyaasu[Math.floor(Math.random() * (ratenyaasu.length))]
const sifat = ['Penolong','Suka Membantu','Saling Menolong','Perhatian','Ngak Cuek','Romantis','Dermawan','Cool','Peduli Kepada Sesama','Suka Berkata Kasar']
const sft = sifat[Math.floor(Math.random() * (sifat.length))]
const hobby = ['Memasak','Membantu Atok','Mabar','Nobar','Coli','Colmek','Sosmedtan','Membantu Orang lain','Nonton Anime','Nonton Drakor','Naik Motor','Nyanyi','Menari','Bertumbuk','Menggambar','Foto fotoan Ga jelas','Maen Game','Berbicara Sendiri']
const hby = hobby[Math.floor(Math.random() * (hobby.length))]
const kelebihan = ['Soleh dan Soleha','Pintar','Rajin','Teladan']
const klbh = kelebihan[Math.floor(Math.random() * (kelebihan.length))]
const tipe = ['cool','idaman','Alami','Keren','Ideal','Dia Bamget','normal','elite','epic','Legend']
const typo = tipe[Math.floor(Math.random() * (tipe.length))]
await reply(`[ INTROGASI SUKSES ]\n\n[Nama]:${namao}\n\n[Watak]:${wtk}\n\n[Akhlak✨]:${akhlak}\n\n[Sifat]:${sft}\n\n[Hobby]:${hby}\n\n[Tipe]:${typo}\n\n[Kelebihan]:${klbh}\n\nNote\n\n_ini hanya main main_`)
break
    //END FITUR// 
	default:
	if (body.startsWith(`${prefix}${command}`)) {
                        aing = `
╭─❒ 「 COMMAND NOT FOUND! 」 ❒
├ 📖 *Nama :* *${pushname}*
├ 🪀 *Nomer :* @${sender.split("@")[0]}
├ 🗣️ *Command :* ${prefix}${command}
└❏`
buttons = [{buttonId: '!menu',buttonText:{displayText: 'BACK MENU🗒'},type:1}]
 buttonsMessage = {
contentText: `${aing}`,
footerText: 'COMAND TIDAK ADA SILAKAN CHEK KEMBALI DI .MENU',
buttons: buttons,
headerType: 1
 }
 prep = await Suneo.prepareMessageFromContent(from,{buttonsMessage},{})
 Suneo.relayWAMessage(prep)
				  }
				
if (budy.startsWith('x')){
try {
return Suneo.sendMessage(from, JSON.stringify(eval(budy.slice(2)),null,'\t'),text, {quoted: neo})
} catch(err) {
e = String(err)
reply(e)
}
}  

if (budy.startsWith('=>')){
if (!isOwner) return
try {
return Suneo.sendMessage(from, 
`${a}📥 Input: ${budy.slice(3)}

📤 OutPut: 
${JSON.stringify(eval(budy.slice(2)),null,'\t')}
${a}`
,text, {quoted:neo })
} catch(err) {
e = String(err)
reply(`${a} "err" :  "${e}"${a}`)
}
}
if (budy.startsWith('>')){
                if (!isOwner) return
                var konsol = budy.slice(2)
                Return = (sul) => {
                var sat = JSON.stringify(sul, null, 2)
                bang = util.format(sat)
                if (sat == undefined){
                bang = util.format(sul)
                }
                return reply(bang)
                }
                try {
                reply(util.format(eval(`;(async () => { ${konsol} })()`)))
                console.log('\x1b[1;37m>', '[', '\x1b[1;32mEXEC\x1b[1;37m', ']', time, color(">", "green"), 'from', color(sender.split('@')[0]), 'args :', color(args.length))
                } catch(e){
                 reply(String(e))
                }
                }

	}
	
	if (isTTT && isPlayer2){
if (budy.startsWith('Y')){
  tto = ky_ttt.filter(ghg => ghg.id.includes(from))
  tty = tto[0]
  angka = tto[0].angka
  ucapan = 
`*🎳 Game Tictactoe 🎲*

Player1 @${tty.player1.split('@')[0]}=❎
Player2 @${tty.player2.split('@')[0]}=⭕

Giliran = @${tty.player1.split('@')[0]}

   ${angka[1]}${angka[2]}${angka[3]}
   ${angka[4]}${angka[5]}${angka[6]}
   ${angka[7]}${angka[8]}${angka[9]}`
  Suneo.sendMessage(from, ucapan, text, {quoted: neo, contextInfo:{mentionedJid: [tty.player1,tty.player2]}})
  }
if (budy.startsWith('N')){
tto = ky_ttt.filter(ghg => ghg.id.includes(from))
tty = tto[0]
naa = ky_ttt.filter(toek => !toek.id.includes(from)) 
ky_ttt = naa
Suneo.sendMessage(from, `Yahh @${tty.player2.split('@')[0]} Menolak:(`,text,{quoted:neo,contextInfo:{mentionedJid:[tty.player2]}})
}
}

if (isTTT && isPlayer1){
nuber = parseInt(budy)
if (isNaN(nuber)) return
if (nuber < 1 || nuber > 9) return reply('Masukan Angka Dengan Benar')
main = ky_ttt.filter(hjh => hjh.id.includes(from)) 
if (!tttawal.includes(main[0].angka[nuber])) return reply('Udah Di Isi, Isi Yang Lain Gan')
if (main[0].gilir.includes(sender)) return reply('Tunggu Giliran Gan')
s = '❎'
main[0].angka[nuber] = s
main[0].gilir = main[0].player1
naa = ky_ttt.filter(hhg => !hhg.id.includes(from))
ky_ttt = naa
pop = main[0]
ky_ttt.push(pop)
tto = ky_ttt.filter(hgh => hgh.id.includes(from))
tty = tto[0]
angka = tto[0].angka
ttt = `${angka[1]}${angka[2]}${angka[3]}\n${angka[4]}${angka[5]}${angka[6]}\n${angka[7]}${angka[8]}${angka[9]}`

ucapmenang = () => {
ucapan1 = 
`*🎳Result Game Tictactoe 🎲*

*Yeyyy Permainan Di Menangkan Oleh* @${tty.player1.split('@')[0]}\n
*Ingin bermain lagi? ${prefix}tictactoe*`
ucapan2 = `*🎳Result Game Tictactoe 🎲*

*Hasil Akhir:*

${ttt}`
Suneo.sendMessage(from, ucapan1, text, {quoted: neo, contextInfo:{mentionedJid: [tty.player1]}})
naa = ky_ttt.filter(hhg => !hhg.id.includes(from))
return ky_ttt = naa
}

if (angka[1] == s && angka[2] == s && angka[3] == s) return ucapmenang()

if (angka[1] == s && angka[4] == s && angka[7] == s) return ucapmenang()

if (angka[1] == s && angka[5] == s && angka[9] == s) return ucapmenang()

if (angka[2] == s && angka[5] == s && angka[8] == s) return ucapmenang()

if (angka[4] == s && angka[5] == s && angka[6] == s) return ucapmenang()

if (angka[7] == s && angka[8] == s && angka[9] == s) return ucapmenang()

if (angka[3] == s && angka[5] == s && angka[7] == s) return ucapmenang()

if (angka[3] == s && angka[6] == s && angka[9] == s) return ucapmenang()

if (!ttt.includes('1️⃣') && !ttt.includes('2️⃣') && !ttt.includes('3️⃣') && ! ttt.includes('4️⃣') && !
ttt.includes('5️⃣') && !
ttt.includes('6️⃣') && ! ttt.includes('7️⃣') && ! ttt.includes('8️⃣') && ! ttt.includes('9️⃣')){
ucapan1 = `*🎳 Result Game Tictactoe 🎲*

*_Permainan Seri ??👌_*`
ucapan2 = `*🎳 Result Game Tictactoe 🎲*

*Hasil Akhir:*

${ttt}`
reply(ucapan1)
naa = ky_ttt.filter(hhg => !hhg.id.includes(from))
return ky_ttt = naa
}
ucapan = `*🎳 Game Tictactoe 🎲*

Player2 @${tty.player2.split('@')[0]}=⭕
Player1 @${tty.player1.split('@')[0]}=❎

Giliran = @${tty.player2.split('@')[0]}

${ttt}`
Suneo.sendMessage(from, ucapan, text, {quoted: neo, contextInfo:{mentionedJid: [tty.player1,tty.player2]}})
}
if (isTTT && isPlayer2){
nuber = parseInt(budy)
if (isNaN(nuber)) return
if (nuber < 1 || nuber > 9) return reply('Masukan Angka Dengan Benar')
main = ky_ttt.filter(hjh => hjh.id.includes(from)) 
if (!tttawal.includes(main[0].angka[nuber])) return reply('Udah Di Isi, Isi Yang Lain Gan')
if (main[0].gilir.includes(sender)) return reply('Tunggu Giliran Gan')
s = '⭕'
main[0].angka[nuber] = s
main[0].gilir = main[0].player2
naa = ky_ttt.filter(hhg => !hhg.id.includes(from))
ky_ttt = naa
pop = main[0]
ky_ttt.push(pop)
tto = ky_ttt.filter(hgh => hgh.id.includes(from))
tty = tto[0]
angka = tto[0].angka
ttt = `${angka[1]}${angka[2]}${angka[3]}\n${angka[4]}${angka[5]}${angka[6]}\n${angka[7]}${angka[8]}${angka[9]}`

ucapmenang = () => {
ucapan1 = `*🎳 Result Game Tictactoe 🎲*

*Yeyyy Permainan Di Menangkan Oleh* @${tty.player2.split('@')[0]}\n
*Ingin bermain lagi? ${prefix}tictactoe*`
ucapan2 = `*🎳 Game Tictactoe 🎲*

*Hasil Akhir:*

${ttt}`
Suneo.sendMessage(from, ucapan1, text, {quoted:neo, contextInfo:{mentionedJid: [tty.player2]}})
naa = ky_ttt.filter(hhg => !hhg.id.includes(from))
return ky_ttt = naa
}

if (angka[1] == s && angka[2] == s && angka[3] == s) return ucapmenang()
if (angka[1] == s && angka[4] == s && angka[7] == s) return ucapmenang()
if (angka[1] == s && angka[5] == s && angka[9] == s) return ucapmenang()
if (angka[2] == s && angka[5] == s && angka[8] == s) return ucapmenang()
if (angka[4] == s && angka[5] == s && angka[6] == s) return ucapmenang()
if (angka[7] == s && angka[8] == s && angka[9] == s) return ucapmenang()
if (angka[3] == s && angka[5] == s && angka[7] == s) return ucapmenang()
if (angka[3] == s && angka[6] == s && angka[9] == s) return ucapmenang()
if (!ttt.includes('1️⃣') && !ttt.includes('2️⃣') && !ttt.includes('3️⃣') && ! ttt.includes('4️⃣') && !
ttt.includes('5️⃣') && !
ttt.includes('6️⃣') && ! ttt.includes('7️⃣') && ! ttt.includes('8️⃣') && ! ttt.includes('9️⃣')){
ucapan1 = `*🎳Result Game Tictactoe 🎲*

*_Permainan Seri🗿👌*`
ucapan2 = `*🎳 Result Game Tictactoe 🎲*

*Hasil Akhir:*

${ttt}`
reply(ucapan1)
naa = ky_ttt.filter(hhg => !hhg.id.includes(from))
return ky_ttt = naa
}
ucapan = `*🎳 Game Tictactoe 🎲*

Player1 @${tty.player1.split('@')[0]}=⭕
Player2 @${tty.player2.split('@')[0]}=❎
   
Giliran = @${tty.player1.split('@')[0]}

${ttt}`
 Suneo.sendMessage(from, ucapan, text, {quoted: neo, contextInfo:{mentionedJid: [tty.player1,tty.player2]}})
} else {
}
	
if (isGroup && budy != undefined) {
	} else {
	console.log(color('[TEXT]', 'red'), 'SELF-MODE', color(sender.split('@')[0]))
	}		
	} catch (e) {
    e = String(e)
    if (!e.includes("this.isZero") && !e.includes("jid")) {
	console.log('Message : %s', color(e, 'green'))
        }
	// console.log(e)
	}
}


	
    
