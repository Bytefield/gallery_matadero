const images_array = ["foto1.jpg","foto2.jpg","foto3.jpg","foto4.jpg","foto5.jpg","foto6.jpg","foto1.jpg","foto2.jpg","foto3.jpg","foto4.jpg","foto5.jpg","foto6.jpg","foto1.jpg","foto2.jpg","foto3.jpg","foto4.jpg","foto5.jpg","foto6.jpg","foto1.jpg","foto2.jpg","foto3.jpg","foto4.jpg","foto5.jpg","foto6.jpg"];
const images_path = "./assets/images/gallery/";
var image_elements_array = [];

var coeficient = 50;

const gallery_element = document.querySelector('.gallery');

images_array.map(function(image, index) {

    let image_path = images_path + image;
    let image_class = 'image' + index

    new_image = document.createElement('img');
    new_image.setAttribute('src', image_path);
    new_image.setAttribute('alt', 'image number ' + index);
    new_image.classList.add("image", image_class);

    if (index <= 7) new_image.classList.add('visible');

    gallery_element.append(new_image);
    image_elements_array.push(new_image);

}, false);

image_elements_array.map(function(element, index) {

    let move_coeficient = coeficient * index

    gsap.set(element, {
        x: move_coeficient,
        y: move_coeficient * -1,
        z: move_coeficient * -1
    });
});

let counter = 0;
gallery_element.addEventListener('scroll', event => {
    counter ++;
    if (counter % 25 == 0) console.log('click!')


}, false);