import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  ScrollView,
  TouchableOpacity,
  FlatList
} from 'react-native';
import SearchBar from '../SearchBar';
//import * as firebase from 'firebase';
import Logo from '../Logo'
import database from '@react-native-firebase/database';


const SubCategoryView = ({route, navigation}) => {
  const [data, setData] = useState({});

  useEffect(async () => {
    console.log('HERE I AM');
    console.log('This is the value of the route ', route?.params?.subCategory);
    database()
      .ref(`CMSO/Product Categories/${route?.params?.subCategory}`)
      .on('value', snapshot => {
        setData(snapshot.val());
        // console.log('This is my snapshot value ', Object.keys(snapshot.val()));
      });
  }, []);
    const renderItem =({item, index})=>{
      console.log('this is render item ',data)
      console.log('this is key', item)
      return (
            <View
              style={{
                flexDirection: 'row',
                flexWrap: 'wrap',
                paddingHorizontal:8,
              }}>
              <TouchableOpacity
                onPress={() => {
                  navigation.navigate('SingleProduct', {
                    subCategory: route?.params?.subCategory + '/' + item + '/',
                  });
                }}>
                <View key={index} style={styles.box}>
                  <Image
                    style={styles.Images}
                    source={{uri: data[item].Image}}
                  />
                  <View>
                    <Text>{data[item].Name}</Text>
                  </View>
                  <View style={styles.inner}>
                    <Text> Price {data[item].Price}</Text>
                  </View>
                </View>
              </TouchableOpacity>
              </View>
       )
     }
  return (
    <View style={{flex: 1, backgroundColor: 'white'}}>
      <Logo />

      <View style={styles.container}>
        {data !== null &&
        <FlatList
          keyExtractor={(item)=>item}
          numColumns={2}
          data ={ Object.keys(data)}
          renderItem={renderItem}
        />
          // Object.keys(data).map((key, index) => {
          //   return (
          //     <View
          //       style={{
          //         flexDirection: 'row',
          //         flexWrap: 'wrap',
          //         paddingHorizontal:8,
          //       }}>
          //       <TouchableOpacity
          //         onPress={() => {
          //           navigation.navigate('SingleProduct', {
          //             subCategory: route?.params?.subCategory + '/' + key + '/',
          //           });
          //         }}>
          //         <View key={index} style={styles.box}>
          //           <Image
          //             style={styles.Images}
          //             source={{uri: data[key].Image}}
          //           />
          //           <View>
          //             <Text>{data[key].Name}</Text>
          //           </View>
          //           <View style={styles.inner}>
          //             <Text> Price {data[key].Price}</Text>
          //           </View>
          //         </View>
          //       </TouchableOpacity>

          //       <TouchableOpacity
          //         onPress={() => {
          //           navigation.navigate('SingleProduct', {
          //             subCategory: route?.params?.subCategory + '/' + key + '/',
          //           });
          //         }}>
          //         <View key={index} style={styles.box}>
          //           <Image
          //             style={styles.Images}
          //             source={{uri: data[key].Image}}
          //           />
          //           <View>
          //             <Text>{data[key].Name}</Text>
          //           </View>
          //           <View style={styles.inner}>
          //             <Text> Price {data[key].Price}</Text>
          //           </View>
          //         </View>
          //       </TouchableOpacity>
          //     </View>
          //  );
          // })
           }
      </View>
    </View>
  );
};

export default SubCategoryView;

const styles = StyleSheet.create({
  container: {
    //width: '100%',
    //height: '85%',
    padding: 5,
    //flexWrap: 'wrap',
    //flexDirection:'row',
    flex: 1,
    borderColor:'orange',

  },

  box: {
    //width: '50%',
    height: 200,
    padding: 6,
    backgroundColor: 'white',
    alignItems: 'center',
    borderColor: 'black',
    flex: 1,
    margin: 2,
    borderWidth:0.5
  },

  inner: {
    justifyContent: 'center',
    backgroundColor: '#1e90ff',
    height: 25,
    width: 162,
    position: 'absolute',
    bottom: 0,
    

  },

  Images: {
    width: 150,
    height: 150,
    //resizeMode:'stretch'
  },
});
