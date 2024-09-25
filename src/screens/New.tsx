import { Alert, Button, StyleSheet, Text, TextInput, View } from 'react-native';
import { useState } from 'react';

export default function New() {
  const [nome, setNome] = useState('');
  const [cpf, setCpf] = useState('');
  const [cep, setCep] = useState('');
  const [endereco, setEndereco] = useState('');
  const [bairro, setBairro] = useState('');
  const [cidade, setCidade] = useState('');
  const [estado, setEstado] = useState('');

  const buscacep = async () => {
    if (cep.length !== 8) {
      Alert.alert('Erro', 'Cep deve ter 8 dígitos');
      return;
    }

    try {
      const response = await fetch(`https://viacep.com.br/ws/${cep}/json/`);
      const data = await response.json();
      if (data.erro) {
        Alert.alert('Erro', 'CEP não encontrado');
        return;
      }
      setEndereco(data.logradouro);
      setBairro(data.bairro);
      setCidade(data.localidade);
      setEstado(data.estado);
    } catch (error) {
      Alert.alert('Erro', 'Não foi possível buscar o CEP');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Formulário</Text>
      <TextInput
        placeholder="Nome"
        value={nome}
        style={styles.input}
        onChangeText={setNome}
        keyboardType='default'
      />
      <TextInput
        placeholder="CPF"
        value={cpf}
        style={styles.input}
        onChangeText={setCpf}
        keyboardType='numeric'
        maxLength={11}
      />
      <TextInput
        placeholder="CEP"
        value={cep}
        style={styles.cepContainer}
        onChangeText={setCep}
        keyboardType='numeric'
        maxLength={8}
      />
      <Button title="Buscar Endereço" onPress={buscacep}
      />
      <TextInput
        placeholder="Endereço"
        value={endereco}
        style={styles.input}
        onChangeText={setEndereco}
        keyboardType='default'
      />
      <TextInput
        placeholder="Bairro"
        value={bairro}
        style={styles.input}
        onChangeText={setBairro}
        keyboardType='default'
      />
      <TextInput
        placeholder="Cidade"
        value={cidade}
        style={styles.input}
        onChangeText={setCidade}
        keyboardType='default'
      />
      <TextInput
        placeholder="UF"
        value={estado}
        style={styles.input}
        onChangeText={setEstado}
        keyboardType='default'
      />
      
    </View>
  );
}

const styles = StyleSheet.create({
  titulo: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#11111',
    textAlign: 'center',
  },
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 20,
    textAlign: 'center',
    alignItems: 'center',
  },
  input: {
    height: 40,
    borderColor: '#ccc',
    borderWidth: 1,
    marginBottom: 10,
    padding: 10,
    width: '50%',
    borderRadius: 5,
  },
  cepContainer: {
    height: 40,
    borderColor: '#ccc',
    borderWidth: 1,
    marginBottom: 10,
    padding: 10,
    width: '30%',
    borderRadius: 5,
  },
});