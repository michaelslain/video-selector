import createButton from './createButton'

const main = async () => {
    const { href } = window.location
    if (href !== 'https://www.youtube.com/') return

    createButton()
}

main()
