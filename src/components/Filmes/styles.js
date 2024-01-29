import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  card: {
    shadowColor: '#000',
    backgroundColor: 'white',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.8,
    margin: 15,
    shadowRadius: 5,
    borderRadius: 5,
    elevation: 3,
  },
  titulo: {
    fontSize: 18,
    padding: 15,
  },
  capa: {
    height: 250,
    width: 350,
    zIndex: 2,
  },
  areaBotao: {
    alignItems: 'flex-end',
    marginTop: -40,
    zIndex: 9,
  },
  botao: {
    width: 100,
    backgroundColor: '#09A6FF',
    opacity: 1,
    padding: 8,
    borderTopLeftRadius: 5,
    borderBottomLeftRadius: 5,
  },
  botaoTexto: {
    textAlign: 'center',
    color: 'white',
  },
});

export default styles;
