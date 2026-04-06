import { Link, router } from 'expo-router';
import { useState } from 'react';
import { Alert, Image, KeyboardAvoidingView, Platform, ScrollView, StyleSheet, Text, View } from 'react-native';
import { Button } from '../components/button';
import { Input } from '../components/input';


export default function IndexPage() {

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    function hadleSignIn(){
        if(!email.trim() || !password.trim()){
            Alert.alert("Entrar", "Preencha e-mail e senha para continuar!")
            return;
        }
        router.push("/welcome")
    }

    return (
        <KeyboardAvoidingView style={{ flex: 1 }} behavior={Platform.select({ ios: "padding", android: "height" })}>  
            <ScrollView contentContainerStyle={{ flexGrow: 1 }} keyboardShouldPersistTaps="handled">    
                <View style={styles.container}>      
                    <Image 
                        source={require("../assets/img1.jpg")}
                        style={styles.illustration} 
                    />
                    <Text style={styles.title}>
                        Entrar
                    </Text>
                    <Text style={styles.subtitle}>
                        Acesse sua conta com e-mail e senha.
                    </Text>

                    <View style={styles.form}> 
                        <Input placeholder="E-mail" keyboardType="email-address" onChangeText={setEmail}/>
                        <Input placeholder="Senha" secureTextEntry onChangeText={setPassword} />
                        <Button label="Entrar" onPress={hadleSignIn} />
                    </View>

                    <Text style={styles.footerText}>  
                        Não tem uma conta?{" "} <Link href="/signup" style={styles.footerLink}>Cadastre-se aqui.</Link>
                    </Text>
                </View>
            </ScrollView>
        </KeyboardAvoidingView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fdfdfd', 
        padding: 32,       
    },
    illustration: {
        width: '100%',
        height: 330,
        resizeMode: 'contain',
        marginTop: 62,
    },
    title: {
        fontSize: 32,
        fontWeight: 900,
    },
    subtitle:{
        fontSize: 16,

    },
    form:{
        marginTop: 24,
        gap: 12,
    },
    footerText: {
        textAlign: "center",
        marginTop: 24,
        color: "#585860",

    },
    footerLink: {
        color: "#061f8e",
        fontWeight: 700,
    }

})