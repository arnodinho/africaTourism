// Components/Search.js
// Avant de pouvoir utiliser les components React Native, il faut les importer de la librairie du même nom
import React from 'react'
import { StyleSheet,View, TextInput, Button } from 'react-native'


class Search extends React.Component {

  // render() {...}  équivaut à  render = function() {...}
  render() {
      return (
          // Ici on rend à l'écran les éléments graphiques de notre component custom Search
          <View style={styles.viewStyle}>
            <TextInput style={styles.textinput} placeholder='Titre du film'/>
            {/* onPress={() => {}} equivaut a onPress={function() {}} */}
            <Button style={styles.buttoninput}  title='Rechercher' onPress={() => {}}/>
          </View>
      )
    }
}

const styles = StyleSheet.create({

    viewStyle:{
       marginTop: 60,
       marginLeft: 25,
       marginRight: 25,
    },
     textinput: {
       backgroundColor: '#f3f3f3',
       marginBottom: 15,
       height: 40,
       borderColor: '#000000',
       borderWidth: 1,
       paddingLeft: 5
     },

     buttoninput: {
       height: 50
     }
})
// On exporte toujours par défaut les components
//  un component = un fichier = un export par défaut.
export default Search
