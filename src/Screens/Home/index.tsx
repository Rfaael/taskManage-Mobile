import { View, Text, Image } from 'react-native';
import {styles} from './style';


//ALL COMPONENTS
import { ListContainer } from '../../Components/ListContainer/index';
import { SearchBar } from '../../Components/SearchBar/index';
import { useState } from 'react';

//IMAGE LOGO PATH
const logoImgPath = require('../../assets/Logo.png');

export function Home() {
    const [tasks, setTasks] = useState<string[]>([]);

    function handleRemoveTask(name: string) {
        setTasks(prev => prev.filter(p => p != name));
        return;
    }

    return (
        <>
            <View style={styles.imgContainer}>
                <View>
                    <Image source={logoImgPath}></Image>    
                </View>
            </View>

            <View style={styles.taskList}>
                
                {/* BARRA DE INPUT PARA TASK LIST */}
                <SearchBar addTask={(taskName) => setTasks(prev => [...prev, taskName])}/>
                {/* TODO LIST CONTAINER */}
                <ListContainer tasks={tasks} onRemove={handleRemoveTask}/>

            </View>
        </>
    );
}