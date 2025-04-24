document.addEventListener('DOMContentLoaded', function() {
    // Memory data
    const memories = [
        {
            image: 'yumi/mile1.jpg',
            title: 'Cherished Melody',
            caption1: 'You stood by me in silence when words felt heavy…',
            caption2: 'and now, every second reminds me how time speaks in your voice!',
            audio: 'radhe.mp3'
        },
        {
            image: 'yumi/mile2.jpg',
            title: 'Forever Song',
            caption1: 'In every beat of your voice, I hear stories we never had to explain…',
            caption2: 'like a forgotten folk song that only true hearts can hum together',
            audio: 'maand.mp3'
        },
        {
            image: 'yumi/mile3.jpg',
            title: 'Golden Moments',
            caption1: 'You turned all my mess into music…',
            caption2: 'and even my chaos felt calm when you were in the rhythm',
            audio: 'jhol.mp3'
        },
        {
            image: 'yumi/mile4.jpg',
            title: 'Timeless Whispers',
            caption1: 'Some memories don’t fade… they echo gently in the quiet corners of us…',
            caption2: 'and your song — it’s the echo I’ll carry even when the world forgets.',
            audio: 'mile4audio.mp3'
        }
    ];

    // DOM Elements
    const welcomeScreen = document.querySelector('.welcome-screen');
    const enterButton = document.querySelector('.enter-button');
    const mainContainer = document.querySelector('.main-container');
    const carousel = document.querySelector('.carousel');
    const fullscreenView = document.querySelector('.fullscreen-view');
    const fullscreenImage = document.querySelector('.fullscreen-image');
    const caption1 = document.querySelector('.caption-1');
    const caption2 = document.querySelector('.caption-2');
    const musicButton = document.querySelector('.music-button');
    const closeButton = document.querySelector('.closedd-button');
    const finalScene = document.querySelector('.final-scene');
    const finalMessage = document.querySelector('.final-message');
    const replayButton = document.querySelector('.replay-button');
    const backgroundMusic = document.getElementById('background-music');
    const memoryAudio = document.getElementById('memory-audio');
    const particles = document.querySelector('.particles');

    // Variables
    let currentIndex = 0;
    let viewedMemories = 0;
    let polaroids = [];
    let isPlaying = false;

    // Create particles
    function createParticles() {
        for (let i = 0; i < 50; i++) {
            const particle = document.createElement('div');
            particle.classList.add('particle');
            
            // Random properties
            const size = Math.random() * 6 + 2;
            const posX = Math.random() * 100;
            const posY = Math.random() * 100;
            const delay = Math.random() * 5;
            const duration = Math.random() * 10 + 5;
            const opacity = Math.random() * 0.6 + 0.2;
            
            // Apply styles
            particle.style.width = `${size}px`;
            particle.style.height = `${size}px`;
            particle.style.left = `${posX}%`;
            particle.style.top = `${posY}%`;
            particle.style.opacity = opacity;
            particle.style.animation = `floatAnimation ${duration}s infinite ease-in-out`;
            particle.style.animationDelay = `${delay}s`;
            particles.appendChild(particle);
        }
    }

    // Create confetti for final scene
    function createConfetti() {
        const finalParticles = document.createElement('div');
        finalParticles.classList.add('particles');
        finalScene.appendChild(finalParticles);
        
        for (let i = 0; i < 100; i++) {
            const confetti = document.createElement('div');
            confetti.classList.add('confetti');
            
            // Random properties
            const size = Math.random() * 10 + 5;
            const posX = Math.random() * 100;
            const posY = Math.random() * 100;
            const color = `hsl(${Math.random() * 60 + 270}, 70%, 80%)`;
            const rotation = Math.random() * 360;
            const duration = Math.random() * 10 + 5;
            const delay = Math.random() * 5;
            
            // Apply styles
            confetti.style.width = `${size}px`;
            confetti.style.height = `${size}px`;
            confetti.style.left = `${posX}%`;
            confetti.style.top = `${posY}%`;
            confetti.style.backgroundColor = color;
            confetti.style.transform = `rotate(${rotation}deg)`;
            confetti.style.opacity = Math.random() * 0.7 + 0.3;
            confetti.style.animation = `floatAnimation ${duration}s infinite ease-in-out`;
            confetti.style.animationDelay = `${delay}s`;
            
            finalParticles.appendChild(confetti);
        }
    }

    // Create side-by-side polaroid images
    function createPolaroids() {
        memories.forEach((memory, index) => {
            const polaroid = document.createElement('div');
            polaroid.classList.add('polaroid');
            polaroid.style.setProperty('--delay', index + 1);
            
            const img = document.createElement('img');
            img.src = memory.image;
            img.alt = memory.title;
            
            const title = document.createElement('p');
            title.textContent = memory.title;
            
            polaroid.appendChild(img);
            polaroid.appendChild(title);
            
            // Add subtle rotation for natural feel
            const rotation = Math.random() * 6 - 3;
            polaroid.style.transform = `rotate(${rotation}deg)`;
            
            // Add event listener
            polaroid.addEventListener('click', () => showFullscreen(index));
            
            carousel.appendChild(polaroid);
            polaroids.push(polaroid);
        });
    }

    // Show fullscreen view
    function showFullscreen(index) {
        currentIndex = index;
        const memory = memories[index];
        
        // Set fullscreen content
        fullscreenImage.src = memory.image;
        caption1.textContent = memory.caption1;
        caption2.textContent = memory.caption2;
        
        // Reset animations
        caption1.style.transition = 'none';
        caption2.style.transition = 'none';
        musicButton.style.transition = 'none';
        caption1.style.opacity = 0;
        caption2.style.opacity = 0;
        musicButton.style.opacity = 0;
        caption1.style.transform = 'translateY(20px)';
        caption2.style.transform = 'translateY(20px)';
        musicButton.style.transform = 'translateY(20px)';
        
        // Show fullscreen view
        fullscreenView.style.opacity = 1;
        fullscreenView.style.pointerEvents = 'all';
        
        // Set audio source
        memoryAudio.src = memory.audio;
        
        // Animate captions
        setTimeout(() => {
            caption1.style.transition = 'all 1s ease';
            caption1.style.opacity = 1;
            caption1.style.transform = 'translateY(0)';
        }, 500);
        
        setTimeout(() => {
            caption2.style.transition = 'all 1s ease';
            caption2.style.opacity = 1;
            caption2.style.transform = 'translateY(0)';
        }, 1500);
        
        setTimeout(() => {
            musicButton.style.transition = 'all 1s ease';
            musicButton.style.opacity = 1;
            musicButton.style.transform = 'translateY(0)';
        }, 2500);
        
        // Mark as viewed
        if (!polaroids[index].classList.contains('viewed')) {
            viewedMemories++;
            polaroids[index].classList.add('viewed');
        }
    }

    // Close fullscreen view
    function closeFullscreen() {
        fullscreenView.style.opacity = 0;
        fullscreenView.style.pointerEvents = 'none';
        
        // Stop audio if playing
        if (isPlaying) {
            memoryAudio.pause();
            memoryAudio.currentTime = 0;
            isPlaying = false;
            musicButton.textContent = '♫ Play Melody';
        }
        
        // Show final scene if all memories viewed
        if (viewedMemories >= memories.length) {
            setTimeout(showFinalScene, 1000);
        }
    }

    // Play/pause memory audio
    function toggleAudio() {
        if (isPlaying) {
            memoryAudio.pause();
            isPlaying = false;
            musicButton.textContent = '♫ Play Melody';
        } else {
            memoryAudio.volume = 0;
            memoryAudio.play();
            
            // Fade in audio
            let volume = 0;
            const fadeIn = setInterval(() => {
                volume += 0.05;
                if (volume >= 1) {
                    volume = 1;
                    clearInterval(fadeIn);
                }
                memoryAudio.volume = volume;
            }, 100);
            
            isPlaying = true;
            musicButton.textContent = '◼ Pause';
        }
    }

    // Show final scene
    function showFinalScene() {
        finalScene.style.opacity = 1;
        finalScene.style.pointerEvents = 'all';
        
        // Animate final message and button
        setTimeout(() => {
            finalMessage.style.opacity = 1;
            finalMessage.style.transform = 'translateY(0)';
        }, 500);
        
        setTimeout(() => {
            replayButton.style.opacity = 1;
            replayButton.style.transform = 'translateY(0)';
        }, 1500);
    }

    // Reset the journey
    function resetJourney() {
        finalScene.style.opacity = 0;
        finalScene.style.pointerEvents = 'none';
        
        // Reset view count
        viewedMemories = 0;
        
        // Reset viewed states
        polaroids.forEach(polaroid => {
            polaroid.classList.remove('viewed');
        });
        
        // Reset final scene animations
        setTimeout(() => {
            finalMessage.style.opacity = 0;
            finalMessage.style.transform = 'translateY(20px)';
            replayButton.style.opacity = 0;
            replayButton.style.transform = 'translateY(20px)';
        }, 1000);
    }

    // Event listeners
    enterButton.addEventListener('click', function() {
        welcomeScreen.style.opacity = 0;
        welcomeScreen.style.pointerEvents = 'none';
        
        setTimeout(() => {
            mainContainer.style.opacity = 1;
            
            // Start background music
            backgroundMusic.volume = 0.3;
            backgroundMusic.play();
        }, 1000);
    });

    closeButton.addEventListener('click', closeFullscreen);
    musicButton.addEventListener('click', toggleAudio);
    replayButton.addEventListener('click', resetJourney);

    // Initialize
    createParticles();
    createConfetti();
    createPolaroids();
});