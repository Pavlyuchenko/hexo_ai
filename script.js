onload = function () {
    var images = [
        "https://images.unsplash.com/photo-1661435805015-37e730f47f9c",
        "https://images.unsplash.com/photo-1661697522363-24ad7adc2bc5",
        "https://images.unsplash.com/photo-1661697522363-24ad7adc2bc5",
        "https://images.unsplash.com/photo-1661435805015-37e730f47f9c",
        "https://images.unsplash.com/photo-1661697522363-24ad7adc2bc5",
        "https://images.unsplash.com/photo-1661435805015-37e730f47f9c",
        "https://images.unsplash.com/photo-1661435805015-37e730f47f9c",
        "https://images.unsplash.com/photo-1661697522363-24ad7adc2bc5",
        "https://images.unsplash.com/photo-1661697522363-24ad7adc2bc5",
        "https://images.unsplash.com/photo-1661435805015-37e730f47f9c",
        "https://images.unsplash.com/photo-1661435805015-37e730f47f9c",
        "https://images.unsplash.com/photo-1661697522363-24ad7adc2bc5",
        "https://images.unsplash.com/photo-1661697522363-24ad7adc2bc5",
        "https://images.unsplash.com/photo-1661435805015-37e730f47f9c",
        "https://images.unsplash.com/photo-1661697522363-24ad7adc2bc5",
        "https://images.unsplash.com/photo-1661435805015-37e730f47f9c",
        "https://images.unsplash.com/photo-1661435805015-37e730f47f9c",
        "https://images.unsplash.com/photo-1661697522363-24ad7adc2bc5",
        "https://images.unsplash.com/photo-1661697522363-24ad7adc2bc5",
        "https://images.unsplash.com/photo-1661435805015-37e730f47f9c",
    ];

    var imagesDOM = this.document.getElementsByClassName("image");

    for (let i = 0; i < imagesDOM.length; i++) {
        let newImg = new Image();

        // When the image is given a new source, apply it to a DOM image
        // after it has loaded
        newImg.onload = function () {
            imagesDOM[i].src = newImg.src;
        };

        // Set the source to a really big image
        newImg.src = images[i];
    }
};
