// Initialize global variables
let currentPhotoIndex = 0;
const photos = [
    { url: "yumi/pink.jpg", message: "You're the melody to my code! Happy Birthday! 🎵" },
    { url: "yumi/blue.jpg", message: "Remember our first project together? Best debugging partner ever! 💻" },
    { url: "yumi/black.jpg", message: "Your voice lights up every room just like your code lights up every project! ✨" },
    { url: "yumi/red.jpg", message: "To many more years of friendship, singing, and coding marathons! 🎂" },
    { url: "yumi/pink2.jpg", message: "Your talent knows no bounds - from functions to high notes! 🎤" },
    { url: "yumi/red.jpg", message: "Thanks for being the constant in my life's algorithm! 💖" }
];

const memories = [
    { date: "9th November, 2024", title: "Freshers Night", description: "We already knew each other, but that night — with your barefoot laughter and endless giggles — felt like the real beginning.", media: "yumi/fresh.jpg", type: "image" },
    { date: "19th January, 2025", title: "Convocation Day", description: "What started off boring turned magical beside you — photos, laughter, and memories I didn't know I needed!", media: "yumi/convocation.jpg", type: "image" },
    { date: "9th March, 2025", title: "Ecstasia", description: "I totally goofed up my outfit — but enjoyment through the night with you made it one of the best evenings ever!", media: "yumi/party2.jpg", type: "image" },
    { date: "22nd March, 2025", title: "First Workshop Together", description: "We paired up — solving bugs, laughing in between, making even code feel like a memory worth saving!", media: "yumi/py2.jpg", type: "image" },
    { date: "7th April, 2025", title: "DTI-Group Study_Outing", description: "From chasing deadlines to chasing sunsets after our outing — you turned every group study into something unforgettable.", media: "yumi/outing.jpg", type: "image" }
];

// Background music setup
const backgroundMusic = new Howl({
    src: ['./bdaybg.mp3'], // Replace with actual music URL
    loop: true,
    volume: 0.5,
    autoplay: true,
});

// Set up DOM when content is loaded
document.addEventListener('DOMContentLoaded', function() {
    initCountdown();
    createStars();
    createBalloons();
    setupCursorTrail();
    setupAudioControl();
    createTimeline();
    setupScrollAnimations();
    initHeartGraph();
    setupCandles();
    createPopupMessages();
    createClouds();

});


    // Cloud creation
    function createClouds() {
        const cloudsContainer = document.getElementById('clouds');
        const numClouds = 5;
        
        for (let i = 0; i < numClouds; i++) {
            const cloud = document.createElement('div');
            cloud.classList.add('cloud');
            
            const size = Math.random() * 100 + 100;
            cloud.style.width = `${size}px`;
            cloud.style.height = `${size * 0.6}px`;
            
            cloud.style.left = `${Math.random() * 70}%`;
            cloud.style.top = `${Math.random() * 150}%`;
            
            cloud.style.animation = `floatCloud ${Math.random() * 10 + 10}s linear infinite`;
            
            cloudsContainer.appendChild(cloud);
        }
    }

    // Music Notes
    function createMusicNotes(x, y) {
        const notes = ['♪', '♫', '♩', '♬', '♭', '♮'];
        const numNotes = Math.floor(Math.random() * 5) + 3;
        
        for (let i = 0; i < numNotes; i++) {
            const note = document.createElement('div');
            note.classList.add('music-note');
            note.textContent = notes[Math.floor(Math.random() * notes.length)];
            note.style.left = `${x + Math.random() * 50 - 25}px`;
            note.style.top = `${y + Math.random() * 10}px`;
            document.body.appendChild(note);
            setTimeout(() => note.remove(), 4000);
        }
    }

    // Rainbow
    function createRainbow(x, y) {
        const rainbow = document.createElement('div');
        rainbow.classList.add('rainbow');
        rainbow.style.left = `${x - 40}px`;
        rainbow.style.top = `${y + 20}px`;
        const colors = ['#FF9AA2','#FFB7B2','#FFDAC1','#E2F0CB','#B5EAD7','#C7CEEA'];
        colors.forEach((color, index) => {
            const arc = document.createElement('div');
            arc.classList.add('rainbow-arc');
            arc.style.borderTop = `4px solid ${color}`;
            arc.style.bottom = `${index * 5}px`;
            rainbow.appendChild(arc);
        });
        document.body.appendChild(rainbow);
        setTimeout(() => rainbow.remove(), 3000);
    }





    // On load
    document.addEventListener('DOMContentLoaded', () => {
        createClouds();
        // Optional: Uncomment if you define them
        // createCreatures();
        // createBubbles();
    });

// Initialize countdown timer
function initCountdown() {
    const targetDate = new Date('May 6, 2025 00:00:00').getTime();
    
    function updateCountdown() {
        const now = new Date().getTime();
        const distance = targetDate - now;
        
        if (distance < 0) {
            document.getElementById('countdown').innerHTML = `<div class="happy-birthday">It's Your Birthday Today! 🎉</div>`;
            return;
        }
        
        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);
        
        document.getElementById('days').textContent = String(days).padStart(2, '0');
        document.getElementById('hours').textContent = String(hours).padStart(2, '0');
        document.getElementById('minutes').textContent = String(minutes).padStart(2, '0');
        document.getElementById('seconds').textContent = String(seconds).padStart(2, '0');
    }
    
    updateCountdown();
    setInterval(updateCountdown, 1000);
    
    // Animate the countdown blocks
    gsap.from('.time-block', {
        y: 50,
        opacity: 0,
        duration: 1,
        stagger: 0.2,
        ease: 'back.out(1.7)'
    });
}

// Create animated stars in the background
function createStars() {
    const starsContainer = document.getElementById('stars');
    const numStars = 100;
    
    for (let i = 0; i < numStars; i++) {
        const star = document.createElement('div');
        star.classList.add('star');
        
        const size = Math.random() * 4 + 1;
        star.style.width = `${size}px`;
        star.style.height = `${size}px`;
        
        star.style.left = `${Math.random() * 100}%`;
        star.style.top = `${Math.random() * 100}%`;
        star.style.animationDuration = `${Math.random() * 3 + 2}s`;
        star.style.animationDelay = `${Math.random() * 2}s`;
        
        starsContainer.appendChild(star);
    }
}

