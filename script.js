document.addEventListener('DOMContentLoaded', function () {
    const videoInput = document.getElementById('videoInput');
    const convertButton = document.getElementById('convertButton');
    const downloadButton = document.getElementById('downloadButton');
    const previewVideo = document.getElementById('previewVideo');

    let videoSource;

    videoInput.addEventListener('change', function (e) {
        const file = e.target.files[0];
        videoSource = URL.createObjectURL(file);
        previewVideo.src = videoSource;
    });

    convertButton.addEventListener('click', function () {
        if (!videoSource) {
            alert('Please upload a video first.');
            return;
        }

        // Perform black and white conversion (you may need a more advanced algorithm)
        // For simplicity, we'll just set the grayscale filter
        previewVideo.style.filter = 'grayscale(100%)';
    });

    downloadButton.addEventListener('click', function () {
        if (!videoSource) {
            alert('Please upload and convert a video first.');
            return;
        }

        // Create a temporary link and trigger the download
        const a = document.createElement('a');
        a.href = videoSource;
        a.download = 'bw_video.mp4';
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
    });
});
