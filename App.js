import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, TextInput, TouchableOpacity } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Image source={{uri:'https://miro.medium.com/v2/resize:fit:1024/1*QY5S4senfFh-mIViSi5A_Q.png'}} 
      style={styles.logo}
      /> 
    
    
      <Text style={styles.title}>SEJA BEM VINDO</Text>

      <TextInput style={styles.input} placeholder='Digite seu e-mail'/>
      <TextInput style={styles.input} placeholder='Digite sua senha'/>

      <TouchableOpacity style={styles.btn}>
          <Text style={styles.btnText}>ACESSAR</Text>
      </TouchableOpacity>
      
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#696969',
    alignItems: 'center',
    justifyContent: 'center',
  },

  title: {
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#fff',
  },

  logo: {
    width: 100,
    height: 100,
    marginBottom: 20,
  },

  input: {
    marginTop: 30,
    width: '80%',
    height: 50,
    backgroundColor:'#fff',
    fontSize: 16,
    color:'#000',
    marginBottom: 20,
  },
  
  btn: {
    backgroundColor:'blue',
    paddingVertical: 12,
    paddingHorizontal: 25,
    borderRadius: 8,
    shadowColor: '#000',
    margin: 30,
  },

  btnText:{
  color:'#fff',
  fontSize: 16,
  fontWeight:'bold',
},
});