import React from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
} from 'react-native';

export default function OpenScreen({ navigation }) {
  const menuItems = [
    { label: 'MAPA ASTRAL', icon: require('../assets/mapa.png') },
    { label: 'TAROT', icon: require('../assets/tarot.png') },
    { label: 'RETORNO SOLAR', icon: require('../assets/retorno.png') },
    { label: 'SINASTRIA', icon: require('../assets/sinastria.png') },
    { label: 'CASAMENTO', icon: require('../assets/casamento.png') },
    { label: 'OUTROS', icon: require('../assets/conh.png') },
  ];

  return (
    <View style={styles.container}>
      {/* Logo no topo */}
      <TouchableOpacity onPress={() => navigation.navigate('Open')}>
        <Image source={require('../assets/logo.png')} style={styles.logo} />
      </TouchableOpacity>

      {/* Menu com ícones personalizados */}
      <ScrollView contentContainerStyle={styles.menuContainer}>
        {menuItems.map((item, index) => (
          <TouchableOpacity
            key={index}
            style={styles.card}
            onPress={() => navigation.navigate('Login', { funcao: item.label })}
          >
            <View style={styles.cardContent}>
              <Image source={item.icon} style={styles.cardIcon} />
              <Text style={styles.cardText}>{item.label}</Text>
            </View>
          </TouchableOpacity>
        ))}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#191970',
    paddingTop: 60,
    alignItems: 'center',
  },
  logo: {
    width: 300,
    height: 140,
    resizeMode: 'contain',
    marginBottom: 8,
  },
  menuContainer: {
    paddingVertical: 20,
    alignItems: 'center',
  },
  card: {
    backgroundColor: '#E6E6FA33',
    paddingVertical: 18,
    paddingHorizontal: 20,
    marginVertical: 12,
    width: 300,
    borderRadius: 15,
    marginTop: 20,
  },
  cardContent: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  cardIcon: {
    width: 28,
    height: 28,
    resizeMode: 'contain',
    marginRight: 15,
  },
  cardText: {
    color: '#DAA520',
    fontSize: 18,
    fontFamily: 'CormorantGaramond',
  },
});
