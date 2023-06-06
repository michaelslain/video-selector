const randomSelection = (titles: string[]): string => {
    const randomIndex = Math.floor(Math.random() * titles.length)
    return titles[randomIndex]
}

export default randomSelection