// Create floating balloons
function createBalloons() {
    const balloonsContainer = document.getElementById('balloons');
    const numBalloons = 25;
    const colors = ['#FF9AA2', '#FFB7B2', '#FFDAC1', '#E2F0CB', '#B5EAD7', '#C7CEEA'];
    
    for (let i = 0; i < numBalloons; i++) {
        const balloon = document.createElement('div');
        balloon.classList.add('balloon');
        
        const size = Math.random() * 60 + 70;
        balloon.style.width = `${size}px`;
        balloon.style.height = `${size * 1.2}px`;
        
        const colorIdx = Math.floor(Math.random() * colors.length);
        balloon.style.backgroundColor = colors[colorIdx];
        
        balloon.style.left = `${Math.random() * 100}%`;
        balloon.style.animationDuration = `${Math.random() * 15 + 15}s`;
        balloon.style.animationDelay = `${Math.random() * 10}s`;
        
        const string = document.createElement('div');
        string.classList.add('balloon-string');
        balloon.appendChild(string);
        
        balloonsContainer.appendChild(balloon);
    }
}

function setupCursorTrail() {
    const cursorTrail = document.getElementById('cursor-trail');
    
    // Add global style for heart particles if not already present
    if (!document.getElementById('heart-particle-style')) {
        const globalStyle = document.createElement('style');
        globalStyle.id = 'heart-particle-style';
        globalStyle.textContent = `
            .cursor-particle {
                position: absolute;
                display: inline-block;
                transform-origin: center;
                animation: fadeOut 1s forwards;
                pointer-events: none;
            }
            
            @keyframes fadeOut {
                0% { opacity: 1; }
                100% { opacity: 0; }
            }
        `;
        document.head.appendChild(globalStyle);
    }
    
    document.addEventListener('mousemove', function(e) {
        // Create SVG heart
        const particle = document.createElementNS("http://www.w3.org/2000/svg", "svg");
        particle.classList.add('cursor-particle');
        
        // Size (same range as original)
        const size = Math.random() * 30 + 5;
        particle.setAttribute('width', size);
        particle.setAttribute('height', size);
        particle.setAttribute('viewBox', '0 0 24 24');
        
        // Position at mouse coordinates
        particle.style.left = `${e.clientX}px`;
        particle.style.top = `${e.clientY}px`;
        
        // Create heart path
        const heartPath = document.createElementNS("http://www.w3.org/2000/svg", "path");
        // This is a proper heart SVG path
        heartPath.setAttribute('d', 'M12,21.35L10.55,20.03C5.4,15.36 2,12.27 2,8.5C2,5.41 4.42,3 7.5,3C9.24,3 10.91,3.81 12,5.08C13.09,3.81 14.76,3 16.5,3C19.58,3 22,5.41 22,8.5C22,12.27 18.6,15.36 13.45,20.03L12,21.35Z');
        
        // Set color (same purple to pink hues as original)
        const hue = Math.random() * 80 + 300;
        heartPath.setAttribute('fill', `hsl(${hue}, 100%, 70%)`);
        
        particle.appendChild(heartPath);
        
        // Add random rotation for variety
        const rotation = Math.random() * 40 - 20; // -20 to +20 degrees
        particle.style.transform = `translate(-50%, -50%) rotate(${rotation}deg)`;
        
        cursorTrail.appendChild(particle);
        
        // Remove the particle after animation (same as original)
        setTimeout(() => {
            particle.remove();
        }, 1000);
    });
}

// Set up audio controls
function setupAudioControl() {
    const musicToggle = document.getElementById('music-toggle');
    let isPlaying = false;
    
    musicToggle.addEventListener('click', function() {
        if (isPlaying) {
            backgroundMusic.pause();
            musicToggle.classList.remove('active');
        } else {
            backgroundMusic.play();
            musicToggle.classList.add('active');
        }
        isPlaying = !isPlaying;
    });
}

 // Create music notes when balloons are clicked
 function createMusicNotes(x, y) {
    const notes = ['♪', '♫', '♩', '♬', '♭', '♮'];
    const numNotes = Math.floor(Math.random() * 5) + 3;
    
    for (let i = 0; i < numNotes; i++) {
        const note = document.createElement('div');
        note.classList.add('music-note');
        
        const noteChar = notes[Math.floor(Math.random() * notes.length)];
        note.textContent = noteChar;
        
        note.style.left = `${x + Math.random() * 50 - 25}px`;
        note.style.top = `${y + Math.random() * 10}px`;
        
        document.body.appendChild(note);
        
        // Remove note after animation completes
        setTimeout(() => {
            note.remove();
        }, 4000);
    }
}

// Create rainbow effect
function createRainbow(x, y) {
    const rainbow = document.createElement('div');
    rainbow.classList.add('rainbow');
    rainbow.style.left = `${x}px`;
    rainbow.style.top = `${y + 20}px`;
    
    const colors = [
        '#FF9AA2', 
        '#FFB7B2', 
        '#FFDAC1', 
        '#E2F0CB', 
        '#B5EAD7', 
        '#C7CEEA'
    ];
    
    // Create rainbow arcs
    colors.forEach((color, index) => {
        const arc = document.createElement('div');
        arc.classList.add('rainbow-arc');
        arc.style.borderTop = `4px solid ${color}`;
        arc.style.bottom = `${index * 5}px`;
        rainbow.appendChild(arc);
    });
    
    document.body.appendChild(rainbow);
    
    // Remove rainbow after animation completes
    setTimeout(() => {
        rainbow.remove();
    }, 3000);
}

