import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, ImageBackground, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { SafeAreaView } from 'react-native-safe-area-context';

const LoginPage = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const navigation = useNavigation();


    const handleLogin = () => {
        const usernameStatic = 'usuario';
        const passwordStatic = 'senha123';

        if (username === usernameStatic && password === passwordStatic) {
            console.log('Login bem-sucedido!');
            setIsLoggedIn(true);
            navigation.navigate('Home');
        } else {
            console.log('Nome de usuário ou senha incorretos.');
        }

        setUsername('');
        setPassword('');
    };

    return (
        <SafeAreaView style={styles.safeArea}>
            <ImageBackground
                source={require('../assets/background_login.jpeg')}
                resizeMode="cover"
                style={styles.background}>
                <View style={styles.container}>
                    <Image
                        resizeMode="center"
                        style={styles.logoImg}
                        source={require('../assets/logo.jpeg')}
                    />
                    <Text style={styles.title}>E-mail</Text>
                    <TextInput
                        style={styles.input}
                        placeholder="Insira seu e-mail"
                        value={username}
                        onChangeText={(text) => setUsername(text)}
                    />
                    <Text style={styles.title}>Senha</Text>
                    <TextInput
                        style={styles.input}
                        placeholder="Insira sua senha"
                        value={password}
                        onChangeText={(text) => setPassword(text)}
                        secureTextEntry
                    />
                    <TouchableOpacity style={styles.loginButton} onPress={handleLogin}>
                        <Text style={styles.buttonText}>Login</Text>
                    </TouchableOpacity>
                </View>
            </ImageBackground>
        </SafeAreaView>

    );
};

const styles = StyleSheet.create({

    safeArea: {
        flex: 1,
    },

    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },

    logoImg: {
        width: 300,
    },

    background: {
        flex: 1,
        width: '100%',
        height: '100%',
        justifyContent: 'center',
        alignItems: 'center',
    },

    title: {
        fontSize: 24,
        marginBottom: 20,
    },
    input: {
        width: 250,
        height: 40,
        borderColor: 'gray',
        borderWidth: .5,
        marginBottom: 20,
        backgroundColor: 'white',
        borderRadius: 10,
    },
    loginButton: {
        backgroundColor: '#e7efff',
        paddingVertical: 10,
        paddingHorizontal: 20,
        borderRadius: 5,
    },
    buttonText: {
        color: '#ffffff',
        fontSize: 16,
        textAlign: 'center',
    },
});

export default LoginPage;
