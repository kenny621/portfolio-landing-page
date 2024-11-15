document.addEventListener('DOMContentLoaded', () => {
    const sections = [
    { id: 'section1', name: 'Home' },
    { id: 'section2', name: 'About' },
    { id: 'section3', name: 'Gallery' },
    { id: 'section4', name: 'Skills' },
    { id: 'section5', name: 'Contact' }
    ];

    const navbar = document.getElementById('navbar');

    // Dynamically add li to nav navbar
    sections.forEach(section => {
    const li = document.createElement('li');
    const a = document.createElement('a');
    a.href = `#${section.id}`;
    a.textContent = section.name;
    a.setAttribute('data-id', section.id);
    li.appendChild(a);
    navbar.appendChild(li);
    });

    // Change active on scroll
    window.addEventListener('scroll', () => {
    let current = '';

    sections.forEach(section => {
        const sectionElement = document.getElementById(section.id);
        const sectionTop = sectionElement.offsetTop;
        if (pageYOffset >= sectionTop - 60) {
        current = section.id;
        }
    });

    document.querySelectorAll('#navbar a').forEach(a => {
        a.classList.remove('active');
        if (a.getAttribute('data-id') === current) {
        a.classList.add('active');
        }
    });
    });
});


// Contact Form

const inputs =  document.querySelectorAll(".input");

// move place holder to top line
function focusFunc() {
    let parent = this.parentNode;
    parent.classList.add("focus");
}

// moves placeholder back into place
function blurFunc() {
    let parent = this.parentNode;
    if(this.value == ""){
        parent.classList.remove("focus");
    }    
}

inputs.forEach((input) => {
    input.addEventListener("focus", focusFunc);
    input.addEventListener("blur", blurFunc);
});





