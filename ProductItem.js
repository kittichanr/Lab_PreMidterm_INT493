import React, { Component } from 'react';

import {
  StyleSheet,
  View,
  Image,
  Text,
  ScrollView
} from 'react-native';

import ProductData from './ProductData'
class ProductItem extends Component {

  

  render() {
    
    const{productcode,productname,productscale,productline} = this.props.data;
    const image = ProductData.getImageUrl()+`${productline.toLowerCase()}`+'/'+`${productcode}`+'.jpg'
    return (
      
      <View style={styles.container}>
      <ScrollView horizontal>
      <View style={{flexDirection:'column'}}>
      <Image style={styles.picture} source={{uri:image}}/>
      <Text style={styles.prodcode}>{productcode}</Text>
      </View>
      <View  style={{flexDirection:'column'}}>
      <Text style={styles.label}>{productname}</Text>
      <Text style={styles.label}>{productscale}</Text>
      </View>
      </ScrollView>
      </View>
      
    );
  }
}

const styles = StyleSheet.create({
	container: {
      flexDirection: 'row',
      alignItems: 'center',
      padding: 5,
      borderWidth: 1,
      borderColor: '#DDDDDD'
    },
    textcontainer:{
      	flex: 1,
      	alignItems: 'flex-start',
      	padding: 5,
    },
	picture:{
	    height: 100,
	    width: 100,
	    resizeMode: 'contain'
	},
	prodcode: {
		fontSize: 11,
		textAlign: 'center',
	},
	label: {
    	fontSize: 16,
    	flexWrap: 'wrap',
  	},
});


export default ProductItem;