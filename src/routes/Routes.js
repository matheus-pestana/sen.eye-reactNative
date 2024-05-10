import React, { useState } from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Ionicons } from '@expo/vector-icons';

import Home from '../pages/Home';
import Login from '../pages/Login';
import Teste from '../pages/Teste';

const Tab = createBottomTabNavigator();

function MyTabs() {
    return (
        <Tab.Navigator
            initialRouteName='HomeScreen'
            screenOptions={{
                tabBarStyle: { backgroundColor: 'white', borderTopColor: 'cyan' },
                tabBarActiveTintColor: "cyan",
                tabBarInactiveTintColor: "gray",
            }}>
            <Tab.Screen name="HomeScreen" component={Home}
                options={{
                    headerShown: false,
                    tabBarIcon: ({ focused, size, color }) => {
                        if (focused) {
                            return (<Ionicons
                                size={size}
                                color={color}
                                name='trophy'
                            />);
                        } return (<Ionicons
                            size={size}
                            color={color}
                            name='trophy-outline'
                        />)
                    }
                }} />
            <Tab.Screen name="Teste" component={Teste}
                options={{
                    headerShown: false,
                    tabBarIcon: ({ focused, size, color }) => {
                        if (focused) {
                            return (<Ionicons
                                size={size}
                                color={color}
                                name='trophy'
                            />);
                        } return (<Ionicons
                            size={size}
                            color={color}
                            name='trophy-outline'
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
                headerShown: false
            }}>
            <Stack.Screen name="Login" component={Login} />
            <Stack.Screen name="Home" component={Home} />
            <Stack.Screen name="Tabs" component={MyTabs} />
        </Stack.Navigator>
    );
}
