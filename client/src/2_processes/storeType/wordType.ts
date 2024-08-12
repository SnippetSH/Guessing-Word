interface StringNum {
    [key: string]: number
}

interface WordsRank {
    ranks: StringNum[];
    setRanks: (data: StringNum[]) => void;
    findRank: (key: string) => {rank: number, value: number};
}

interface CurrentRank {
    ranks: StringNum[];
    appendRank: (data: StringNum) => void;
    removeRank: (key: string) => void;
}

export type { StringNum, WordsRank, CurrentRank }