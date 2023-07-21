import React, {useState} from 'react';
import {View, Text, StyleSheet, Pressable, Modal, SafeAreaView, Button, TextInput, ScrollView, Alert } from 'react-native';
import DatePicker from 'react-native-date-picker'

const Form = ({visible, setVisible})=> {
  const [date, setDate] = useState(new Date())
const [nombremascota, setNombremascota] = useState('');
const [nombreDueno, setNombreDueno] = useState('');
const [email, setEmail] = useState('');
const [telefono, setTelefono] = useState('');
const [sintomas, setSintomas] = useState('');
const handlecita = () => {
  console.log('enviando cita');
  // validar 
  if([nombremascota, nombreDueno, email, sintomas].includes('')){
 Alert.alert('Error', 'Todos los campos son obligatorios', )
  return;
  }
  const nuevoPaciente = {nombremascota, nombreDueno, email, telefono, sintomas, date}
  console.log(nuevoPaciente);
}

//  funcion para crear cita
// return jsx
  return(
<View >
<Modal

animationType="slide"
visible={visible}
>
<SafeAreaView style={styles.bg}>
<ScrollView>
  <Text style={styles.letra}>Nueva</Text>
  <Text style={styles.sletra}>Cita</Text>
<Pressable 
onLongPress={()=> setVisible(!visible)}
>
<Text style={styles.ctext}>mantener ❌</Text>

</Pressable>
  <View style={styles.campo}>
    <Text style = {styles.label}>Nombre de la Mascota</Text>
    <TextInput style={styles.inp} placeholder='....' value={nombremascota} onChangeText={setNombremascota}/>
    <Text style = {styles.label}>Nombre del Dueño</Text>
    <TextInput style = {styles.inp} placeholder='....' value={nombreDueno} onChangeText={setNombreDueno}/>
    <Text style = {styles.label}>Email del Dueño</Text>
    <TextInput style = {styles.inp} placeholder='....' value={email} onChangeText={setEmail}/>
    <Text style = {styles.label}>Telefono</Text>
    <TextInput style = {styles.inp} placeholder='....' value={telefono} onChangeText={setTelefono}/>
    <Text style = {styles.label}>Fecha Alta</Text>
  <View style={styles.bgdate}>
  <DatePicker date={date} onDateChange={(date) => setDate(date)}  style={styles.date}
    mode='date'
    locale='es-ES'
    textColor='black'
    />
  </View>
    <Text style = {styles.label}>Sintomas del animal</Text>
    <TextInput style = {styles.inp} placeholder='....' value={sintomas} onChangeText={setSintomas}/>
    
    {/* boton enviar */}
    <Pressable
    style={styles.bt}
    onPress={handlecita}
    >
    <Text>Enviar</Text>
  </Pressable>
  </View>
</ScrollView>
</SafeAreaView>
</Modal>

</View>
  )

  }
  export default Form;
const styles = StyleSheet.create({
   bgdate: {
    backgroundColor: 'white',
    borderRadius: 10,
    padding: 10,
    marginBottom: 10,
  },
  letra: {
  marginTop: 10,

    color: 'black',
    fontSize: 40,
    textAlign: 'center',
    fontWeight: 'bold',
  },
  ctext: {
    color: 'black',
    fontSize: 20,
    textAlign: 'center',
    fontWeight: 'bold',
  },
 bt: {
  marginBottom: 10,
    backgroundColor: 'gray',
    padding: 20,
    borderRadius: 10,
    margin: 20,
    alignItems: 'center',
    fontSize: 20,
    fontWeight: 'bold',
    textTransform: 'uppercase',
  },
  bg: {
    backgroundColor: '#6224d4',
    flex: 1,
  },
  sletra:
  {
    color: 'black',
    fontSize: 40,
    textAlign: 'center'
  },
  //  campo
  campo: {
    backgroundColor: 'white',
    margin: 20,
    padding: 20,
    borderRadius: 10,
  },
  // label
  label: {
    fontWeight: 'bold',
    fontSize: 18,
    marginBottom: 10,
  color: 'black',
  },
  // input
  inp: {
    borderWidth: 1,
    borderColor: 'black',
    borderRadius: 5,
    height: 40,
    padding: 10,
    marginBottom: 10,
    color: 'black',
  },
  date: {
    marginBottom: 10,
    color: 'black',
  }
});
