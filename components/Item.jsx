import React from 'react'
import { Text, StyleSheet } from 'react-native'

const Item = ({item}) => {
  const {nombremascota,nombreDueno} = item
  console.log(item)
  return (
    <Text style={StyleSheet.txt}>{nombreDueno}</Text>
  )

}
export default Item
const styles = StyleSheet.create({
  txt: {
    color: 'red',
    fontSize: 20,
    fontWeight: 'bold',
  },
})
