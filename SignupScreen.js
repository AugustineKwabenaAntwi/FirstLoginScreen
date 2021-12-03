import React, { Component } from 'react'
import {View,TextInput,Text,TouchableOpacity,StyleSheet,ScrollView} from "react-native"



export default class SignupScreen extends Component {
    render() {
        return (
            <ScrollView showsVerticalScrollIndicator={false} style ={styles.container}>
                <View style={styles.signuptextcontainer}>
                    <Text style={styles.signuptext}>Sign Up</Text>
                </View>

                <View style ={styles.inputcontainer}>
                    <TextInput style={styles.input} placeholder="Username" placeholderTextColor="#aaaa"></TextInput>
                    <TextInput style={styles.input} placeholder="Email" placeholderTextColor="#aaaa"></TextInput>
                    <TextInput style={styles.input} placeholder="Password" placeholderTextColor="#aaaa"></TextInput>
                    <TextInput style={styles.input} placeholder="Password again" placeholderTextColor="#aaaa"></TextInput>
                </View>

                <View>
                    <TouchableOpacity style = {styles.button}>
                        <Text style ={styles.buttontext}>Sign Up</Text>
                    </TouchableOpacity>

                    <View style={styles.haveanaccounttextcontainer}>
                        <Text style={styles.haveanaccounttext}>You already have an account?</Text>
                        <Text style={styles.logintext}>Log in </Text>
                    </View>
                </View>
            </ScrollView>
        )
    }
}

const styles = StyleSheet.create({
    container:{
        marginHorizontal:50
    },
    signuptext:{
        color:"green",
        fontSize:50
    },
    signuptextcontainer:{
        marginBottom:20
    },
    inputcontainer:{
        marginVertical:10
        
    },
    input:{
        borderBottomWidth:3,
        borderBottomColor:"green",
        marginVertical:20,
        fontSize:20,
        height:50
    },
    button:{
        height:60,
        backgroundColor:"green",
        alignItems:"center",
        justifyContent:'center',
        borderRadius:10,
        marginVertical:20
    },
    buttontext:{
        fontSize:25,
        color:"white"
    },
    haveanaccounttextcontainer:{
        justifyContent:"center",
        flexDirection:"row"
    },
    haveanaccounttext:{
        fontSize:15
    },
    logintext:{
        color:"#5100ad",
        marginLeft:20,
        fontSize:15
    }
})
