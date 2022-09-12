const numberOfHoles = document.querySelector('.numberOfHoles');
const holes = document.querySelector('.holes');
numberOfHoles.addEventListener('change', () => {

    holes.innerHTML = '';
    for(let i=0; i<numberOfHoles.value; i++){
        holes.innerHTML += `
            <div class="input-group sektion p-4 felt">
                <button class="input-group-text btn_minus">-</button>
                <input type="number" class="form-control counter" min="0" value="0">
                <button class="input-group-text btn_plus">+</button>
            </div>
        `;
    }

    start();
});

function start() {
    const felter = document.querySelectorAll('.felt');
    felter.forEach(felt => {
        const plusknap = felt.querySelector('.btn_plus');
        const minusknap = felt.querySelector('.btn_minus');
        const counter = felt.querySelector('.counter');

        minusknap.addEventListener('click', () => {
            minus(counter);
            total(felter);
        });

        plusknap.addEventListener('click', () => {
            plus(counter);
            total(felter);
        });

    });
}

const reset = document.querySelector('.key_reset')
const countall = document.querySelector('.total');
reset.addEventListener('click', () => countall.value = 0);

function minus(counter){
    if(counter.value > 0){
        counter.value = parseInt(counter.value) - 1;
    }
}

function plus(counter){
    if(counter.value < 10){
        counter.value = parseInt(counter.value) + 1;
    }
}

function total(felter){
    countall.value = 0;
    felter.forEach(felt => {
        const counter = felt.querySelector('.counter');
        countall.value = parseInt(countall.value) + parseInt(counter.value);
    });

}