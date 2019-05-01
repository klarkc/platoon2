export default function buildEngine({type, window}) {
    if (type === 'web') {
        const { document, requestAnimationFrame } = window
        const canvas = document.querySelector('canvas')
        const ctx = canvas.getContext('2d')
        const requestFrame = requestAnimationFrame.bind(window)
        
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
            createInputs() {
                return {
                    up: false,
                    right: false,
                    down: false,
                    left: false
                }
            },
            onInputDown(callback) {
                document.addEventListener(
                    'keydown',
                    ({key}) => callback(key)
                )
            },
            onInputUp(callback) {
                document.addEventListener(
                    'keyup',
                    ({ key }) => callback(key)
                )
            },
        }
    }
    return engine
}