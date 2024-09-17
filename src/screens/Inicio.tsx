import { FlatList, Image, SafeAreaView, ScrollView, StyleSheet, Text, View } from 'react-native';
import React from 'react';
// dados para produtos
const produtos=[
  {id: '1', nome: 'Tênis', preco: '300,00', imagem: 'https://cdnv2.moovin.com.br/deckeronline/imagens/produtos/original/tenis-jogging-esportivo-adidas-swift-run-feminino--dcbbbc5f5c7d64697a5e8c9b0f97e722.jpg'},
  {id: '2', nome: 'Bota', preco: '250,00', imagem: 'https://ramarim.vtexassets.com/arquivos/ids/164156-600-auto/Ramarim-2350122-2-1.jpg?v=638463869328200000'},
  {id: '3', nome: 'Havaianas', preco: '30,00', imagem: 'https://itapua.vteximg.com.br/arquivos/ids/1691823-555-555/Sem-titulo.png?v=638095748759200000'},
];
export default function Inicio() {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <View style={styles.cabecalho}>
          <Text style={styles.titulocabecalho}>Destaques</Text>
          <FlatList
          data={produtos}
          renderItem={({item})=>(
            <View>
              <Image source={{uri: item.imagem}}/>
              <Text>{item.nome}</Text>
              <Text>{item.preco}</Text>
            </View>
          )}
          keyExtractor={item => item.id} horizontal
          />    
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  cabecalho: {
    padding: 20,
  },
  titulocabecalho: {
    fontSize: 18,
    marginBottom: 10,
  },
    container: {
      flex: 1,
      backgroundColor: '#bb0ff',
      alignItems: 'center',
      justifyContent: 'center',
    },
  });