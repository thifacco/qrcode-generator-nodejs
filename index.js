const fs = require('fs');
const QRCode = require('qrcode');

// Obtém a URL e o nome do arquivo da linha de comando
const url = process.argv[2];
const filename = process.argv[3] || 'qrcode';

if (!url) {
    console.log('Por favor, forneça a URL como argumento.');
    process.exit(1);
}

// Gera o QR code
QRCode.toFile(`images/${filename}.png`, url, {
    color: {
        dark: '#000',   // Cor do primeiro plano (código escuro)
        light: '#FFF'   // Cor de fundo (código claro)
    }
}, function (err) {
    if (err) throw err;
    console.log(`QR code gerado com sucesso e salvo como ${filename}!`);
});
