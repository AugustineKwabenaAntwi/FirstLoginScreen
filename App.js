import { StatusBar } from 'expo-status-bar';
import React from 'react';
import LoginScreen from './LoginScreen';
import { StyleSheet, Text, View ,TextInput,TouchableOpacity, ScrollView,FlatList} from 'react-native';
class App extends React.Component{
  constructor(props){
    super(props)
    this.state = {
     email:"good@gmail.com",
     password:" dd",
     names:["ama","kofi","sam","bob","james",
     "ama","kofi","sam","bob","james",
     "ama","kofi","sam","bob","james",
     "ama","kofi","sam","bob","james",
     "ama","kofi","sam","bob","james",
     "ama","kofi","sam","bob","james",
     "ama","kofi","sam","bob","james",
     "ama","kofi","sam","bob","james",
     "ama","kofi","sam","bob","james",
     "ama","kofi","sam","bob","james",
     "ama","kofi","sam","bob","james",
     "ama","kofi","sam","bob","james",
     "ama","kofi","sam","bob","james",
     "ama","kofi","sam","bob","james",
     "ama","kofi","sam","bob","james",
     "ama","kofi","sam","bob","james"]
    }
  }
  render(){
    return (
      <View style={styles.container}>
        <LoginScreen/>













        {/* <TextInput style={styles.input}
         placeholder="email"
         autoCapitalize="none"
         autoCorrect={false}
         //secureTextEntry ={true}
         value = {this.state.email}
         onChangeText={(email)=>{
           this.setState({email:email})
         }}
        />

        <TextInput style={styles.input}
         placeholder="password"
         autoCapitalize="none"
         autoCorrect={false}
         secureTextEntry ={true}
         value = {this.state.password}
         onChangeText={(key)=>{
           this.setState({password:key})
         }}
        />

        <TouchableOpacity  style ={styles.buttonCont}>
          <Text style={styles.buttonTxt}>Login</Text>
        </TouchableOpacity> */}
      </View>
    );
  }
}


const styles = StyleSheet.create({
  container: {
   marginTop:100,
  },
  input:{
    backgroundColor:'green',
    height:60,
    marginLeft:20,
  },
  buttonCont:{
    height:40,
    marginHorizontal:20,
    marginVertical:20,
    backgroundColor:"blue",
    justifyContent:"center",
    alignItems: "center",
    borderRadius:5
  },
  buttonTxt:{
    color:"white",
    fontSize:18,
    fontWeight:"bold"
  }
});

export default App;