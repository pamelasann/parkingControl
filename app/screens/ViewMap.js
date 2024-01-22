import React from 'react';
import { StyleSheet, Text, View, Image, ActivityIndicator } from 'react-native';
import Rectangle from '../src/Rectangle';
import FetchData from '../src';

const ViewMap = () => {
    const { dataSpot, isLoading }  = FetchData();

    if (isLoading) {
        // Display a loading indicator while data is being fetched
        return (
          <View style={styles.container}>
            <ActivityIndicator size="large" color="white" />
          </View>
        );
    }
     
    return (
        <View style={styles.container}>
            <View style={styles.titleDiv}></View>
            <Text
            style={styles.subTitle}>
                Parking Control
            </Text>
            <Image style={styles.carImage} source={require('../assets/car.png')} />
            <Text style={styles.paragraph}>
                Find the available parking spots
            </Text>
            <Text style={styles.paragraphStatus}>
                Available           Occupied
            </Text>
            <View style={styles.greenCircle}></View>
            <View style={styles.redCircle}></View>
            <View style={styles.mapDiv}>


                <View style={styles.row}>
                    <View style={[styles.rectangle, { backgroundColor: dataSpot[0].available ? '#A9E9A4' : '#E2202C'}]} />
                    <View style={[styles.rectangle, { backgroundColor: dataSpot[1].available ? '#A9E9A4' : '#E2202C'}]} />
                </View>
                <View style={styles.row}>
                    <View style={[styles.rectangle, { backgroundColor: '#A9E9A4'}]} />
                    <View style={[styles.rectangle, { backgroundColor: '#A9E9A4'}]} />
                </View>


                <View style={styles.row}>
                    <View style={[styles.rectangle, { backgroundColor: '#A9E9A4'}]} />
                    <View style={[styles.rectangle, { backgroundColor: '#A9E9A4'}]} />
                </View>
                <View style={styles.row}>
                    <View style={[styles.rectangle, { backgroundColor: '#A9E9A4'}]} />
                    <View style={[styles.rectangle, { backgroundColor: '#A9E9A4'}]} />
                </View>
                <View style={styles.row}>
                    <View style={[styles.rectangle, { backgroundColor: '#A9E9A4'}]} />
                    <View style={[styles.rectangle, { backgroundColor: '#A9E9A4'}]} />
                </View>
                <View style={[styles.row, styles.entrada]}>
                    <View style={[styles.rectangle, { backgroundColor: '#EBEBEB'}]} />
                </View>
                
            </View>
        </View>
    );

}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#A7BFC7',
    },
    subTitle: {
        fontFamily: 'Helvetica',
        fontSize: 24,
        fontWeight: '700',
        color: 'white',
        "letterSpacing": 3,
        right: '-14%',
        top: '1.6%',
    },
    carImage: {
        width: 45,
        height: 45,
        position: "absolute",
        top: '5.8%',
        left: '2%',
    },
    titleDiv: {
        width: "100%",
        height: 45,
        backgroundColor: '#87A1AB',
        top: '5.8%',
    },
    paragraph: {
        fontFamily: 'Helvetica',
        fontSize: 17,
        fontWeight: '400',
        color: 'white',
        "letterSpacing": 1,
        top: '8%',
        right: '-10%',
    },
    paragraphStatus: {
        fontFamily: 'Helvetica',
        fontSize: 16,
        fontWeight: '300',
        color: 'white',
        "letterSpacing": 1,
        top: '10%',
        right: '-17%'
    },
    greenCircle: {
        width: 20,
        height: 20,
        backgroundColor: '#A9E9A4',
        borderRadius: "50%",
        left: '10%',
        top: '8%',
    },
    redCircle: {
        width: 20,
        height: 20,
        backgroundColor: '#E2202C',
        borderRadius: "50%",
        right: '-43%',
        top: '5.5%',
    },
    mapDiv: {
        flex: 1,
        width: '90%',
        maxHeight: '70%',
        backgroundColor: '#87A1AB',
        left: '5%',
        top: '9%',
    },
    row: {
        flexDirection: 'row',
        width: '70%', // Set the desired width
        height: '15%', // Set the desired height
        margin: -2.6,
        top: '15%',
        left: '9%',
        justifyContent: 'center',
        alignItems: 'center',
        borderWidth: 5,
        borderColor: 'yellow',
        borderLeftWidth: 0,
        borderRightWidth: 0,    
    },
    rectangle: {
        width: '40%', // Set the desired width
        height: '70%', // Set the desired height
        margin: 10, // Set margin for spacing between squares
    },
      entrada: {
        borderTopWidth: 0,
        borderBottomWidth: 0,
        margin: 40,
        width: '100%', 
        height: '8%',
        top: '21%',
        left: '-7%',
    },
})

export default ViewMap;