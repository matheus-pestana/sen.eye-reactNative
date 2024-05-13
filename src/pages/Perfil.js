import React, { useState } from 'react';
import { Text, TouchableOpacity, StyleSheet, ScrollView, Dimensions, Alert } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { SafeAreaView } from 'react-native-safe-area-context';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

export default function Perfil() {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const navigation = useNavigation();

    const handleLogout = () => {
        Alert.alert(
            'Logout',
            'Tem certeza de que deseja sair?',
            [
                {
                    text: 'Cancelar',
                    style: 'cancel',
                },
                {
                    text: 'Sair',
                    onPress: () => {
                        setIsLoggedIn(false);
                        console.log('Logout realizado com sucesso!');
                        navigation.navigate('Login');
                    },
                },
            ],
            { cancelable: false }
        );
    };

    return (
        <SafeAreaView style={styles.safeArea}>
            <ScrollView keyboardShouldPersistTaps='handled' style={styles.scroll}>
                <TouchableOpacity style={styles.logoutButton} onPress={handleLogout}>
                    <Text style={styles.logoutText}>🤠</Text>
                </TouchableOpacity>
        
            </ScrollView>
        </SafeAreaView >
    );
}

const styles = StyleSheet.create({

    safeArea: {
        backgroundColor: '#e7efff',
        flex: 1,
    },

    scroll: {
        flexGrow: 1,
    },

    background: {
        width: windowWidth,
        height: windowHeight,
        justifyContent: 'center',
        alignItems: 'center',
    },

    card1: {
        margin: 10,
        padding: 20,
        borderRadius: 10,
        backgroundColor: 'white',
    },

    cards: {
        marginBottom: 50,
        padding: 20,
        gap: 10,
        borderRadius: 10,
        flexDirection: 'row',
        justifyContent: 'center',
        alignContent: 'center',
    },

    card2: {
        backgroundColor: 'white',
        width: 170,
        height: 350,
        padding: 20,
        borderRadius: 10,
    },

    title: {
        fontSize: 24,
    },

    saibaMais: {
        backgroundColor: '#e7efff',
        padding: 10,
        borderRadius: 10,
        margin: 10,
    },

    saibaText: {
        textAlign: 'center',
        fontSize: 20,
    },

    img: {
        marginBottom: 10,
        width: 170,
        height: 170,
        borderRadius: 20,
    },

    logoutButton: {
        width: 60,
        backgroundColor: 'white',
        borderRadius: 5,
        marginTop: 10,
    },

    logoutText: {
        fontSize: 50,
    },

    logoImg: {
        width: '100%',
    },
    buttonText: {
        color: '#000',
        fontSize: 16,
        textAlign: 'center',
    },
});
