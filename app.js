const fnScroll = (event) => {
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
    const intervalInMinute = 10;
    
    return (
      mm >= intervalInMinute && (
        document.body.scrollTop > offset ||
        document.documentElement.scrollTop > offset
      )
    )
  }

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
  const slider = {
    everClosed: true,
    time: new Date().getTime(),
  }

  localStorage.setItem('slider', JSON.stringify(slider))
}

const fnLoad = () => {
  fnSetTime()
}

if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", fnLoad);
  document.addEventListener("scroll", fnScroll);
}