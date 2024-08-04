
function generateQRCode() {
    let URL = document.getElementById('url').value;
    document.getElementById('qrcode').innerHTML = ""; 
    var qrcode = new QRCode(document.getElementById("qrcode"), {
        text: URL,
        width: 180,
        height: 180
    });
}


function downloadQRCode() {
    var qrCodeElement = document.getElementById("qrcode").getElementsByTagName("img")[0];
    var qrCodeURL = qrCodeElement.src;

    var downloadLink = document.createElement("a");
    downloadLink.href = qrCodeURL;
    downloadLink.download = "qrcode.png";
    document.body.appendChild(downloadLink);
    downloadLink.click();
    document.body.removeChild(downloadLink);
} 