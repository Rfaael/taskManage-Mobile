import { View, Text, TouchableOpacity } from 'react-native';

//ALL STYLES
import { styles } from './style';

interface Props {
    cnt: string;
    onRemove: () => {};
}

export function Task(props: Props) {
    const {cnt, onRemove} = props;

    return (
        <View style={styles.container}>

            <TouchableOpacity style={styles.taskStatus}>
                <Text>( )</Text>
            </TouchableOpacity>

            <Text
                style={styles.mainText}
                numberOfLines={2}
            >
                {cnt}
            </Text>

            <TouchableOpacity 
                style={styles.deleteTask}
                onPress={onRemove}
            >
                <Text>x</Text>
            </TouchableOpacity>

        </View>
    );
};