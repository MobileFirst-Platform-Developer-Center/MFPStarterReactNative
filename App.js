/**
 * Copyright 2018 IBM Corp.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, Button, flex} from 'react-native';
import {WLAuthorizationManager, WLResourceRequest } from 'react-native-ibm-mobilefirst'

export default class App extends Component {
  constructor(props){
    super(props);
  }

  pingMFP() {
    WLAuthorizationManager.obtainAccessToken("").then(
      (response) => {
       console.log('-->  pingMFP(): Success ', response)
       alert('Connected to MobileFirst Server')
      }, (error) => {
       console.log('-->  pingMFP():  ERROR ', error.responseText)
       alert("Failed to connect to MobileFirst Server")
      })
  }
  render() {
    return (
      <View style={styles.container} >
        <Text style={styles.welcome}>Hello MobileFirst</Text>
        <View style={styles.buttonContainer}>
          <Button title="Ping MFP server" color="white" onPress={this.pingMFP} accessibilityLabel="Press this to ping MFP Server"></Button>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent:'space-between',
    alignItems:"center",
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 35,
    textAlign: 'center',
    marginTop: 80,
  },
  buttonContainer:{
    display: flex,
    marginBottom:100,
    backgroundColor: '#325c80',
    height: 50,
    width: 300,
    alignItems: 'center'
  }
});
