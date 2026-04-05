import { StyleSheet, TextInput, TextInputProps } from 'react-native';

export function Input({...rest}: TextInputProps) {
    return(
        <TextInput style={styles.input} {...rest}/>
    )
}

const styles = StyleSheet.create({
    input: {
        width: '100%',
        height: 48,
        borderWidth: 5,
        borderColor: "#dcdcdc",
        borderRadius: 8,
        fontSize: 16,
        paddingLeft: 12,
    }
})