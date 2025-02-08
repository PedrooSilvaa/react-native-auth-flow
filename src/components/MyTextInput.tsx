import { StyleSheet, Text, TextInput, TextInputProps, TouchableOpacity, TouchableOpacityProps } from "react-native";


export function MyTextInput(props: TextInputProps){
    return(
        <TextInput placeholderTextColor={'#727272'} style={styles.input} {...props}/>
    );
}

const styles = StyleSheet.create({
    input: {
        borderRadius: 8,
        borderColor: '#1D013F',
        paddingHorizontal: 8,
        color: '#888',
        borderWidth: 1,
        width: '100%',
        height: 50,
        marginBottom: 16
    }
})