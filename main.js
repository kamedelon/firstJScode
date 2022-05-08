let popup = document.querySelector('.popup')
let button = document.querySelector('button')
let closer = document.querySelector('p')

    const main = () => {
        popup.classList.remove('none')
        popup.classList.toggle('show')
    }
    
    const close = () => {
        popup.classList.toggle('show')
    }

    
 button.addEventListener('click', main)
 closer.addEventListener('click', close)
