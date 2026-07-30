const mulberry32 = (seed: number) => () => {
    let t = seed += 0x6D2B79F5;
    t = Math.imul(t ^ t >>> 15, t | 1);
    t ^= t + Math.imul(t ^ t >>> 7, t | 61);
    return ((t ^ t >>> 14) >>> 0) / 4294967296;
}

const shuffle = <T>(array: T[], dateSeed: Date, seedOffset: number = 0): T[] => {
    const arrayCopy = [...array];

    if (arrayCopy.length <= 1) {
        return arrayCopy;
    }

    dateSeed.setHours(0, 0, 0, 0);

    const rng = mulberry32(dateSeed.getTime() + seedOffset);

    for (let i = 0; i < 11; i++) {
        const i1 = Math.floor(rng() * arrayCopy.length)
        const i2 = Math.floor(rng() * arrayCopy.length)
        const v1 = arrayCopy[i1];

        arrayCopy[i1] = arrayCopy[i2];
        arrayCopy[i2] = v1;
    }

    return arrayCopy;
}

export default shuffle;
