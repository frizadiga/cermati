const fnScroll = (event) => {
  let everClosed = false
  if (localStorage.slider) {
    everClosed = JSON.parse(localStorage.slider).everClosed;
  }
  
  const offset = window.innerHeight;
  const sliderElement = document.getElementById('slider');

  const isTriggered = () => {
    return (
        everClosed === false && (
        document.body.scrollTop > offset ||
        document.documentElement.scrollTop > offset
      )
    )
  }

  console.log({ everClosed })

  if (isTriggered()) {
    sliderElement.classList.remove('slider--hidden');
  }
};

const fnCloseSlider = async (id) => {
  if (!id) return;

  const intervalInMinute = (value) => value * 60 * 1000;

  const element = document.getElementById(id);
  element.classList.toggle('slider--hidden');
  
  await fnSetEverClosed(true);
  setTimeout(() => fnSetEverClosed(false), intervalInMinute(10));
};

const fnSetEverClosed = (value) => {
  const slider = {
    everClosed: value,
  }

  localStorage.setItem('slider', JSON.stringify(slider));
}

const fnLoad = async () => {
  await fnSetEverClosed(false);
}

document.addEventListener("DOMContentLoaded", fnLoad);
document.addEventListener("scroll", fnScroll);
