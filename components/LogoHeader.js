import React from 'react';
import { Image, TouchableOpacity, StyleSheet } from 'react-native';

export default function LogoHeader({ navigation }) {
  return (
    <TouchableOpacity onPress={() => navigation.navigate('Open')}>
      <Image source={require('../assets/logo.png')} style={styles.logo} />
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  logo: {
    width: 200,
    height: 100,
    marginTop: -30,
    marginBottom: 30,
    resizeMode: 'contain',
  },
});
