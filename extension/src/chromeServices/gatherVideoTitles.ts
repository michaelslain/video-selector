const gatherVideoTitles = (): string[] => {
    const elements = document.querySelectorAll('#video-title')
    const titles = Array.from(elements).map(title => title.innerHTML)
    return titles
}

export default gatherVideoTitles
