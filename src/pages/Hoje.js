import React, { useState, useEffect } from 'react';
import { View, Text, Image, ScrollView, FlatList, StyleSheet } from 'react-native';
import { Card, Title } from 'react-native-paper';
import AsyncStorage from '@react-native-async-storage/async-storage';

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
        let MyCity = await AsyncStorage.getItem("newcity");
        if (!MyCity) {
            if (props.route && props.route.params && props.route.params.city) {
                MyCity = props.route.params.city;
            } else {
                MyCity = "Caçapava"; // Valor padrão se não houver cidade nos parâmetros ou no AsyncStorage
            }
        }

        fetch(`https://api.openweathermap.org/data/2.5/weather?q=${MyCity}&APPID=b29af4d126efcc79c4992bf80a3ecd65&units=metric&lang=pt`)
            .then(data => data.json())
            .then(results => {
                setInfo({
                    name: results.name,
                    temp: results.main.temp,
                    humidity: results.main.humidity,
                    desc: results.weather[0].description,
                    icon: results.weather[0].icon,
                });
            })
            .catch(err => {
                alert(err.message);
            });
    };

    const getForecast = async () => {
        let MyCity = await AsyncStorage.getItem("newcity");
        if (!MyCity) {
            if (props.route && props.route.params && props.route.params.city) {
                MyCity = props.route.params.city;
            } else {
                MyCity = "Caçapava"; // Valor padrão se não houver cidade nos parâmetros ou no AsyncStorage
            }
        }

        fetch(`https://api.openweathermap.org/data/2.5/forecast?q=${MyCity}&APPID=b29af4d126efcc79c4992bf80a3ecd65&units=metric&lang=pt`)
            .then(data => data.json())
            .then(results => {
                const currentDate = new Date(); // Data atual
                let currentDayIndex = currentDate.getDay(); // Índice do dia atual (0-6, onde 0 é domingo)
                const daysOfWeek = ['Dom', 'Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sáb'];

                const forecastData = results.list
                    .filter((entry, index) => index < 5) // Limitando a 5 dias
                    .map(entry => {
                        const forecastDate = new Date(entry.dt * 1000); // Data da previsão
                        const dayIndex = (currentDayIndex + 1) % 7; // Avança para o próximo dia (considerando o ciclo semanal)
                        currentDayIndex = dayIndex; // Atualiza o índice do dia atual para a próxima iteração
                        return {
                            date: daysOfWeek[dayIndex], // Obtém o nome abreviado do dia da semana
                            temp: entry.main.temp,
                            desc: entry.weather[0].description,
                            icon: entry.weather[0].icon
                        };
                    });

                setForecast(forecastData);
            })
            .catch(err => {
                alert(err.message);
            });
    };

    const renderWeatherInfo = () => (

        <View style={styles.weatherInfoContainer}>
            <Image
                style={styles.logo}
                source={require('../assets/logo1.png')}
            />
            <View style={styles.weatherDetails}>
                <Title style={styles.cityName}>{info.name}</Title>
                <View style={styles.temperatureContainer}>
                    <Text style={styles.temperature}>{info.temp}° |</Text>
                    <Text style={styles.weatherDescription}>{info.desc}</Text>
                </View>
            </View>
        </View>



    );

    return (
        <ScrollView contentContainerStyle={styles.container}>
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
                <Text style={styles.graphText}>Gráficos</Text>
            </Card>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        flexGrow: 1,
        justifyContent: 'space-around',
        alignItems: 'center',
        padding: 16,
        backgroundColor: '#8fb2d8',
    },

    weatherInfoContainer: {
        flexDirection: 'row',
        alignItems: 'flex-start',
        paddingHorizontal: 16,
        paddingTop: 16,
    },
    logo: {
        width: 40,
        height: 40,
        marginRight: 8,
    },
    weatherDetails: {
        flexDirection: 'column',
        alignItems: 'flex-start',
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
        alignItems: 'center'
    },

    forecastTitle: {
        fontSize: 16,
        marginVertical: 16
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
