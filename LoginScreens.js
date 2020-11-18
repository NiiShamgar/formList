import React, {Component} from 'react'
import {View, Text, TextInput, TouchableOpacity} from ' react-native'
import { render } from 'react-dom'



export default class LoginScreen extends Component{
    render() {
        return (
            <View style={styles.container}>
                <View style={styles.loginTextContainer}>
                    <Text style={styles.loginText}>Log in</Text>
                </View>

                <View>
                    <TextInput 
                        style={styles.input}
                        placeholderTextColor="#aaaaaa"
                        placeholder="Username"/>
                    <TextInput 
                        style={styles.input}
                        placeholderTextColor="#aaaaaa"
                        secureTextEntry={true}
                        placeholder="Password"/>
                    <Text style={styles.forgotPassword}>Forgot password?</Text>
                </View>

                <View>
                    <TouchableOpacity style={styles.buttonContainer}>
                        <Text style={styles.loginText}>Log in</Text>
                    </TouchableOpacity>
                </View>

                <View style={styles.noAccountContainer}>
                    <Text style={styles.noAccountText}>Don't have an account?</Text>
                    <Text style={styles.signUpText}>Sign up</Text>
                </View>
            </View>

        )
    }
}

const styles=StyleSheet.create({
    container:{
        marginHorizontal:50
    },
    loginText:{
        fontSize:50,
        color:"#7f1491"
    },
    loginTextContainer:{
        marginBottom:30
    },
    input:{
        borderBottomWidth:1,
        borderButtomCOlor:"#7f1491",
        fontSize:20,
        height:50,
        marginTop:20
    },
    forgotPassword:{
        alignSelf:"flex-end",
        marginVertical:3,
        color: "#7f1491"
    },
    buttonContainer:{
        height:50,
        backgroundColor:"#7f1491",
        justifyContent:"center",
        alignItems:"center",
        borderRadius:10
    },
    buttonText:{
        color:"white",
        fontsize:25
    },
    noAccountContainer:{
        flexDirection:"row",
        justifyContent:"center"
    },
    noAccountText:{
        marginRight:10,
        fontSize:16
    },
    signUpText:{
        fontSize:16,
        color:"#7f1491"
    }

})