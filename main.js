const {
    WAConnection: _WAConnection,
    MessageType,
    Presence,
    Mimetype,
    GroupSettingChange
} = require('@adiwajshing/baileys')
const simple = require('./lib/simple')
let WAConnection = simple.WAConnection(_WAConnection)
let Hotcode = new WAConnection()
const fs = require('fs')
const { banner, start, success } = require('./lib/functions')
const { color, bgcolor } = require('./lib/color')
const welcome = require('./message/group')
const chalk = require('chalk');
const colors = require('colors');
const spin = require('spinnies');
const async = require('async');
const CFonts = require('cfonts');
const os = require('os');

require('./Habibi.js')
nocache('./Habibi.js', module => console.log(`${module} is now updated!`))

const starts = async (Suneo = new WAConnection()) => {
    Suneo.logger.level = 'warn'
    Suneo.version = [2, 2143, 3]
    Suneo.browserDescription = [ 'SuneoBot', 'FireFox', '3.0' ]
    
    Suneo.on('qr', () => {
        console.log(color('[','white'), color('!','red'), color(']','white'), color(' Scan bang'))
    })

    fs.existsSync('./session.json') && Suneo.loadAuthInfo('./session.json')
    Suneo.on('connecting', () => {
        console.log(bgcolor(`Connecting..`, 'red'))
    })
    Suneo.on('open', () => {
        //////success('2', 'Connected')
        setTimeout( () => {
        	console.log(bgcolor(`🌹Welcome Owner`, 'red'))
	    	}, 1000)    		    	     	
    })
    await Suneo.connect({timeoutMs: 30*1000})
        fs.writeFileSync('./session.json', JSON.stringify(Suneo.base64EncodedAuthInfo(), null, '\t'))
        
Suneo.on('group-participants-update', async (anu) => {
		await welcome(Suneo, anu)
	})
    Suneo.on('chat-update', async (message) => {
        require('./Habibi.js')(Suneo, message)
    })
}

/**
 * Uncache if there is file change
 * @param {string} module Module name or path
 * @param {function} cb <optional> 
 */
function nocache(module, cb = () => { }) {
    console.log('Module', `'${module}'`, 'is now being watched for changes')
    fs.watchFile(require.resolve(module), async () => {
        await uncache(require.resolve(module))
        cb(module)
    })
}

/**
 * Uncache a module
 * @param {string} module Module name or path
 */
function uncache(module = '.') {
    return new Promise((resolve, reject) => {
        try {
            delete require.cache[require.resolve(module)]
            resolve()
        } catch (e) {
            reject(e)
        }
    })
}

starts()
