import React, { useEffect, useState } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Image,
  FlatList,
  ScrollView,
} from 'react-native';
import OrderProps from './OrderProps';
import PendingProps from './PendingProps';
import ConfirmedProps from './ConfirmedProps';
import DeliveredProps from './DeliveredProps';
import ReturnedProps from './ReturnedProps';

const OrderTab = () => {
  const [activeTab, setActiveTab] = useState('Tab0');
  const [openTabs, setOpenTabs] = useState([]);
  const [showCross, setShowCross] = useState(true);
  const [showNumber, setShowNumber] = useState(true);

  const allTabsData = [
    { id: 0, key: 'Tab0', title: 'Filters' },
    { id: 1, key: 'Tab1', title: 'Pending', component: <PendingProps /> },
    { id: 2, key: 'Tab2', title: 'Confirmed', component: <ConfirmedProps /> },
    { id: 3, key: 'Tab3', title: 'Delivered', component: <DeliveredProps /> },
    { id: 4, key: 'Tab4', title: 'Returned', component: <ReturnedProps /> },
  ];

  const handleTabPress = (index: any) => {
    setActiveTab(index);
    if (index === 'Tab1' && !openTabs.includes('Tab0')) {
      setOpenTabs(['Tab0', index]);
    } else if (index !== 'Tab0') {
      setOpenTabs([index]);
    }
    setShowNumber(index === 'Tab0' || openTabs.length < 5);
  };

  const combinedData = allTabsData
    .filter((tab) => tab.id <= parseInt(activeTab.substring(3)))
    .map((tab) => tab.title);



  const toggleTab = (tabKey: any) => {
    tabKey === 'Tab0' ? setShowNumber(false) : null;
  
    let updatedTabs = [...openTabs];
    const tabIsOpen = updatedTabs.includes(tabKey);
    tabIsOpen
      ? updatedTabs = updatedTabs.filter((key) => key !== tabKey)
      : (tabKey !== 'Tab0' && !updatedTabs.includes('Tab0'))
      ? updatedTabs = ['Tab0', ...updatedTabs, tabKey]
      : updatedTabs.push(tabKey);
  
    const remainingTabs = updatedTabs.filter((key) => key !== 'Tab0');
    remainingTabs.length === 0
      ? (updatedTabs = [], setShowNumber(false))
      : (setActiveTab(tabKey), setShowNumber(tabKey === 'Tab0' || updatedTabs.length < 5));
    
    setOpenTabs(updatedTabs);
  };
  

  useEffect(() => {
    if (openTabs.length === 0 || (openTabs.length === 1 && openTabs.includes('Tab0'))) {
      setActiveTab('Tab0');
    }
  }, [openTabs]);

  const isTabOpen = (tabKey: any) => openTabs.includes(tabKey);
  const isAllTabsOpen = openTabs.length === 5 && openTabs.includes('Tab0');

  const renderTab = ({ item }: any) => (
    <TouchableOpacity
      onPress={() => toggleTab(item.key)}
      style={[
        item.key === 'Tab0' && !isAllTabsOpen && {
          width: isTabOpen('Tab0') ? 108 : 89,
          height: 40,
          borderRadius: 8,
          borderWidth: 1,
          borderColor: isTabOpen('Tab0') ? '#DA5466' : 'black',
          backgroundColor: 'white',
          margin: 10,
          flexDirection: 'row',
        },
        item.key !== 'Tab0' && isTabOpen(item.key) && styles.activeTab,
        item.key === 'Tab1' && isTabOpen(item.key) && styles.pendingTab,
        item.key === 'Tab1'
          ? [
              {
                width: isTabOpen('Tab1') ? 110 : 70,
                height: 40,
                borderRadius: 8,
                borderWidth: 1,
                backgroundColor: 'white',
                margin: 10,
                borderColor: 'white',
                padding: 10,
                paddingLeft: 9,
                shadowColor: '#000',
                shadowOffset: { width: 0, height: 2 },
                shadowOpacity: 0.2,
                shadowRadius: 2,
                elevation: 8,
                marginLeft: 0,
              },
              isTabOpen('Tab1') && styles.activeTab,
            ]
          : null,
        item.key === 'Tab2'
          ? [
              {
                width: isTabOpen('Tab2') ? 110 : 85,
                height: 40,
                borderRadius: 8,
                borderWidth: 1,
                backgroundColor: 'white',
                margin: 10,
                borderColor: 'white',
                padding: 10,
                shadowColor: '#000',
                shadowOffset: { width: 0, height: 2 },
                shadowOpacity: 0.2,
                shadowRadius: 2,
                elevation: 8,
                marginLeft: 0,
              },
              isTabOpen('Tab2') && styles.activeTab,
            ]
          : null,
        item.key === 'Tab3'
          ? [
              {
                width: isTabOpen('Tab3') ? 110 : 80,
                height: 40,
                borderRadius: 8,
                borderWidth: 1,
                backgroundColor: 'white',
                margin: 10,
                borderColor: 'white',
                padding: 10,
                shadowColor: '#000',
                shadowOffset: { width: 0, height: 2 },
                shadowOpacity: 0.2,
                shadowRadius: 2,
                elevation: 8,
                marginLeft: 0,
              },
              isTabOpen('Tab3') && styles.activeTab,
            ]
          : null,
        item.key === 'Tab4'
          ? [
              {
                width: isTabOpen('Tab4') ? 110 : 78,
                height: 40,
                borderRadius: 8,
                borderWidth: 1,
                backgroundColor: 'white',
                margin: 10,
                borderColor: 'white',
                padding: 10,
                shadowColor: '#000',
                shadowOffset: { width: 0, height: 2 },
                shadowOpacity: 0.2,
                shadowRadius: 2,
                elevation: 8,
                marginLeft: 0,
              },
              isTabOpen('Tab4') && styles.activeTab,
            ]
          : null,
      ]}
    >
      {item.key === 'Tab0' && !isAllTabsOpen && (
        <Image
          style={{
            height: 17,
            width: 23,
            position: 'absolute',
            top: 10,
            left: 10,
          }}
          source={require('../assets/quotesImage/Vector.png')}
        />
      )}
<Text
  style={{
    position: 'absolute',
    top: 10,
    left: item.key === 'Tab0' ? 40 : 10, // Adjust left position for Tab 0 only
    color: 
      item.key === 'Tab0' ? 'black' :
      isTabOpen(item.key) ? 'white' : 
      '#3A3B3C',
    fontSize: 12,
    fontWeight: '700',
  }}
>
  {`${item.title} ${
    item.key === 'Tab0' && isTabOpen(item.key)
      ? `(${openTabs.filter((tab) => tab !== 'Tab0').length})`
      : ''
  }`}
</Text>


  
      {item.key !== 'Tab0' && isTabOpen(item.key) && showCross && (
        <TouchableOpacity style={{ position: 'absolute', top: 0, left: 65 }}>
          <Image
            style={{ width: 40, height: 40 }}
            source={require('../assets/pending/cross.png')}
          />
        </TouchableOpacity>
      )}
    </TouchableOpacity>
  );

  return (
    <View style={{ flex: 1 }}>
      <View
        style={{
          backgroundColor: 'white',
          height: 64,
          flexDirection: 'row',
          justifyContent: 'space-around',
          marginBottom: 10,
        }}
      >
        <FlatList
          data={allTabsData}
          keyExtractor={(item) => item.key}
          renderItem={({ item }) => renderTab({ item })}
          horizontal
          showsHorizontalScrollIndicator={false}
        />
      </View>

      <ScrollView showsVerticalScrollIndicator>
        {allTabsData.map(
          (tabData) =>
            isTabOpen(tabData.key) && (
              <View key={tabData.key}>{tabData.component}</View>
            ),
        )}
      </ScrollView>

      {activeTab === 'Tab0' && !isAllTabsOpen && <OrderProps />}
    </View>
  );
};

const styles = StyleSheet.create({
  pendingTab: {},
  activeTab: {
    backgroundColor: '#DA5466',
    borderColor: '#DA5466',
    fontWeight: '900',
    alignSelf: 'center',
    textAlign: 'center',
    color:'black'
  },
});

export default OrderTab;
