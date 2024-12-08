document.addEventListener('DOMContentLoaded', () => {
    const downloadButton = document.getElementById('download-button');
    const userAgent = navigator.userAgent.toLowerCase();
    const apkPath = './apk/app-debug.apk';

    if (/android/.test(userAgent)) {
        downloadButton.textContent = 'Instalar App';
        downloadButton.addEventListener('click', () => {
            window.location.href = apkPath;
        });
    } else {
        downloadButton.textContent = 'Descargar APK';
        downloadButton.addEventListener('click', () => {
            window.location.href = apkPath;
        });
    }
});
