const object = document.querySelectorAll('.box-services');

object.forEach( e => {
    window.addEventListener('scroll', () =>{
        const scroll = e.getBoundingClientRect()
        
        if(scroll.top < 633){
            e.style.opacity = "1"
            e.style.transform = "translateY(0)"
        } else {
            e.style.opacity = "0"
            e.style.transform = "translateY(-50px)"
        }
    })
});

const title = document.querySelector('.service .text h1');

window.addEventListener('scroll', () => {
    const position = title.getBoundingClientRect()

     if(position.top < 736){
         title.style.opacity = "1"
     } else {
         title.style.opacity = "0"
     }
})

const pulse = document.querySelector('.about .info .about-img')
const about = document.querySelector('.about .info .subtitle')
const aboutText = document.querySelector('.info .text .history:nth-of-type(2)')
const bgSphere = document.querySelector('.bg-sphere')

window.addEventListener('scroll', () => {
    const position = {
        img: pulse.getBoundingClientRect(),
        subtitleAbout: about.getBoundingClientRect(),
        textAbout: aboutText.getBoundingClientRect(),
        Spheres: bgSphere.getBoundingClientRect()
    }

    //Add class and style
    if(position.Spheres.top < 500){
        bgSphere.style.opacity = '1'
    }

    if(position.img.top < 300){
        pulse.style.left = '7%'
        pulse.style.transform = 'scale(1)'
    }

    if(position.subtitleAbout.top < 387){
        about.classList.add('slide-on')
    }else {
        about.classList.remove('slide-on')
    }

    if(position.textAbout.top < 400){
        aboutText.classList.add('slide-on')
    } else {
        aboutText.classList.remove('slide-on')
    }
})

window.addEventListener('scroll', function (){
    var scroll = document.querySelector('#btnScrollToTop');
    scroll.classList.toggle("active", window.scrollY > 800)
})