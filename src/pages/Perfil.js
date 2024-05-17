import React, { useState } from 'react';
import { Text, StyleSheet, ScrollView, Dimensions, Alert, View, Image, ImageBackground, TouchableOpacity } from 'react-native';
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
            <ScrollView style={styles.scroll}>
                <View style={styles.container}>
                    <View style={styles.profile}>
                        <ImageBackground
                            source={require('../assets/booTao.jpg')}
                            resizeMode="cover"
                            style={styles.background}>
                            <View style={styles.profileContent}>
                                <Image
                                    style={styles.profileImg}
                                    source={{ uri: 'https://static.wikia.nocookie.net/gensin-impact/images/e/e9/Hu_Tao_Icon.png/revision/latest/scale-to-width/360?cb=20210228210611' }}
                                />
                                <View style={styles.texts}>
                                    <Text style={styles.text}>Nome: Hu Tao</Text>
                                    <Text style={styles.text}>E-mail: HuTao22@gmail.com</Text>
                                    <Text style={styles.text}>Tel: +55 12 99162-9828</Text>
                                </View>
                            </View>

                            <View style={styles.itens}>
                                <View style={styles.itensContent}>
                                    <Text>E-mail:</Text>
                                    <Text style={styles.sla}>Hutao22@gmail.com</Text>
                                </View>
                                <View style={styles.itensContent}>
                                    <Text>Nome:</Text>
                                    <Text style={styles.sla}>Hu Tao</Text>
                                </View>
                                <View style={styles.itensContent}>
                                    <Text>Senha</Text>
                                    <Text style={styles.sla}>********</Text>
                                </View>
                                <View style={styles.itensContent}>
                                    <Text>Telefone:</Text>
                                    <Text style={styles.sla}>+55 12 99162-9828</Text>
                                </View>
                            </View>

                            <View style={styles.altera}>
                                <TouchableOpacity style={styles.alteraFundo}>
                                    <Text>Alterar fundo de perfil</Text>
                                </TouchableOpacity>
                            </View>

                        </ImageBackground>

                    </View>
                </View>



                {/* <TouchableOpacity style={styles.logoutButton} onPress={handleLogout}>
                    <Text style={styles.logoutText}>🤠</Text>
                </TouchableOpacity> */}
            </ScrollView>
        </SafeAreaView >
    );
}

const styles = StyleSheet.create({

    safeArea: {
        backgroundColor: 'white',
        flex: 1,
    },

    scroll: {
        flexGrow: 1,
    },

    container: {
        width: windowWidth,
        flex: 1,
    },

    profile: {
        width: windowWidth,
        height: windowHeight,
    },

    background: {
        width: '100%',
        height: '85%',
        alignItems: 'center',
    },

    profileContent: {
        margin: 20,
        flexDirection: 'row',
        justifyContent: 'center',
        width: 'auto',
        height: 'auto',
        gap: 20,
    },

    profileImg: {
        backgroundColor: 'red',
        borderRadius: 100,
        borderColor: 'black',
        borderWidth: 2,
        flex: 1,
        width: 150,
        height: 150,
        resizeMode: 'cover'
    },

    texts: {
        justifyContent: 'center',
        width: 'auto',
        height: 'auto',
    },

    text: {
        fontSize: 14,
        fontWeight: 'bold',
    },

    itens: {
        backgroundColor: 'white',
        borderRadius: 10,
        width: '90%',
        height: 'auto',
        padding: 15,
    },

    itensContent: {
        borderBottomColor: 'gray',
        borderBottomWidth: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        padding: 10,
    },

    sla: {
        color: 'gray',
    },

    altera: {
        width: '100%',
        height: '100%',
        justifyContent: 'center',
        alignItems: 'center',
    },

    alteraFundo: {
        width: '90%',
        height: '100px',
        backgroundColor: 'white',
        shadowOffset: {
            width: 0,
            height: 2,
        },
    }
});
