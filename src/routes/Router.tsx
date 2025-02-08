import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react'
import { AppStack } from './AppStack';
import { AuthStack } from './AuthStack';

const Stack = createNativeStackNavigator();

export function Router(){
    const auth = true;
    return(
        <NavigationContainer>
            {auth ? <AppStack/> : <AuthStack/>}
        </NavigationContainer>
    );
}