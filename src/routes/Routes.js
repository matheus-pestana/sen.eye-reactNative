import React, { useState } from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Ionicons } from '@expo/vector-icons';

import Home from '../pages/Home';
import Login from '../pages/Login';
import Hoje from '../pages/Hoje';
import Perfil from '../pages/Perfil';
import Notificacoes from '../pages/Notificacoes';
import Saiba from '../pages/Saiba';

const Tab = createBottomTabNavigator();

function MyTabs() {
    return (
        <Tab.Navigator
            initialRouteName='Home'
            screenOptions={{
                tabBarStyle: { position: 'absolute', backgroundColor: '#e7efff', borderRadius: 10, height: 50, margin: 20 },
                tabBarActiveTintColor: "black",
                tabBarInactiveTintColor: "black",
            }}>
            <Tab.Screen name="Home" component={Home}
                options={{
                    headerShown: false,
                    tabBarIcon: ({ focused, size, color }) => {
                        if (focused) {
                            return (<Ionicons
                                size={size}
                                color={color}
                                name='home'
                            />);
                        } return (<Ionicons
                            size={size}
                            color={color}
                            name='home-outline'
                        />)
                    }
                }} />
            <Tab.Screen name="Hoje" component={Hoje}
                options={{
                    headerShown: false,
                    tabBarIcon: ({ focused, size, color }) => {
                        if (focused) {
                            return (<Ionicons
                                size={size}
                                color={color}
                                name='cloud'
                            />);
                        } return (<Ionicons
                            size={size}
                            color={color}
                            name='cloud-outline'
                        />)
                    }
                }} />
            <Tab.Screen name="Notificações" component={Notificacoes}
                options={{
                    headerShown: false,
                    tabBarIcon: ({ focused, size, color }) => {
                        if (focused) {
                            return (<Ionicons
                                size={size}
                                color={color}
                                name='notifications'
                            />);
                        } return (<Ionicons
                            size={size}
                            color={color}
                            name='notifications-outline'
                        />)
                    }
                }} />
            <Tab.Screen name="Perfil" component={Perfil}
                options={{
                    headerShown: true,
                    tabBarIcon: ({ focused, size, color }) => {
                        if (focused) {
                            return (<Ionicons
                                size={size}
                                color={color}
                                name='person'
                            />);
                        } return (<Ionicons
                            size={size}
                            color={color}
                            name='person-outline'
                        />)
                    }
                }} />
        </Tab.Navigator>
    );
}

const Stack = createNativeStackNavigator();

export default function MyStack() {

    return (
        <Stack.Navigator
            screenOptions={{
                headerShown: false,
            }}>
            <Stack.Screen name="Login" component={Login} />
            <Stack.Screen name="Home" component={MyTabs} />
            <Stack.Screen name="Saiba" component={Saiba}
                options={{ headerShown: true, headerTitle: 'Saiba Mais' }} />
        </Stack.Navigator>
    );
}
