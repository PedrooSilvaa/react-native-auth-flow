import React from 'react';
import {View, Text} from 'react-native';
import {MyButton} from '../components/MyButton';
import {styles} from './styles';
import { useAuth } from '../context/Auth';

export function SettingScreen() {
  const {signOut} = useAuth()
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Configurações</Text>
      <MyButton
        style={{backgroundColor: 'red'}}
        title="Sair do App"
        onPress={signOut}
      />
    </View>
  );
}