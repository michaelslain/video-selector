import gatherVideoLinks from './gatherVideoLinks'
import gatherVideoTitles from './gatherVideoTitles'
// import randomSelection from './randomSelection'
import gptSelect from './gptSelect'

const createButton = (): void => {
    const button = document.createElement('a')
    button.id = 'pick-a-video-button'

    button.innerHTML = 'Pick a Video!'
    button.style.cssText = `
        position: relative;
        top: 50px;
        left: 50px;
        background-color: red;
        color: white;
        font-weight: bold;
        padding: 10px;
        border-radius: 10px;
        cursor: pointer;
        z-index: 100000;
        display: inline-block;
    `

    button.addEventListener('click', onClick)
    document.body.appendChild(button)
}

let lastClick = 0

const onClick = (): void => {
    const now = Date.now()
    if (now - lastClick < 5000) return
    lastClick = now

    const links = gatherVideoLinks()
    const titles = gatherVideoTitles()

    gptSelect(titles, links).then(selectedLink => {
        if (!selectedLink) return
        window.open(`https://www.youtube.com${selectedLink}`, '_blank')
    })
}

export default createButton