// Create confetti
function createConfetti(x, y) {
    const colors = ['#FF9AA2', '#FFB7B2', '#FFDAC1', '#E2F0CB', '#B5EAD7', '#C7CEEA'];
    const numConfetti = Math.floor(Math.random() * 15) + 10;
    
    for (let i = 0; i < numConfetti; i++) {
        const confetti = document.createElement('div');
        confetti.classList.add('confetti');
        
        const colorIdx = Math.floor(Math.random() * colors.length);
        confetti.style.backgroundColor = colors[colorIdx];
        
        // Random shapes
        if (Math.random() > 0.5) {
            confetti.style.borderRadius = '50%';
        } else {
            const shapes = ['5px', '0%', '50%'];
            confetti.style.borderRadius = shapes[Math.floor(Math.random() * shapes.length)];
        }
        
        confetti.style.left = `${x + Math.random() * 100 - 50}px`;
        confetti.style.top = `${y - 20}px`;
        
        // Random rotation and movement
        confetti.style.animationDuration = `${Math.random() * 2 + 2}s`;
        confetti.style.transform = `rotate(${Math.random() * 360}deg)`;
        
        document.body.appendChild(confetti);
        
        // Remove confetti after animation completes
        setTimeout(() => {
            confetti.remove();
        }, 4000);
    }
}



    

document.addEventListener("DOMContentLoaded", () => {
    const giftBox = document.getElementById("gift-box");
    const wishMessage = document.getElementById("wish-message");
    const closeBtn = document.getElementById("close-btn");
  
    giftBox.addEventListener("click", () => {
      wishMessage.classList.remove("hidden");
      createConfetti(50); // make 50 paper pieces
    });
  
    closeBtn.addEventListener("click", () => {
      wishMessage.classList.add("hidden");
    });
  
    
  });
  
  
// Create timeline of memories
function createTimeline() {
    const timeline = document.querySelector('.timeline');
    
    memories.forEach((memory, index) => {
        const item = document.createElement('div');
        item.classList.add('timeline-item');
        
        if (index % 2 === 0) {
            item.classList.add('left');
        } else {
            item.classList.add('right');
        }
        
        const content = `
            <div class="timeline-dot"></div>
            <div class="timeline-date">${memory.date}</div>
            <div class="timeline-content">
                <h3>${memory.title}</h3>
                <div class="timeline-media">
                    ${memory.type === 'image' 
                        ? `<img src="${memory.media}" alt="${memory.title}">`
                        : `<div class="video-placeholder" data-src="${memory.media}">
                            <div class="play-button">▶</div>
                          </div>`
                    }
                </div>
                <p>${memory.description}</p>
            </div>
        `;
        
        item.innerHTML = content;
        timeline.appendChild(item);
    });
    
    // Set up intersection observer for timeline animation
    const timelineItems = document.querySelectorAll('.timeline-item');
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate');
            }
        });
    }, { threshold: 0.3 });
    
    timelineItems.forEach(item => {
        observer.observe(item);
    });
    
    // Handle video placeholders
    document.querySelectorAll('.video-placeholder').forEach(placeholder => {
        placeholder.addEventListener('click', function() {
            const videoSrc = this.getAttribute('data-src');
            const videoElement = document.createElement('video');
            videoElement.src = videoSrc;
            videoElement.controls = true;
            videoElement.autoplay = true;
            
            this.parentNode.replaceChild(videoElement, this);
        });
    });
}

// Set up scroll animations for sections
function setupScrollAnimations() {
    const sections = document.querySelectorAll('.section');
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                
                // Animate section titles
                const title = entry.target.querySelector('.section-title');
                if (title) {
                    gsap.from(title, {
                        y: 50,
                        opacity: 0,
                        duration: 1,
                        ease: 'back.out(1.7)'
                    });
                }
                
                // Special animations for specific sections
                if (entry.target.id === 'cake-section') {
                    animateCake();
                }
                
                if (entry.target.id === 'heart-graph') {
                    // Reinitialize heart graph when in view
                    initHeartGraph();
                }
            }
        });
    }, { threshold: 0.2 });
    
    sections.forEach(section => {
        observer.observe(section);
    });
}

// Heart graph using p5.js
function initHeartGraph() {
    const heartCanvas = document.getElementById('heart-canvas');
    
    // Clear previous canvas if any
    while (heartCanvas.firstChild) {
        heartCanvas.removeChild(heartCanvas.firstChild);
    }
    
    // Create p5 sketch
    new p5(function(p) {
        let particles = [];
        const numParticles = 200;
        
        p.setup = function() {
            const canvas = p.createCanvas(400, 400);
            canvas.parent('heart-canvas');
            
            // Create particles along heart curve
            for (let i = 0; i < numParticles; i++) {
                particles.push({
                    t: p.random(0, 2 * p.PI),
                    speed: p.random(0.01, 0.05),
                    size: p.random(3, 8),
                    color: p.color(
                        p.random(200, 255),
                        p.random(100, 200),
                        p.random(150, 255),
                        p.random(150, 200)
                    )
                });
            }
        };
        
        p.draw = function() {
            p.clear();
            p.translate(p.width / 2, p.height / 2);
            
            // Binary heart equation animation
            p.stroke(255, 150, 200, 100);
            p.noFill();
            p.beginShape();
            for (let t = 0; t < 2 * p.PI; t += 0.01) {
                let x = 16 * p.sin(t) * p.sin(t) * p.sin(t);
                let y = 13 * p.cos(t) - 5 * p.cos(2*t) - 2 * p.cos(3*t) - p.cos(4*t);
                p.vertex(x * 10, -y * 10);
            }
            p.endShape(p.CLOSE);
            
            // Draw and update particles
            for (let i = 0; i < particles.length; i++) {
                const particle = particles[i];
                
                // Update particle position along heart curve
                particle.t += particle.speed;
                if (particle.t > 2 * p.PI) particle.t = 0;
                
                // Calculate position using heart curve equation
                let x = 16 * p.sin(particle.t) * p.sin(particle.t) * p.sin(particle.t);
                let y = 13 * p.cos(particle.t) - 5 * p.cos(2*particle.t) - 2 * p.cos(3*particle.t) - p.cos(4*particle.t);
                
                // Draw particle
                p.noStroke();
                p.fill(particle.color);
                p.ellipse(x * 10, -y * 10, particle.size, particle.size);
                
                // Connect nearby particles with lines
                for (let j = i + 1; j < particles.length; j++) {
                    const other = particles[j];
                    let x2 = 16 * p.sin(other.t) * p.sin(other.t) * p.sin(other.t);
                    let y2 = 13 * p.cos(other.t) - 5 * p.cos(2*other.t) - 2 * p.cos(3*other.t) - p.cos(4*other.t);
                    
                    const distance = p.dist(x * 10, -y * 10, x2 * 10, -y2 * 10);
                    if (distance < 30) {
                        p.stroke(255, 200, 230, 100 * (1 - distance / 30));
                        p.line(x * 10, -y * 10, x2 * 10, -y2 * 10);
                    }
                }
            }
            
            // Add binary code pattern in background
            p.fill(255, 100);
            p.textSize(10);
            for (let i = 0; i < 20; i++) {
                const binText = Math.random() > 0.5 ? "1" : "0";
                p.text(binText, p.random(-p.width/2, p.width/2), p.random(-p.height/2, p.height/2));
            }
        };
    });
    
    // Animate equation text
    gsap.from('.heart-equation', {
        opacity: 0,
        y: 30,
        duration: 1.5,
        ease: 'elastic.out(1, 0.3)',
        scrollTrigger: {
            trigger: '.heart-equation',
            start: 'top bottom',
            end: 'bottom center',
            toggleActions: 'play none none none'
        }
    });
}

