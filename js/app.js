const plusknap = document.querySelector('.btn_plus');
const minusknap = document.querySelector('.btn_minus');
const counter = document.querySelector('.felt');
const reset = document.querySelector('.key_reset')
const tal = document.querySelector('.tal');
const countall = document.querySelector('.total');

minusknap.addEventListener('click', () =>{
    counter.textContent = parseInt(counter.value) - 1;
});

plusknap.addEventListener('click', () =>{
    counter.textContent = parseInt(counter.textContent) + 1;
})

reset.addEventListener('click', () =>{
    counter.textContent = 0;
})
minusknap.addEventListener('click', ()=> {
    countall.value = parseInt(countall.value) - 1;
});

plusknap.addEventListener('click', ()=> {
    countall.value = parseInt(countall.value) + 1;
});
reset.addEventListener('click', ()=>{
    countall.value =0;
})

// js end