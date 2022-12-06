import React from "react";
import { useNavigation } from '@react-navigation/native';
import { SafeAreaView } from 'react-native';

const TabNavigator = () => {
    const navigation = useNavigation();
    return (
        <SafeAreaView style={styles.container}></SafeAreaView>
    )
};

export default TabNavigator;