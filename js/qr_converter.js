document.getElementById('generateQRCode').addEventListener('click', () => {
    const urlInput = document.getElementById('urlInput').value;
    if (!urlInput) {
        alert('URLを入力してください。');
        return;
    }

    const qr = new QRious({
        element: document.getElementById('qrCode'),
        value: urlInput,
        size: 250,
        level: 'H',
    });
    
    // QR コードをダウンロードするためのリンクを作成
    const downloadLink = document.createElement('a');
    downloadLink.href = qr.toDataURL(); // QR コードの画像データを取得
    downloadLink.download = 'QRCode.png'; // ダウンロードするファイル名
    document.body.appendChild(downloadLink);
    downloadLink.click(); // ダウンロードリンクを自動クリック
    document.body.removeChild(downloadLink); // リンクを削除
});
