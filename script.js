const testimonials = [
    {
    photoUrl:"Images/Cherise G.jpg",
    text: "This is simply unbelievable! I would be lost without Apple. The very best. Not able to tell you how happy I am with Apple.",
    name: "Cherise G",
    },
    {
    photoUrl:"Images/Rosetta Q.jpg",
    text: "I would also like to say thank you to all your staff. Wow what great service, I love it! Apple impressed me on multiple levels.",
    name: "Rosetta Q",
  },
  {
    photoUrl:"Images/Constantine V.jpg",
    text: "Thank you for making it painless, pleasant and most of all hassle free! I wish I would have thought of it first. The very best.",
    name: "Constantine V",
  },
];

const imgEl = document.querySelector("img");
const textEl = document.querySelector(".text");
const nameEl = document.querySelector(".name");

if (imgEl && textEl && nameEl) {

let currentIndex = 0;

updateTestimonial();

function updateTestimonial() {
    const {name, photoUrl, text} = testimonials[currentIndex];
    imgEl.src = photoUrl;
    textEl.innerHTML = text;
    nameEl.innerText = name;
    
    currentIndex++;
    
    if(currentIndex === testimonials.length) {
        currentIndex = 0;
    }
    
    setTimeout(() => {
        updateTestimonial();
    }, 1000);
}
}