// AIzaSyAUn27o7xC_IzEQVVjSYqZBfhOsZGeKVTg
const searchBtn = document.getElementById('searchBtn')
const searchInput = document.getElementById('searchInput')
const mainVideoContainer = document.getElementById('mainVideoContainer')
const otherVideosContainer = document.getElementById('otherVideosContainer')

searchBtn.addEventListener('click', () => {
    const searchText = searchInput.value

    fetchVideos(searchText)
})

async function fetchVideos(searchText) {
    try {
        const response = await fetch(`https://www.googleapis.com/youtube/v3/search?part=snippet&key=AIzaSyAUn27o7xC_IzEQVVjSYqZBfhOsZGeKVTg&q=${searchText}&type=video`)
        const data = await response.json()
        if (data?.items?.length > 0) {
            const videos = data.items
            const mainVideoId = videos[0].id.videoId
            console.log(videos)
            mainVideoContainer.innerHTML = `<iframe width="560" height="315" src="https://www.youtube.com/embed/${mainVideoId}" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen>`
            
            otherVideosContainer.innerHTML = ''
            videos.forEach(video => {
                const img = document.createElement('img')
                img.src = video.snippet.thumbnails.high.url

                img.addEventListener('click', () => {
                    mainVideoContainer.innerHTML = `<iframe width="560" height="315" src="https://www.youtube.com/embed/${video.id.videoId}" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen>`
                })

                otherVideosContainer.appendChild(img)
            })
        }
    }
    catch(err) {
        alert('Error when fetching videos!')
        console.error(err)
    }
}