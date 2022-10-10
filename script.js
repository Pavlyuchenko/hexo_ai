onload = function () {
    var images = [
        "http://images.unsplash.com/photo-1661435805015-37e730f47f9c",
        "http://images.unsplash.com/photo-1661697522363-24ad7adc2bc5",
        "http://images.unsplash.com/photo-1661697522363-24ad7adc2bc5",
        "http://images.unsplash.com/photo-1661435805015-37e730f47f9c",
        "http://images.unsplash.com/photo-1661697522363-24ad7adc2bc5",
        "http://images.unsplash.com/photo-1661435805015-37e730f47f9c",
        "http://images.unsplash.com/photo-1661435805015-37e730f47f9c",
        "http://images.unsplash.com/photo-1661697522363-24ad7adc2bc5",
        "http://images.unsplash.com/photo-1661697522363-24ad7adc2bc5",
        "http://images.unsplash.com/photo-1661435805015-37e730f47f9c",
        "http://images.unsplash.com/photo-1661435805015-37e730f47f9c",
        "http://images.unsplash.com/photo-1661697522363-24ad7adc2bc5",
        "http://images.unsplash.com/photo-1661697522363-24ad7adc2bc5",
        "http://images.unsplash.com/photo-1661435805015-37e730f47f9c",
        "http://images.unsplash.com/photo-1661697522363-24ad7adc2bc5",
        "http://images.unsplash.com/photo-1661435805015-37e730f47f9c",
        "http://images.unsplash.com/photo-1661435805015-37e730f47f9c",
        "http://images.unsplash.com/photo-1661697522363-24ad7adc2bc5",
        "http://images.unsplash.com/photo-1661697522363-24ad7adc2bc5",
        "http://images.unsplash.com/photo-1661435805015-37e730f47f9c",
    ];

    var imagesDOM = this.document.getElementsByClassName("image");

    for (let i = 0; i < imagesDOM.length; i++) {
        let newImg = new Image();
        newImg.addEventListener("click", showModal);

        // When the image is given a new source, apply it to a DOM image
        // after it has loaded
        newImg.onload = function () {
            imagesDOM[i].src = newImg.src;
        };

        // Set the source to a really big image
        newImg.src = images[i];
    }
};

function showModal(e) {
    var modal = document.getElementById("modal");
    var modalImage = document.getElementById("modal-image");
    modal.style.display = "flex";
    modalImage.src = e.src;

    var modalDownload = document.getElementById("modal-download");
    modalDownload.href = e.src;
    modalDownload.download = e.src.name;
}
function closeModal() {
    var modal = document.getElementById("modal");
    modal.style.display = "none";
}
async function toDataURL(url) {
    const blob = await fetch(url).then((res) => res.blob());
    return URL.createObjectURL(blob);
}
async function downloadImage() {
    const a = document.createElement("a");
    a.href = await toDataURL(document.getElementById("modal-image").src);
    a.download = "HexoAI_image.png";
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
}

function showHamburger() {
    var hamburger = document.getElementById("menu");
    hamburger.classList.toggle("show");
}
