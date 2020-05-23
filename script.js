// Images asset
const flowerImages = {
    1:'assets/flower0000.jpg',
    2:'assets/flower0001.jpg',
    3:'assets/flower0002.jpg',
    4:'assets/flower0003.jpg',
    5:'assets/flower0004.jpg',
    6:'assets/flower0005.jpg',
    7:'assets/flower0006.jpg',
    
}

// Global variable to control the scrolling behavior
const step = 30; // For each 30px, change an image
function trackScrollPosition() {
  const y = window.scrollY;
  const label = Math.min(Math.floor(y/30) + 1, 20);
  const imageToUse = flowerImages[label];
  // Change the background image
  $('.image-container').css('background-image', `url('${imageToUse}')`);
}
$(document).ready(()=>{
  $(window).scroll(()=>{
    trackScrollPosition();
  })
})