function createStarryBackground() {
    const starsContainer = document.getElementById('stars');
    const numberOfStars = 100;
    
    for (let i = 0; i < numberOfStars; i++) {
        const star = document.createElement('div');
        star.classList.add('star');
        
        // Random position
        const posX = Math.random() * 100;
        const posY = Math.random() * 100;
        star.style.left = `${posX}%`;
        star.style.top = `${posY}%`;
        
        // Random size
        const size = Math.random() * 5 + 4;
        star.style.width = `${size}px`;
        star.style.height = `${size}px`;
        
        // Random twinkle animation delay
        const delay = Math.random() * 3;
        star.style.animationDelay = `${delay}s`;
        
        starsContainer.appendChild(star);
    }
}

document.addEventListener('DOMContentLoaded', function() {
    const blowButton = document.getElementById('blow-button');
    const blowMicButton = document.getElementById('blow-mic-button');
    const resetButton = document.getElementById('reset-button');
    const candles = document.querySelectorAll('.candle');
    const flames = document.querySelectorAll('.flame');
    const blowMeter = document.getElementById('blow-meter');
    const statusText = document.getElementById('status-text');
    const message = document.getElementById('message');
    const container = document.querySelector('.container');
    
    let audioContext;
    let micStream;
    let analyzer;
    let isListening = false;
    let microIntervalId = null;
    
    // Separate the button functions
    blowButton.addEventListener('click', () => {
        // Simple button press immediately blows out candles
        blowOutCandles();
    });
    
    // Handle microphone blow
    blowMicButton.addEventListener('click', () => {
        if (isListening) {
            stopListening();
            blowMicButton.textContent = "Blow with Mic";
            blowMicButton.classList.remove('activated');
            statusText.textContent = "Microphone stopped";
        } else {
            startListening();
            blowMicButton.textContent = "Stop Mic";
            blowMicButton.classList.add('activated');
            statusText.textContent = "Blow into microphone...";
        }
    });
    
    resetButton.addEventListener('click', () => {
        resetCandles();
        statusText.textContent = "Candles reset!";
        setTimeout(() => {
            statusText.textContent = "Click \"Blow with Mic\" to use your microphone";
        }, 2000);
    });
    
    // Initialize audio context when needed
    const initializeAudio = async () => {
        try {
            statusText.textContent = "Requesting microphone access...";
            
            // Create audio context
            audioContext = new (window.AudioContext || window.webkitAudioContext)();
            
            // Get microphone stream
            micStream = await navigator.mediaDevices.getUserMedia({ 
                audio: { 
                    echoCancellation: false,
                    noiseSuppression: false,
                    autoGainControl: false
                } 
            });
            
            // Create analyzer
            const source = audioContext.createMediaStreamSource(micStream);
            analyzer = audioContext.createAnalyser();
            analyzer.fftSize = 1024;
            analyzer.smoothingTimeConstant = 0.2;
            source.connect(analyzer);
            
            statusText.textContent = "Microphone ready! Blow now...";
            return true;
        } catch (err) {
            console.error('Error accessing microphone:', err);
            statusText.textContent = "Couldn't access microphone. Check permissions.";
            blowMicButton.classList.remove('activated');
            blowMicButton.textContent = "Blow with Mic";
            return false;
        }
    };
    
    // Start listening to microphone
    const startListening = async () => {
        const success = await initializeAudio();
        
        if (success) {
            isListening = true;
            
            // Check volume at regular intervals
            microIntervalId = setInterval(() => {
                if (!analyzer) return;
                
                const dataArray = new Uint8Array(analyzer.frequencyBinCount);
                analyzer.getByteFrequencyData(dataArray);
                
                // Calculate volume level
                let sum = 0;
                for (let i = 0; i < dataArray.length; i++) {
                    sum += dataArray[i];
                }
                const avgVolume = sum / dataArray.length;
                const percentage = Math.min(100, avgVolume * 1.5);
                
                // Update meter
                blowMeter.style.width = percentage + '%';
                
                // Check if blow is strong enough
                if (percentage > 50) {
                    blowOutCandles();
                    statusText.textContent = "Great blow! Candles are out!";
                }
            }, 100);
        }
    };
    
    // Stop listening to microphone
    const stopListening = () => {
        isListening = false;
        
        if (microIntervalId) {
            clearInterval(microIntervalId);
            microIntervalId = null;
        }
        
        if (micStream) {
            micStream.getTracks().forEach(track => track.stop());
            micStream = null;
        }
        
        // Reset meter
        blowMeter.style.width = '0%';
    };
    
    // Create sparkles animation
    const createSparkles = (x, y) => {
        const sparkleCount = 15 + Math.floor(Math.random() * 10);
        
        for (let i = 0; i < sparkleCount; i++) {
            const sparkle = document.createElement('div');
            sparkle.classList.add('sparkle');
            
            // Random direction
            const angle = Math.random() * Math.PI * 2;
            const distance = 50 + Math.random() * 100;
            const translateX = Math.cos(angle) * distance;
            const translateY = Math.sin(angle) * distance;
            
            sparkle.style.setProperty('--x', `${translateX}px`);
            sparkle.style.setProperty('--y', `${translateY}px`);
            
            // Random color
            const hue = 20 + Math.random() * 40; // Gold to orange
            sparkle.style.backgroundColor = `hsl(${hue}, 100%, 65%)`;
            
            // Random size
            const size = 3 + Math.random() * 5;
            sparkle.style.width = `${size}px`;
            sparkle.style.height = `${size}px`;
            
            // Set position
            sparkle.style.left = `${x}px`;
            sparkle.style.top = `${y}px`;
            
            container.appendChild(sparkle);
            
            // Remove after animation completes
            setTimeout(() => {
                sparkle.remove();
            }, 1000);
        }
    };
    
    // Blow out candles function
    const blowOutCandles = () => {
        let allBlown = true;
        let anyBlown = false;
        
        flames.forEach((flame, index) => {
            if (!flame.classList.contains('blown-out')) {
                flame.classList.add('blown-out');
                anyBlown = true;
                
                // Get flame position for sparkles
                const flameRect = flame.getBoundingClientRect();
                const x = flameRect.left + flameRect.width / 2;
                const y = flameRect.top + flameRect.height / 2;
                
                createSparkles(x, y);
            }
        });
        
        flames.forEach(flame => {
            if (!flame.classList.contains('blown-out')) {
                allBlown = false;
            }
        });
        
        if (allBlown && anyBlown) {
            message.classList.add('show');
            if (isListening) {
                stopListening();
                blowMicButton.classList.remove('activated');
                blowMicButton.textContent = "Blow with Mic";
            }
        }
    };
    
    // Reset candles function
    const resetCandles = () => {
        flames.forEach(flame => {
            flame.classList.remove('blown-out');
        });
        message.classList.remove('show');
        blowMeter.style.width = '0%';
        
        if (isListening) {
            stopListening();
            blowMicButton.classList.remove('activated');
            blowMicButton.textContent = "Blow with Mic";
        }
    };
    
    // Initialize
    resetCandles();
});


