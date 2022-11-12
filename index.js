const scaleFactor = 1/20;

screen.orientation.lock("portrait-primary")

function toggleContrast()
{
    document.body.classList.toggle("dark-theme")
}

function moveBackground(event)
{
    const shapes = document.querySelectorAll(".shape")
    const posX = event.clientX * scaleFactor;
    const posY = event.clientY * scaleFactor;

    for (let i = 0; i < shapes.length; i++)
    {
        const isOdd = i % 2 !== 0;
        const boolInt = isOdd ? -1 : 1;

        shapes[i].style.transform = `translate(${posX * boolInt}px, ${posY * boolInt}px)`
    }
}

function contact(event) {
    event.preventDefault();

    const loading = document.querySelector(".modal__overlay--loading");
    const success = document.querySelector(".modal__overlay--success");
    loading.classList += " modal__overlay--visible";
    emailjs
        .sendForm(
            'service_r8fxrrj',
            'template_6o2nn9h',
            event.target,
            '4iv2o637aA7jR3e4y'
        ).then(() => {
            loading.classList.remove("modal__overlay--visible");
            success.classList += " modal__overlay--visible";
        }).catch(() => {
            loading.classList.remove("modal__overlay--visible");
            alert("The email service is temporarily unavailable. Please contact me directly on rajmoham10@gmail.com")
        })
}

function toggleModal()
{
    document.body.classList.toggle("modal--open")
}

function hideShapes()
{
    const yScroll = window.pageYOffset;
    const landingHeight = document.querySelector("#landing-page").clientHeight
    const shapes = document.querySelectorAll(".shape")

    if (yScroll > landingHeight * 0.6)
    {
        for (let i = 0; i < shapes.length; i++)
        {
            shapes[i].style.opacity = "0"
        }
    }
    else
    {
        for (let i = 0; i < shapes.length; i++)
        {
            shapes[i].style.opacity = "1"
        }
    }

}