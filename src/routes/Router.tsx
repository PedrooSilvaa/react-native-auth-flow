import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react'
import { AppStack } from './AppStack';
import { AuthStack } from './AuthStack';
import { useAuth } from '../context/Auth';
import { Text, View } from 'react-native';

const Stack = createNativeStackNavigator();

export function Router(){
    const {authData, loading} = useAuth();

    if(loading){
        return(
            <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
                <Text>Carregando aplicativo...</Text>
            </View>
        )
    }
    return(
        <NavigationContainer>
            {authData ? <AppStack/> : <AuthStack/>}
        </NavigationContainer>
    );
}