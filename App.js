import React from 'react';
import { SafeAreaView, StyleSheet, Text, View } from 'react-native';
import Hoof from './components/Hoof'; // Asegúrate de que la ruta sea correcta

const App = () => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Zonas de la Pezuña</Text>
      </View>
      <Hoof />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  header: {
    marginBottom: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
  },
});

export default App;
