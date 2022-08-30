import React from "react";
import { Pressable, Text } from "react-native";
import { TileProps } from "./interface";
import Styles from "./styles";

const Tile = ({ value, disabled, onClick }: TileProps) => {

    const onMarkTile = () => {
        if (!value && !disabled) {
            onClick()
        }
    }

    return (
        <Pressable style={Styles.wrapper} onPress={onMarkTile}>
            <Text style={Styles.content}>
                {value}
            </Text>
        </Pressable>
    )
}

export default Tile