// Globals
const window_width = window.innerWidth;
const window_center_x = window.innerWidth / 2;
const window_height = window.innerHeight;
const window_center_y = window.innerHeight / 2;

const coeficient_rotation_y = 15;
const content = document.querySelector('.content')

const left = content.querySelector('.left');
const left_top = left.querySelector('.top');
const first = left_top.querySelector('img:first-of-type');
const second = left_top.querySelector('img:last-of-type');
const left_bottom = left.querySelector('.bottom');
const third = left_bottom.querySelector('img');
const right = content.querySelector('.right');
const fourth = right.querySelector('.right img:first-of-type')
const fifth = right.querySelector('.right img:last-of-type')

gsap.set(left, {
    x: 190,
    y: 75,
    z: -10,
    rotateY: 52
})

gsap.set(first, {
    x: 35,
    y: 10,
    rotateY: 15
})

gsap.set(second, {
    x: 20,
    y: 74
})

gsap.set(third, {
    x: 194,
    y: -24,
    z: 65
})

gsap.set(right, {
    x: 135,
    y: 150,
    z: -125,
    rotateY: -60
})

gsap.set(fourth, {
    x: 120,
    y: 20,
    z: -30,
    rotateY: -10
})

console.log(fourth);

gsap.set(fifth, {
    x: -120,
    y: -25,
    z: 25
})

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

var toggleClass = function(element, className) {
    if (element.classList.contains(className)) {
        element.classList.remove(className);
    } else {
        element.classList.add(className);
    }
}

const images_array = [...document.querySelectorAll('img')];
var element_prev_width = 0;

images_array.map(function(element) {

    element.addEventListener('click', function(event) {
        reset_transform();
        toggleClass(element, 'active');

        gsap.to(event.target, {
            position: "absolute",
            width: "70vw",
            left: "15vw",
            top: "10vh"
        })

        gsap.to(event.target.parentElement, {
            position: "absolute",
            left: 0,
            top: 0
        })
        let elements_not_active = [...document.querySelectorAll('img:not(.active)')];
        elements_not_active.map(function(element) {
            gsap.to(element, 0.1, {
                autoAlpha: 0
            })
        });
    })



    // On mouse enter/leave not working as it should

    // element.addEventListener('mouseenter', function(event) {
    //     // element_css = element.style.cssText;
    //     // element_parent_css = element_parent.style.cssText;
    //     // element_parent_2nd_css = element_parent_2nd.style.cssText;
    //     // element_parent_3rd_css = element_parent_3rd.style.cssText;

    //     // element.style.transform = ""
    //     // element_parent.style.transform = ""
    //     // element_parent_2nd.style.transform = ""
    //     // element_parent_3rd.style.transform = ""

    //     gsap.to(element, {
    //         position: "absolute",
    //         width: "70vw",
    //         left: 0,
    //         top: -50
    //     });
    //     gsap.to(element_parent_2nd, {
    //         rotateY: 0
    //     });

    //     console.log('click');

    // });

    // element.addEventListener('mouseleave', function(event) {
    //     gsap.to(element_parent_3rd, {
    //         transformStyle: "preserve-3d"
    //     })
    // });
})


var rotate_gallery = function(event) {
    let x = event.clientX;
    let y = event.clientY;

    let rotation_angle_Y = coeficient_rotation_y * (x - window_center_x)/window_width;

    gsap.to(content, {
        rotateY: rotation_angle_Y
    });
}

document.addEventListener('mousemove', rotate_gallery);

