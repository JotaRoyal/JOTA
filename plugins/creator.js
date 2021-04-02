let handler = function (m) {
  // this.sendContact(m.chat, '34644364340', 'JotaRoyal', m)
  this.sendContact(m.chat, '0', '34644364340', m)
}
handler.help = ['owner', 'creator']
handler.tags = ['info']

handler.command = /^(owner|creator)$/i

module.exports = handler
