// add the event listener to the divs so that when they are clicked, the user is redirected to the page with the same name as the div id
const divs = document.querySelectorAll('.page')
divs.forEach(div => {
    div.addEventListener('click', () => {
        document.location.href = `html/${div.id}.html`;
    });
});