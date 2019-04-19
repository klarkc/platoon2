import render from './lib/render'

const canvas = document.querySelector('canvas')
const ctx = canvas.getContext('2d')
const reqFrame = window.requestAnimationFrame

function nextFrame() {
    // get user input
    // getUserInput()

    // process one frame
    // updateGame()

    // draw everything on the screen
    ctx.clearRect(0, 0, 640, 480)
    render({entities, assets, draw: ctx.drawImage});

    // wait until a frame's worth of time has elapsed
    reqFrame(nextFrame)
}

nextFrame(nextFrame)