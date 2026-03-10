// catch the levelBtnSection
const levelBtnSection = document.getElementById("levelBtnSection")

// load the level button api
async function loadLevelBtns (){
    const res = await fetch("https://openapi.programming-hero.com/api/levels/all")
    const data = await res.json()
    displayLevelBtns(data.data);
}


// load the level button api
async function displayLevelBtns (levels){
    levels.forEach(level => {
        const btn = document.createElement("button")
        btn.innerHTML = ` <button class="btn btn-outline btn-primary"><span><i class="fa-solid fa-book-open"></i></span>Lesson: ${level.level_no}</button>`

        // append to the levelBtnSection
        levelBtnSection.appendChild(btn)
    });
}

loadLevelBtns()