import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity} from 'react-native';

class App extends React.Components{
  constructor(props){
    super(props)
    this.state = {
      email:"",
      password:""
    }
  }
  render(){
    return (
      <View style={styles.container}>
        <TextInput 
          style={styles.input} 
          placeholder="email"
          autoCapitalize="none"
          autoCorrect={false}
          value={this.state.email}
          onChangeText={(email)=>{
            this.setState({email})
          }}
        />

        <TextInput 
          style={styles.input} 
          placeholder="password"
          autoCapitalize="none"
          autoCorrect={false}
          secureTextEntry={true}
          value={this.state.password}
          onChangeText={(password)=>{
            this.setState({password})
          }}
        />
        
        <TouchableOpacity  style={style.buttonContainer}>
          <Text style={styles.button}> Login </Text>
        </TouchableOpacity>
              </View>
    );
  }
  
}
  
  const styles = StyleSheet.create({
    container: {
      marginTop:100
    },
    input:{
      backgroundColor:"green",
      height:60,
      marginLeft:15,
      marginBottom:5
    },
    button:{
      color:"white",
      fontSize:20

    },
    buttonContainer:{
      marginHorizontal:10,
      backgroundCOlor:"blue",
      height:35,
      justifyContent:"center",
      alignItems:"center",
      borderRadius:5
    }
});

  
export default App;