$(document).ready(function(){
  $('.slick-carousel').slick({
    dots: true,
    infinite: true,
    speed: 300,
    autoplay: true,
    autoplaySpeed: 3000,
    slidesToShow: 1,
    slidesToScroll: 1
  });
});

function updateCountdown() {
  const eventDate = new Date('May 30, 2025 13:00:00').getTime();
  const now = new Date().getTime();
  const distance = eventDate - now;

  if (distance < 0) {
    document.getElementById('countdown').innerText = "The event has started!";
    return;
  }

  const days = Math.floor(distance / (1000 * 60 * 60 * 24));
  const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((distance % (1000 * 60)) / 1000);

  document.getElementById('countdown').innerText =
    `Countdown: ${days} Days ${hours} Hours ${minutes} Minutes ${seconds} Seconds`;
}

updateCountdown();
setInterval(updateCountdown, 1000);

// Confetti blast function
function launchConfetti() {
  confetti({
    particleCount: 70,
    spread: 80,
    origin: { y: 0.3 }
  });
}

// Initial blast
launchConfetti();

// Burst every 5 seconds
setInterval(launchConfetti, 8000);
