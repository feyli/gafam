window.onload = () => {
    const divs = document.querySelectorAll('.page')
    divs.forEach(div => {
        div.addEventListener('click', () => {
            document.location.href = `html/${div.id}.html`;
        });
    });
};