import React from 'react';
import { TextInput, StyleSheet, Text, View, FlatList, Keyboard, TouchableOpacity, TouchableHighlight } from 'react-native';
import Feather from 'react-native-vector-icons/Feather';

const navigationBar = () => {

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

export default navigationBar;