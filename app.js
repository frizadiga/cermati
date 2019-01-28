const fnScroll = (event) => {
  const { everClosed=false } = JSON.parse(localStorage.slider);
  
  const offset = window.innerHeight;
  const sliderElement = document.getElementById('slider');

  const isTriggered = () => {
    return (
        !everClosed && (
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

  const intervalInMinute = 10 * 60 * 1000;

  const element = document.getElementById(id);
  element.classList.toggle('slider--hidden');
  
  await fnSetEverClosed(true);
  setTimeout(() => fnSetEverClosed(false), intervalInMinute);
};

const fnSetEverClosed = (value) => {
  const slider = {
    everClosed: value,
  }

  localStorage.setItem('slider', JSON.stringify(slider));
}

const fnLoad = () => {
  fnSetEverClosed(false);
}

document.addEventListener("DOMContentLoaded", fnLoad);
document.addEventListener("scroll", fnScroll);
