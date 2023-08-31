
const polaroids = [
    {image: "bouldering.png", caption: "Sports", info: "Among bouldering, biking and crossfit I love to do lots of different sports and spent quite some of my freetime exercising"},
    {image: "plants.png", caption: "Plants", info: "Recently I've grown (pun intended) an interest in raising and caring for different house plants"},
    {image: "coding.png", caption: "Computer Science", info: "What started as an hobby turned into a passion. I am enthusiasticly learning and testing out the diverse world of computer science. For details about my projects check out my github"},
    {image: "hike.png", caption: "Outdoor & Nature", info: "To relax from everyday life I love to do hiking trips and spend time outdoors"},
    {image: "scout.png", caption: "Scouting & Social Engagement", info: "My passion for scouting started over 15 years ago and until today I've met a lot of amazing people and experienced innumerable adventures with my group"},
    // maybe add gaming polaroid?
];


function randomRotate() {
    const angles = [-15, -10, -5, 5, 10, 15];
    return angles[Math.floor(Math.random() * angles.length)];
}


function shuffleAndPopulate() {
    for (let i = polaroids.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [polaroids[i], polaroids[j]] = [polaroids[j], polaroids[i]];
    }

    const container1 = document.querySelector('.polaroid-container1');
    for (let i = 0; i < 3; i++) {
        populatePolaroid(container1, polaroids[i]);
    }

    const container2 = document.querySelector('.polaroid-container2');
    for (let i = 3; i < polaroids.length; i++) {
        populatePolaroid(container2, polaroids[i]);
    }
}

function populatePolaroid(container, polaroid) {
    const polaroidElement = document.createElement("div");
    polaroidElement.className = "polaroid";
    
    const rotateAngle = randomRotate();
    polaroidElement.style.transform = `rotate(${rotateAngle}deg)`;
    polaroidElement.setAttribute("data-caption", polaroid.info);

    
    const imageElement = document.createElement("img");
    imageElement.src = `../sources/images/${polaroid.image}`;
    
    const captionElement = document.createElement("div");
    captionElement.className = "caption";
    captionElement.textContent = polaroid.caption;
    
    polaroidElement.appendChild(imageElement);
    polaroidElement.appendChild(captionElement);
    
    container.appendChild(polaroidElement);
}

window.onload = shuffleAndPopulate;
