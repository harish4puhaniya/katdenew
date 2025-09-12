function showDivsByClassFromPlaceholder(inputId) {
    // Get the input element by ID
    var input = document.getElementById(inputId);
    // Get the class name from the placeholder
    var targetClass = input.placeholder.trim();

    // Get all divs on the page
    var divs = document.querySelectorAll('div');
    divs.forEach(function(div) {
        // Check if the div contains the target class
        if (div.classList.contains(targetClass)) {
            div.style.display = 'block';
        } else {
            div.style.display = 'none';
        }
    });
}
