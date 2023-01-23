import { TextInput, View, TouchableOpacity, Text, Image } from 'react-native';
import { styles } from './style';

export function SearchBar() {
    return (
    <View style={styles.container}>
        <TextInput 
         placeholder='Digite sua tarefa'
         style={styles.searchBar}
        />

        <TouchableOpacity style={styles.btnAddTask}>
            <Image source={require('../../assets/btn.png')}></Image>
        </TouchableOpacity>
    </View>
    );
};