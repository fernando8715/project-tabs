const items = document.querySelectorAll('.nav-item')

const item1 = document.querySelector('.item1');
const item2 = document.querySelector('.item2');
const item3 = document.querySelector('.item3');
const item4 = document.querySelector('.item4');

const info = document.querySelector('.info');

const clean = (e)=>{
    items.forEach(elem => {
        elem.classList.remove('selected');
        e.currentTarget.classList.add('selected');
    });
}


item1.addEventListener("click", (e)=> {
    clean(e);
    info.textContent = "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Illo, quis! Perferendis";
})

item2.addEventListener("click", (e)=> {
    clean(e);
    info.textContent = "Dolore inventore hic pariatur praesentium atque voluptatum facilis in id voluptatem";
})

item3.addEventListener("click", (e)=> {
    clean(e);
    info.textContent = " pariatur praesentium atque Dolore inventore hic in id voluptatem voluptatum facilis ";
})

item4.addEventListener("click", (e)=> {
    clean(e);
    info.textContent = "atque error velit, odio deseruntvoluptatum facilis in id voluptatem Dolore inventore hic pariatur praesentium ";
})

