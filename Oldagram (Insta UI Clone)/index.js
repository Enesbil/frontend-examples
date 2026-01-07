const posts = [
    {
        name: "Vincent van Gogh",
        username: "vincey1853",
        location: "Zundert, Netherlands",
        avatar: "images/avatar-vangogh.jpg",
        post: "images/post-vangogh.jpg",
        comment: "just took a few mushrooms lol",
        likes: 21
    },
    {
        name: "Gustave Courbet",
        username: "gus1819",
        location: "Ornans, France",
        avatar: "images/avatar-courbet.jpg",
        post: "images/post-courbet.jpg",
        comment: "i'm feelin a bit stressed tbh",
        likes: 4
    },
        {
        name: "Joseph Ducreux",
        username: "jd1735",
        location: "Paris, France",
        avatar: "images/avatar-ducreux.jpg",
        post: "images/post-ducreux.jpg",
        comment: "gm friends! which coin are YOU stacking up today?? post below and WAGMI!",
        likes: 152
    }
]

const body = document.querySelector("body")

function renderPosts(arr){
    for(let i = 0; i < arr.length; i ++){
        body.innerHTML += `        
            <section class="post-body">
                <div class="post-header">
                    <img class ="poster-icon" alt="O.P. icon" src=${arr[i].avatar}>
                    <div class="op-info">
                        <p class="op-name">${arr[i].name}</p>
                        <p class="op-location">${arr[i].location}</p>
                    </div>
                </div>
                <img class="post-image" src=${arr[i].post}>
                <div class="post-cta">
                    <img class="cta-icon" src="images/icon-heart.png">
                    <img class="cta-icon" src="images/icon-comment.png">
                    <img class="cta-icon" src="images/icon-dm.png">
                </div>
                <div class="post-bottom">
                    <p class="bottom-bold">${arr[i].likes} likes</p>
                    <p class="bottom-regular"><span class="bottom-bold">${arr[i].username}</span> ${arr[i].comment}</p>
                </div>
            </section>`
    }
}

renderPosts(posts)
