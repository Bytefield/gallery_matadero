const images = [
    {
        name: "digital_mariachi.png",
        text: "digital_mariachi",
        title: "Title 1",
        path: "./assets/images/gallery/categorias/desktop/",
        tags: []
    },
    {
        name: "digital_rediseño.png",
        text: "digital_rediseño",
        title: "Title 1",
        path: "./assets/images/gallery/categorias/desktop/",
        tags: []
    },
    {
        name: "espacios_mimm.png",
        text: "espacios_mimm",
        title: "Title 1",
        path: "./assets/images/gallery/categorias/desktop/",
        tags: []
    },
    {
        name: "espacios_mo.png",
        text: "espacios_mo",
        title: "Title 2",
        path: "./assets/images/gallery/categorias/desktop/",
        tags: []
    },
    {
        name: "grafico_identidadvisual.png",
        text: "grafico_identidadvisual",
        title: "Title 2",
        path: "./assets/images/gallery/categorias/desktop/",
        tags: []
    },
    {
        name: "grafico_iñor.png",
        text: "grafico_iñor",
        title: "Title 2",
        path: "./assets/images/gallery/categorias/desktop/",
        tags: []
    },
    {
        name: "grafico_señaletica.png",
        text: "grafico_señaletica",
        title: "Title 3",
        path: "./assets/images/gallery/categorias/desktop/",
        tags: []
    },
    {
        name: "grafico_yasuni.png",
        text: "grafico_yasuni",
        title: "Title 3",
        path: "./assets/images/gallery/categorias/desktop/",
        tags: []
    },
    {
        name: "integral_concentrico.png",
        text: "integral_concentrico",
        title: "Title 3",
        path: "./assets/images/gallery/categorias/desktop/",
        tags: []
    },
    {
        name: "integral_manufactura.png",
        text: "integral_manufactura",
        title: "Title 4",
        path: "./assets/images/gallery/categorias/desktop/",
        tags: []
    },
    {
        name: "integral_sonidostextiles.png",
        text: "integral_sonidostextiles",
        title: "Title 4",
        path: "./assets/images/gallery/categorias/desktop/",
        tags: []
    },
    {
        name: "integral_usule.png",
        text: "integral_usule",
        title: "Title 4",
        path: "./assets/images/gallery/categorias/desktop/",
        tags: []
    },
    {
        name: "moda_arekuna.png",
        text: "moda_arekuna",
        title: "Title 5",
        path: "./assets/images/gallery/categorias/desktop/",
        tags: []
    },
    {
        name: "moda_coleccion.png",
        text: "moda_coleccion",
        title: "Title 5",
        path: "./assets/images/gallery/categorias/desktop/",
        tags: []
    },
    {
        name: "moda_escapular.png",
        text: "moda_escapular",
        title: "Title 5",
        path: "./assets/images/gallery/categorias/desktop/",
        tags: []
    },
    {
        name: "moda_puna.png",
        text: "moda_puna",
        title: "Title 6",
        path: "./assets/images/gallery/categorias/desktop/",
        tags: []
    },
    {
        name: "producto_aplicador.png",
        text: "producto_aplicador",
        title: "Title 6",
        path: "./assets/images/gallery/categorias/desktop/",
        tags: []
    },
    {
        name: "producto_frontera.png",
        text: "producto_frontera",
        title: "Title 6",
        path: "./assets/images/gallery/categorias/desktop/",
        tags: []
    },
    {
        name: "producto_kit.png",
        text: "producto_kit",
        title: "Title 7",
        path: "./assets/images/gallery/categorias/desktop/",
        tags: []
    },
    {
        name: "producto_natura.png",
        text: "producto_natura",
        title: "Title 7",
        path: "./assets/images/gallery/categorias/desktop/",
        tags: []
    }
];
const images_path = "./assets/images/gallery/categorias/desktop/";
var image_elements_array = [];

const images_to_display = 7
const positioning_coeficient = 50;
const scrolling_coeficient = 1000 ;
const scrolling_ratio = 2.4;
const number_total_images = images.length;
const scrolling_height = scrolling_coeficient * number_total_images;
const scrolling_ratio_coeficient = scrolling_coeficient / scrolling_ratio;

const gallery_element = document.querySelector('.gallery');
const scrolling_element = gallery_element.querySelector('.scroll_item ')

// Set scroll item height for scrolling
scrolling_element.style.height = scrolling_height + 'px'

