const images_array = ["foto1.jpg","foto2.jpg","foto3.jpg","foto4.jpg","foto5.jpg","foto6.jpg","foto1.jpg","foto2.jpg","foto3.jpg","foto4.jpg","foto5.jpg","foto6.jpg","foto1.jpg","foto2.jpg","foto3.jpg","foto4.jpg","foto5.jpg","foto6.jpg","foto1.jpg","foto2.jpg","foto3.jpg","foto4.jpg","foto5.jpg","foto6.jpg"];
const images_path = "./assets/images/gallery/";
var image_elements_array = [];

const coeficient = 75;
const number_of_images = images_array.length;
const scrolling_coeficient = 500 ;
const scrolling_height = scrolling_coeficient * number_of_images;
const scrolling_ratio = 2.4;
const scrolling_ratio_coeficient = scrolling_coeficient / scrolling_ratio;

const gallery_element = document.querySelector('.gallery');
const scrolling_element = gallery_element.querySelector('.scroll_item ')

// Set scroll item height for scrolling
scrolling_element.style.height = scrolling_height + 'px'

images_array.map(function(image, index) {

    let image_path = images_path + image;
    let image_class = 'image' + index

    new_image = document.createElement('img');
    new_image.setAttribute('src', image_path);
    new_image.setAttribute('alt', 'image number ' + index);
    new_image.classList.add("image", image_class);

    if (index < 7) new_image.classList.add('visible');

    gallery_element.append(new_image);
    image_elements_array.push(new_image);

}, false);

image_elements_array.map(function(element, index) {

    let move_coeficient = coeficient * index
    let move_x = move_coeficient;
    let move_y = move_coeficient * -1;
    let move_z = move_coeficient * -1;

    gsap.set(element, {
        x: move_x,
        y: move_y,
        z: move_z
    });

    element.setAttribute('data-x', move_x);
    element.setAttribute('data-y', move_y);
    element.setAttribute('data-z', move_z);
});



let counter = 0;
var scroll_value = 0;
gallery_element.addEventListener('scroll', () => {
    scroll_value = gallery_element.scrollTop - (counter * scrolling_ratio_coeficient);
    if(scroll_value >= scrolling_coeficient) {
        counter++;
        console.log('click', counter, scroll_value)
        // first  image?

        // last image?
        // move images
    }
});

// identify first and 7+1 in row
// a && a+7