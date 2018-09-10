// Components/Home.js

import React from 'react'
import { StyleSheet, Text, View,TouchableOpacity,Image } from 'react-native'


class Home extends React.Component {

 _displayImage(source){
     switch (source) {
         case 'health':
             sourceImage = require('../Images/health.png')
             return ( <Image style={styles.item_image} source={sourceImage}/>)
             case 'calendar':
                 sourceImage = require('../Images/calendar.png')
                 return ( <Image style={styles.item_image} source={sourceImage}/>)

               case 'beer':
                   sourceImage = require('../Images/beer.png')
                   return ( <Image style={styles.item_image} source={sourceImage}/>)

              case 'hotel':
                  sourceImage = require('../Images/hotel.png')
                  return ( <Image style={styles.item_image} source={sourceImage}/>)

              case 'restaurant':
                  sourceImage = require('../Images/dinner.png')
                  return ( <Image style={styles.item_image} source={sourceImage}/>)

              case 'shopping':
                  sourceImage = require('../Images/shopping.png')
                  return ( <Image style={styles.item_image} source={sourceImage}/>)
         default:
             sourceImage = require('../Images/item.png')
             return ( <Image style={styles.item_image} source={sourceImage}/>)
     }
 }
  render() {
    return (
      <View style={styles.main_container}>

      <View style={styles.container_1}>

          <TouchableOpacity  style={[styles.item_wrapper, styles.color_1]}>
            {this._displayImage('health')}
              <Text style={styles.item_text}> Santé </Text>
          </TouchableOpacity>

          <TouchableOpacity style={[styles.item_wrapper, styles.color_2]}>
              {this._displayImage('calendar')}
                <Text style={styles.item_text}> Manifestations  Evenements</Text>
          </TouchableOpacity>
      </View>
          <View style={styles.container_2}>
              <TouchableOpacity style={[styles.item_wrapper, styles.color_3]}>
              {this._displayImage('beer')}
                  <Text style={styles.item_text}> Sortir </Text>
              </TouchableOpacity>
              <TouchableOpacity style={[styles.item_wrapper, styles.color_4]}>
              {this._displayImage('shopping')}
                  <Text style={styles.item_text}> Shopping</Text>
              </TouchableOpacity>
          </View>
          <View style={styles.container_3}>
              <TouchableOpacity style={[styles.item_wrapper, styles.color_5]}>
              {this._displayImage('hotel')}
                  <Text style={styles.item_text} >Hébergements </Text>
              </TouchableOpacity>
              <TouchableOpacity style={[styles.item_wrapper, styles.color_6]}>
              {this._displayImage('restaurant')}
                  <Text style={styles.item_text}> Restaurants</Text>
              </TouchableOpacity>
          </View>
      </View>

    )
  }
}

const styles = StyleSheet.create({
  main_container: {
    flex: 1,

    // justifyContent: 'center',
    // alignItems: 'center'
  },
  container_1: {
    flex: 1,
      flexDirection: 'row',
  },
  container_2: {
    flex: 1,
      flexDirection: 'row',
  },
  container_3: {
    flex: 1,
      flexDirection: 'row',
  },
  item_wrapper: {
     flex: 1,
     // backgroundColor: '#F7DC6F',
     marginLeft: 2,
     marginRight: 2,
     marginTop:2,
     marginBottom:2,
  },
    item_image: {
      alignItems: 'center',
      marginTop: 40,
      marginLeft:55,
      height: 64,
      width: 64,
    },
    color_1: {
      backgroundColor:'#F7DC6F'
    },

    color_2: {
      backgroundColor:'#00ff7f'
    },

    color_3: {
      backgroundColor:'#20b2aa'
    },

    color_4: {
      backgroundColor:'#D6DBDF'
    },

    color_5: {
      backgroundColor:'#99ccff'
    },

    color_6: {
      backgroundColor:'#ff4040'
    },
    item_text: {
      marginTop:4,
      textAlign: 'center',
      justifyContent: 'center',
    }
})



export default Home