// Music Notes
function createMusicNotes(x, y) {
    const notes = ['♪', '♫', '♩', '♬', '♭', '♮'];
    const numNotes = Math.floor(Math.random() * 5) + 3;
    
    for (let i = 0; i < numNotes; i++) {
        const note = document.createElement('div');
        note.classList.add('music-note');
        note.textContent = notes[Math.floor(Math.random() * notes.length)];
        note.style.left = `${x + Math.random() * 50 - 25}px`;
        note.style.top = `${y + Math.random() * 10}px`;
        document.body.appendChild(note);
        setTimeout(() => note.remove(), 4000);
    }
}



// Kawaii popup
function createKawaiiPopup(x, y) {
    const popup = document.createElement('div');
    popup.classList.add('kawaii-popup');
    const messages = [
        '(*≧ω≦)', 
        '(✿◕‿◕)', 
        '٩(｡•́‿•̀｡)۶', 
        '｡ﾟ(TヮT)ﾟ｡', 
        '(｡♥‿♥｡)', 
        '૮₍ ´• ˕ •` ₎ა', 
        '૮₍´• ﻌ •`₎ა♡', 
        '(づ｡◕‿‿◕｡)づ', 
        '✨ So cute! ✨',
        '💖 Love it! 💖',
        'ヾ(≧▽≦*)o', 
        '＼(≧▽≦)／', 
        '(✧ω✧)', 
        '☆*: .｡. o(≧▽≦)o .｡.:*☆', 
        'UwU~ 💕', 
        'Hehe~ (⁄ ⁄>⁄ ▽ ⁄<⁄ ⁄)', 
        '💫 Magical! 💫', 
        '✧\(>o<)ﾉ✧', 
        'You’re adorable~ 🌸', 
        'Yatta~! (≧◡≦)'
      ];
      
    popup.textContent = messages[Math.floor(Math.random() * messages.length)];
    popup.style.left = `${x - 30}px`;
    popup.style.top = `${y - 50}px`;
    document.body.appendChild(popup);
    setTimeout(() => popup.remove(), 2000);
}

// Event listener for clicks
document.body.addEventListener('click', (e) => {
    
    createMusicNotes(e.clientX, e.clientY);
    createRainbow(e.clientX, e.clientY);
    createConfetti(e.clientX, e.clientY);
    createKawaiiPopup(e.clientX, e.clientY);
});
function createClouds() {
    const cloudsContainer = document.getElementById('clouds');
    const numClouds = 5;
    
    for (let i = 0; i < numClouds; i++) {
        const cloud = document.createElement('div');
        cloud.classList.add('cloud');
        
        const size = Math.random() * 10 + 100;
        cloud.style.width = `${size}px`;
        cloud.style.height = `${size * 0.6}px`;
        
        cloud.style.left = `${Math.random() * 100}%`;
        cloud.style.top = `${Math.random() * 60}%`;
        
        cloud.style.animationDuration = `${Math.random() * 10 + 10}s`;
        cloud.style.animationDelay = `${Math.random() * 5}s`;
        
        cloudsContainer.appendChild(cloud);
    }
}

      // Create cute creatures
      function createCreatures() {
        const creaturesContainer = document.getElementById('creatures');
        const numCreatures = 12;
        const colors = ['#FF9AA2', '#FFB7B2', '#FFDAC1', '#E2F0CB', '#B5EAD7', '#C7CEEA'];
        
        for (let i = 0; i < numCreatures; i++) {
            const creature = document.createElement('div');
            creature.classList.add('creature');
            
            const colorIdx = Math.floor(Math.random() * colors.length);
            creature.style.backgroundColor = colors[colorIdx];
            creature.style.borderRadius = '50%';
            
            creature.style.left = `${Math.random() * 90 + 5}%`;
            creature.style.top = `${Math.random() * 80 + 10}%`;
            
            creature.style.animationDuration = `${Math.random() * 2 + 2}s`;
            creature.style.animationDelay = `${Math.random() * 1}s`;
            
            // Create eyes
            const eyes = document.createElement('div');
            eyes.classList.add('eyes');
            
            const leftEye = document.createElement('div');
            leftEye.classList.add('eye');
            
            const rightEye = document.createElement('div');
            rightEye.classList.add('eye');
            
            eyes.appendChild(leftEye);
            eyes.appendChild(rightEye);
            
            // Create mouth
            const mouth = document.createElement('div');
            mouth.classList.add('mouth');
            
            creature.appendChild(eyes);
            creature.appendChild(mouth);
            
            // Add click event
            creature.addEventListener('click', (e) => {
                // Create rainbow
                createRainbow(e.clientX, e.clientY);
                // Jump animation
                creature.style.transform = 'scale(1.3) translateY(-20px)';
                setTimeout(() => {
                    creature.style.transform = '';
                }, 500);
                
                // Create kawaii popup
                const messages = ['Yay!', 'Hehe!', 'Hello!', '*Giggles*', 'Wheee!', '♥‿♥'];
                const msg = messages[Math.floor(Math.random() * messages.length)];
                createKawaiiPopup(e.clientX, e.clientY, msg);
            });
            
            creaturesContainer.appendChild(creature);
        }
    }


