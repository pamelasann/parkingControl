import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';

function WelcomeScreen(props) {
    return (
        <View style={styles.container}>
            <Text
            style={styles.welcomeSubTitle}>
                Welcome to
            </Text>
            <Text
            style={styles.welcomeTitle}>
                PARKING CONTROL APP
            </Text>
            <Image style={styles.carImage} source={require('../assets/car.png')} />
        </View>
        
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#A7BFC7',
        alignItems: 'center',
        justifyContent: 'center',
    },
    welcomeTitle: {
        fontSize: 53,
        color: 'white',
        fontWeight: 'bold',
        "letterSpacing": 3,
    },
    welcomeSubTitle: {
        fontFamily: 'Helvetica',
        fontSize: 20,
        color: 'white',
        "letterSpacing": 2,
    },
    carImage: {
        width: 70,
        height: 70,
        position: "absolute",
        bottom: 30,
    }
})

export default WelcomeScreen;