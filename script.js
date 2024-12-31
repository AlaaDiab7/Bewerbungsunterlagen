function openCertificate(fileName) {
    const url = `certificates/${fileName}`;
    window.open(url, '_blank');
}

document.querySelectorAll('a').forEach(link => {
    link.addEventListener('mouseover', () => {
        link.style.color = '#ff5722';
    });
    link.addEventListener('mouseout', () => {
        link.style.color = '';
    });
});


function previewCertificate(fileName) {
    const iframe = document.getElementById('pdfPreview');
    iframe.src = `viewer.html?file=certificates/${fileName}`; 
}

function clearPreview() {
    const iframe = document.getElementById('pdfPreview');
    iframe.src = "";
}
