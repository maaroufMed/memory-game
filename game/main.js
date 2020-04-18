// button star game
document.querySelector('.control-btn button').onclick = function () {
    // prompt type your name
    let userName = prompt('what is your name ?');

    // check in your name
    if (userName == null || userName == "" ) {
        document.querySelector('.name span').innerHTML = "Unknown";
    } else {
        document.querySelector('.name span').innerHTML = userName;
        document.getElementById('start').play();
    }
    document.querySelector('.control-btn').remove();
}

// star main variable
let duration = 800,
    gameContainer = document.querySelector('.game-container');
    blocks = Array.from(gameContainer.children),
    order = [...Array(blocks.length).keys()];
    shaffle(order);
// add order css to element
blocks.forEach( (block, index) => {
    block.style.order = order[index];
    block.addEventListener("click", function() {
        flipBlock(block);
    });
});
function flipBlock(selectBlock) {
    selectBlock.classList.add('flipp');
    let flipOpen = blocks.filter(flipOpen => flipOpen.classList.contains('flipp'));
    if(flipOpen.length === 2) {
        stopClick();
        checkMatch(flipOpen[0], flipOpen[1]);
    }
}
function stopClick() {
    gameContainer.classList.add('no-clicking');
    setTimeout(() => {
        gameContainer.classList.remove('no-clicking');
    }, duration);
}
// function checker 
function checkMatch(fristBlock, lastBlock) {
    let tires = document.querySelector('.tries span');

    if(fristBlock.dataset.pic === lastBlock.dataset.pic) {
        document.getElementById('success').play();

        fristBlock.classList.remove('flipp');
        lastBlock.classList.remove('flipp');

        fristBlock.classList.add('match');
        lastBlock.classList.add('match');

    } else {
        tires.innerHTML = parseInt(tires.innerHTML) + 1;
        setTimeout(() => {
            fristBlock.classList.remove('flipp');
            lastBlock.classList.remove('flipp');
        }, duration);
        document.getElementById('field').play();
    }
}

// function shaffle random number 
function shaffle(array) {
    let current = array.length,
        temp,
        randome;
    while(current > 0 ) {
        randome = Math.floor(Math.random() * current);
        current--;
        temp = array[current];
        array[current] = array[randome];
        array[randome] = temp;
    }
    return array;
}

