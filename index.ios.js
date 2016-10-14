/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

// import React, { Component } from 'react';
// import {
//   AppRegistry,
//   StyleSheet,
//   Text,
//   View,
//   Image,
//   ScrollView,
// } from 'react-native';

// class AwesomeProject extends Component {
//   render() {
//     return (
//       <View style={styles.container}>
//         <Text style={styles.welcome}>
//           Welcome to React Native!
//         </Text>
//         <Text style={styles.instructions}>
//           To get started, edit index.ios.js
//         </Text>
//         <Text style={styles.instructions}>
//           Press Cmd+R to reload,{'\n'}
//           Cmd+D or shake for dev menu
//         </Text>
//       </View>
//     );
//   }
// }

// class AwkwardScrollingImageWithText extends Component {
//   render() {
//     return (
//       <ScrollView>
//         <Image 
//           source={{uri: 'https://upload.wikimedia.org/wikipedia/commons/d/de/Bananavarieties.jpg'}}
//           style={{width: 100, height: 600}}
//         />
//         <Text>
//           On iOS, a React Native ScrollView uses a native UIScrollView.
//           On Android, it uses a native ScrollView.

//           On iOS, a React Native Image uses a native UIImageView.
//           On Android, it uses a native ImageView.

//           React Native wraps the fundamental native components, giving you
//           the performance of a native app, plus the clean design of React.
//         </Text>
//       </ScrollView>
//     );
//   }
// }

import React, { Component, PropTypes } from 'react';
import { Navigator, TouchableHighlight, AppRegistry, StyleSheet, View, Text } from 'react-native';

//import MyScene from './app/MyScene';


const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-end',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
    color: 'blue',
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

export default class YoDawgApp extends Component {
  render() {
    return (
      <Navigator
        initialRoute={{ title: 'My Initial Scene', index: 0 }}
        renderScene={(route, navigator) => 
          <MyScene
            title={route.title} 
            onForward={ () => {    
              const nextIndex = route.index + 1;
              navigator.push({
                title: 'Scene ' + nextIndex,
                index: nextIndex,
              });
            }}


            onBack={() => {
              if (route.index > 0) {
                navigator.pop();
              }
            }}
          />
        }
      />
    )
  }
}

class MyScene extends Component {
  static propTypes = {
    title: PropTypes.string.isRequired,
    onForward: PropTypes.func.isRequired,
    onBack: PropTypes.func.isRequired,
  }
  render() {
    return (
      <View style={styles.container}>
        <Text>Current Scene: { this.props.title }</Text>
        <TouchableHighlight onPress={this.props.onForward}>
          <Text>Tap me to load the next scene</Text>
        </TouchableHighlight>
        <TouchableHighlight onPress={this.props.onBack}>
          <Text>Tap me to go back</Text>
        </TouchableHighlight>
      </View>
    )
  }
}

//AppRegistry.registerComponent('YoDawgApp', () => YoDawgApp);


// AppRegistry.registerComponent('AwesomeProject', () => AwesomeProject);
// AppRegistry.registerComponent('AwesomeProject', () => AwkwardScrollingImageWithText);
AppRegistry.registerComponent('AwesomeProject', () => YoDawgApp);



