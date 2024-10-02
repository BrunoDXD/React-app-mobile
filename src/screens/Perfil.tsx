import { useState } from 'react';
import { Button, StyleSheet, Text, TextInput, View } from 'react-native';
import { BaseButton } from 'react-native-gesture-handler';

export default function Perfil() {
  const [valor1, setvalor1]       = useState('');
  const [valor2, setvalor2]       = useState('');
  const [resultado, setresultado] = useState(0);
  const soma=()=>{
    setresultado(parseFloat(valor1) + parseFloat(valor2));
  };
  const subtrair=()=>{
    setresultado(parseFloat(valor1) - parseFloat(valor2));
  };
  const multiplicar=()=>{
    setresultado(parseFloat(valor1) * parseFloat(valor2));
  };
  const dividir=()=>{
    if(parseFloat(valor2)!=0){
    setresultado(parseFloat(valor1) / parseFloat(valor2));}
    else{
      setresultado(NaN);
    }
  };
  return (
    <View style={styles.container}>
     <Text style={styles.titulo}>Calcular</Text>
     
     <TextInput 
        placeholder='Digite o primeiro número'
        value        = {valor1}
        style={styles.input}
        onChangeText = {setvalor1}
        keyboardType='numeric'
     ></TextInput>
     
     <TextInput 
        placeholder='Digite o segundo número'
        value        = {valor2}
        style={styles.input}
        onChangeText = {setvalor2}
        keyboardType='numeric'
     ></TextInput>

      <Button title="Somar" onPress={soma}/>
      <Button title="Subtrair" onPress={subtrair}/>
      <Button title="Multiplicar" onPress={multiplicar}/>
      <Button title="Dividir" onPress={dividir}/>
     
     <Text 
     style={styles.input}
     >{resultado}</Text>
     
     
     
      
    </View>
  );
}

const styles = StyleSheet.create({
  titulo: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#11111',
    textAlign: 'center',
    padding: 10,
  },
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 0,
    textAlign: 'center',
    alignItems: 'center',
    },
    input: {
      height: 40,
      borderColor: '#ccc',
      borderWidth: 1,
      marginBottom: 10,
      padding: 10,
      marginTop: 10,
      width: '50%',
      borderRadius: 5,
      opacity: 0.5,
    }
  });