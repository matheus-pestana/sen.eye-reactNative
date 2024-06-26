import React from 'react';
import { View, Text, StyleSheet, Image, SafeAreaView, ScrollView, Dimensions } from 'react-native';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

export default function Notificacoes() {
    return (
        <SafeAreaView style={styles.safeArea}>
            <View style={styles.container}>
                <View style={styles.header}>
                    <Image source={require('../assets/logo1.png')} style={styles.logo} />
                    <Text style={styles.headerText}>Notificações</Text>
                </View>
                <View style={styles.notificationBackgroundWrapper}>
                    <View style={styles.notificationBackground}>
                        <ScrollView contentContainerStyle={styles.scrollContainer}>
                            <View style={styles.notificationBox}>
                                <Image source={require('../assets/sino.png')} style={styles.icon} />
                                <View style={styles.notificationContent}>
                                    <View style={styles.notificationHeader}>
                                        <Text style={styles.notificationTitle}>Notificação</Text>
                                        <Text style={styles.notificationDate}>15/02/2024 15:36</Text>
                                    </View>
                                    <Text style={styles.notificationMessage}>
                                        Nosso sistema está passando por uma manutenção, mas não se preocupe, o aplicativo não será afetado.
                                    </Text>
                                </View>
                            </View>
                            <View style={styles.notificationBox}>
                                <Image source={require('../assets/alerta.png')} style={styles.icon} />
                                <View style={styles.notificationContent}>
                                    <View style={styles.notificationHeader}>
                                        <Text style={styles.notificationTitle}>Alerta!</Text>
                                        <Text style={styles.notificationDate}>15/02/2024 15:36</Text>
                                    </View>
                                    <Text style={styles.notificationMessage}>
                                        A Avenida Brasil (Caçapava-SP) está alagada, fique em casa, fortes chuvas estão previstas para acontecer as 16:30.
                                    </Text>
                                </View>
                            </View>
                        </ScrollView>
                    </View>
                </View>
            </View>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({

    safeArea: {
        flex: 1,
        backgroundColor: '#7D99B8',
    },

    container: {
        flex: 1,
        paddingVertical: 30,
    },

    header: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    },
    logo: {
        width: 50,
        height: 50,
        marginRight: 70,
    },
    headerText: {
        fontSize: 20,
        fontWeight: 'bold',
        textAlign: 'center',
        marginRight: 120,
    },
    notificationBackgroundWrapper: {
        flex: 1,
        paddingHorizontal: 20,
        paddingTop: 30,
        paddingBottom: 100,
    },
    notificationBackground: {
        flex: 1,
        backgroundColor: '#6B8CAA',
        borderRadius: 10,
        paddingVertical: 10,
        paddingHorizontal: 10,
    },
    scrollContainer: {
        alignItems: 'center',
    },
    notificationBox: {
        width: '90%',
        backgroundColor: '#fff',
        borderRadius: 10,
        padding: 15,
        marginVertical: 10,
        flexDirection: 'row',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.2,
        shadowRadius: 2,
        elevation: 3,
    },
    icon: {
        width: 40,
        height: 40,
        marginRight: 10,
    },
    notificationContent: {
        flex: 1,
    },
    notificationHeader: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    notificationTitle: {
        fontSize: 18,
        fontWeight: 'bold',
    },
    notificationDate: {
        fontSize: 10,
        color: '#888',
    },
    notificationMessage: {
        marginTop: 5,
        fontSize: 14,
        color: '#555',
    },
});