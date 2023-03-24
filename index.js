//Первый проет Слайдер
const slides = document.querySelectorAll(".slide");

for (const slide of slides) {
  slide.addEventListener("click", () => {
    clearActiveClasses();
    slide.classList.add("active");
  });
}
function clearActiveClasses() {
  slides.forEach((slide) => {
    slide.classList.remove("active");
  });
}
//Первый проет Слайдер

//Проект 2 Drag & Drop
const item = document.querySelector('.item')
const placeholders = document.querySelectorAll('.placeholder')

item.addEventListener('dragstart', dragstart)
item.addEventListener('dragend', dragend)

for (const placeholder of placeholders){
  placeholder.addEventListener('dragover', dragover)
  placeholder.addEventListener('dragenter', dragenter)
  placeholder.addEventListener('dragleav', dragleav)
  placeholder.addEventListener('drop', drop)
}

function dragstart(event) {
  event.target.classList.add('hold')
  setTimeout(()=> event.target.classList.add('hide'),0)
}

function dragend(event) { event.target.classList.remove('hold','hide')
}

function dragover(event){
  event.preventDefault()
}
function dragenter(event){
  event.target.classList.add('hovered')
}
function dragleav(event){
  event.target.classList.remove('hovered')
}
function drop(event) {
  event.target.classList.remove('hovered')
  event.target.append(item)
}
//Проект 2 Drag & Drop