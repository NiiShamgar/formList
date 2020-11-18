import React, {Component} from 'react';
import { StyleSheet, Text, View, TextInput}  from 'react-native';


class App extends Component{
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
            //secureTextEntry={true}
            value={this.state.email}
            onChangeText={(email) => {
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
            onChangeText={(password) => {
              this.setState({password})
            }}
            />

      </View>
    );  
  } 
}


 
 


const styles = StyleSheet.create({
  container:{
     marginTop:100
  },
  input:{
    marginVertical:10,
    backgroundColor:"green",
    height:50
  }
});

export default App; 

 
