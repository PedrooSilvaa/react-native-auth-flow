import { Text, View } from "react-native";
import React from 'react'
import { styles } from "./styles";
import { useNavigation } from "@react-navigation/native";
import { MyButton } from "../components/MyButton";


export function HomeScreen() {
    const navigation = useNavigation();
    return(
        <View style={styles.container}>
      <Text style={styles.title}>
        Essa tela só pode ser vista por usuários autenticados
      </Text>
      <MyButton
        title="Ir para Configurações"
        onPress={() => navigation.navigate('Settings' as never)}
      />
      <Text>
        by <Text style={styles.coffText}>Pedro Ferreira</Text>
      </Text>
    </View>
    )
}