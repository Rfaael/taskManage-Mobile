import { View, Text, FlatList, ScrollView } from "react-native";
//COMPONENTS
import { Task } from '../Task/index';
//STYLES
import { styles } from './style';

interface Props {
    tasks: string[];
    onRemove(name?: string): any ;
}

export function ListContainer(props: Props) {
    const {tasks, onRemove} = props;

    return (
    <>

        <View style={styles.container}>

            {/* TASKS CRIADAS */}
            <View style={styles.textContainer}>
                <Text style={styles.textCriadas}>
                    Criadas
                </Text>
                <Text style={styles.numC}>{tasks.length}</Text>
            </View>
            {/* TASKS CONCLUIDAS */}
            <View style={styles.textContainer}>
                <Text style={styles.textConcluidas}>
                    Concluidas
                </Text>
                <Text style={styles.numC}>0</Text>
            </View>

        </View>

        
        <FlatList
            style={styles.taskContainer} 
            data={tasks}
            keyExtractor={key => key}
            renderItem={({item}) => (
                <Task
                    cnt={item}
                    onRemove={() => onRemove(item)}
                />
            )}
            showsVerticalScrollIndicator={false}
            ListEmptyComponent={() => (
                <Text style={styles.emptyText}>
                    Adicione novas tasks dentro da plataforma!
                </Text>
            )}
        />
                
    </>  
    );
};
