export function loadAsset(path) {
    return new Promise((resolve) => {
        const img = new Image()
        img.src = `assets/${path}`
        img.addEventListener('load', () => resolve(img))
    })
}