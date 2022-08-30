export interface UseBoardResult {
    board: string[][];
    finished: boolean;
    markTile: (x: number, y: number) => void;
    resetBoard: () => void;
}
