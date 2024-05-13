import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, ImageBackground, Image, ScrollView, Dimensions } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { SafeAreaView } from 'react-native-safe-area-context';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

export default function Home() {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const navigation = useNavigation();

    const handleLogout = () => {
        setIsLoggedIn(false);
        console.log('Logout realizado com sucesso!');
        navigation.navigate('Login');
    };

    const handleNavigateToPage = () => {
        // Navegue para a página desejada
        navigation.navigate('Saiba');
    };

    return (
        <SafeAreaView style={styles.safeArea}>
            <ImageBackground
                source={require('../assets/background_login.jpeg')}
                resizeMode="cover"
                style={styles.background}>

                <ScrollView
                showsVerticalScrollIndicator={false}
                keyboardShouldPersistTaps='handled' 
                style={styles.scroll}>
                    <Image
                        resizeMode="center"
                        style={styles.logoImg}
                        source={require('../assets/logo.png')}
                    />
                    <View style={styles.card1}>
                        <Text style={styles.title}>Sen.Eye</Text>
                        <Text style={styles.text}>Um aplicativo de Monitoramento de Catástrofes
                            Naturais e Análises Climáticas.</Text>
                        <TouchableOpacity style={styles.saibaMais} onPress={handleNavigateToPage}>
                            <Text style={styles.saibaText}>Saiba Mais</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.cards}>
                        <View style={styles.card2}>
                            <Text style={styles.title}>Missão</Text>
                            <Text style={styles.text}>Salvar vidas e proteger comunidades através da tecnologia, fornecendo alertas precisos e oportunidades de intervenção rápida durante desastres naturais.</Text>
                        </View>

                        <View style={styles.images}>
                            <Image
                                style={styles.img}
                                source={{ uri: 'https://static.mundoeducacao.uol.com.br/mundoeducacao/2022/01/enchente-em-vila-velha.jpg' }}
                            />
                            <Image
                                style={styles.img}
                                source={{ uri: 'https://g3i5r4x7.rocketcdn.me/wp-content/uploads/2020/01/deslizamento-de-terra-o-que-e-como-se-forma-sinais-e-como-evitar.jpeg.webp' }}
                            />
                        </View>
                    </View>
                </ScrollView>
            </ImageBackground>
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
