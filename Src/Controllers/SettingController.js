import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  StatusBar,
  TextInput,
  Image,

} from 'react-native';


import { Actions } from 'react-native-router-flux';
export default class SettingController extends Component {



  render() {

    return (
      <View style={styles.assetcontainer}>
        <View style={styles.container}>
            <Text style={styles.headerStyle}>Settings</Text>
    		</View>

        <View style={styles.inlineContiner}>
          <View style = {styles.imageStyle}>
          <Image style={{ height: 100, width: 100, borderRadius:50,marginLeft:20, paddingEnd:10}}
             source={require('../Images/ram.png')} />
          </View>
          <View style = {styles.textRight}>
            <View style = {styles.UsernameStyle}>
              <Text style = {styles.UsernameStyleText}> Kashyap Patel </Text>
            </View>
            <View style = {styles.logoutButton}>
              <Text style = {styles.logoutButtonText}>Logout</Text>
            </View>
          </View>
        </View>

        <View style ={styles.linespace}></View>

        <View style = {styles.inlineContiner}>
          <View style = {styles.LanguageMenu}>
              <Text style = {styles.LanguageMenuText}> Languages</Text>
          </View>
          <View styles={styles.LanguageMenuList}>
              <Text style = {styles.LanguageMenuListText}>English</Text>
              <Text style = {styles.LanguageMenuListText}>French</Text>
              <Text style = {styles.LanguageMenuListText}>German</Text>
              <Text style = {styles.LanguageMenuListText}>Spanish</Text>
          </View>
        </View>
        <View style = {styles.linespace}></View>

        <View style = {styles.inlineContiner}>
            <View style = {styles.OfflineWorking}>
              <Text style = {styles.LanguageMenuList}>Offline Working</Text>
            </View>
        </View>
      </View>
  			)
  	}
  }

  const styles = StyleSheet.create({
    assetcontainer : {
      flexGrow: 1,
      backgroundColor:'#ffffff',
      //justifyContent:'flex-end',
      alignItems: 'center',
    },
    inlineContiner: {
      backgroundColor:"#9966CC",
      height:200,
      width:'100%',
      paddingTop:10,
      paddingEnd:30,
      flexDirection: 'row',
      fontWeight:'bold',
    },
    container: {
      width:'100%',
      height:80,
      backgroundColor:'#66CCFF',
    },
    headerStyle:{
      paddingTop:30,
      marginTop:10,
      marginLeft:30,
      fontSize:23,
      color:'#fff'
    },
    textRight:{
      marginTop:20,
      marginLeft:30,
    },
    UsernameStyle:{

    },
    UsernameStyleText:{
      fontSize:23,
      color:'#FFF',
    },
    logoutButtonText:{
      fontSize:19,
      marginTop:4,
      marginLeft:4,
      color:'#66CCFF',
    },
    linespace:{
      height:3,
      width:'100%',
      backgroundColor:"#66CCFF"
    },
    LanguageMenu:{
      marginLeft:20,
      marginTop:10,
      marginRight:30,
    },
    LanguageMenuText:{
      fontSize:23,
      color:'#FFF',
    },
    LanguageMenuList:{
      marginLeft:30,
      marginTop:30,
    },
    LanguageMenuListText:{
      marginTop:14,
      color:'#66CCFF',
      fontSize:16,
    },
  });
