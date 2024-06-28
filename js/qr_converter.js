document.getElementById('generateQRCode').addEventListener('click', () => {
    const urlInput = document.getElementById('urlInput').value;
    if (!urlInput) {
        alert('URLを入力してください。');
        return;
    }

    reader.onload = async function(event) {
        const pdfDataUrl = event.target.result;
        // QRコードを生成する
        const qr = new QRious({
            element: document.getElementById('qrCode'),
            value: pdfDataUrl,
            size: 250,
            level: 'H',
        });

        // データURIをリンクとして表示する
        const qrCodeLink = document.getElementById('qrCodeLink');
        qrCodeLink.innerHTML = `Access your PDF <a href="${pdfDataUrl}" target="_blank">here</a>`;
    };
    
    reader.readAsDataURL(pdfInput);
});
