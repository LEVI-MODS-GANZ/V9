const qrku = "https://i.ibb.co/MnbqZ0N/qr-Aguz-Familia-07-06-22-1654614928.png"

let handler = async (m, { conn, usedPrefix }) => conn.sendButtonImg(m.chat, qrku, `
╭─「 Donasi • Dana 」
│ • byu [085172446692]
│ • Dana  [085172446692]
╰────
╭─「 *NOTE* 」
│ > Ingin donasi? wa.me/6285172446692
│ _Hasil donasi akan digunakan buat sewa_
│ _atau beli *RDP/VPS* agar bot bisa jalan_
│ _24jam tanpa kendala_
╰────
`.trim(), wm, 'Menu', usedPrefix + 'menu', m) // Tambah sendiri kalo mau
handler.help = ['donasi']
handler.tags = ['about']
handler.command = /^dona(te|si)$/i

module.exports = handler
