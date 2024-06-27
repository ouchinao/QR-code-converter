// URLを短縮する関数
function shortenUrl(url) {
    return fetch(`https://tinyurl.com/api-create.php?url=${encodeURIComponent(url)}`)
        .then(response => response.text())
        .then(shortUrl => {
            console.log('APIによって短縮されたURL:', shortUrl);
            return shortUrl;
        })
        .catch(error => {
            console.error('APIを使用したURL短縮中にエラーが発生しました:', error);
            throw error;
        });
}

document.getElementById('generateQRCode').addEventListener('click', () => {
    const pdfInput = document.getElementById('pdfInput').files[0];
    if (!pdfInput) {
        alert('Please select a PDF file first.');
        return;
    }

    const reader = new FileReader();
    reader.onload = async function(event) {
        const pdfDataUrl = event.target.result;
        // URLを短縮する
        const shortUrl = await shortenUrl(pdfDataUrl);
        console.log(shortUrl)
        // QRコードを生成する
        const qr = new QRious({
            element: document.getElementById('qrCode'),
            value: shortUrl,
            size: 250,
            level: 'H',
        });

        // データURIをリンクとして表示する
        const qrCodeLink = document.getElementById('qrCodeLink');
        qrCodeLink.innerHTML = `Access your PDF <a href="${shortUrl}" target="_blank">here</a>`;
    };
    
    reader.readAsDataURL(pdfInput);
});
