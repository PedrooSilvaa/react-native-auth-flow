import { Text, View } from "react-native";
import React, { useState } from 'react'
import { MyTextInput } from "../components/MyTextInput";
import { MyButton } from "../components/MyButton";
import { styles } from "./styles";
import { useAuth } from "../context/Auth";


export function SignInScreen() {
    const { signIn } = useAuth()
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    return(
        <View style={[styles.container, {justifyContent: 'center'}]}>
            <Text>SignIn Screen</Text>
            <MyTextInput placeholder="e-mail" value={email} onChangeText={setEmail}/>
            <MyTextInput 
            secureTextEntry
            placeholder="senha" 
            value={password} 
            onChangeText={setPassword}
            />
            <MyButton 
            title="Entrar no App"
            onPress={() => signIn(email, password)}
            />
        </View>
    )
}