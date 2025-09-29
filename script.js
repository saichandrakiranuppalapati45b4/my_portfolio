// Play video on mouseover, pause on mouseout for all project videos
document.querySelectorAll('.project-vidbox video').forEach(function(video) {
    video.addEventListener('mouseover', function() {
        video.play();
    });
    video.addEventListener('mouseout', function() {
        video.pause();
        video.currentTime = 0; // Optional: reset to start
    });
});