import React, {useState} from 'react';
import {
  View,
  Text,
  SafeAreaView,
  TouchableOpacity,
  Image,

} from 'react-native';

import OrderTab from '../props/OrderTab';


const Orders = ({navigation}: any) => {
  const [activeTab, setActiveTab] = useState('Tab1');

  return (
    <SafeAreaView style={{flex: 1, backgroundColor:'white'}}>
      <View
        style={{backgroundColor: 'white', height: 50, flexDirection: 'row',  marginTop: 10,}}>
        <TouchableOpacity onPress={() => navigation.navigate('Home')} style={{position: 'absolute', top: 10, left: 20}}>
          <Image
            style={{width: 25, height: 25}}
            source={require('../assets/quotesImage/backpress.png')}
          />
        </TouchableOpacity>

        <Text
          style={{
            fontSize: 20,
            color: '#424242',
            position: 'absolute',
            top: 10,
            left: 140,
            fontWeight: '700',
          }}>
          Orders
        </Text>

        <TouchableOpacity style={{position: 'absolute', right: 70, top: 0}}>
          <Image
            style={{width: 40, height: 40}}
            source={require('../assets/quotesImage/notification.png')}
          />
        </TouchableOpacity>

        <TouchableOpacity style={{position: 'absolute', right: 20, top: 5}}>
          <Image
            style={{width: 38, height: 35.48}}
            source={require('../assets/orders/Cart.png')}
          />
        </TouchableOpacity>
      </View>

      <OrderTab />
    </SafeAreaView>
  );
};

export default Orders;
