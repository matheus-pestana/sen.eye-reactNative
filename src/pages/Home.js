import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function Home() {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const navigation = useNavigation();

    const handleLogout = () => {
        setIsLoggedIn(false);
        console.log('Logout realizado com sucesso!');
        navigation.navigate('Login');
    };

    return (
        <SafeAreaView style={styles.safeArea}>
            <View>
                <TouchableOpacity style={styles.logoutButton} onPress={handleLogout}>
                    <Text style={styles.logoutText}>🤠</Text>
                </TouchableOpacity>
                <Image
                    resizeMode="center"
                    style={styles.logoImg}
                    source={require('../assets/logo.jpeg')}
                />
                <View style={styles.card1}>
                    <Text style={styles.title}>Sen.Eye</Text>
                    <Text style={styles.text}>Um aplicativo de Monitoramento de Catástrofes
                        Naturais e Análises Climáticas.</Text>
                    <TouchableOpacity style={styles.saibaMais}>
                        <Text style={styles.saibaText}>Saiba Mais</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    safeArea: {
        flex: 1,
    },

    card1: {
        margin: 10,
        padding: 20, 
        paddingHorizontal: 20,
        borderRadius: 10,
        backgroundColor: 'white',
    },

    title: {
        fontSize: 24,
    },

    saibaMais: {
        backgroundColor: '#e7efff',
        padding: 10,
        borderRadius: 10,
    },

    saibaText: {
        textAlign: 'center',
        fontSize: 20,
        borderBottomColor: 'black',
        borderBottomWidth: 1,
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
        color: '#ffffff',
        fontSize: 16,
        textAlign: 'center',
    },
});
