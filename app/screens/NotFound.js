import React, { useState } from 'react';
import { TextInput, StyleSheet, Text, View, Image } from 'react-native';
import { useFonts } from 'expo-font';


function NotFound({ navigation }) {
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
                <View style={styles.carContainer}>
                    <Image
                        source={require('../assets/car.png')}
                        style={styles.imageStyle}
                    />
                </View>
                <Text
                    style={styles.Title}>
                    Página{'\n'}no encontrada
                </Text>

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
        height: '25%',
    },
    Title: {
        fontFamily: "Bold",
        fontSize: 40,
        "letterSpacing": -0.7,
        textAlign: 'justify',
        color: '#FDF0E0',
        marginRight: 50,
        marginTop: -55,

    },
    inner: {
        alignItems: 'flex-end',

    },
    carContainer: {
        alignItems: 'flex-end',
        marginTop: 50,
        marginRight: 80,
    },
    imageStyle: {
        width: 90,
        height: 60,
    }
})

export default NotFound;