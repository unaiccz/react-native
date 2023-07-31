import React from 'react'
import { View, Text, StyleSheet, Pressable } from 'react-native'

const Paciente = ({item}) => {
const {nombremascota, nombreDueno, email, telefono, sintomas, date} = item.item
const dateformat = date => {
    const fecha = new Date(date)
const opciones = {year: 'numeric', month: 'long', day: '2-digit'}	
return fecha.toLocaleDateString('es-ES', opciones)
}
return (
        <View style={styles.container}>
            <Text style={styles.label}>Nombre de la Mascota</Text>
            <Text style={styles.text}>{nombremascota}</Text>
            <Text style={styles.label}>Nombre del Dueño</Text>
            <Text style={styles.text}>{nombreDueno}</Text>
            <Text style={styles.label}>Email del Dueño</Text>
            <Text style={styles.text}>{email}</Text>
            <Text style={styles.label}>Telefono</Text>
            <Text style={styles.text}>{telefono}</Text>
            <Text style={styles.label}>Fecha Alta</Text>
            <Text style={styles.date}>{dateformat(date)}</Text>
            <Text style={styles.label}>Sintomas del animal</Text>
            <Text style={styles.text}>{sintomas}</Text>
            <View style={styles.btne}>
            <Pressable style={styles.btn}>
                <Text style={styles.text}>Eliminar &times;</Text>
            </Pressable>
             {/* editar */}
            <Pressable style={styles.btn}>
                <Text style={styles.text}>Editar</Text>
            </Pressable>
            </View>
        </View>
  )
}
const styles = StyleSheet.create({
    btne: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 20,
        borderTopColor: '#000',
        borderTopWidth: 1,
    },
    container: {
        backgroundColor: '#FFF',
        padding: 30,
       marginTop: 50,
       marginHorizontal: 30,
        borderBottomColor: '#e5e7eb',
        borderBottomWidth: 1,
        },
        label: {
color: '#374151',
textTransform: 'uppercase',
fontWeight: '700',
fontSize: 20,
marginBottom: 10,
        },
        text: {
color: '#6d28d9',
fontSize: 24,
fontWeight: '700',        
},
date: {
    color: '#374151'
},

})
export default Paciente