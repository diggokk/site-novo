(function(){
  const countDisplay = document.getElementById('countDisplay');
  const clickButton = document.getElementById('clickButton');
  let count = 0;

  clickButton.addEventListener('click', () => {
    count++;
    countDisplay.textContent = count;
  });
})();
