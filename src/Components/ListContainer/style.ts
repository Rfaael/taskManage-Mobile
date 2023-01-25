import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
        width: '85%',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-around',
        borderBottomWidth: 2,
        borderBottomColor: '#333333',
        marginBottom: 20,
    },
    textContainer: {
        flexDirection: 'row',
        justifyContent: 'flex-start',
        marginBottom: 20
    },
    textCriadas: {
        color: '#4EA8DE',
        marginRight: 10
    },
    numC: {
        color: '#D9D9D9',
        backgroundColor: '#333333',
        width: 20,
        borderRadius: 5,
        textAlign: 'center'
    },
    textConcluidas: {
        color: '#8284FA',
        marginRight: 10
    },
    taskContainer: {
        width: '85%',
        padding: 5,
        flexDirection: 'column',
    },
    emptyText: {
        color: 'white',
        textAlign: 'center'
    }
});