import { useState } from 'react';
import { TextInput, View, TouchableOpacity, Image, Alert, ScrollView } from 'react-native';
import { styles } from './style';

interface Props {
    addTask(taskName: string): void
}


export function SearchBar(props: Props) {
    const {addTask} = props;
    const [taskName, setTaskName] = useState<string>('');

    function handleAddNewTask() {
        if(taskName.trim().length == 0) {
            Alert.alert('Task vazia', 'Por favor preencha os dados corretamente!');
        };

        addTask(taskName)
        setTaskName('');
    };

    return (
    <View style={styles.container}>

        <TextInput 
         placeholder='Adicione uma nova tarefa'
         style={styles.searchBar}
         onChangeText={e => setTaskName(e)}
         value={taskName}
        />

        <TouchableOpacity style={styles.btnAddTask} onPress={handleAddNewTask}>
            <Image source={require('../../assets/btn.png')}></Image>
        </TouchableOpacity>
  
    </View>
    );
};