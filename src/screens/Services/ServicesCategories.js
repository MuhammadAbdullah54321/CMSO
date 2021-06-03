import React, {Component} from 'react';
import {
  Image,
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  Alert,
} from 'react-native';
//import { Searchbar } from 'react-native-paper';
import SearchBar from '../SearchBar';
import SwiperImages from '../SwiperImages';
import ServiceCategoryDetails from '../Services/ServiceCategoryDetails';
import Logo from '../Logo'

const ServiceCategories = ({navigation}) => {
  return (
    <ScrollView style={styles.container}>
      <View style={{backgroundColor:'#322514'}}>
        <Logo />
        <SwiperImages />

        <Text
          style={{
            alignSelf: 'center',
            fontSize: 18,
            fontWeight: 'bold',
            color: 'white',
            marginTop: 5,
            marginBottom: 5,
          }}>
          SERVICES CATEGORIES
        </Text>
        <TouchableOpacity onPress={() => {navigation.navigate('ServiceCategoryDetails', {subCategory: 'Developers'})}}>
          <View style={styles.cardsWrapper}>
            <View style={styles.card}>
              <View style={styles.cardImgWrapper}>
                <Image
                  source={require('../../assets/SC1.jpg')}
                  resizeMode="cover"
                  style={styles.cardImg}
                />
              </View>
              <View style={styles.cardInfo}>
                <Text style={styles.cardTitle}>Developers</Text>
                
              </View>
            </View>
          </View>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => {navigation.navigate('ServiceCategoryDetails', {subCategory: 'Builders and Contractors'})}}>
          <View style={styles.cardsWrapper}>
            <View style={styles.card}>
              <View style={styles.cardImgWrapper}>
                <Image
                  source={require('../../assets/SC2.jpg')}
                  resizeMode="cover"
                  style={styles.cardImg}
                />
              </View>
              <View style={styles.cardInfo}>
                <Text style={styles.cardTitle}>Builder and Contractor</Text>
                
              </View>
            </View>
          </View>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => {navigation.navigate('ServiceCategoryDetails', {subCategory: 'Consultants'})}}>
          <View style={styles.cardsWrapper}>
            <View style={styles.card}>
              <View style={styles.cardImgWrapper}>
                <Image
                  source={require('../../assets/SC3.jpg')}
                  resizeMode="cover"
                  style={styles.cardImg}
                />
              </View>
              <View style={styles.cardInfo}>
                <Text style={styles.cardTitle}>
                  Consultants, Architect and Interior Designer
                </Text>
                
              </View>
            </View>
          </View>
        </TouchableOpacity>

       
        <TouchableOpacity onPress={() => {navigation.navigate('ServiceCategoryDetails', {subCategory: 'Plumber'})}}>
          <View style={styles.cardsWrapper}>
            <View style={styles.card}>
              <View style={styles.cardImgWrapper}>
                <Image
                  source={require('../../assets/plumber.jpg')}
                  resizeMode="cover"
                  style={styles.cardImg}
                />
              </View>
              <View style={styles.cardInfo}>
                <Text style={styles.cardTitle}>Plumber</Text>
                
              </View>
            </View>
          </View>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => {navigation.navigate('ServiceCategoryDetails', {subCategory: 'Electrician'})}}>
          <View style={styles.cardsWrapper}>
            <View style={styles.card}>
              <View style={styles.cardImgWrapper}>
                <Image
                  source={require('../../assets/electrician.jpg')}
                  resizeMode="cover"
                  style={styles.cardImg}
                />
              </View>
              <View style={styles.cardInfo}>
                <Text style={styles.cardTitle}>Electrician</Text>
                
              </View>
            </View>
          </View>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => {navigation.navigate('ServiceCategoryDetails', {subCategory: 'Carpenter'})}}>
          <View style={styles.cardsWrapper}>
            <View style={styles.card}>
              <View style={styles.cardImgWrapper}>
                <Image
                  source={require('../../assets/carpenter.jpg')}
                  resizeMode="cover"
                  style={styles.cardImg}
                />
              </View>
              <View style={styles.cardInfo}>
                <Text style={styles.cardTitle}>Carpenter</Text>
                
              </View>
            </View>
          </View>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => {navigation.navigate('ServiceCategoryDetails', {subCategory: 'Painter'})}}>
          <View style={styles.cardsWrapper}>
            <View style={styles.card}>
              <View style={styles.cardImgWrapper}>
                <Image
                  source={require('../../assets/painter.png')}
                  resizeMode="cover"
                  style={styles.cardImg}
                />
              </View>
              <View style={styles.cardInfo}>
                <Text style={styles.cardTitle}>Painter</Text>
                
              </View>
            </View>
          </View>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => {navigation.navigate('ServiceCategoryDetails', {subCategory: 'Gardener'})}}>
          <View style={styles.cardsWrapper}>
            <View style={styles.card}>
              <View style={styles.cardImgWrapper}>
                <Image
                  source={require('../../assets/gardener.jpg')}
                  resizeMode="cover"
                  style={styles.cardImg}
                />
              </View>
              <View style={styles.cardInfo}>
                <Text style={styles.cardTitle}>Gardener</Text>
                
              </View>
            </View>
          </View>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => {navigation.navigate('ServiceCategoryDetails', {subCategory: 'Labour'})}}>
          <View style={styles.cardsWrapper}>
            <View style={styles.card}>
              <View style={styles.cardImgWrapper}>
                <Image
                  source={require('../../assets/labour.jpg')}
                  resizeMode="cover"
                  style={styles.cardImg}
                />
              </View>
              <View style={styles.cardInfo}>
                <Text style={styles.cardTitle}>Labour</Text>
                
              </View>
            </View>
          </View>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

export default ServiceCategories;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  cardsWrapper: {
    marginTop: 2,
    width: '90%',
    alignSelf: 'center',
  },
  card: {
    height: 100,
    marginVertical: 5,
    flexDirection: 'row',
    shadowColor: '#999',
    shadowOffset: {width: 0, height: 1},
    shadowOpacity: 0.8,
    shadowRadius: 2,
    elevation: 5,
  },
  cardImgWrapper: {
    flex: 1,
  },
  cardImg: {
    height: '100%',
    width: '100%',
    alignSelf: 'center',
    borderRadius: 8,
    borderBottomRightRadius: 0,
    borderTopRightRadius: 0,
  },
  cardInfo: {
    flex: 2,
    padding: 10,
    borderColor: '#ccc',
    borderWidth: 1,
    borderLeftWidth: 0,
    borderBottomRightRadius: 8,
    borderTopRightRadius: 8,
    backgroundColor: '#fff',
    paddingTop:15,
    backgroundColor:'orange'
  },
  cardTitle: {
    fontWeight: 'bold',
    fontSize:16
  },
  cardDetails: {
    fontSize: 12,
    color: '#444',
  },
});
