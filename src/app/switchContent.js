const switchContent = (switchData,animationClass) => {
  const title = document.querySelector(`#${switchData.title}`);
  const content = document.querySelector(`#${switchData.content}`);

  
  if (title && content) {
    switchData.btns.forEach(btn => {
      const btnElement = document.querySelector(`#${btn.id}`);
      btnElement.addEventListener('click', e => {
        title.classList.remove(animationClass)
        content.classList.remove(animationClass)
        title.textContent = btn.title;
        content.textContent = btn.content;
        void title.offsetWidth
        title.classList.add(animationClass)
        content.classList.add(animationClass)
      });
    });
  }
};
export default switchContent;
