function filterDivs() {
    let inputClass = document.getElementById('classInput').value.trim();
    let parent = document.getElementById('parentDiv');
    let childDivs = parent.querySelectorAll('div');

    childDivs.forEach(div => {
      if (inputClass && div.classList.contains(inputClass)) {
        div.style.display = 'block';  // Show matching div
      } else {
        div.style.display = 'none';   // Hide others
      }
    });
  }
