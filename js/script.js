// catch the levelBtnSection
const levelBtnSection = document.getElementById("levelBtnSection")
const wordsSection = document.getElementById("wordsSection")
const noLessonSection = document.getElementById("noLessonSection")


// click levelbutton function
function clickLevelBtn(id, btn){

    // show word section
    wordsSection.classList.remove("hidden")

    // remove active style from all buttons
    const allBtns = levelBtnSection.querySelectorAll("button")
    allBtns.forEach(b => {
        b.classList.add("btn-outline")
    })

    // set active button
    btn.classList.remove("btn-outline")
    btn.classList.add("btn-primary")

    loadWordsByLevels(id)
}

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
        btn.classList.add("btn","btn-outline","btn-primary")
        btn.innerHTML = `<span><i class="fa-solid fa-book-open"></i></span> Lesson: ${level.level_no}`

        btn.onclick = () => clickLevelBtn(level.level_no, btn)

        // append
        levelBtnSection.appendChild(btn)
    });
}

// loadWordsByLevels
async function loadWordsByLevels (id){
    const res = await fetch(`https://openapi.programming-hero.com/api/level/${id}`)
    const data = await res.json()
    displayWordsByLevels(data.data);

     if(wordsSection.children.length == 0){
        // show the noLessonSection 
    noLessonSection.classList.remove("hidden")
    wordsSection.classList.add("hidden")
     }
     else{
        // hide the noLessonSection 
    noLessonSection.classList.add("hidden")
     }
}

// displayWordsByLevels
async function displayWordsByLevels (words){
    // clear
    wordsSection.innerHTML = "";
    words.forEach(word =>{
        const card = document.createElement("div")
        card.innerHTML = `<div class="card bg-base-100 shadow-sm">
  <div class="card-body items-center text-center">
    <h2 class="card-title text-2xl font-bold">${word.word}</h2>
    <p class="text-lg font-medium my-5">meaning/pronunciation</span></p>
    <h4 class="font-hind-siliguri font-semibold text-2xl text-[#575765]">${word.meaning} <span>/ ${word.pronunciation}</span></h4>
    <div class="flex justify-between w-full mt-14">
      <button class="btn btn-sm bg-[#00bbff2c] text-lg"><i class="fa-solid fa-circle-info"></i></button>
      <button class="btn btn-sm bg-[#00bbff2c] text-lg"><i class="fa-solid fa-volume-high"></i></button>
    </div>
  </div>
</div>
        `

        wordsSection.appendChild(card)
    })
}






loadLevelBtns()