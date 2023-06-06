const gatherVideoTitles = (): string[] => {
    const elements: NodeListOf<HTMLAnchorElement> =
        document.querySelectorAll('#video-title')
    const titles = Array.from(elements).map(title => title.innerText)
    titles.splice(titles.length - 2, 2)
    return titles
}

export default gatherVideoTitles
