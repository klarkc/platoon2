export default function buildEngine(type = 'web') {
    let engine = {type}
    if (type === 'web') {
        const canvas = document.querySelector('canvas')
        const ctx = canvas.getContext('2d')
        const requestFrame = window.requestAnimationFrame.bind(window)
        
        engine = {
            ...engine,
            requestFrame,
            loadImage(path) {
                return new Promise((resolve) => {
                    const img = new Image()
                    img.src = `assets/${path}`
                    img.addEventListener('load', () => resolve(img))
                })
            },
            clear(w, h) {
                ctx.clearRect(0, 0, w, h)
            },
            draw: ctx.drawImage.bind(ctx),
        }
    }
    return engine
}