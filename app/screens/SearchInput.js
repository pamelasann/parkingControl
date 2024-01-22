import React, { useState } from 'react';
import { TextInput, StyleSheet, Text, View, FlatList, Keyboard, TouchableOpacity, TouchableHighlight } from 'react-native';
import Feather from 'react-native-vector-icons/Feather';


function SearchInput({ navigation }) {
    const [search, setSearch] = useState('');
    const [filteredOptions, setFilteredOptions] = useState([]);
    const [isSearchFocused, setIsSearchFocused] = useState(false);

    const availableOptions = [
        'Andares',
        'La Gran Plaza',
        'Tecnológico de Monterrey, campus Guadalajara',
        'Tecnológico de Monterrey, campus Santa Anita',
        'Tecnológico de Monterrey, campus Monterrey',
        'Tecnológico de Monterrey, campus Puebla',
        'Real Center',
        'Galerías',
        'Centro Magno',
        'Land Mark',
        'Parque Metropolitano',
        'Bosque Colomos',
        'Punto Sur',
        'Plaza Bugambilias',
        'Forum Tlaquepaque',
        'Plaza Sania',
        'Lomas Square Mall',
        'Plaza Hilton',
        'Plaza Independencia',
        'Plaza Patria',
        'Plaza Terranova',
        'Plaza Las Torres',
        'Azalea Park',
        // Add more available options here
    ];

    const handleSearch = (text) => {
        setSearch(text);
        // Filter the available options based on user input
        const filteredResults = availableOptions.filter(option =>
            option.toLowerCase().includes(text.toLowerCase())
        );
        if (filteredResults.length === 0 && text.length > 0) {
            setFilteredOptions(['Estacionamiento no encontrado']);
        } else {
            // Limit the number of displayed results to a fixed window size (e.g., 4) when the search input is focused
            setFilteredOptions(isSearchFocused && text.length > 0 ? filteredResults.slice(0, 3) : []);
        }
    };

    const handleInputFocus = () => {
        setIsSearchFocused(true);
    };
    const handleInputBlur = () => {
        setIsSearchFocused(false);
        setFilteredOptions([]); // Clear the filtered options when the input is blurred
    };

    return (
        /*<TouchableOpacity activeOpacity={1} style={styles.container} onPress={Keyboard.dismiss}>*/
        <View style={styles.container}>
            <View style={styles.search}>
                <View style={[isSearchFocused && (search.length > 0) ? styles.innerSearch : null]}>
                    <View style={styles.inputContainer}>
                        <TextInput
                            style={styles.inputText}
                            placeholder="Buscar estacionamiento"
                            value={search}
                            onChangeText={handleSearch}
                            onFocus={handleInputFocus} // Handle input focus
                        /*onBlur={handleInputBlur} // Handle input blur*/
                        />
                        <Feather
                            name='search'
                            size={30}
                            color='#D0D0D0'
                            style={styles.searchIcon}
                        />
                    </View>
                    {filteredOptions.length > 0 && (
                        <FlatList
                            data={filteredOptions}
                            keyExtractor={(item) => item}
                            renderItem={({ item }) => (
                                <TouchableOpacity
                                    onPress={() => {
                                        if (item == 'Tecnológico de Monterrey, campus Guadalajara') {
                                            navigation.navigate('TecGDL')
                                        }
                                        else if (item == 'Estacionamiento no encontrado') {
                                            navigation.navigate('Inicio')
                                        }
                                        else {
                                            navigation.navigate('NotFound')
                                        }
                                    }}
                                    underlayColor="#E8E8E8" // Color to show when pressed
                                >
                                    <Text style={item === 'Estacionamiento no encontrado' ? styles.notFoundText : styles.options}>
                                        {item}
                                    </Text>
                                </TouchableOpacity>
                            )}
                        />
                    )}
                </View>
            </View>
        </View >
        /*</TouchableOpacity >*/
    );
};
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#275053',
    },
    search: {
        paddingHorizontal: '10%',
        paddingTop: '4%',

    },
    inputContainer: {
        flexDirection: 'row',
        alignItems: 'center',

    },
    inputText: {
        backgroundColor: 'white',
        paddingLeft: '5%',
        paddingVertical: '5%',
        borderRadius: 20,
        height: 54,
        flex: 1,
        shadowColor: 'black',
        color: 'black',
    },
    searchIcon: {
        position: 'absolute',
        zIndex: 1,
        left: '85%',
    },

    options: {
        "letterSpacing": -0.5,
        paddingLeft: '5%',
        paddingTop: '1.5%',
        paddingBottom: '1.5%',
    },

    innerSearch: {
        backgroundColor: 'white',
        paddingBottom: 15,
        borderTopRightRadius: 20,
        borderTopLeftRadius: 20,
        borderBottomLeftRadius: 20,
        borderBottomRightRadius: 20,
    },
    showInnerSearch: {
        display: 'flex',
    },
    notFoundText: {
        paddingLeft: '5%',
        paddingTop: '1%',
        paddingBottom: '1%',
        color: '#D2D2D2',

    },
})

export default SearchInput;