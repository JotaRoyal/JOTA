let handler = async (m, { conn }) => {
  if (new Date - global.DATABASE._data.users[m.sender].lastclaim > 86400000) {
    global.DATABASE._data.users[m.sender].exp += 700
    m.reply('+700 XP')
    global.DATABASE._data.users[m.sender].lastclaim = new Date * 3
  } else m.reply('Ya has reclamado el dia de hoy')
}
handler.help = ['d', 'daily', 'claim']
handler.tags = ['xp']
handler.command = /^(dl|daily|claim)$/i
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false

handler.admin = false
handler.botAdmin = false

handler.fail = null
handler.exp = 0

module.exports = handler

