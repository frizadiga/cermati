const fnScroll = (event) => {
  const { everClosed } = JSON.parse(localStorage.slider) || false;

  const getTime = () => {
    if (localStorage.slider) {
      return JSON.parse(localStorage.slider).time;
    } else {
      fnSetTime();
    }
  } 

  const diff = new Date().getTime() - getTime();
  const mm = Math.floor(diff / 1000 / 60);
  
  const offset = window.innerHeight;
  const sliderElement = document.getElementById('slider');

  const isTriggered = () => {
    const intervalInMinute = 1;
    
    return (
        everClosed === false ||
        mm >= intervalInMinute && (
        document.body.scrollTop > offset ||
        document.documentElement.scrollTop > offset
      )
    )
  }

  console.log({ diff, mm, everClosed })

  if (isTriggered()) {
    sliderElement.classList.remove('slider--hidden');
  }
};

const fnToggleShow = (id) => {
  if (!id) return;
  
  fnSetTime()

  const element = document.getElementById(id);
  element.classList.toggle('slider--hidden');
};

const fnSetTime = () => {
  if (localStorage.slider) return; 

  const localStorageSlider = JSON.parse(localStorage.slider);

  const slider = {
    everClosed: false,
    time: new Date().getTime(),
  };
  
  // if (localStorage.everClosed === true) {
  //   slider.everClosed = 
  // }

  localStorage.setItem('slider', JSON.stringify(slider))
}

const fnLoad = () => {
  fnSetTime();
}

if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", fnLoad);
  document.addEventListener("scroll", fnScroll);
}