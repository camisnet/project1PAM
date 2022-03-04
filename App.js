import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.texto}>Olá!</Text>
      <View style={styles.bloco}>
        <Text style={styles.textoBloco}> Valor 1</Text>
        <TextInput 
            style={styles.input}
            keyboardType="numeric"
        />
      </View>
      <View style={styles.bloco}>
        <Text style={styles.textoBloco}> Valor 2</Text>
        <TextInput 
            style={styles.input}
            keyboardType="numeric"
        />
      </View>
      <View style={styles.bloco}>
        <TouchableOpacity style={styles.botao}>
          <Text style={styles.textoBotao}>Somar</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#6959CD',
    alignItems: 'center',
    justifyContent: 'center',
  },
  textoBloco:{
     fontSize:20,
  },
  texto:{
     color:'#FFF',
     fontSize: '30px'
  },
   input:{
    borderColor:'#200',
    borderWidth:2,
    fontSize:30,
    width:'80%'
   },
   bloco:{
     width:'100%',
     alignItems:'center',
     marginTop:20
   },
   botao:{
      backgroundColor:'#6495ED',
      width:'80%',
      textAlign:'center'
   },
   textoBotao:{
      color:"#fff",
      fontSize:30
   }
});
