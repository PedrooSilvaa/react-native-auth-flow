import { createNativeStackNavigator } from '@react-navigation/native-stack'
import React from 'react'
import { HomeScreen } from '../screens/HomeScreen';
import { SignInScreen } from '../screens/SignInScreen';

const Stack = createNativeStackNavigator();

export function AuthStack(){
    return(
        <Stack.Navigator>
            <Stack.Screen name="SignIn" component={SignInScreen}/>
        </Stack.Navigator>
    )
}