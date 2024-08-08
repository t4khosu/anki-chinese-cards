import {TRANSLATIONS} from "./fields";

function RNG(seed) {
    // LCG using GCC's constants
    this.m = 0x80000000; // 2**31;
    this.a = 1103515245;
    this.c = 12345;

    this.state = seed ? seed : Math.floor(Math.random() * (this.m - 1));
}

RNG.prototype.nextInt = function () {
    this.state = (this.a * this.state + this.c) % this.m;
    return this.state;
}

RNG.prototype.nextRange = function (start, end) {
    // returns in range [start, end): including start, excluding end
    // can't modulu nextInt because of weak randomness in lower bits
    var rangeSize = end - start;
    var randomUnder1 = this.nextInt() / this.m;
    return start + Math.floor(randomUnder1 * rangeSize);
}

RNG.prototype.choice = function (array) {
    return array[this.nextRange(0, array.length)];
}

const DailyShuffler = (array) => {
    if (array.length === 1) {
        return array;
    }

    const today = new Date();
    today.setHours(0);
    today.setMinutes(0);
    today.setSeconds(0);
    today.setMilliseconds(0);

    const rng = new RNG(today.getTime() + TRANSLATIONS.length);

    for (let i = 0; i < 11; i++) {
        const i1 = rng.nextRange(0, array.length)
        const i2 = rng.nextRange(0, array.length)
        const v1 = array[i1];

        array[i1] = array[i2];
        array[i2] = v1;
    }

    return array;
}

export default DailyShuffler;
