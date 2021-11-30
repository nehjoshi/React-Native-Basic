import { StyleSheet } from "react-native";

export const GlobalStyles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 30,
    },  
    headerText: {
        fontFamily: "LatoBold",
        marginBottom: 10,
        fontSize: 40,
    },
    text: {
        fontFamily: "Lato",
        fontSize: 16,
        marginBottom: 10,
        lineHeight: 20,
    },
    input: {
        borderWidth: 1,
        borderColor: "#ddd",
        padding: 10,
        fontSize: 18,
        borderRadius: 6,
        marginBottom: 10,
        
    }
});