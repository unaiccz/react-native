import {View, Text, StyleSheet, Pressable, Modal} from 'react-native';
import React, {useState} from 'react';
import Form from './components/Form';

export default function App() {
  const [visible, setVisible] = useState(false);

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Administrador de Citas</Text>
      <Text style={styles.sub}>Veterinaria</Text>
      <Pressable style={styles.btn} onPress={()=> setVisible(!visible)}>
        <Text style={styles.text}>Nueva Cita</Text>
      </Pressable>
      <Form visible={visible} setVisible={setVisible}/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f3f4f6',
  },
  text: {textAlign: 'center' , color: 'white', fontSize: 20, fontWeight: 'bold'},
  titulo: {
    textAlign: 'center',
    color: 'black',
    fontSize: 40,
  },
  sub: {
    textAlign: 'center',
    fontSize: 30,
    fontWeight: 'bold',
    color: '#5a24ca',
  },
  btn: {
    backgroundColor: '#5a24ca',
    padding: 20,
    borderRadius: 10,
    margin: 20,
    alignItems: 'center',
    fontSize: 20,
    fontWeight: 'bold',
    textTransform: 'uppercase',
  }
});
