import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Image,
} from 'react-native';
import { FontAwesome, Feather } from '@expo/vector-icons';
import { useRoute } from '@react-navigation/native'; // ✅ NOVO

export default function LoginScreen({ navigation }) {
  const route = useRoute(); // ✅ NOVO
  const funcao = route.params?.funcao;

  const frases = {
    'MAPA ASTRAL': 'Faça login para acessar seu Mapa Astral.',
    'TAROT': 'Faça login para consultar o Tarot.',
    'RETORNO SOLAR': 'Faça login para ver seu Retorno Solar.',
    'SINASTRIA': 'Faça login para comparar mapas com Sinastria.',
    'CASAMENTO': 'Faça login para explorar compatibilidades de Casamento.',
    'OUTROS': 'Faça login para acessar conteúdos extras.',
  };

  const fraseLogin = funcao ? frases[funcao] : 'Faça login para acessar o Solaris.'; // ✅ NOVO

  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [emailError, setEmailError] = useState('');
  const [senhaError, setSenhaError] = useState('');

  const validateEmail = (text) => {
    const regex = /\S+@\S+\.\S+/;
    return regex.test(text);
  };

  const handleLogin = () => {
    let valid = true;

    if (!email) {
      setEmailError('Preencha o e-mail');
      valid = false;
    } else if (!validateEmail(email)) {
      setEmailError('E-mail inválido');
      valid = false;
    } else {
      setEmailError('');
    }

    if (!senha) {
      setSenhaError('Preencha a senha');
      valid = false;
    } else {
      setSenhaError('');
    }

    if (valid) {
      console.log('Login válido!');
    }
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => navigation.navigate('Open')}>
        <Image source={require('../assets/logo.png')} style={styles.logo} />
      </TouchableOpacity>

      <Image source={require('../assets/userLogin.png')} style={styles.userLogin} />

      {/* ✅ Frase dinâmica */}
      <Text style={styles.title}>{fraseLogin}</Text>

      {/* Campo E-MAIL */}
      <View style={styles.inputContainer}>
        <FontAwesome name="envelope" size={20} color="#ccc" style={styles.icon} />
        <TextInput
          placeholder="E-MAIL"
          placeholderTextColor="#ccc"
          style={styles.input}
          keyboardType="email-address"
          value={email}
          onChangeText={setEmail}
        />
      </View>
      {emailError ? <Text style={styles.error}>{emailError}</Text> : null}

      {/* Campo SENHA */}
      <View style={styles.inputContainer}>
        <FontAwesome name="lock" size={20} color="#ccc" style={styles.icon} />
        <TextInput
          placeholder="SENHA"
          placeholderTextColor="#ccc"
          style={styles.input}
          secureTextEntry={!showPassword}
          value={senha}
          onChangeText={setSenha}
        />
        <TouchableOpacity onPress={() => setShowPassword(!showPassword)}>
          <Feather
            name={showPassword ? 'eye' : 'eye-off'}
            size={20}
            color="#ccc"
            style={styles.icon}
          />
        </TouchableOpacity>
      </View>
      {senhaError ? <Text style={styles.error}>{senhaError}</Text> : null}

      <TouchableOpacity>
        <Text style={styles.link}>ESQUECI MINHA SENHA</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.button} onPress={handleLogin}>
        <Text style={styles.buttonText}>ENTRAR</Text>
      </TouchableOpacity>

      <Text style={styles.or}>OU</Text>

      <View style={styles.socialRow}>
        <TouchableOpacity style={styles.socialButton}>
          <Image source={require('../assets/google.png')} style={styles.socialIcon} />
        </TouchableOpacity>
        <TouchableOpacity style={styles.socialButton}>
          <Image source={require('../assets/apple.png')} style={styles.socialIcon} />
        </TouchableOpacity>
      </View>

      <TouchableOpacity onPress={() => navigation.navigate('Register')}>
        <Text style={styles.link}>AINDA NÃO TEM CONTA? CADASTRE-SE</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#191970',
    padding: 40,
    alignItems: 'center',
    justifyContent: 'center',
  },
  logo: {
    width: 200,
    height: 100,
    marginTop: -30,
    marginBottom: 20,
    resizeMode: 'contain',
  },
  userLogin: {
    width: 90,
    height: 90,
    marginBottom: 40,
  },
  title: {
    fontSize: 20,
    color: '#F8F8FF',
    fontFamily: 'CormorantGaramond',
    textAlign: 'center',
    marginBottom: 20,
    paddingHorizontal: 20,
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderBottomColor: '#E6E6FA',
    marginVertical: 12,
    width: '100%',
    paddingBottom: 4,
  },
  input: {
    flex: 1,
    color: '#FFF',
    fontFamily: 'CormorantGaramond',
    paddingVertical: 8,
    paddingLeft: 8,
  },
  icon: {
    marginRight: 10,
  },
  error: {
    color: '#FF6B6B',
    fontSize: 14,
    alignSelf: 'flex-start',
    marginBottom:2,
    fontFamily: 'CormorantGaramond',
  },
  button: {
    backgroundColor: '#E6E6FA33',
    padding: 15,
    borderRadius: 15,
    marginTop: 40,
    marginBottom: 10,
    width: '50%',
  },
  buttonText: {
    color: '#DAA520',
    textAlign: 'center',
    fontFamily: 'CormorantGaramond',
    fontSize: 18,
  },
  link: {
    color: '#778DA9',
    textAlign: 'center',
    fontFamily: 'CormorantGaramond',
  },
  or: {
    color: '#ccc',
    marginVertical: 15,
    fontFamily: 'CormorantGaramond',
  },
  socialRow: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  socialButton: {
    marginHorizontal: 15,
    padding: 10,
    borderRadius: 50,
  },
});