function animateCakeEntrance() {
    const cake = document.querySelector('.cake');
    cake.style.opacity = '0';
    cake.style.transform = 'translateY(100px) scale(0.8)';
    
    setTimeout(() => {
        cake.style.transition = 'all 1.5s cubic-bezier(0.17, 0.89, 0.32, 1.25)';
        cake.style.opacity = '1';
        cake.style.transform = 'translateY(0) scale(1)';
    }, 300);
}

function createSparkles() {
    // Clear previous sparkles
    sparklesContainer.innerHTML = '';
    
    // Create new sparkles
    for (let i = 0; i < 50; i++) {
        const sparkle = document.createElement('div');
        sparkle.classList.add('sparkle');
        
        // Start position - above the candles
        const posX = 100 + (Math.random() - 0.5) * 150;
        const posY = 30;
        sparkle.style.left = `${posX}px`;
        sparkle.style.top = `${posY}px`;
        
        // Random size and color
        const size = Math.random() * 6 + 2;
        sparkle.style.width = `${size}px`;
        sparkle.style.height = `${size}px`;
        
        const hue = Math.random() * 60 + 30; // Golden yellow to orange
        sparkle.style.backgroundColor = `hsl(${hue}, 100%, 65%)`;
        sparkle.style.boxShadow = `0 0 ${size}px hsl(${hue}, 100%, 60%)`;
        
        sparklesContainer.appendChild(sparkle);
        
        // Animate falling sparkle
        const endX = posX + (Math.random() - 0.5) * 200;
        const endY = posY + Math.random() * 300 + 100;
        const duration = Math.random() * 2 + 1;
        
        sparkle.animate([
            { left: `${posX}px`, top: `${posY}px`, opacity: 1 },
            { left: `${endX}px`, top: `${endY}px`, opacity: 0 }
        ], {
            duration: duration * 1000,
            easing: 'cubic-bezier(0.4, 0, 0.2, 1)',
            fill: 'forwards'
        });
        
        // Remove sparkle after animation
        setTimeout(() => {
            sparkle.remove();
        }, duration * 1000);
    }
}

function showBirthdayMessage() {
    const overlay = document.getElementById('overlay');
    overlay.style.display = 'block';
    
    // Create birthday message
    const messageBox = document.createElement('div');
    messageBox.classList.add('birthday-message');
    messageBox.innerHTML = `
        <h3>✨ Your Birthday Wish is on the Way! ✨</h3>
        <p>May your code always compile on the first try, and may your singing touch hearts around the world!</p>
        <button class="close-message">Thank You! 💖</button>
    `;
    
    document.body.appendChild(messageBox);
    
    // Animation for message appearance
    messageBox.style.opacity = '0';
    messageBox.style.transform = 'translate(-50%, -50%) scale(0.8)';
    
    setTimeout(() => {
        messageBox.style.transition = 'all 0.5s cubic-bezier(0.175, 0.885, 0.32, 1.275)';
        messageBox.style.opacity = '1';
        messageBox.style.transform = 'translate(-50%, -50%) scale(1)';
    }, 100);
    
    // Close message functionality
    messageBox.querySelector('.close-message').addEventListener('click', () => {
        messageBox.style.transition = 'all 0.3s ease-out';
        messageBox.style.opacity = '0';
        messageBox.style.transform = 'translate(-50%, -50%) scale(0.8)';
        overlay.style.transition = 'opacity 0.3s ease-out';
        overlay.style.opacity = '0';
        
        setTimeout(() => {
            messageBox.remove();
            overlay.style.display = 'none';
            overlay.style.opacity = '1';
            
            // Reset candles for another wish if desired
            resetCandles();
        }, 300);
    });
}

function resetCandles() {
    const flames = document.querySelectorAll('.flame');
    const blowButton = document.getElementById('blow-candles');
    
    // Bring flames back
    flames.forEach((flame, index) => {
        setTimeout(() => {
            flame.style.transition = 'all 0.5s ease-in';
            flame.style.opacity = '1';
            flame.style.transform = 'translateX(-50%) scale(1)';
            animateFlame(flame);
        }, index * 200);
    });
    
    // Re-enable button
    setTimeout(() => {
        blowButton.disabled = false;
        blowButton.style.opacity = '1';
        blowButton.style.cursor = 'pointer';
    }, 1000);
}