images.map(function(image, index) {

    let image_path = image.path + image.name;
    let image_class = 'image' + index;
    let image_text = image.text;
    let image_title = image.title;

    let new_title = document.createElement('p');
    new_title.innerText = image_title;
    new_title.classList.add('image_title');
    let new_text = document.createElement('p');
    new_text.innerText = image_text;
    new_text.classList.add('image_text')
    let new_image = document.createElement('img');
    new_image.setAttribute('src', image_path);
    new_image.setAttribute('alt', 'image number ' + index);
    new_image.classList.add("image", image_class);
    let image_container = document.createElement('div');
    image_container.classList.add('image_container')
    image_container.append(new_image);
    image_container.append(new_title);
    image_container.append(new_text);


    if (index < images_to_display) new_image.classList.add('visible');
    if (index == 0) image_container.classList.add('text_visible');

    gallery_element.append(image_container);
    image_elements_array.push(new_image);

}, false);

// function to position visible elements
var position_elements = function(elements_array) {
    elements_array.map(function(element, index) {

        let move_coeficient = positioning_coeficient * index
        let move_x = move_coeficient * 2.5;
        let move_y = move_coeficient * -1;
        let move_z = move_coeficient * -1;

        gsap.to(element, {
            x: move_x,
            y: move_y,
            z: move_z
        });
    });
}

// initial positioning
position_elements(image_elements_array);

// Get elements for image scrolling
const get_elements = function() {
    let first_in_visible = gallery_element.querySelectorAll('.visible')[0];
    let last_in_visible = gallery_element.querySelectorAll('.visible')[5]
    let last_in_visible_index = image_elements_array.indexOf(last_in_visible);
    let item_one_plus = (last_in_visible_index < image_elements_array.length) ? image_elements_array[last_in_visible_index + 1] : image_elements_array[image_elements_array.length - 1];
    let first_in_visible_index = image_elements_array.indexOf(first_in_visible);
    let item_one_minus = (first_in_visible_index > 0) ? image_elements_array[first_in_visible_index - 1] : image_elements_array[0];

    let elements = {
        first: first_in_visible,
        one_plus: item_one_plus,
        last: last_in_visible,
        one_minus: item_one_minus
    }

    return elements;
}

let counter = 0;
var scroll_value = 0;
var last_scroll = 0;
var forward = true;
var visibles_array = [];
let time_line = new TimelineMax();
gallery_element.addEventListener('scroll', () => {

    scroll_value = gallery_element.scrollTop - (counter * scrolling_ratio_coeficient);
    // let forward = last_scroll < gallery_element.scrollTop;

    if(last_scroll > gallery_element.scrollTop) forward = false;
    else forward = true;

    if((scroll_value >= scrolling_coeficient) && forward && (counter <= image_elements_array.length)) {

        counter++;

        let elements = get_elements();

        time_line.to(elements.first, 0.75, {
            // rotateY: 45,
            autoAlpha: 0,
            onComplete: function() {

                visibles_array = [...gallery_element.querySelectorAll('.visible')];
                visibles_array[0].parentElement.classList.remove('text_visible')
                visibles_array[1].parentElement.classList.add('text_visible')

                elements.one_plus.classList.add('visible');
                elements.first.classList.remove('visible');

                // Reposition all visible images
                visibles_array = [...gallery_element.querySelectorAll('.visible')];
                position_elements(visibles_array);
            }
        });
    } else if ((scroll_value <= scrolling_coeficient) && !forward && (counter >= 0)){

        counter--;

        let elements = get_elements();

        time_line.to(elements.last, 0.75, {
            rotateY: 0,
            autoAlpha: 1,
            onComplete: function() {
                time_line.to(elements.one_minus, 0.25, {
                    rotateY: 0,
                    autoAlpha: 1,
                    onComplete: function() {

                        visibles_array = [...gallery_element.querySelectorAll('.visible')];
                        visibles_array[0].parentElement.classList.remove('text_visible');

                        elements.one_minus.classList.add('visible');
                        elements.last.classList.remove('visible');

                        // reposition all images
                        visibles_array = [...gallery_element.querySelectorAll('.visible')];
                        visibles_array[0].parentElement.classList.add('text_visible')
                        position_elements(visibles_array);
                    }
                });
            }
        });
    }

        last_scroll = gallery_element.scrollTop;


        // move images
});

// identify first and 7+1 in row
// a && a+7