import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
        width: '100%',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        marginTop: -30,
        marginBottom: 30
    },
    searchBar: {
        backgroundColor: "#808080",
        height: 50,
        width: '70%',
        fontSize: 18,
        padding: 10,
        borderRadius: 5,
        marginRight: 7
    },
    btnAddTask: {
        backgroundColor: '#1E6F9F',
        width: 55,
        borderRadius: 5,
        alignItems: 'center',
        justifyContent: 'center'
    }
});