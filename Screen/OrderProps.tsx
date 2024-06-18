import React from 'react';
import {
  View,
  Text,
  Image,
  FlatList,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';

import {Grayscale} from 'react-native-color-matrix-image-filters';

const DATA2 = [
  {
    id: '1',
    image: require('../assets/orders/ca.png'),
    number: 'CA12345',
    pending: 'Pending',
    delivering: '',
    name: 'Carmelo Abela Marketing',
    product: '10 products | €200.16 ',
    product2: '',
    image2: require('../assets/orders/wrapper.png'),
    product3: ' ',
    done: '',
    cancelled: '',
    returned: '',
  },
  {
    id: '2',
    image: require('../assets/orders/ca.png'),
    number: 'CA12345',
    delivering: 'Delivering',
    pending: '',
    name: 'Carmelo Abela Marketing',
    product: '',
    product2: '10 products | €200.16 | ETD 12/12/23 ',
    image2: require('../assets/orders/wrapper.png'),
    product3: '',
    done: '',
    cancelled: '',
    returned: '',
  },
  {
    id: '3',
    image: require('../assets/orders/ca.png'),
    number: 'CA12345',
    delivering: '',
    pending: '',
    name: 'Carmelo Abela Marketing',
    product: '',
    product2: '',
    image2: require('../assets/orders/wrapper.png'),
    product3: '10 products | €200.16 | 12/12/23 ',
    done: 'Done',
    cancelled: '',
    returned: '',
  },
  {
    id: '4',
    image: require('../assets/orders/ca.png'),
    number: 'CA12345',
    delivering: '',
    pending: '',
    name: 'Carmelo Abela Marketing',
    product: '',
    product2: '',
    image2: require('../assets/orders/wrapper.png'),
    product3: '10 products | €200.16 | 12/12/23 ',
    done: '',
    cancelled: 'Cancelled',
    returned: '',
  },
  {
    id: '5',
    image: require('../assets/orders/ca.png'),
    number: 'CA12345',
    delivering: '',
    pending: '',
    name: 'Carmelo Abela Marketing',
    product: '',
    product2: '',
    image2: require('../assets/orders/wrapper.png'),
    product3: '10 products | €200.16 | 12/12/23 ',
    done: '',
    cancelled: '',
    returned: 'Returned',
  },
];

const OrderProps = () => {

  const navigation = useNavigation();
  const renderItem = ({item}: any) => {
    return (
   
        <View style={{ flex: 1 }}>

          
      <View
        style={{
          height: 140,
          margin: 1,
          backgroundColor: 'white',
          borderRadius: 1,
          padding: 10,
          shadowColor: '#000',
          shadowOffset: { width: 0, height: 2 },
          shadowOpacity: 0.2,
          shadowRadius: 2,
          elevation: 1,
        }}>
        <Image
          style={{
            width: 80,
            height: 80,
            position: 'absolute',
            top: 30,
            left: 0,
          }}
          source={item.image}
        />
    
        <View
          style={{
            width: 253,
            height: 90,
            backgroundColor: 'white',
            position: 'absolute',
            left: 80,
            top: 25,
          }}>

          
    
          {/* Common container for status indicators */}
          <View style={{ flexDirection: 'row', flexWrap: 'wrap' }}>

          <View style={{width:80, height:32, borderRadius:8, borderWidth:1, borderColor:'#E5E7EB'}}>
              <Text style={{fontSize:13, color:'#4B5563',position:'absolute', top:5, left:10, fontWeight:'700'}}>{item.number}</Text>
            </View>

            {/* Pending */}
            {item.pending != '' && (
      <View>
                <View
                style={{
                  borderRadius: 8,
                  height: 32,
                  width: 92,
                  borderWidth: 1,
                  borderColor: '#E5E7EB',
                  left:10,
                }}>
                <View
                  style={{
                    width: 6,
                    height: 6,
                    backgroundColor: '#F97316',
                    borderRadius: 10,
                    position: 'absolute',
                    top: 12,
                    left: 10,
                  }}
                />
                <Text
                  style={{
                    fontSize: 13,
                    color: '#4B5563',
                    textAlign: 'center',
                    top: 5,
                    left: 5,
                    fontWeight:'700'
                  }}>
                  {item.pending}
                </Text>
                 </View>

                 <TouchableOpacity 
             onPress={() => navigation.navigate('OrderDetailDone')} style={{width:20, height:20, position:'absolute', top:0, marginLeft:180}}>
             <Image style={{ position: 'absolute', top: 35, width: 25, height: 25 }}
                  source={item.image2}/>
             </TouchableOpacity>

      </View>
         
              

            )}

            {/* Product */}
            {item.product != '' && (
              <View style={{position:'absolute', top:70,}}>
                <Text style={{fontSize:12, color:'#9E9E9E', fontWeight:'500'}}>{item.product}</Text>
              </View>
            )}
    
            {/* Delivering */}
            {item.delivering != '' && (
              <View
                style={{
                  borderRadius: 8,
                  height: 32,
                  width: 104,
                  borderWidth: 1,
                  borderColor: '#E5E7EB',
                  left:10,
                }}>
                <View
                  style={{
                    width: 6,
                    height: 6,
                    backgroundColor: '#3B82F6',
                    borderRadius: 10,
                    position: 'absolute',
                    top: 12,
                    left: 10,
                  }}
                />
                <Text
                  style={{
                    fontSize: 13,
                    color: '#4B5563',
                    textAlign: 'center',
                    top: 5,
                    left: 5,
                    fontWeight:'700'
                  }}>
                  {item.delivering}
                </Text>

                <TouchableOpacity 
             onPress={() => navigation.navigate('OrderDetailDone')} style={{width:20, height:20, position:'absolute', top:0, marginLeft:170}}>
             <Image style={{ position: 'absolute', top: 35, width: 25, height: 25 }}
                  source={item.image2}/>
             </TouchableOpacity>
              </View>
            )}

            {/* Product2 */}
            {item.product2 != '' && (
              <View style={{position:'absolute', top:70}}>
                <Text style={{color:'#9E9E9E', fontSize:13}}>{item.product2}</Text>
              </View>
            )}
    
            {/* Done */}
            {item.done != '' && (
             <View>
               <View
                style={{
                  borderRadius: 8,
                  height: 32,
                  width: 72,
                  borderWidth: 1,
                  borderColor: '#E5E7EB',
                  left:10,
                }}>
                <View
                  style={{
                    width: 6,
                    height: 6,
                    backgroundColor: '#10B981',
                    position: 'absolute',
                    top: 12,
                    left: 10,
                    borderRadius: 5,
                  }}
                />
                <Text
                  style={{
                    color: '#4B5563',
                    fontSize: 13,
                    textAlign: 'center',
                    top: 5,
                    left: 5,
                    fontWeight:'700'
                  }}>
                  {item.done}
                </Text>
              </View>

             <TouchableOpacity 
             onPress={() => navigation.navigate('OrderDetailDone')} style={{width:20, height:20, position:'absolute', top:0, marginLeft:182}}>
             <Image style={{ position: 'absolute', top: 35, width: 25, height: 25 }}
                  source={item.image2}/>
             </TouchableOpacity>
             </View>
            )}

            {/* product3 */}
            {item.product3 != '' && (
              <View style={{position:'absolute', top:70}}>
                <Text style={{color:'#9E9E9E', fontSize:12 }}>{item.product3}</Text>
              </View>
            )}
    
            {/* Cancelled */}
            {item.cancelled != '' && (
              <View
                style={{
                  borderRadius: 8,
                  height: 32,
                  width: 105,
                  borderWidth: 1,
                  borderColor: '#E5E7EB',
                  left:10,
                
                }}>
                <View
                  style={{
                    backgroundColor: '#DA5466',
                    width: 6,
                    height: 6,
                    borderRadius: 5,
                    position: 'absolute',
                    top: 12,
                    left: 10,
                  }}
                />
                <Text
                  style={{
                    color: '#4B5563',
                    fontSize: 13,
                    textAlign: 'center',
                    position: 'absolute',
                    top: 5,
                    left: 25,
                    fontWeight:'700'
                  }}>
                  {item.cancelled}
                </Text>
                <TouchableOpacity 
             onPress={() => navigation.navigate('OrderDetailDone')} style={{width:20, height:20, position:'absolute', top:0, marginLeft:170}}>
             <Image style={{ position: 'absolute', top: 35, width: 25, height: 25 }}
                  source={item.image2}/>
             </TouchableOpacity>
                
              </View>
              

              
            )}
    
            {/* Returned */}
            {item.returned != '' && (
              <View
                style={{
                  borderRadius: 8,
                  height: 32,
                  width: 98,
                  borderWidth: 1,
                  borderColor: '#E5E7EB',
                  left:10,
                }}>
                <View
                  style={{
                    width: 6,
                    height: 6,
                    backgroundColor: '#DA5466',
                    borderRadius: 5,
                    position: 'absolute',
                    top: 12,
                    left: 10,
                  }}
                />
                <Text
                  style={{
                    color: '#4B5563',
                    fontSize: 13,
                    position: 'absolute',
                    top: 6,
                    left: 25,
                    fontWeight:'700'
                  }}>
                  {item.returned}
                </Text>

                <TouchableOpacity 
             onPress={() => navigation.navigate('OrderDetailDone')} style={{width:20, height:20, position:'absolute', top:0, marginLeft:170}}>
             <Image style={{ position: 'absolute', top: 35, width: 25, height: 25 }}
                  source={item.image2}/>
             </TouchableOpacity>
              </View>
            )}




          </View>
    
          <Text
            style={{
              fontSize: 16,
              color: '#212121',
              position: 'absolute',
              top: 40,
              left: 0,
              fontWeight:'700',
              fontFamily:'Poppins'
            }}>
            {item.name}
          </Text>
    
          {/* Rest of your content */}
        </View>
    
      
      </View>

      
    </View>
    
   
    );
  };

  return (
    <FlatList
      data={DATA2}
      renderItem={renderItem}
      keyExtractor={item => item.id}
    />
  );
};

export default OrderProps;
