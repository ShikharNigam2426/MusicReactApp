function changePlay(event) {
    const icon = event.target;
    if (icon.classList.contains('fa-play')) {
      
      icon.classList.remove('fa-play');
      icon.classList.add('fa-pause');
    } else {
      icon.classList.remove('fa-pause');
      icon.classList.add('fa-play');
    }
}
  
  const iconn = document.getElementsByClassName('fas'); // Remove the dot
  
  const iconArray = [...iconn];
  
  iconArray.forEach((element) => {
    element.addEventListener('click', changePlay);
  });
  