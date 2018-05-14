import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  StatusBar,
  TextInput,
  ScrollView,
  TouchableOpacity,
  Image,


} from 'react-native';
import Routes from '../Routes';
import AssetForm from '../View/AssetForm';
import { Actions } from 'react-native-router-flux';
var ImagePicker = require('react-native-image-picker');


var options = {
  title: 'Select Avatar',
  customButtons: [
    {name: 'fb', title: 'Choose Photo from Facebook'},
  ],
  storageOptions: {
    skipBackup: true,
    path: 'images'
  }
};
export default class AddAsset extends Component {

  constructor(props){
    super(props)
    this.state = {
      avatarSource: null
    }
    }
  render() {
    let img = this.state.avatarSource == null? null:
    <Image
    source={this.state.avatarSource}
    style={{height: 200, width: 200}}
    />

    return (

      <ScrollView>
      <AssetForm/>

      <View style = {styles.container}>

     <View style={styles.containerInline}>
     <Text style={styles.textcssleft}>Add Photo</Text>
     <TouchableOpacity style={styles.signupButton} onPress={this.show.bind(this)}>
       <Text style={styles.textcssright}>Add</Text>
     </TouchableOpacity>
    {img}
     </View>
     </View>

      </ScrollView>


  			)
  	}
    show(){
      pick(source => this.setState({avatarSource: source}))

}
  }
  let pick = (cb) => {
    ImagePicker.showImagePicker(options, (response) => {
  console.log('Response = ', response);

  if (response.didCancel) {
    console.log('User cancelled image picker');
  }
  else if (response.error) {
    console.log('ImagePicker Error: ', response.error);
  }
  else if (response.customButton) {
    console.log('User tapped custom button: ', response.customButton);
  }
  else {

  let source = { uri: response.uri };
    // You can also display the image using data:
  cb(source);


  }
});
  }

  const styles = StyleSheet.create({
    container : {
  //    backgroundColor: '#ffffff',
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
      flexDirection: 'column'
    },
    containerInline : {
      width:300,
      flexDirection: 'row',
  //   justifyContent: 'space-between',
      marginBottom:'2%',
    },

    button: {
      width:300,
      backgroundColor:'#1c313a',
       borderRadius: 25,
        marginVertical: 10,
        paddingVertical: 13
    },
    buttonText: {
      fontSize:16,
      fontWeight:'500',
      color:'#000000',
      textAlign:'center'
    },
    textcssleft: {
      justifyContent:'flex-start',
      padding:10
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


  });
