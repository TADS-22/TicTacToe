import { StyleSheet } from "react-native";

const Styles = StyleSheet.create({
    board: { 
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'center',
        alignContent: 'center',
    },
    wrapper: { 
        flex: 1,
        justifyContent: 'center',
        alignContent: 'center'
    },
    message: { 
        color: "#ffffff",
        textAlign: 'center',
        fontSize: 24,
        marginTop: 20,
        marginBottom: 20,
    }, 
    button: {
        marginTop: 20,
        marginHorizontal: 36,
    }
})

export default Styles