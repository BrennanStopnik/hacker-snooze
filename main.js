const body = document.querySelector("body");
const parent = document.createElement("div");
parent.className = "parent";
const child = document.createElement("div");
child.className = "child";

let ordered = document.createElement("ol");
let listItem = document.createElement("li");
let titleStory = document.createElement("h4");
let UserStory = document.createElement("p");
let CommentsStory = document.createElement("p");
let topStoriesArr = []
let topStoriesURL = `https://hacker-news.firebaseio.com/v0/topstories.json?print=pretty`
// let singleStories = `https: //hacker-news.firebaseio.com/v0/item/${data[i]}.json?print=pretty`

parent.appendChild(child);
body.appendChild(parent);
child.appendChild(ordered);
ordered.appendChild(listItem);
listItem.className = "container-fluid";
listItem.appendChild(titleStory);
titleStory.className = "title-story";



let apiCall = async () => {
    let res = await fetch(topStoriesURL);
    let data = await res.json();
    // console.log(data);
    for (let i = 0; i < 100; i++){
        let storyID = data[i];
        let storyRes = await fetch(`https://hacker-news.firebaseio.com/v0/item/${storyID}.json?print=pretty`)
        let storyData = await storyRes.json();
        
        listItem.innerText = storyData.title;
    }
}

apiCall();

