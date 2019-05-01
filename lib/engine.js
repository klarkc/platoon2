export default function buildEngine({type, window}) {
    if (type === 'web') {
        const {document, canvas} = window
        const canvas = document.querySelector('canvas')
        const ctx = canvas.getContext('2d')
        const requestFrame = window.requestAnimationFrame.bind(window)
        
        return {
            type,
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
            createKeymap() {
                return {
                    up: 'w',
                    right: 'd',
                    down: 's',
                    left: 'a'
                }
            },
            getInputState(keyMap) {

            }
        }
    }
    return engine
}