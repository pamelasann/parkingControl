import React, { useState } from 'react';
import { StyleSheet, Text, View, Image, ActivityIndicator } from 'react-native';
import { useFonts } from 'expo-font';

import FetchData from '../src';


function EIAD({ navigation }) {
    const { dataSpot, isLoading } = FetchData();

    const [fontsLoaded] = useFonts({
        SemiBold: require("../assets/fonts/OpenSans-SemiBold.ttf"),
        Bold: require("../assets/fonts/OpenSans-Bold.ttf"),
        Regular: require("../assets/fonts/OpenSans-Regular.ttf"),
        Agbalu: require("../assets/fonts/Agbalumo-Regular.ttf")
    });
    if (!fontsLoaded) return null;


    if (isLoading) {
        // Display a loading indicator while data is being fetched
        return (
            <View style={styles.container}>
                <View style={styles.loading}></View>
                <ActivityIndicator size="large" color="white" />
            </View>
        );
    }
    //console.log(dataSpot[0].available_blue);

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
                <Text
                    style={styles.SectionText}>
                    EIAD
                </Text>

            </View>

            <View style={styles.carContainer}>
                <View style={[styles.carSpot,
                {
                    backgroundColor:
                        (dataSpot[0].available_green && !dataSpot[0].available_blue && !dataSpot[0].available_red)
                            ? '#14AE5C'
                            : (dataSpot[0].available_blue && !dataSpot[0].available_green && !dataSpot[0].available_red)
                                ? '#0D99FF'
                                : (dataSpot[0].available_red && !dataSpot[0].available_green && !dataSpot[0].available_blue)
                                    ? '#F24822'
                                    : '#14AE5C',
                }]}
                />
                <Image
                    source={require('../assets/mapEIAD.png')}
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
    SectionText: {
        fontFamily: "Regular",
        fontSize: 20,
        color: '#FDF0E0',
        padding: 10,
    },
    inner: {
        marginLeft: '5%',
        marginRight: '5%',
    },
    carContainer: {
        marginTop: 45,
        marginBottom: 90,
        position: 'relative',
    },
    imageStyle: {
        width: '91%',
        height: 550,
        zIndex: -1,
        marginLeft: 18,
        borderWidth: 5,
        borderColor: 'white',
        borderRadius: 20,

    },
    carSpot: {
        // show yellow in case of an error fetching the status of the car spot
        backgroundColor: 'yellow',
        width: 25,
        height: 16,
        zIndex: 1,
        position: 'absolute',
        marginTop: 20,
        marginLeft: 72,
    },
    loading: {
        height: '40%',
    },
})

export default EIAD;