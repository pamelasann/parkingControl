import React, { useState } from 'react';
import { TextInput, StyleSheet, Text, View, Image } from 'react-native';
import { useFonts } from 'expo-font';
import Feather from 'react-native-vector-icons/Feather';

import SearchInput from './SearchInput';

function Home({ navigation }) {
    const [fontsLoaded] = useFonts({
        SemiBold: require("../assets/fonts/OpenSans-SemiBold.ttf"),
        Bold: require("../assets/fonts/OpenSans-Bold.ttf"),
        Regular: require("../assets/fonts/OpenSans-Regular.ttf"),
        Agbalu: require("../assets/fonts/Agbalumo-Regular.ttf")
    });
    if (!fontsLoaded) return null;

    return (
        <View style={styles.container}>
            <View style={styles.HeaderDiv}></View>
            <Text
                style={styles.Title}>
                PARKING{'\n'}CONTROL
            </Text>
            <SearchInput navigation={navigation} />
            <View style={styles.carContainer}>
                <Image
                    source={require('../assets/car.png')}
                    style={styles.imageStyle}
                />
            </View>
        </View >
    );
};
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#275053',
    },
    HeaderDiv: {
        width: '50%',
        height: '28%',
    },
    Title: {
        fontFamily: "Bold",
        fontSize: 50,
        "letterSpacing": -0.5,
        justifyContent: 'center',
        textAlign: 'center',
        color: '#FDF0E0',

    },
    carContainer: {
        marginBottom: '30%',
        alignItems: 'center',
    },
    imageStyle: {
        width: 100,
        height: 70,
    }
})

export default Home;