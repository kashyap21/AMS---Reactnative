import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Image,
  TouchableOpacity,
  Alert,
  Button,
} from 'react-native';
import {Actions} from 'react-native-router-flux';
import { RNCamera } from 'react-native-camera';
import { Icon } from 'react-native-elements';
export default class AssetForm extends Component {

	render(){
		return(

			<View style={styles.container}>

         <TextInput style={styles.inputBox}
              underlineColorAndroid='rgba(0,0,0,0)'
              placeholder="Asset Number"
              underlineColorAndroid='rgba(0,0,0,0)'
              placeholderTextColor = "#555"
              selectionColor="#555"
              onSubmitEditing={()=> this.password.focus()}
              />
          <TextInput style={styles.inputBox}
              underlineColorAndroid='rgba(0,0,0,0)'
              placeholder="RFID Number"
              secureTextEntry={true}
              placeholderTextColor = "#555"
              ref={(input) => this.password = input}
              />
            <TextInput style={styles.inputBox}
                  underlineColorAndroid='rgba(0,0,0,0)'
                  placeholder="Serial Number"
                  placeholderTextColor = "#555"
                  selectionColor="#555"
                  keyboardType="email-address"
                  onSubmitEditing={()=> this.password.focus()}
                  />
                  <TextInput style={styles.inputBox}
                      underlineColorAndroid='rgba(0,0,0,0)'
                      placeholder="Asset Name"
                      placeholderTextColor = "#555"
                      selectionColor="#555"
                      keyboardType="email-address"
                      onSubmitEditing={()=> this.password.focus()}
                      />
                      <TextInput style={styles.inputBox}
                          underlineColorAndroid='rgba(0,0,0,0)'
                          placeholder="Make"
                          placeholderTextColor = "#555"
                          selectionColor="#555"
                          keyboardType="email-address"
                          onSubmitEditing={()=> this.password.focus()}
                          />
                          <TextInput style={styles.inputBox}
                              underlineColorAndroid='rgba(0,0,0,0)'
                              placeholder="Model"
                              placeholderTextColor = "#555"
                              selectionColor="#555"
                              keyboardType="email-address"
                              onSubmitEditing={()=> this.password.focus()}
                              />
                              <TextInput style={styles.inputBox}
                                  underlineColorAndroid='rgba(0,0,0,0)'
                                  placeholder="Colour"
                                  placeholderTextColor = "#555"
                                  selectionColor="#555"
                                  keyboardType="email-address"
                                  onSubmitEditing={()=> this.password.focus()}
                                  />

                                  <TextInput style={styles.inputBox}
                                      underlineColorAndroid='rgba(0,0,0,0)'
                                      placeholder="Owner"
                                      placeholderTextColor = "#555"
                                      selectionColor="#555"
                                      keyboardType="email-address"
                                      onSubmitEditing={()=> this.password.focus()}
                                      />

                                      <TextInput style={styles.inputBox}
                                          underlineColorAndroid='rgba(0,0,0,0)'
                                          placeholder="sub Division"
                                          placeholderTextColor = "#555"
                                          selectionColor="#555"
                                          keyboardType="email-address"
                                          onSubmitEditing={()=> this.password.focus()}
                                          />

                                          <TextInput style={styles.inputBox}
                                              underlineColorAndroid='rgba(0,0,0,0)'
                                              placeholder="Start Date"
                                              placeholderTextColor = "#555"
                                              selectionColor="#555"
                                              keyboardType="email-address"
                                              onSubmitEditing={()=> this.password.focus()}
                                              />
                                              <TextInput style={styles.inputBox}
                                                  underlineColorAndroid='rgba(0,0,0,0)'
                                                  placeholder="Asset Type"
                                                  placeholderTextColor = "#555"
                                                  selectionColor="#555"
                                                  keyboardType="email-address"
                                                  onSubmitEditing={()=> this.password.focus()}
                                                  />
                                                  <TextInput style={styles.inputBox}
                                                      underlineColorAndroid='rgba(0,0,0,0)'
                                                      placeholder="Asset Status"
                                                      placeholderTextColor = "#555"
                                                      selectionColor="#555"
                                                      keyboardType="email-address"
                                                      onSubmitEditing={()=> this.password.focus()}
                                                      />
                                                      <TextInput style={styles.inputBox}
                                                          underlineColorAndroid='rgba(0,0,0,0)'
                                                          placeholder="Comments"
                                                          placeholderTextColor = "#555"
                                                          selectionColor="#555"
                                                          keyboardType="email-address"
                                                          onSubmitEditing={()=> this.password.focus()}
                                                          />
                                  <View style={styles.containerInline}>
                                    <Text style={styles.textcssleft}>Location</Text>
                                  <Button
                                      onPress={this.locationJS.bind(this)}
                                      title="Add Location"
                                      value="LOGIN"
                                      raised={true}
                                      theme='dark'

                                      overrides={{backgroundColor: "3fffff"}}/>
                                  </View>

  		</View>
			)
	}

  locationJS(){
    Alert.alert(
'Location Added Sucessfully',
'',
[
  {text: 'OK', onPress: () => console.log('OK Pressed')},
  {text: 'Reset', onPress: () => console.log('Cancel Pressed'), style: 'cancel'},
],
{ cancelable: false }
)
}
  takePicture = async function() {
      if (this.camera) {
        const options = { quality: 0.5, base64: true };
        const data = await this.camera.takePictureAsync(options)
        console.log(data.uri);
      }
    };
  }



const styles = StyleSheet.create({
  containerInline : {
    width:300,
    flexDirection: 'row',
//   justifyContent: 'space-between',
    marginBottom:'2%',
  },container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: 'black'
  },
  preview: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center'
  },
  capture: {
    flex: 0,
    backgroundColor: '#fff',
    borderRadius: 5,
    padding: 15,
    paddingHorizontal: 20,
    alignSelf: 'center',
    margin: 20
  },
  container : {
    flexGrow: 1,
    justifyContent:'center',
    alignItems: 'center',
    color: '#555',
    marginTop:'10%'
  },

  inputBox: {
    width:300,
    height:30,
    //backgroundColor:'#a4d3ee',
    letterSpacing:5,
    borderRadius: 1,
    paddingHorizontal:3,
    fontSize:13,
    fontWeight: 'bold',
    marginVertical: 10,
    marginLeft:0,
    // Temp code by KP started

    borderColor: '#ccc',
    borderWidth:1,
     fontFamily: 'Helvetica',
     borderLeftWidth:0,
     borderRightWidth:0,
     borderTopWidth:0,
     marginBottom:10
    // Temp code by Kp Ended
  },
  button: {
    width:300,
    height:20,
     borderRadius: 25,
      marginVertical: 10,
      paddingVertical: 13,
  },

  buttonText: {
    fontSize:16,
    fontWeight:'500',
    height:20,
    color:'#ffffff',
    textAlign:'center'
  },

  textcssright: {

    letterSpacing:1,
    marginLeft:10,
    borderWidth:1,
    borderColor:'#0099cc',
    borderRadius:3,
    padding:10,
    borderRadius:10,
    backgroundColor: '#aaa'
  },

  textcssleft: {
    justifyContent:'flex-start',
    padding:10
  },
  textheader: {
    flexDirection: 'row',
    letterSpacing:1,
    fontSize:17,
    alignSelf: 'stretch'
  },
  buttonStyle: {
  backgroundColor: "#aaa"
},
});
