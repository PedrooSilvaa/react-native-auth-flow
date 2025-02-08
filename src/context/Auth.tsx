import React, { ReactNode, useContext, useEffect } from "react";
import { createContext, useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { authService } from "../service/AuthService";
import { Alert } from "react-native";

interface AuthData {
    token: string;
    email: string;
    nome: string;
};

interface AuthContextData {
    authData?: AuthData ;
    signIn: (email: string, password: string) => Promise<AuthData>;
    signOut: () => Promise<void>;
    loading: boolean;
}

interface AuthProviderProps {
    children: ReactNode;
  }
  
export const AuthContext = createContext<AuthContextData>(
    {} as AuthContextData
);

export const AuthProvider: React.FC<AuthProviderProps> = ({children}) => {
    const [authData, setAuth] = useState<AuthData>();
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        loadFromStorage()
    }, [])

    async function loadFromStorage(){
        const auth = await AsyncStorage.getItem("@AuthData");

        if(auth){
            setAuth(JSON.parse(auth) as AuthData);
        }
        setLoading(false);
    }

    async function signIn(email: string, password: string){
        try {
            const auth = await authService.signIn(email, password);
        
            setAuth(auth);
            AsyncStorage.setItem('@AuthData', JSON.stringify(auth))
            return auth;
        } catch (error) {
            Alert.alert(error.message, "tente novamente")
        }
    }   

    async function signOut() : Promise<void>{
        setAuth(undefined);
        AsyncStorage.removeItem("@AuthData");
        return;
    }
    
    return (
        <AuthContext.Provider value={{authData, loading, signIn, signOut}}>
            {children}
        </AuthContext.Provider>
    );
}

export function useAuth(){
    const context = useContext(AuthContext);
    return context;
}