// Create random floating message bubbles
function createPopupMessages() {
    const messages = [
        "You light up every room! ✨",
        "Your code is as beautiful as your voice! 💻🎵",
        "Wishing you debug-free code forever! 🐞",
        "May your algorithms always be efficient! ⚡",
        "Keep singing your heart out! 🎤"
    ];
    
    const icons = ["⭐", "🎈", "🎁", "🎵", "💻"];
    
    // Create floating icons that trigger messages
    for (let i = 0; i < icons.length; i++) {
        const icon = document.createElement('div');
        icon.classList.add('floating-icon');
        icon.textContent = icons[i];
        
        icon.style.left = `${Math.random() * 80 + 10}%`;
        icon.style.top = `${Math.random() * 400 + 200}px`;
        icon.style.animationDuration = `${Math.random() * 5 + 10}s`;
        icon.style.animationDelay = `${Math.random() * 5}s`;
        
        document.body.appendChild(icon);
        
        // Add click event to show popup message
        icon.addEventListener('click', function() {
            showPopupMessage(messages[i], this);
        });
    }
    
    function showPopupMessage(message, sourceElement) {
        const popup = document.createElement('div');
        popup.classList.add('popup-message');
        popup.textContent = message;
        
        // Position popup near the source element
        const rect = sourceElement.getBoundingClientRect();
        popup.style.left = `${rect.left}px`;
        popup.style.top = `${rect.top - 100}px`;
        
        document.body.appendChild(popup);
        
        // Play pop sound
        const popSound = new Howl({
            src: ['https://cdn.example.com/pop-sound.mp3'], // Replace with actual sound URL
            volume: 0.6
        });
        popSound.play();
        
        // Animate popup
        gsap.from(popup, {
            scale: 0,
            opacity: 0,
            duration: 0.5,
            ease: 'back.out(1.7)'
        });
        
        // Remove popup after animation
        setTimeout(() => {
            gsap.to(popup, {
                opacity: 0,
                y: -30,
                duration: 0.5,
                ease: 'power2.in',
                onComplete: () => {
                    popup.remove();
                }
            });
        }, 3000);
    }
}

// Add CSS styles dynamically
(function addStyles() {
    const styles = `
        /* Animation keyframes */
        @keyframes float {
            0%, 100% { transform: translateY(0); }
            50% { transform: translateY(-20px); }
        }
        
        @keyframes twinkle {
            0%, 100% { opacity: 1; transform: scale(1); }
            50% { opacity: 0.5; transform: scale(0.8); }
        }
        
        @keyframes rise {
            0% { transform: translateY(100vh); opacity: 1; }
            100% { transform: translateY(-100px); opacity: 0; }
        }
        
        @keyframes fadeOut {
            0% { opacity: 1; }
            100% { opacity: 0; }
        }
        
        @keyframes pulse {
            0%, 100% { transform: scale(1); }
            50% { transform: scale(1.1); }
        }
        
        /* Stars */
        .star {
            position: absolute;
            background-color: white;
            border-radius: 50%;
            box-shadow: 0 0 10px 2px rgba(255, 255, 255, 0.8);
            animation: twinkle infinite linear;
            z-index: -1;
        }
        
        /* Balloons */
        .balloon {
            position: relative;
            bottom: -100px;
            border-radius: 50% 50% 50% 50% / 60% 60% 40% 40%;
            animation: rise infinite linear;
            z-index: -1;
        }
        
        .balloon-string {
            position: absolute;
            width: 1px;
            height: 80px;
            background-color: rgba(255, 255, 255, 0.7);
            bottom: -80px;
            left: 50%;
        }
        
        /* Cursor trail */
        .cursor-particle {
            position: fixed;
            pointer-events: none;
            border-radius: 50%;
            opacity: 0.8;
            z-index: 9999;
            animation: fadeOut 1s forwards;
        }
        
        /* Section animations */
        .section {
            opacity: 0;
            transform: translateY(30px);
            transition: opacity 0.8s ease, transform 0.8s ease;
        }
        
        .section.visible {
            opacity: 1;
            transform: translateY(0);
        }
        
        /* Cake and candles */
        
        
        .smoke {
            width: 20px;
            height: 20px;
            background-color: rgba(200, 200, 200, 0.6);
            border-radius: 50%;
            position: absolute;
            top: -40px;
            left: 50%;
            transform: translateX(-50%);
            animation: rise 2s forwards;
        }
        
        /* Sparkles */
        .sparkle {
            position: absolute;
            border-radius: 50%;
            animation: fadeOut forwards;
            box-shadow: 0 0 8px 2px rgba(255, 200, 0, 0.6);
        }
        
        /* Wish message */
        .wish-message {
            text-align: center;
            font-size: 1.5rem;
            color: #ff6b9e;
            font-weight: bold;
            margin-top: 20px;
            text-shadow: 0 0 10px rgba(255, 107, 158, 0.7);
        }
        
        /* Floating icons and popup messages */
        .floating-icon {
            position: absolute;
            font-size: 2rem;
            z-index: 10;
            cursor: pointer;
            animation: float infinite ease-in-out;
            transition: transform 0.3s ease;
        }
        
        .floating-icon:hover {
            transform: scale(1.3);
        }
        
        .popup-message {
            position: fixed;
            background-color: rgba(255, 255, 255, 0.9);
            border-radius: 15px;
            padding: 10px 20px;
            box-shadow: 0 5px 15px rgba(0, 0, 0, 0.2);
            color: #ff6b9e;
            font-weight: bold;
            font-size: 1rem;
            max-width: 200px;
            text-align: center;
            z-index: 100;
        }
        
        /* Timeline animations */
        .timeline-item {
            opacity: 0;
            transform: translateX(-50px);
            transition: opacity 0.8s ease, transform 0.8s ease;
        }
        
        .timeline-item.right {
            transform: translateX(50px);
        }
        
        .timeline-item.animate {
            opacity: 1;
            transform: translateX(0);
        }
        
        /* Photo album animations */
        .photo-album-container {
            transition: opacity 0.8s ease;
        }
        
        .photo-album-container.hidden {
            opacity: 0;
            pointer-events: none;
        }
    `;
    
    const styleSheet = document.createElement('style');
    styleSheet.type = 'text/css';
    styleSheet.innerText = styles;
    document.head.appendChild(styleSheet);
})();

// Handle responsive design adjustments
window.addEventListener('resize', function() {
    // Adjust photo album renderer if it exists
    if (typeof photoRenderer !== 'undefined' && photoRenderer) {
        const width = Math.min(400, window.innerWidth - 40);
        photoRenderer.setSize(width, width);
    }
    
    // Adjust heart canvas if it exists
    const heartCanvas = document.querySelector('#heart-canvas canvas');
    if (heartCanvas) {
        const width = Math.min(400, window.innerWidth - 40);
        heartCanvas.style.width = `${width}px`;
        heartCanvas.style.height = `${width}px`;
    }
});

