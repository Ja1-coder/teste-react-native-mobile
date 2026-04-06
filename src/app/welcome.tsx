import { LinearGradient } from 'expo-linear-gradient';
import { Image, StyleSheet, Text, View } from 'react-native';

export default function Welcome() {
    return (
        <View style={styles.container}>
            <LinearGradient
                colors={['#031063', '#3b5998', '#954119']}
                start={{ x: 0, y: 0 }}
                end={{ x: 1, y: 1 }}
                
                style={styles.background}
            >
                <View style={styles.basicLine}>
                    <Image 
                        source={require("../assets/img3.png")}
                        style={styles.illustration} 
                    />
                </View>
                <View>
                    <Text style={styles.title}>Bem vindo!</Text>
                    <Text style={styles.subtitle}>Você entrou com sucesso na tela criada por</Text>
                    <Text style={styles.subtitle}>João Victor Nascimento Proença</Text>
                </View>
            </LinearGradient>
        </View> 
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    background: {
        flex: 1, 
        alignItems: 'center',
    },
    title: {
        color: '#fff',
        fontSize: 24,
        fontWeight: 'bold',
        textAlign: 'center',
        marginTop: 24,
    },
     subtitle: {
        color: '#fff',
        fontSize: 16,
        textAlign: 'center',
        marginTop: 8,
        marginBottom: 24,
    },
    basicLine: {
        marginVertical: 2,
        width: '100%',
    },
    illustration: {
        width: '100%',
        height: 330,
        resizeMode: 'contain',
        marginTop: 62,
    },
})