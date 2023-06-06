const gatherVideoLinks = (): string[] => {
    const elements = document.querySelectorAll('#video-title-link')
    const links = Array.from(elements).map(link => link.getAttribute('href'))
    return links.filter(link => link) as string[]
}

export default gatherVideoLinks
