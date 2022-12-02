var handler = async m => m.reply(`
╭─「 Donasi 」
│ • TELKOMSEL [081280020649]
│ • DANA [087877155288]
│ • OVO [081280020649]
│ • GOPAY [081280020649]
│ • SHOPPY PAY [081280020649]
│ • Saweria [https://saweria.co/botstyle]
╰────
╭─「 Hubungi 」
│ > Ingin donasi? Wa.me/6281280020649
╰────
`.trim()) // Tambah sendiri kalo mau
handler.help = ['donasi']
handler.tags = ['info']
handler.command = /^dona(te|si)$/i

module.exports = handler
