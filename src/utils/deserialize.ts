const deserialize = <T>(json: string): T[] => {
    try {
        return JSON.parse(json) as T[];
    } catch {
        throw new Error(`Could not parse json: '${json}`)
    }
}

export default deserialize;
