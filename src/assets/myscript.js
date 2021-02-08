function loop1(o) {
    it = o[Symbol.iterator]();
    return it.next.bind(it);
}
var counter = document.getElementsByClassName('shoping-bottom');
var loop = function loop() {
    var variable = step.value;
    var minus = variable.getElementsByClassName('minus-btn');
    var input = variable.querySelector('input');
    var plus = variable.getElementsByClassName('plus-btn');
    var inctimer = 0,
        dectimer = 0,
        counter = 0;

    function increment() {
        parseInt(input.value++);
        counter += 1;
        if (counter < 10) {
            inctimer = setTimeout(function() {
                increment();
            }, 500);
        } else {
            inctimer = setTimeout(function() {
                increment();
            }, 50);
        }
    }
    plus[0].addEventListener('mousedown', increment);
    plus[0].addEventListener('mouseup', clearTimer);

    function decrement() {
        if (input.value > 0) {
            parseInt(input.value--);
            counter += 100;
        }
        if (counter < 1000) {
            dectimer = setTimeout(function() {
                decrement();
            }, 300);
        } else {
            dectimer = setTimeout(function() {
                decrement();
            }, 30);
        }
    }
    minus[0].addEventListener('mousedown', decrement);
    minus[0].addEventListener('mouseup', clearTimer);

    function clearTimer() {
        clearTimeout(inctimer);
        clearTimeout(dectimer);
        counter = 0;
    }
};
for (var _iterator = loop1(counter), step; !(step = _iterator()).done;) {
    loop();
}