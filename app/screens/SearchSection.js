import React, { useState } from 'react';
import { TextInput, StyleSheet, Text, View, FlatList, Keyboard, TouchableOpacity, TouchableHighlight } from 'react-native';
import Feather from 'react-native-vector-icons/Feather';


function SearchSection({ navigation }) {
    const [showAllOptions, setShowAllOptions] = useState(false);
    const [isSearchFocused, setIsSearchFocused] = useState(false);
    const maxInitialOptions = 4;

    const availableOptions = [
        'Entrada Principal',
        'Cafetería',
        'Biblioteca',
        'EIAD',
        'Medicina',
        'Centro de Congresos',
        'Estacionameinto Civil',
        'Estacionameinto Prepa',
        // Add more available options here
    ];
    const displayOptions = showAllOptions ? availableOptions : [];

    const handleOptionPress = (item) => {
        if (item == 'EIAD') {
            navigation.navigate('EIAD');
        }
        else {
            navigation.navigate('NotFound');
        }
        setShowAllOptions(false);
    };

    const handleInputFocus = () => {
        setIsSearchFocused(true);
    };
    const handleInputBlur = () => {
        setIsSearchFocused(false);
    };


    return (
        <View style={styles.container}>

            <TouchableOpacity
                style={styles.selectButton}
                onPress={() => setShowAllOptions(!showAllOptions)}
            >
                <View style={[showAllOptions ? styles.buttonContainerWithOptions : styles.buttonContainer]}>
                    <Text style={styles.selectButtonText}>Seleccionar sección</Text>
                    <Feather name="chevron-down" size={30} color="#D0D0D0" style={styles.searchIcon} />
                </View>
            </TouchableOpacity>


            {showAllOptions && (
                <View style={styles.displayOptionsContainer}>
                    <FlatList
                        data={displayOptions}
                        keyExtractor={(item) => item}
                        renderItem={({ item }) => (
                            <TouchableOpacity onPress={() => handleOptionPress(item)}>
                                <Text style={styles.option}>{item}</Text>
                            </TouchableOpacity>
                        )}
                    />
                </View>
            )}
        </View>
    );
};
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#275053',
        alignItems: 'center'
    },
    buttonContainer: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    buttonContainerWithOptions: {
        backgroundColor: 'white',
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
    },
    selectButton: {
        backgroundColor: 'white',
        borderRadius: 20,
        width: '89%',
    },
    selectButtonText: {
        padding: 10,
        paddingLeft: '5%',
        paddingVertical: '5%',
        color: '#D0D0D0'
    },
    displayOptionsContainer: {
        width: '89%',
        height: 100,
        backgroundColor: 'white',
        paddingBottom: 15,
        borderBottomLeftRadius: 20,
        borderBottomRightRadius: 20,
    },
    option: {
        backgroundColor: 'white',
        "letterSpacing": 0.1,
        paddingLeft: '5%',
        paddingTop: '1.5%',
        paddingBottom: '1.5%',
    },
    searchIcon: {
        position: 'absolute',
        zIndex: 1,
        left: '85%',
    },

})

export default SearchSection;