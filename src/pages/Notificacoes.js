import { View, Text, TextInput, TouchableOpacity, StyleSheet, ImageBackground, Image, ScrollView, Dimensions } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { SafeAreaView } from 'react-native-safe-area-context';


export default function Notificacoes() {
    return (
        <SafeAreaView style={styles.safeArea}>

            <View style={styles.container}>
                <Image
                    style={styles.img}
                    source={{ uri: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/ac/Noun_Project_maintenance_icon_943595_cc.svg/1200px-Noun_Project_maintenance_icon_943595_cc.svg.png' }}
                />
                <Text style={styles.text}>Página em manutenção, volte aqui mais tarde.</Text>
            </View>

        </SafeAreaView >
    );
}


const styles = StyleSheet.create({

    safeArea: {
        backgroundColor: '#e7efff',
        flex: 1,
    },

    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },

    img: {
        width: 150,
        height: 150,
        justifyContent: 'center',
        alignItems: 'center',
    },

    text: {
        fontSize: 20,
        fontWeight: 'bold',
        color: 'black',
        textAlign: 'center',
        margin: 20,
    }

}) 