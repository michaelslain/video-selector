const gptSelect = async (
    titles: string[],
    links: string[]
): Promise<string | null> => {
    const res = await fetch('http://localhost:3000/api/pick-video', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ titles }),
    })
    const json = await res.json()

    console.log(json)

    if (res.status !== 200) {
        console.error(json.error)
        return null
    }

    let title: string | null = json.title
    if (!title) return null

    title = title.replace(/\n/g, ' ').trim()

    const index = titles.indexOf(title)
    return links[index]
}

export default gptSelect
