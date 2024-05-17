import React from 'react';
import { View, Text, StyleSheet, Image, ScrollView, SafeAreaView, ImageBackground, Dimensions } from 'react-native';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

export default function Hoje() {
    return (
        <SafeAreaView style={styles.safeArea}>
            <ImageBackground
                source={require('../assets/background_login.jpeg')}
                resizeMode="cover"
                style={styles.background}>
                <View style={styles.container}>
                    <View style={styles.header}>
                        <Image source={require('../assets/logo1.png')} style={styles.logo} />
                        <View style={styles.cidade}>
                            <Text style={styles.city}>Caçapava</Text>
                            <Text style={styles.temperature}>25° | Nublado</Text>
                        </View>
                    </View>
                    <View style={styles.weatherForecast}>
                        <Text style={styles.forecastText}>Clima e temperatura média nos próximos dias</Text>
                        <ScrollView horizontal contentContainerStyle={styles.forecastIcons}>
                            <Image source={require('../assets/storm.png')} style={styles.icon} />
                            <Image source={require('../assets/storm.png')} style={styles.icon} />
                            <Image source={require('../assets/storm.png')} style={styles.icon} />
                            <Image source={require('../assets/storm.png')} style={styles.icon} />
                            <Image source={require('../assets/storm.png')} style={styles.icon} />
                            <Image source={require('../assets/storm.png')} style={styles.icon} />
                        </ScrollView>
                    </View>
                    <View style={styles.localSituation}>
                        <Text style={styles.localSituationText}>Veja a situação de sua localidade</Text>
                        <View style={styles.graphics}>
                            <Text style={styles.graphicsText}>Gráficos</Text>
                        </View>
                    </View>
                </View>
            </ImageBackground>
        </SafeAreaView>

    );
};

const styles = StyleSheet.create({

    safeArea: {
        backgroundColor: '#e7efff',
        flex: 1,
    },

    background: {
        width: windowWidth,
        height: '20%',
        justifyContent: 'center',
        alignItems: 'center',
    },

    container: {
        flex: 1,
        backgroundColor: '#E1EAF1',
        padding: 10,
    },

    header: {
        flexDirection: 'row',
        gap: 60,
        marginBottom: 20,
        padding: 20,
        borderRadius: 10,
    },

    logo: {
        width: 50,
        height: 50,
        marginBottom: 10,
    },

    cidade: {
        justifyContent: 'center',
        alignItems: 'center',
    },

    city: {
        fontSize: 24,
        fontWeight: 'bold',
    },

    temperature: {
        fontSize: 18,
        color: '#888',
    },

    weatherForecast: {
        marginBottom: 20,
        backgroundColor: '#CBD8E1',
        padding: 20,
        borderRadius: 10,
    },

    forecastText: {
        textAlign: 'center',
        fontSize: 16,
        marginBottom: 10,
    },

    forecastIcons: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },

    icon: {
        width: 45,
        height: 45,
        marginHorizontal: 5,
    },

    localSituation: {
        alignItems: 'center',
        marginBottom: 20,
    },

    localSituationText: {
        fontSize: 16,
        marginBottom: 10,
    },

    graphics: {
        width: '100%',
        height: 200,
        backgroundColor: '#CBD8E1',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10,
    },

    graphicsText: {
        fontSize: 24,
        color: '#888',
    },

});
