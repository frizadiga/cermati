const fnScroll = (event) => {
  // console.log({ 
  //   scrollY: window.scrollY,
  //   windowHeight: window.innerHeight,
  //   offsetHeight: document.body.offsetHeight,
  // });

  const ms = JSON.parse(localStorage.slider).time;
  const diff = new Date().getTime() - ms;
  const mm = Math.floor(diff / 1000 / 60);
  
  if (localStorage.slider) {
    console.log({ ms, mm, diff });
  }
  
  const offset = window.innerHeight;
  const sliderElement = document.getElementById('slider');
  const isTriggered = () => {
    const intervalInMinute = 1;
    
    return (
      mm >= intervalInMinute && (
        document.body.scrollTop > offset ||
        document.documentElement.scrollTop > offset
      )
    )
  }

  if (isTriggered()) {
    console.log('scroll trigger', { isTriggered });
    sliderElement.classList.remove('slider--hidden');
  }
};

const fnToggleShow = (id) => {
  if (!id) return;
  
  if (true || !localStorage.slider) {
    const slider = {
      everClosed: true,
      time: new Date().getTime(),
    }

    localStorage.setItem('slider', JSON.stringify(slider))
  }

  const element = document.getElementById(id);
  element.classList.toggle('slider--hidden');
};

window.onscroll = fnScroll;