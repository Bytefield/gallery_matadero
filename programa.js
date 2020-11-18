// Globals
const window_width = window.innerWidth;
const window_center_x = window.innerWidth / 2;
const window_height = window.innerHeight;
const window_center_y = window.innerHeight / 2;

const coeficient_rotation_y = 15;
const content = document.querySelector('.content')

const left = content.querySelector('.left');
const left_top = left.querySelector('.top');
const first = left_top.querySelector('.image_container:first-of-type');
const second = left_top.querySelector('.image_container:last-of-type');
const left_bottom = left.querySelector('.bottom');
const third = left_bottom.querySelector('.image_container');
const right = content.querySelector('.right');
const fourth = right.querySelector('.right .image_container:first-of-type')
const fifth = right.querySelector('.right .image_container:last-of-type')

const position_elements = function () {
    gsap.set(left, {
        x: 0,
        y: 75,
        z: -75,
        rotateY: 50
    })

    gsap.set(first, {
        x: 45,
        y: 10,
        rotateY: 0
    })

    gsap.set(second, {
        x: 345,
        y: 75
    })

    gsap.set(third, {
        x: 175,
        y: -15,
        z: 20
    })

    gsap.set(right, {
        x: 250,
        y: 0,
        z: -475,
        rotateY: -70
    })

    gsap.set(fourth, {
        x: 120,
        y: 20,
        z: -30,
        rotateY: -10
    })

    gsap.set(fifth, {
        x: -120,
        y: -25,
        z: 25
    })
}

position_elements();

const reset_transform = function() {
    gsap.to(left, {
        x: 0,
        y: 0,
        z: 0,
        rotateY: 0
    })

    gsap.to(second, {
        x: 0,
        y: 0,
        z: 0,
    })

    gsap.to(third, {
        x: 0,
        y: 0,
        z: 0,
    })

    gsap.to(right, {
        x: 0,
        y: 0,
        z: 0,
        rotateY: 0
    })

    gsap.to(fourth, {
        x: 0,
        y: 0,
        z: 0,
    })

    gsap.to(fifth, {
        x: 0,
        y: 0,
        z: 0,
    })
}

var toggle_class = function(element, className) {
    if (element.classList.contains(className)) {
        element.classList.remove(className);
    } else {
        element.classList.add(className);
    }
}

const images_array = [...document.querySelectorAll('.image_container')];
var element_prev_width = 0;

var last_clicked;
let close_button = document.querySelector('.close');

images_array.map(function(element) {
    element.addEventListener('click', function(event) {
        let parent_element = event.target.parentElement;
        let is_active = parent_element.classList.contains('active');
        if (!is_active) {
            last_clicked = event.target;

            reset_transform();
            toggle_class(element, 'active');

            // Make clicked image zoom out
            gsap.to(event.target, {
                position: "absolute",
                width: "70vw",
                left: "15vw",
                top: "10vh"
            })

            // Make parent containers go to top left corner
            // so zoomed element is centered
            gsap.to(event.target.parentElement, {
                position: "absolute",
                left: 0,
                top: 0,
                rotateY: 0
            })

            gsap.to(event.target.parentElement.parentElement, {
                position: "absolute",
                left: 0,
                top: 0,
                rotateY: 0
            })

            let elements_not_active = [...document.querySelectorAll('.image_container:not(.active)')];
            elements_not_active.map(function(element) {
                gsap.to(element, 0.1, {
                    autoAlpha: 0
                });
            });

            toggle_class(close_button, 'hidden');
        } else {
            window.location.href = event.target.getAttribute('data-url') || "#";
        }
    });
});

close_button.addEventListener('click', function() {

    let parent_contains = last_clicked.parentElement.parentElement.classList.contains('left');
    let parent_2nd_contains = last_clicked.parentElement.parentElement.parentElement.classList.contains('left');
    let last_clicked_width = (parent_contains || parent_2nd_contains) ? "200%" : "100%";

    gsap.to(last_clicked, {
        position: "relative",
        top: 0,
        left: 0,
        width: last_clicked_width
    });
    gsap.to(last_clicked.parentElement, {
        position: "relative"
    });
    gsap.to(last_clicked.parentElement.parentElement, {
        position: "relative"
    });

    toggle_class(last_clicked.parentElement, 'active');
    toggle_class(close_button, 'hidden');

    let elements = [...document.querySelectorAll('.image_container')];
    elements.map(element => {
        gsap.to(element, {
            autoAlpha: 1
        })
    });

    position_elements();
});

var rotate_gallery = function(event) {
    let x = event.clientX;
    let y = event.clientY;

    let rotation_angle_Y = coeficient_rotation_y * (x - window_center_x)/window_width;

    gsap.to(content, {
        rotateY: rotation_angle_Y
    });
}

document.addEventListener('mousemove', rotate_gallery);

