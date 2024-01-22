import React, { useState } from 'react';
import { TextInput, StyleSheet, Text, View, Image } from 'react-native';
import { useFonts } from 'expo-font';

import SearchSection from './SearchSection'

function TecGDL({ navigation }) {
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
            <View style={styles.inner}>
                <Text
                    style={styles.Title}>
                    Tecnológico de Monterrey
                </Text>
                <Text
                    style={styles.SubTitle}>
                    Guadalajara, México
                </Text>

            </View>
            <SearchSection navigation={navigation} />
            <View style={styles.carContainer}>
                <Image
                    source={require('../assets/tecMap.png')}
                    style={styles.imageStyle}
                />
            </View>
        </View >
    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#275053',
    },
    HeaderDiv: {
        height: '0%',
    },
    Title: {
        fontFamily: "Bold",
        fontSize: 25,
        "letterSpacing": -0.7,
        color: '#FDF0E0',
    },
    SubTitle: {
        fontFamily: "SemiBold",
        fontSize: 15,
        "letterSpacing": -0.7,
        color: '#FDF0E0',
    },
    inner: {
        marginLeft: '5%',
        marginRight: '5%',
        paddingBottom: '5%'
    },
    carContainer: {
        alignItems: 'center',
        marginBottom: 100,
        zIndex: -1
    },
    imageStyle: {
        width: '95%',
        height: 500,
        borderWidth: 5,
        borderColor: 'white',
        borderRadius: 20,

    }
})

export default TecGDL;