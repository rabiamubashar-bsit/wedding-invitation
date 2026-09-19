// Synchronized 3D Dual Wing-Swing Palace Gate Control Node
function openInvitation() {
    const gateOverlay = document.getElementById('gate-overlay');
    const mainContent = document.getElementById('main-content');
    
    // Animate both doors outwards synchronously
    gateOverlay.classList.add('gate-open');
    
    // Phase in the underlying starry night setup frame elements
    mainContent.classList.remove('main-content-hidden');
    mainContent.classList.add('main-content-visible');
    
    // Terminate space layer allocation safely after rotation path finishes
    setTimeout(() => {
        gateOverlay.classList.add('gate-fade-out');
        setTimeout(() => {
            gateOverlay.style.display = 'none';
        }, 1200);
    }, 1600);

    // Initialize the background effects (Stars + Gold Petals + Butterflies)
    startStarryAmbientEffects();
}

// Wedding Target Date Countdown Node Execution (October 13, 2026)
const targetDate = new Date("Oct 13, 2026 13:00:00").getTime();
const runClock = setInterval(() => {
    const timeNow = new Date().getTime();
    const distanceLeft = targetDate - timeNow;
    const days = Math.floor(distanceLeft / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distanceLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distanceLeft % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distanceLeft % (1000 * 60)) / 1000);

    document.getElementById("days").innerText = days.toString().padStart(2, '0');
    document.getElementById("hours").innerText = hours.toString().padStart(2, '0');
    document.getElementById("minutes").innerText = minutes.toString().padStart(2, '0');
    document.getElementById("seconds").innerText = seconds.toString().padStart(2, '0');

    if (distanceLeft < 0) {
        clearInterval(runClock);
        document.getElementById("countdown").innerHTML = "<h3 style='color: #ffd700; font-size: 1.5rem;'>The Mubarak Celebration Has Begun!</h3>";
    }
}, 1000);

// --- Dual Ambient Starry Particle Engine Framework ---
function startStarryAmbientEffects() {
    const canvas = document.getElementById('animation-container');
    const starCount = 30; // Shimmering background stars
    const goldPetalCount = 15; // Golden falling accents
    const butterflyCount = 5; // Flapping golden butterfly nodes

    for (let i = 0; i < starCount; i++) { spawnStar(canvas); }
    for (let i = 0; i < goldPetalCount; i++) { spawnGoldPetal(canvas); }
    for (let i = 0; i < butterflyCount; i++) { spawnButterfly(canvas); }
}

// Procedural Shimmer Stars Rising
function spawnStar(canvas) {
    const star = document.createElement('div');
    star.classList.add('shimmer-star');
    
    const size = Math.random() * 3 + 1;
    star.style.width = `${size}px`;
    star.style.height = `${size}px`;
    star.style.left = `${Math.random() * 100}vw`;
    
    const speed = Math.random() * 8 + 7;
    star.style.animationDuration = `${speed}s`;
    star.style.animationDelay = `${Math.random() * 7}s`;

    canvas.appendChild(star);
    setTimeout(() => { star.remove(); spawnStar(canvas); }, (speed + 7) * 1000);
}

// Procedural Golden Falling Accents
function spawnGoldPetal(canvas) {
    const petal = document.createElement('div');
    petal.classList.add('rose-petal');
    
    const scale = Math.random() * 10 + 8;
    petal.style.width = `${scale}px`;
    petal.style.height = `${scale}px`;
    petal.style.left = `${Math.random() * 100}vw`;
    
    const airSpeed = Math.random() * 5 + 6;
    petal.style.animationDuration = `${airSpeed}s`;
    petal.style.animationDelay = `${Math.random() * 5}s`;

    canvas.appendChild(petal);
    setTimeout(() => { petal.remove(); spawnGoldPetal(canvas); }, (airSpeed + 5) * 1000);
}

// Procedural Flying Butterflies Generator Loop 
function spawnButterfly(canvas) {
    const butterfly = document.createElement('div');
    butterfly.classList.add('butterfly');

    const leftWing = document.createElement('div');
    leftWing.classList.add('wing', 'wing-left');
    const rightWing = document.createElement('div');
    rightWing.classList.add('wing', 'wing-right');
    
    butterfly.appendChild(leftWing);
    butterfly.appendChild(rightWing);

    butterfly.style.top = `${Math.random() * 50 + 20}vh`; 
    const flyDuration = Math.random() * 5 + 8;
    butterfly.style.animationDuration = `${flyDuration}s`;
    butterfly.style.animationDelay = `${Math.random() * 6}s`;

    canvas.appendChild(butterfly);
    setTimeout(() => { butterfly.remove(); spawnButterfly(canvas); }, (flyDuration + 6) * 1000);
}

// RSVP Form Processing Control Link Handle Nodes
document.getElementById('rsvpForm').addEventListener('submit', function(e) {
    e.preventDefault();
    const alertBox = document.getElementById('formFeedback');
    alertBox.innerText = "✨ Response Received! Thank you for sharing our joy.";
    alertBox.className = ""; 
    alertBox.style.color = "#ffd700";
    this.reset();
});

    

