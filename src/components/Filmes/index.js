import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import styles from './styles';

export default Filmes = props => {
  const { nome, foto } = props.data;
  return (
    <View style={styles.card}>
      <Text style={styles.titulo}>{nome}</Text>
      <Image style={styles.capa} source={{ uri: foto }} />
      <View style={styles.areaBotao}>
        <TouchableOpacity style={styles.botao} onPress={() => alert(nome)}>
          <Text style={styles.botaoTexto}>Leia Mais</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};
