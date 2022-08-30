import React, { useCallback, useState } from "react"
import { Button, Text, View } from "react-native"
import Tile from "../Tile"
import useBoard from "./hooks/use-board"
import Styles from "./styles"

const Board = () => {
    const { board, finished, markTile, resetBoard } = useBoard()

    const renderVictory = useCallback(() => {
        if (finished) {
            return (
                <Text style={Styles.message}>
                    Vitória!
                </Text>
            )
        }

        return null
    }, [finished])

    return (
        <View style={Styles.wrapper}>
            <View style={Styles.board}>
                <Tile value={board[0][0]} onClick={() => markTile(0, 0)} disabled={finished} />
                <Tile value={board[0][1]} onClick={() => markTile(0, 1)} disabled={finished} />
                <Tile value={board[0][2]} onClick={() => markTile(0, 2)} disabled={finished} />
                <Tile value={board[1][0]} onClick={() => markTile(1, 0)} disabled={finished} />
                <Tile value={board[1][1]} onClick={() => markTile(1, 1)} disabled={finished} />
                <Tile value={board[1][2]} onClick={() => markTile(1, 2)} disabled={finished} />
                <Tile value={board[2][0]} onClick={() => markTile(2, 0)} disabled={finished} />
                <Tile value={board[2][1]} onClick={() => markTile(2, 1)} disabled={finished} />
                <Tile value={board[2][2]} onClick={() => markTile(2, 2)} disabled={finished} />
            </View>
            { renderVictory() }
            <View style={Styles.button}>
                <Button title="Reiniciar" onPress={resetBoard} />
            </View>
        </View>
    )
}

export default Board