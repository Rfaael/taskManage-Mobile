import { View, Text, Image } from 'react-native';
import {styles} from './style';

import { SearchBar } from '../../Components/SearchBar/index';

const logoImgPath = require('../../assets/Logo.png');

export function Home() {
    return (
        <>
            <View style={styles.imgContainer}>
                <View>
                    <Image source={logoImgPath}></Image>    
                </View>
            </View>
            <View style={styles.taskList}>
                <SearchBar></SearchBar>
            </View>
        </>
    );
}