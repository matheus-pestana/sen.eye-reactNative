import React, { useState, useEffect } from 'react';
import { View, Text, Image, ScrollView, FlatList, StyleSheet, ImageBackground, Dimensions, SafeAreaView, Alert } from 'react-native';
import { Card, Title } from 'react-native-paper';
import AsyncStorage from '@react-native-async-storage/async-storage';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

export default function Hoje(props) {
    const [info, setInfo] = useState({
        name: "loading !!",
        temp: "loading",
        humidity: "loading",
        desc: "loading",
        icon: "loading"
    });

    const [forecast, setForecast] = useState([]);

    useEffect(() => {
        getWeather();
        getForecast();
    }, []);

    const getWeather = async () => {
        try {
            let MyCity = await AsyncStorage.getItem("newcity");
            if (!MyCity) {
                if (props.route && props.route.params && props.route.params.city) {
                    MyCity = props.route.params.city;
                } else {
                    MyCity = "Caçapava"; // Valor padrão se não houver cidade nos parâmetros ou no AsyncStorage
                }
            }

            const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${MyCity}&APPID=b29af4d126efcc79c4992bf80a3ecd65&units=metric&lang=pt`);
            const results = await response.json();
            if (response.ok) {
                setInfo({
                    name: results.name,
                    temp: results.main.temp,
                    humidity: results.main,
                    desc: results.weather[0].description,
                    icon: results.weather[0].icon,
                });
            } else {
                Alert.alert("Erro", results.message || "Erro ao buscar dados do tempo");
            }
        } catch (err) {
            Alert.alert("Erro", err.message);
        }
    };

    const getForecast = async () => {
        try {
            let MyCity = await AsyncStorage.getItem("newcity");
            if (!MyCity) {
                if (props.route && props.route.params && props.route.params.city) {
                    MyCity = props.route.params.city;
                } else {
                    MyCity = "Caçapava"; // Valor padrão se não houver cidade nos parâmetros ou no AsyncStorage
                }
            }

            const response = await fetch(`https://api.openweathermap.org/data/2.5/forecast?q=${MyCity}&APPID=b29af4d126efcc79c4992bf80a3ecd65&units=metric&lang=pt`);
            const results = await response.json();
            if (response.ok) {
                const currentDate = new Date();
                let currentDayIndex = currentDate.getDay();
                const daysOfWeek = ['Dom', 'Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sáb'];

                const forecastData = results.list
                    .filter((entry, index) => index < 5)
                    .map(entry => {
                        const forecastDate = new Date(entry.dt * 1000);
                        const dayIndex = (currentDayIndex + 1) % 7;
                        currentDayIndex = dayIndex;
                        return {
                            date: daysOfWeek[dayIndex],
                            temp: entry.main.temp,
                            desc: entry.weather[0].description,
                            icon: entry.weather[0].icon
                        };
                    });

                setForecast(forecastData);
            } else {
                Alert.alert("Erro", results.message || "Erro ao buscar dados de previsão");
            }
        } catch (err) {
            Alert.alert("Erro", err.message);
        }
    };

    const renderWeatherInfo = () => (
        <View style={styles.weatherContainer}>
            <View style={styles.weatherInfoContainer}>
                <View style={styles.weatherDetails}>
                    <Title style={styles.cityName}>{info.name}</Title>
                    <View style={styles.temperatureContainer}>
                        <Text style={styles.temperature}>{info.temp}° |</Text>
                        <Text style={styles.weatherDescription}>{info.desc}</Text>
                    </View>
                    <Image
                        style={{ width: 100, height: 100, marginVertical: 16 }}
                        source={{ uri: `https://openweathermap.org/img/w/${info.icon}.png` }}
                    />
                </View>
            </View>
        </View>
    );

    return (
        <ScrollView contentContainerStyle={styles.container}>
            <ImageBackground
                source={require('../assets/ceu.jpg')}
                resizeMode="cover"
                style={styles.background}>
                {renderWeatherInfo()}

                <View style={styles.forecastContainer}>
                    <Text style={styles.forecastTitle}>Clima e temperatura média nos próximos dias</Text>
                    <FlatList
                        data={forecast}
                        keyExtractor={(item, index) => index.toString()}
                        horizontal={true}
                        renderItem={({ item }) => (
                            <View style={styles.forecastItem}>
                                <Text>{item.date}</Text>
                                <Image style={styles.weatherIcon} source={{ uri: `https://openweathermap.org/img/w/${item.icon}.png` }} />
                                <Text>{item.temp}°</Text>
                            </View>
                        )}
                    />
                </View>

                <Text style={styles.locationSituation}>Veja a situação de sua localidade</Text>
                <Card style={styles.graphCard}>
                    <Text style={styles.graphText}>Em breve...</Text>
                </Card>
            </ImageBackground>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        height: '100%',
    },
    background: {
        width: windowWidth,
        height: windowHeight,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 16,
    },
    weatherContainer: {
        flex: 1,
    },
    weatherInfoContainer: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-around',
        paddingHorizontal: 16,
        paddingTop: 16,
    },
    weatherDetails: {
        flexDirection: 'column',
        alignItems: 'center',
    },
    cityName: {
        fontSize: 24,
        marginBottom: 8,
    },
    temperatureContainer: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    temperature: {
        fontSize: 20,
        marginRight: 8,
    },
    weatherDescription: {
        fontSize: 16,
    },
    forecastContainer: {
        backgroundColor: '#577B93',
        width: '100%',
        alignItems: 'center',
        padding: 20,
        borderRadius: 10,
    },
    forecastTitle: {
        fontSize: 12,
        fontWeight: 'bold',
        marginBottom: 10,
    },
    forecastItem: {
        alignItems: 'center',
        marginHorizontal: 8
    },

    weatherIcon: {
        width: 30,
        height: 30
    },

    locationSituation: {
        fontSize: 18,
        marginVertical: 16
    },

    graphCard: {
        width: '100%',
        height: 200,
        justifyContent:
            'center',
        alignItems: 'center',
        backgroundColor: '#e0e0e0'
    },

    graphText: {
        fontSize: 24
    }
});
