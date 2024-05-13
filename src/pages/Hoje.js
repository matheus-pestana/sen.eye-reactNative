import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, ImageBackground, Image, ScrollView, Dimensions } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { SafeAreaView } from 'react-native-safe-area-context';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

export default function Hoje() {
    return (
        <SafeAreaView style={styles.safeArea}>
             <ImageBackground
                source={require('../assets/ekldwhjklçvfdçkjvgeiu.jpg')}
                resizeMode="cover"
                style={styles.background}>
            </ImageBackground>
        </SafeAreaView >
    );
}


const styles = StyleSheet.create({

    safeArea: {
        backgroundColor: '#e7efff',
        flex: 1,
    },

    background: {
        width: windowWidth,
        height: windowHeight,
        justifyContent: 'center',
        alignItems: 'center',
    },

}) 