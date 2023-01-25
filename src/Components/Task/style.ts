import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    container: {
        backgroundColor: '#262626',
        padding: 2,
        borderRadius: 10,
        borderColor: '#333333',
        borderWidth: 2,
        width: '100%',
        height: 70,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-around',
        marginBottom: 10
    },
    mainText: {
        width: '80%',
        paddingVertical: 3,
        paddingHorizontal: 5,
        overflow: 'scroll',
        color: '#FFFFFF',
    },
    taskStatus: {   
        width: '10%',
        flexDirection: 'row',
        justifyContent: 'center',
    },
    deleteTask: {
        width: '10%',
        flexDirection: 'row',
        justifyContent: 'center',
    }
});