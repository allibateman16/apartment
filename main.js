fetch("http://designsmith.dk/t9/wp-json/wp/v2/apartment")
.then(res => res.json())
.then(handleData)

function handleData(posts) {
 console.log(posts);
posts.forEach(showPost)
}

function showPost(post){
    console.log(post)
    const template = document.querySelector("template").content;

    const copy = template.cloneNode(true);

    copy.querySelector("img").src = post.media.guid;

    copy.querySelector(".address").textContent = post.address;

     copy.querySelector(".bed span").innerHTML = post.bed;

    copy.querySelector(".bath span").textContent = post.bath;

    copy.querySelector(".metersq span").textContent = post.meters_sq;

    document.querySelector("main").appendChild(copy);
}
