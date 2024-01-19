function start() {
    const HeadingContainer = document.getElementById('HC');
    const button = document.getElementById('HC-button')
    const loading = document.getElementById('loading-circle')
    let currentOpacity = 1; // Initial opacity (fully opaque)
    
    // Set an interval to gradually decrease opacity
    const intervalId = setInterval(() => {
        // Decrease opacity by a small amount
        currentOpacity -= 0.05;

        // Apply the new opacity to the element
        HeadingContainer.style.opacity = currentOpacity;

        // Check if opacity is fully faded (0)
        if (currentOpacity <= 0) {
            button.disabled = true;
            setTimeout(() => {
            loading.style.visibility = 'visible'
            setTimeout(() => {
                
            }, 5000)
            }, 1000)
            clearInterval(intervalId); // Stop the interval once opacity is 0
        }
    }, 50); // Adjust the interval duration (in milliseconds) to control the speed
}
