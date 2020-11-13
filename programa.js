// Globals
const window_width = window.innerWidth;
const window_center_x = window.innerWidth / 2;
const window_height = window.innerHeight;
const window_center_y = window.innerHeight / 2;

const coeficient_rotation_y = 15;
const content = document.querySelector('.content')

const images_array = [...document.querySelectorAll('img')];

images_array.map(function(element) {

    element.addEventListener('click', function() {
        gsap.to(element, {
            width: "60vw"
        })
    })

    let element_parent = element.parentElement;
    let element_parent_2nd = element_parent.parentElement;
    let element_parent_3rd = element_parent_2nd.parentElement;

    var element_css = "";
    var element_parent_css = "";
    var element_parent_2nd_css = "";
    var element_parent_3rd_css = "";

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

