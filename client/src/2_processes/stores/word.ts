import { create } from 'zustand';
import { WordsRank, StringNum, CurrentRank } from '../storeType/wordType';

const rankStore = create<WordsRank>((set, get) => ({
    ranks: [],
    setRanks: (data: StringNum[]) => set(() => ({ ranks: [... data]})),
    findRank: (key: string) => {
        const ranks = get().ranks;
        for (let i = 0; i < ranks.length; i++) {
            const item = ranks[i];
            if (item.hasOwnProperty(key)) {
                return { rank: i, value: item[key] }; // 인덱스와 값을 함께 반환
            }
        }
        return { rank: -1, value: -1 }; // key를 찾지 못한 경우
    }
}))

const currentRankStore = create<CurrentRank>((set) => ({
    ranks: [],
    appendRank: (data: StringNum) => set((state) => ({
        ranks: [...state.ranks, data],
    })),
    removeRank: (k: string) => set((state) => ({
        ranks: state.ranks.filter(data => !data.hasOwnProperty(k)),
    })),
}))

export { rankStore, currentRankStore };