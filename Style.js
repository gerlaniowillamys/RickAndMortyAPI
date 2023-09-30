import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#a0ded6',
    },

    image: {
        width: 200,
        height: 200,
        borderRadius: 10
    },

    textinput: {
        borderBottomWidth: 2,
        borderBottomColor: '#45b5c4',
        backgroundColor: '#beede7',
        borderTopStartRadius: 10,
        borderTopEndRadius: 10,
        width: 200,
        height: 35,
        margin: 10,
        padding: 5,
        fontSize: 14,
    },

    text: {
        fontSize: 16,
        fontFamily: 'Arial',
    },

    button: {
        backgroundColor: '#1693a5',
        width: 100,
        height: 30,
        borderRadius: 15,
        justifyContent: 'center',
        alignItems: 'center',
    },

    buttonText: {
        fontWeight: 'bold',
        fontSize: 18,
        fontFamily: 'Arial',
    },
})