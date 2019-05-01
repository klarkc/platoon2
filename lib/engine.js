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
            createInputHelper({getState, setState}) {
                const keyMap = key => (({
                    a: 'left',
                    d: 'right',
                    w: 'up',
                    s: 'down'
                })[key] || key)
                const keyHandler = truth => ({ key }) => setState({
                    ...getState(),
                    [keyMap(key)]: truth,
                })
                document.addEventListener('keydown', keyHandler(true))
                document.addEventListener('keyup', keyHandler(false))
                return {
                    get state(){ return getState() },
                    isPressed: key => getState()[keyMap(key)] || false
                }
            },
        }
    }
    return engine
}