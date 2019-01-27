const fnScroll = (event) => {
  // console.log({ 
  //   scrollY: window.scrollY,
  //   windowHeight: window.innerHeight,
  //   offsetHeight: document.body.offsetHeight,
  // });
  
  const offset = window.innerHeight;
  const sliderElement = document.getElementById('slider');
  const isTriggered = document.body.scrollTop > offset 
    || document.documentElement.scrollTop > offset

  if (isTriggered) {
    console.log('scroll trigger');
    sliderElement.classList.remove('slider--hidden');
  }
};

const fnToggleShow = (id) => {
  if (!id) return;

  const element = document.getElementById(id);
  element.classList.toggle('slider--hidden');
};

window.onscroll = fnScroll;