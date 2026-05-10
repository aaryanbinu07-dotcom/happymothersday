function createHeart() {
    const heart = document.createElement('div');
    heart.classList.add('heart');
    
    // Randomize position and size
    heart.style.left = Math.random() * 100 + "vw";
    heart.style.animationDuration = Math.random() * 2 + 3 + "s";
    
    // Heart symbol
    heart.innerText = '❤';
    heart.style.fontSize = Math.random() * 20 + 10 + "px";
    
    document.getElementById('heart-container').appendChild(heart);
    
    // Remove heart after animation ends
    setTimeout(() => {
        heart.remove();
    }, 5000);
}

// Create a new heart every 300ms
setInterval(createHeart, 300);

window.addEventListener('load', function() {
    const loader = document.getElementById('loader');
    
    // 1500ms matches the CSS animation time
    setTimeout(() => {
        loader.classList.add('fade-out');
        
        setTimeout(() => {
            loader.style.display = 'none';
        }, 800); 
    }, 2000); // Added a tiny bit of extra time to let her see the 100% bar
});