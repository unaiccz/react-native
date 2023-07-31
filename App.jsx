import {View, Text, StyleSheet, Pressable, Modal, FlatList} from 'react-native';
import React, {useState} from 'react';
import Form from './components/Form';
import Paciente from './components/Paciente';
export default function App() {
  const [visible, setVisible] = useState(false);
  const [pacientes, setpacientes] = useState([]);
  

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Administrador de Citas</Text>
      <Text style={styles.sub}>Veterinaria</Text>
      <Pressable style={styles.btn} onPress={()=> setVisible(!visible)}>
        <Text style={styles.textb}>Nueva Cita</Text>
      </Pressable>
      <Form visible={visible} setVisible={setVisible} setpacientes={setpacientes} pacientes={pacientes}/>
      {pacientes.length === 0 ? 
      <Text style={styles.textr}>No hay citas</Text> :
 <FlatList
 data={pacientes}
 keyExtractor={(item)=> item.id}
 renderItem={(item) => {
return (
<Paciente
item={item}
/>
)

 }}
 />  
    }
    </View>
  );
}

const styles = StyleSheet.create({

  textv: {textAlign: 'center' , color: 'green', fontSize: 20, fontWeight: 'bold', marginTop: 40},
  textr: {textAlign: 'center' , color: 'red', fontSize: 20, fontWeight: 'bold'},
  textb: {textAlign: 'center' , color: 'white', fontSize: 20, fontWeight: 'bold'},
  container: {
    flex: 1,
    backgroundColor: '#f3f4f6',
  },
  text: {textAlign: 'center' , color: 'black', fontSize: 20, fontWeight: 'bold'},
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
