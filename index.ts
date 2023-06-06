import express from 'express'
import cors from 'cors'
import openai from './ai'
import bodyParser from 'body-parser'

const PORT = process.env.PORT || 3000

const app = express()
    .use(cors())
    .use(bodyParser.json())

    .get('/', (_, res) => {
        res.send('Welcome')
    })

    .post('/api/pick-video', async (req, res) => {
        const titles: string[] = req.body.titles

        if (!titles) {
            res.status(400).json({ error: 'No titles provided' })
            return
        }
        if (titles.length < 5) {
            res.status(400).json({ error: 'Not enough titles provided' })
            return
        }
        if (titles.length > 1000) {
            res.status(400).json({ error: 'Too many titles provided' })
            return
        }

        const maxTokens: number = titles.sort((a, b) => b.length - a.length)[0]
            .length
        const prompt = `
            here is a list of youtube video titles: ${titles.join(
                ', '
            )}. pick the most useful/productive video. return just the video title.
        `
            .replace(/\n/g, ' ')
            .trim()

        const response = await openai.createCompletion({
            model: 'text-davinci-003',
            prompt,
            temperature: 0.2,
            max_tokens: maxTokens,
        })

        // check if response is not 200
        if (response.status !== 200) {
            res.status(response.status).json({ error: 'OpenAI API error' })
            return
        }

        res.status(200).send({ title: response.data.choices[0].text })
    })

app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}`)
})
