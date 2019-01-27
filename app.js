window.onscroll = function(ev) {
  console.log({ 
    scrollY: window.scrollY,
    windowHeight: window.innerHeight,
    offsetHeight: document.body.offsetHeight,
  })
  
  const offset = window.innerHeight;

  const sliderElement = document.getElementById('slider')

  if (document.body.scrollTop > offset || document.documentElement.scrollTop > offset) {
    console.log('scroll trigger')
    sliderElement.classList.remove('hidden')
  }

  // const offsetHeight = document.body.offsetHeight;

  // if ((window.innerHeight + window.scrollY) >= offsetHeight) {
  //     // alert("you're at the bottom of the page");
  //     console.log('scroll trigger')
  // }
};