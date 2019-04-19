import render from './render.js'
import loader from './loader.js'
import soldier from './soldier/index.js'

export default async function createGame({canvas, requestFrame}) {
    const assets = await loader.loadAll([soldier])
    const ctx = canvas.getContext('2d')

    return {
        resume() {
            // get user input
            // getUserInput()

            // process one frame
            // updateGame()
            const entities = [
                soldier.create(),
            ]

            // draw everything on the screen
            ctx.clearRect(0, 0, 640, 480)
            render({ entities, assets, draw: ctx.drawImage.bind(ctx) });

            // wait until a frame's worth of time has elapsed
            requestFrame(resume)
        }
    }
}