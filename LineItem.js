

import React, { Component } from 'react';

import {
  Platform,
  StyleSheet,
  Text,
  View,
  TouchableHighlight,
  Image,
  
} from 'react-native';


class LineItem extends Component {
  render() {
		
    return (
			
			<TouchableHighlight onPress={this.props.onPressItem} underlayColor="white">
			<View style={styles.menu}>
				<Image style={{width:50,height:50}} source={this.props.source}/>
				<Text style={styles.label}> {this.props.name}</Text>
				</View>
       </TouchableHighlight>
			
    );
  }
}

const styles = StyleSheet.create({
	menu: {
		height: 100,
	    padding: 5,
	    borderWidth: 1,
	    alignItems: 'center',
	    borderColor: '#DDDDDD'
	},
	label: {
		textAlign: 'center',
		fontSize: 11,
		padding: 5,
	}
});


export default LineItem;