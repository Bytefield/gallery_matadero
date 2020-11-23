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
    gsap.to(left, {
        x: 0,
        y: 10,
        z: -75,
        rotateY: 50
    })

    gsap.to(left_top, {
        x: 0,
        y: 0,
        position: "relative"
    })

    gsap.to(first, {
        x: 0,
        y: 63,
        z: 0,
        rotateY: 5
    })

    gsap.set(second, {
        x: 280,
        y: 86,
        rotateY: 5
    })

    gsap.set(third, {
        x: 201,
        y: -55,
        z: 90,
        rotateY: 9
    })

    gsap.set(right, {
        x: 250,
        y: 50,
        z: -475,
        rotateY: -70
    })

    gsap.set(fourth, {
        x: 179,
        y: 6,
        z: -30,
        rotateY: -2
    })

    gsap.set(fifth, {
        x: -125,
        y: -60,
        z: 85,
        rotateY: 12
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

    gsap.to(first, {
        x: 0,
        y: 0,
        z: 0,
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
    let clicked_image = element.querySelector('img');
    clicked_image.addEventListener('click', function(event) {
        let parent_element = event.target.parentElement;
        let is_active = parent_element.classList.contains('active');
        if (!is_active) {
            last_clicked = event.target;

            reset_transform();
            toggle_class(element, 'active');

            // Make clicked image zoom out
            gsap.to(event.target, 1, {
                position: "absolute",
                width: "60vw",
                left: "20vw",
                top: "15vh"
            })

            // Make parent containers go to top left corner
            // so zoomed element is centered
            gsap.to(event.target.parentElement, 1, {
                position: "absolute",
                left: 0,
                top: 0,
                rotateY: 0
            })

            gsap.to(event.target.parentElement.parentElement, 1, {
                position: "absolute",
                left: 0,
                top: 0,
                rotateY: 0
            })

            let elements_not_active = [...document.querySelectorAll('.image_container:not(.active)')];
            elements_not_active.map(function(element) {
                gsap.to(element, 0.01, {
                    autoAlpha: 0
                });
            });

            toggle_class(close_button, 'hidden');
        } else {
            let url = event.target.getAttribute('data-url') || '#';
            let link = document.createElement('a');
            link.setAttribute('href', url);
            link.setAttribute('target', "_parent");
            link.click();
        }
    });
});

close_button.addEventListener('click', function() {

    console.log(last_clicked);

    let parent_contains = last_clicked.closest('left');
    var last_clicked_width;
    if (last_clicked == first.querySelector('img')) {
        last_clicked_width = "160%";
    } else if (last_clicked == second.querySelector('img')) {
        last_clicked_width = "200%";
    } else if (last_clicked == third.querySelector('img')) {
        last_clicked_width = "170%";
    } else if (last_clicked == fourth.querySelector('img')) {
        last_clicked_width = "88%";
     } else if (last_clicked == fifth.querySelector('img')) {
        last_clicked_width = "90%";
    }

    gsap.to(last_clicked, {
        position: "relative",
        top: 0,
        left: 0,
        width: last_clicked_width || 0
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

