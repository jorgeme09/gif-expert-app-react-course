export const getGifs = async (URL, category) => {
    const { data } = await (await fetch(`${URL}${encodeURI(category)}`)).json()
    const gifs = data.map(img => {
        return {
            id: img.id,
            title: img.title,
            url: img.images.downsized_medium.url
        }
    })
    return gifs
}