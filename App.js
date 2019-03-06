/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  ScrollView,
  FlatList,
} from 'react-native';

import LineItem from './LineItem' ;
import ProductData from './ProductData'
import ProductItem from './ProductItem';


export default class App extends Component {
  constructor(props) {
    super(props);
  
    this.state = {data:[],productline:'Classic Cars'};
  }

  componentDidMount(){
    ProductData.fetchProducts().then((products) => {
      this.setState({data:products} ) 
    });
  }

  changeProducts=({item})=>{
    return(
      <View>
        <ProductItem data={item}/>
        </View>
    )
    
    
    
  }

  _onPressItem = (productline) => {
    this.setState({productline: productline}) ;
    
  }
  
  render() {
    const result = this.state.data.filter(item=> item.productline == this.state.productline);
    return (
      <View style={styles.container}>
        <View style={styles.productline}>
        <ScrollView>
          <LineItem name="Classic Cars" onPressItem={() => this._onPressItem("Classic Cars")} source={require("./icon/classics.png")} />
          <LineItem name="Motorcycles" onPressItem={() => this._onPressItem("Motorcycles")} source={require("./icon/bikes.png")} />
          <LineItem name="Planes" onPressItem={() => this._onPressItem("Planes")} source={require("./icon/planes.png")} />
          <LineItem name="Ships" onPressItem={() => this._onPressItem("Ships")} source={require("./icon/ships.png")} />
          <LineItem name="Trains" onPressItem={() => this._onPressItem("Trains")} source={require("./icon/trains.png")} />
          <LineItem name="Trucks and Buses" onPressItem={() => this._onPressItem("Trucks and Buses")} source={require("./icon/trucks.png")} />
          <LineItem name="Vintage Cars" onPressItem={() => this._onPressItem("Vintage Cars")} source={require("./icon/vintages.png")} />
        </ScrollView>
        </View>
        <View style={styles.product}>
          <FlatList 
          data={result}
          renderItem={this.changeProducts}
        keyExtractor={(item, index) => item.productcode}
          />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'stretch',
    backgroundColor: '#F5FCFF',
    paddingTop: 20,
  },
  productline: {
    flex: 2,
  },
  product: {
    flex: 5,
  },
});
