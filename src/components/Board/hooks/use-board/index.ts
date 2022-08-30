import { useState } from "react"
import { UseBoardResult } from "./interface"

const PLAY_X = 'X'
const PLAY_O = 'O'

const getInitialBoard = () => [
    ['', '', ''],
    ['', '', ''],
    ['', '', ''],
]

const useBoard = (): UseBoardResult => { 
    const [finished, setFinished] = useState(false)
    const [nextPlay, setNextPlay] = useState(PLAY_O)
    const [board, setBoard] = useState(getInitialBoard())

    const updateNextPlay = () => {
        setNextPlay(current => {
            return current === PLAY_X ? PLAY_O : PLAY_X
        })
    }

    const markTile = (x: number, y: number) => {
        const newBoard = [...board]
        newBoard[x][y] = nextPlay

        setBoard(newBoard)

        if (!checkVictory()) {
            updateNextPlay()
        } else {
            setFinished(true)
        }
    }

    const checkVictory = () => {
        return allEqual(board[0]) ||
            allEqual(board[1]) ||
            allEqual(board[2]) ||
            allEqual([board[0][0], board[1][0], board[2][0]]) ||
            allEqual([board[0][1], board[1][1], board[2][1]]) ||
            allEqual([board[0][2], board[1][2], board[2][2]]) ||
            allEqual([board[0][0], board[1][1], board[2][2]]) ||
            allEqual([board[0][2], board[1][1], board[2][0]])
    }

    const allEqual = (list: string[]) => {
        return list.every(item => item !== '' && item === list[0])
    }

    const resetBoard = () => { 
        setBoard(getInitialBoard())
        setFinished(false)
        setNextPlay(PLAY_O)
    }

    return {
        board,
        finished,
        markTile,
        resetBoard,
    }
}

export default useBoard