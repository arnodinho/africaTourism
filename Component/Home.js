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
          <TouchableOpacity  style={{backgroundColor: '#F7DC6F'}} style={styles.item_wrapper}>
              {this._displayImage('health')}
              <Text style={styles.item_text}> Restaurants</Text>
          </TouchableOpacity>
          <TouchableOpacity style={{ flex: 1, backgroundColor: '#00ff7f',marginLeft: 2,marginRight: 2,marginTop:2,marginBottom:2  }}>
              {this._displayImage('calendar')}
                <Text style={styles.item_text}> Sortir</Text>
          </TouchableOpacity>
      </View>
          <View style={styles.container_2}>
              <TouchableOpacity style={{ flex: 1, backgroundColor: '#20b2aa',  marginLeft: 2,marginRight: 2,marginTop:2,marginBottom:2 }}>
              {this._displayImage('beer')}
                  <Text style={styles.item_text}> Sports - Loisirs</Text>
              </TouchableOpacity>
              <TouchableOpacity style={{ flex: 1, backgroundColor: '#D6DBDF',marginLeft: 2,marginRight: 2,marginTop:2,marginBottom:2  }}>
              {this._displayImage('shopping')}
                  <Text style={styles.item_text}> Shopping</Text>
              </TouchableOpacity>
          </View>
          <View style={styles.container_3}>
              <TouchableOpacity style={{ flex: 1, backgroundColor: '#99ccff',  marginLeft: 2,marginRight: 2,marginTop:2,marginBottom:2 }}>
              {this._displayImage('hotel')}
                  <Text style={styles.item_text} > Manifestations - Evenements</Text>
              </TouchableOpacity>
              <TouchableOpacity style={{ flex: 1, backgroundColor: '#ff4040',marginLeft: 2,marginRight: 2,marginTop:2,marginBottom:2  }}>
              {this._displayImage('restaurant')}
                  <Text style={styles.item_text}> Santé</Text>
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
     backgroundColor: '#F7DC6F',
     marginLeft: 2,
     marginRight: 2,
     marginTop:2,
     marginBottom:2,
     borderRadius: 10,
  },
    item_image: {
      alignItems: 'center',
      marginTop: 45,
      marginLeft:55,
      height: 64,
      width: 64,
    },
    item_text: {
      alignItems: 'center',
      justifyContent: 'center',
    }
})



export default Home
