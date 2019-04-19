import render from './lib/render.js'
import soldier from './lib/soldier/index.js'

const canvas = document.querySelector('canvas')
const ctx = canvas.getContext('2d')
const reqFrame = window.requestAnimationFrame

const assets = [
    soldier.load()
]

function nextFrame() {
    // get user input
    // getUserInput()

    // process one frame
    // updateGame()
    const entities = [
        soldier.create(),
    ]

    // draw everything on the screen
    ctx.clearRect(0, 0, 640, 480)
    render({entities, assets, draw: ctx.drawImage});

    // wait until a frame's worth of time has elapsed
    reqFrame(nextFrame)
}

nextFrame(nextFrame)