import React, { Component } from 'react'
import {View,ScrollView,Text,TextInput,TouchableOpacity,StyleSheet} from 'react-native'

export default class LoginScreen extends Component {
    render() {
        return (
            <View style = {styles.container }>
                <View style = {styles.logintxtcont}>
                    <Text style = {styles.logintxt}>Log in</Text>
                </View>


                <View>
                    <TextInput style={styles.input} placeholderTextColor="#aaaaa" placeholder ="Username"></TextInput>
                    <TextInput  style={styles.input} secureTextEntry={true} placeholderTextColor="#aaaaa" placeholder ="Password"></TextInput>
                    <Text style={styles.forgotpassword}>Forgot password?</Text>
                </View>

                <View>
                    <TouchableOpacity style = {styles.buttoncontainer}>
                        <Text style= {styles.buttoncontainertext}>Log in</Text>
                    </TouchableOpacity>

                    <View style = {styles.noaccountcont}>
                        <Text style = {styles.noaacounttext}>Don't have an account?</Text>
                        <Text style = {styles.signuptext}>Sign up</Text>
                    </View>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container:{
        marginHorizontal:50,
    },
    logintxt:{
        fontSize:50,
        color:"#5100ad",
    },
    logintxtcont:{
        marginBottom:30
    },
    input:{
        borderBottomWidth:3,
        borderBottomColor:"#5100ad",
        fontSize:20,
        height:50,
        marginTop:20
    },
    forgotpassword:{
        alignSelf:"flex-end",
        marginVertical:4,
        color:"#0853a8"
    },
    buttoncontainer:{
        height:50,
        backgroundColor:"#5100ad",
        justifyContent:"center",
        alignItems:'center',
        borderRadius:10,
        marginVertical:50,

    },
    buttoncontainertext:{
        color:"white",
        fontSize:25
    },
    noaccountcont:{
        flexDirection:'row',
        justifyContent:"center"
    },
    noaacounttext:{
        marginRight:10,
        fontSize:16
    },
    signuptext:{
        fontSize:16,
        color:"#5100ad"
    }
})