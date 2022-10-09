import posts from "/data.js"

function renderPosts() {
    for (let i = 0; i < posts.length; i++) {
        document.getElementById("section").innerHTML +=
            `<div class="post">
                <div class="post-user">
                    <img class="post-user-img" src="${posts[i].avatar}"/>
                    <div>
                        <p class="post-user-name">${posts[i].name}</p>
                        <p class="post-user-nickname">${posts[i].username}</p>
                    </div>
                </div>
                <img class="post-image" src="${posts[i].post}"/>
                <div class="post-buttons">
                    <img class="post-buttons-hearth "src="/images/icon-heart.png"/>
                    <img class="post-buttons-hearth-filled hidden"src="/images/icon-heart-filled.png"/>
                    <img class="post-buttons-comment" src="/images/icon-comment.png"/>
                    <img class="post-buttons-dm" src="/images/icon-dm.png"/>
                </div>
                <p class="post-likes"><span id="likes-count">${posts[i].likes}</span> likes</p>
                <p class="post-comments"><span>${posts[i].username}</span> ${posts[i].comment}</p>
            </div>`
    }

    for (let i = 0; i < posts.length; i++) {
        displayLikes(i)
    }
}

function displayColoredHearth(color, noColor) {
    noColor.classList.add("hidden")
    color.classList.remove("hidden")
}

function hideColoredHearth(color, noColor) {
    noColor.classList.remove("hidden")
    color.classList.add("hidden")
}

function addLike(likesCount) {
    let numLikes = parseInt(likesCount.textContent)
    numLikes++
    likesCount.textContent = numLikes.toString()
}

function removeLike(likesCount) {
    let numLikes = parseInt(likesCount.textContent)
    numLikes--
    likesCount.textContent = numLikes.toString()
}

function displayLikes(i) {
    const buttonHearth = document.querySelectorAll(".post-buttons-hearth")[i]
    const likesCount = document.querySelectorAll("#likes-count")[i]
    const hearthButton = document.querySelectorAll(".post-buttons-hearth")[i]
    const hearthButtonFilled = document.querySelectorAll(".post-buttons-hearth-filled")[i]
    const poster = document.querySelectorAll(".post-image")[i]
    let isLiked = false

    buttonHearth.addEventListener("click", () => {
        addLike(likesCount)
        displayColoredHearth(hearthButtonFilled, hearthButton)
        isLiked = true
    })

    hearthButtonFilled.addEventListener("click", () => {
        removeLike(likesCount)
        hideColoredHearth(hearthButtonFilled, hearthButton)
        isLiked = false
    })

    poster.addEventListener("dblclick", () => {
        if (isLiked === false) {
            addLike(likesCount)
            displayColoredHearth(hearthButtonFilled, hearthButton)
            isLiked = true
        } else {
            removeLike(likesCount)
            hideColoredHearth(hearthButtonFilled, hearthButton)
            isLiked = false
        }
    })
}


renderPosts()






