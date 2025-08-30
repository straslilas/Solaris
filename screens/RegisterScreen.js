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

export default function RegisterScreen({ navigation }) {
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [confirmarSenha, setConfirmarSenha] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);

  const [errors, setErrors] = useState({
    nome: '',
    email: '',
    senha: '',
    confirmarSenha: '',
  });

  const validateEmail = (text) => /\S+@\S+\.\S+/.test(text);

  const handleRegister = () => {
    let valid = true;
    const newErrors = { nome: '', email: '', senha: '', confirmarSenha: '' };

    if (!nome.trim()) {
      newErrors.nome = 'Preencha o nome';
      valid = false;
    }

    if (!email.trim()) {
      newErrors.email = 'Preencha o e-mail';
      valid = false;
    } else if (!validateEmail(email)) {
      newErrors.email = 'E-mail inválido';
      valid = false;
    }

    if (!senha) {
      newErrors.senha = 'Preencha a senha';
      valid = false;
    } else if (senha.length < 6) {
      newErrors.senha = 'A senha deve ter pelo menos 6 caracteres';
      valid = false;
    }

    if (!confirmarSenha) {
      newErrors.confirmarSenha = 'Confirme sua senha';
      valid = false;
    } else if (confirmarSenha !== senha) {
      newErrors.confirmarSenha = 'As senhas não coincidem';
      valid = false;
    }

    setErrors(newErrors);

    if (valid) {
      console.log('Cadastro válido!');
      // Aqui você pode chamar a API ou navegar
    }
  };

  return (
    <View style={styles.container}>
      {/* Logo */}
      <TouchableOpacity onPress={() => navigation.navigate('Open')}>
        <Image source={require('../assets/logo.png')} style={styles.logo} />
      </TouchableOpacity>

      {/* Título */}
      <Text style={styles.title}>CRIAR CONTA</Text>

      {/* Campo Nome */}
      <View style={styles.inputContainer}>
        <FontAwesome name="user" size={20} color="#ccc" style={styles.icon} />
        <TextInput
          placeholder="NOME"
          placeholderTextColor="#ccc"
          style={styles.input}
          value={nome}
          onChangeText={setNome}
        />
      </View>
      {errors.nome ? <Text style={styles.error}>{errors.nome}</Text> : null}

      {/* Campo E-mail */}
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
      {errors.email ? <Text style={styles.error}>{errors.email}</Text> : null}

      {/* Campo Senha */}
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
      {errors.senha ? <Text style={styles.error}>{errors.senha}</Text> : null}

      {/* Campo Confirmar Senha */}
      <View style={styles.inputContainer}>
        <FontAwesome name="lock" size={20} color="#ccc" style={styles.icon} />
        <TextInput
          placeholder="CONFIRMAR SENHA"
          placeholderTextColor="#ccc"
          style={styles.input}
          secureTextEntry={!showConfirm}
          value={confirmarSenha}
          onChangeText={setConfirmarSenha}
        />
        <TouchableOpacity onPress={() => setShowConfirm(!showConfirm)}>
          <Feather
            name={showConfirm ? 'eye' : 'eye-off'}
            size={20}
            color="#ccc"
            style={styles.icon}
          />
        </TouchableOpacity>
      </View>
      {errors.confirmarSenha ? <Text style={styles.error}>{errors.confirmarSenha}</Text> : null}

      {/* Botão Criar */}
      <TouchableOpacity style={styles.button} onPress={handleRegister}>
        <Text style={styles.buttonText}>CRIAR</Text>
      </TouchableOpacity>

      {/* Separador OU */}
      <Text style={styles.or}>OU</Text>

      {/* Ícones Google e Apple */}
      <View style={styles.socialRow}>
        <TouchableOpacity style={styles.socialButton}>
          <Image source={require('../assets/google.png')} style={styles.socialIcon} />
        </TouchableOpacity>
        <TouchableOpacity style={styles.socialButton}>
          <Image source={require('../assets/apple.png')} style={styles.socialIcon} />
        </TouchableOpacity>
      </View>

      {/* Link para login */}
      <TouchableOpacity onPress={() => navigation.navigate('Login')}>
        <Text style={styles.link}>JÁ TEM CONTA? FAZER LOGIN</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#191970',
    padding: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  logo: {
    width: 200,
    height: 100,
    resizeMode: 'contain',
  },
  title: {
    fontSize: 28,
    color: '#F8F8FF',
    fontFamily: 'CormorantGaramond',
    textAlign: 'center',
    marginTop: 20,
    marginBottom: 30,
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderBottomColor: '#E6E6FA',
    marginVertical: 12,
    width: '90%',
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
    fontFamily: 'CormorantGaramond',
    marginLeft: 10,
  },
  button: {
    backgroundColor: '#E6E6FA33',
    padding: 15,
    borderRadius: 15,
    marginTop: 50,
    marginBottom: 20,
    width: '50%',
  },
  buttonText: {
    color: '#DAA520',
    textAlign: 'center',
    fontFamily: 'CormorantGaramond',
    fontSize: 18,
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
    padding: 12,
    borderRadius: 50,
  },
  link: {
    color: '#778DA9',
    textAlign: 'center',
    fontFamily: 'CormorantGaramond',
  },
});