// Add scroll to section functionality
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        
        const targetId = this.getAttribute('href');
        const targetElement = document.querySelector(targetId);
        
        if (targetElement) {
            window.scrollTo({
                top: targetElement.offsetTop,
                behavior: 'smooth'
            });
        }
    });
});

// Create CSS for the website (additional styles)
(function addMoreStyles() {
    const additionalStyles = `
        
    `;
    
    const additionalStyleSheet = document.createElement('style');
    additionalStyleSheet.type = 'text/css';
    additionalStyleSheet.innerText = additionalStyles;
    document.head.appendChild(additionalStyleSheet);
})();

// Preload images and resources
function preloadResources() {
    // Preload photo album images
    photos.forEach(photo => {
        const img = new Image();
        img.src = photo.url;
    });
    
    // Preload memory images
    memories.forEach(memory => {
        if (memory.type === 'image') {
            const img = new Image();
            img.src = memory.media;
        }
    });
    
    // Preload sounds
    const sounds = [
        './bdaybg.mp3', // Replace with actual sound URL
        'https://cdn.example.com/unwrap-sound.mp3',
        'https://cdn.example.com/flip-sound.mp3',
        'https://cdn.example.com/blow-sound.mp3',
        'https://cdn.example.com/celebration-sound.mp3',
        'https://cdn.example.com/pop-sound.mp3'
    ];
    
    sounds.forEach(sound => {
        new Howl({
            src: ['./bdaybg.mp3'],
            preload: true,
            volume: 0
        });
    });
}

// Initialize everything when the page loads
window.addEventListener('load', function() {
    preloadResources();
    
    // Show welcome message
    gsap.from('.title', {
        opacity: 0,
        y: -50,
        duration: 1.5,
        ease: 'elastic.out(1, 0.3)'
    });
    
    gsap.from('.subtitle', {
        opacity: 0,
        y: 30,
        duration: 1,
        delay: 0.5,
        ease: 'power2.out'
    });
    
    gsap.from('.countdown-container', {
        opacity: 0,
        scale: 0.8,
        duration: 1.5,
        delay: 1,
        ease: 'back.out(1.7)'
    });
    
    gsap.from('.scroll-indicator', {
        opacity: 0,
        y: 30,
        duration: 1,
        delay: 2.5,
        ease: 'power2.out',
        repeat: -1,
        yoyo: true,
        repeatDelay: 1
    });
    
    // Add some easter eggs
    const konami = ['ArrowUp', 'ArrowUp', 'ArrowDown', 'ArrowDown', 'ArrowLeft', 'ArrowRight', 'ArrowLeft', 'ArrowRight', 'b', 'a'];
    let konamiIndex = 0;
    
    document.addEventListener('keydown', function(e) {
        if (e.key === konami[konamiIndex]) {
            konamiIndex++;
            
            if (konamiIndex === konami.length) {
                // Activate special effect
                document.body.classList.add('rainbow-mode');
                
                // Create raining code effect
                createCodeRain();
                
                // Play special sound
                const specialSound = new Howl({
                    src: ['https://cdn.example.com/special-sound.mp3'], // Replace with actual sound URL
                    volume: 0.7
                });
                specialSound.play();
                
                konamiIndex = 0;
            }
        } else {
            konamiIndex = 0;
        }
    });
    
    function createCodeRain() {
        const codeContainer = document.createElement('div');
        codeContainer.classList.add('code-rain');
        document.body.appendChild(codeContainer);
        
        const codeChars = '01010101 function birthday() { return "Happy Birthday!"; } while(true) { love++; }';
        
        for (let i = 0; i < 50; i++) {
            const codeStream = document.createElement('div');
            codeStream.classList.add('code-stream');
            
            // Random position
            codeStream.style.left = `${Math.random() * 100}%`;
            codeStream.style.animationDuration = `${Math.random() * 10 + 5}s`;
            codeStream.style.animationDelay = `${Math.random() * 5}s`;
            
            // Create code text
            for (let j = 0; j < 20; j++) {
                const startPos = Math.floor(Math.random() * (codeChars.length - 10));
                const codeSnippet = codeChars.substring(startPos, startPos + 10);
                
                const codeLine = document.createElement('div');
                codeLine.textContent = codeSnippet;
                codeStream.appendChild(codeLine);
            }
            
            codeContainer.appendChild(codeStream);
        }
        
        // Remove after animation
        setTimeout(() => {
            codeContainer.remove();
            document.body.classList.remove('rainbow-mode');
        }, 10000);
    }
  
    const fileInput = document.getElementById('fileInput');
    const userPhoto = document.getElementById('userPhoto');
    const placeholder = document.getElementById('placeholder');
    const partyButton = document.getElementById('partyButton');
    const resetButton = document.getElementById('resetButton');
    const photoContainer = document.getElementById('photoContainer');
    const sunglasses = document.getElementById('sunglasses');
    const mustache = document.getElementById('mustache');
    const crown = document.getElementById('crown');
    
    // Handle file upload
    fileInput.addEventListener('change', function(e) {
      const file = e.target.files[0];
      if (file) {
        const reader = new FileReader();
        reader.onload = function(event) {
          userPhoto.src = event.target.result;
          userPhoto.classList.remove('hidden');
          placeholder.classList.add('hidden');
          partyButton.disabled = false;
          resetButton.classList.remove('hidden');
        };
        reader.readAsDataURL(file);
      }
    });
    
    // Party button functionality
    partyButton.addEventListener('click', function() {
      // Add overlays one by one with timing
      setTimeout(() => {
        sunglasses.classList.add('visible');
      }, 300);
      
      setTimeout(() => {
        mustache.classList.add('visible');
      }, 800);
      
      setTimeout(() => {
        crown.classList.add('visible');
      }, 1300);
      
      // Create confetti effect
      createConfetti();
    });
    
    // Reset button functionality
    resetButton.addEventListener('click', function() {
      sunglasses.classList.remove('visible');
      mustache.classList.remove('visible');
      crown.classList.remove('visible');
      removeAllConfetti();
    });
    

    

});
