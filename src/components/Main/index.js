import React, { useEffect, useState } from 'react';
import { View, FlatList, Text } from 'react-native';
import api from '../../services/api';
import Filmes from '../Filmes';
import styles from './styles';

export default Main = props => {
  const [filmes, setFilmes] = useState([]);

  useEffect(() => {
    async function loadFilmes() {
      const response = await api.get('r-api/?api=filmes');
      setFilmes(response.data);
    }
    loadFilmes();
  }, []);
  return (
    <View style={styles.container}>
      <FlatList
        data={filmes}
        keyExtractor={filmes => String(filmes.id)}
        renderItem={({ item }) => <Filmes data={item} />}
      />
    </View>
  );
};
