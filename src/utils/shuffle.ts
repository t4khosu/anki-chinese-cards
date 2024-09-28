class RNG {
    private m: number;
    private a: number;
    private c: number;
    private state: number;

    constructor(seed: number) {
        this.m = 0x80000000; // 2**31;
        this.a = 1103515245;
        this.c = 12345;

        this.state = seed ? seed : Math.floor(Math.random() * (this.m - 1));
    }

    nextInt(): number {
        this.state = (this.a * this.state + this.c) % this.m;
        return this.state;
    }

    nextRange(start: number, end: number): number {
        // returns in range [start, end): including start, excluding end
        // can't modulu nextInt because of weak randomness in lower bits
        var rangeSize = end - start;
        var randomUnder1 = this.nextInt() / this.m;
        return start + Math.floor(randomUnder1 * rangeSize);
    }

    choice<T>(array: T[]): T {
        return array[this.nextRange(0, array.length)];
    }
}

const shuffle = <T>(array: T[], dateSeed: Date, seedOffset: number = 0): T[] => {
    const arrayCopy = [...array];

    if (arrayCopy.length <= 1) {
        return arrayCopy;
    }

    dateSeed.setHours(0, 0, 0, 0);

    const seed = dateSeed.getTime() + seedOffset;
    const rng = new RNG(seed);

    for (let i = 0; i < 11; i++) {
        const i1 = rng.nextRange(0, arrayCopy.length)
        const i2 = rng.nextRange(0, arrayCopy.length)
        const v1 = arrayCopy[i1];

        arrayCopy[i1] = arrayCopy[i2];
        arrayCopy[i2] = v1;
    }

    return arrayCopy;
}

export default shuffle;
