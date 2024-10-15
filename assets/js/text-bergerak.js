  const texts = ["Programer ", "Freelancer ", "Video Editor "];
let index = 0;
let charIndex = 0;
let currentText = '';
let isDeleting = false;

function typeEffect() {
    const textElement = document.getElementById('changing-text');
    
    if (!isDeleting && charIndex <= texts[index].length) {
        currentText = texts[index].substring(0, charIndex);
        textElement.innerHTML = currentText;
        charIndex++;
    }

    if (isDeleting && charIndex > 0) {
        currentText = texts[index].substring(0, charIndex);
        textElement.innerHTML = currentText;
        charIndex--;
    }

    if (!isDeleting && charIndex === texts[index].length) {
        // Pause before deleting
        isDeleting = true;
        setTimeout(typeEffect, 1000); // Pause for 1 second
        return;
    }

    if (isDeleting && charIndex === 0) {
        isDeleting = false;
        index = (index + 1) % texts.length; // Move to the next text
    }

    setTimeout(typeEffect, isDeleting ? 150 : 200); // Typing speed
}

// Start typing effect
typeEffect();