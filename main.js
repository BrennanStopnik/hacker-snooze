const body = document.querySelector("body");
let parent = document.createElement("div");
let child = document.createElement("div");
let topStoriesURL = `https://hacker-news.firebaseio.com/v0/topstories.json?print=pretty`
parent.className = "parent";
child.className = "child";

parent.appendChild(child);
body.appendChild(parent);

let apiCall = async () => {
    let res = await fetch(topStoriesURL);
    let data = await res.json();
    for (let i = 0; i < 150; i++){
        let storyID = data[i];
        let allStoriesID = `https://hacker-news.firebaseio.com/v0/item/${storyID}.json?print=pretty`
        let storyRes = await fetch(allStoriesID)
        let storyData = await storyRes.json();
        
        let storyTitle = document.createElement('div');
        storyTitle.setAttribute('id', 'parentDiv');
        child = document.createElement('div');
        tag = document.createElement('a');
        parent.appendChild(storyTitle);
        storyTitle.appendChild(tag);
        parent.appendChild(child);
        tag.innerText = storyData.title
        tag.href = storyData.url;
        child.innerText = `${storyData.descendants} comments | ${storyData.score} points | submitted by ${storyData.by}`
    }
}
apiCall();



