// Components/Search.js
// Avant de pouvoir utiliser les components React Native, il faut les importer de la librairie du même nom
import React from 'react'
import { StyleSheet,View, TextInput,Text, Button,FlatList } from 'react-native'

import films from '../Helpers/filmsData'
import FilmItem from './FilmItem'

class Search extends React.Component {

  // render() {...}  équivaut à  render = function() {...}
  render() {
      return (
          // Ici on rend à l'écran les éléments graphiques de notre component custom Search
          <View style={styles.main_container}>
            <TextInput style={styles.textinput} placeholder='Titre du film'/>
            {/* onPress={() => {}} equivaut a onPress={function() {}} */}
            <Button style={styles.buttoninput}  title='Rechercher' onPress={() => {}}/>
            {/* syntaxe ES6 renderItem={function ({item}) { return <Text>{item.title}</Text> }} */}
            {/* keyExtractor tells the list to use the ids for the react keys instead of the default key property.  */}
            <FlatList
                data={films}
                keyExtractor={(item) => item.id.toString()}
                renderItem={({item}) => <FilmItem/>}/>
                {/* Lorsque vous définissez une key, React peut rapidement identifier de manière unique un item et faire l'action adéquate : ajout, suppression voir modification */}
          </View>
      )
    }
}

const styles = StyleSheet.create({

    main_container: {
      flex: 1,
      marginTop: 60,
    },
    textinput: {
      marginLeft: 5,
      marginRight: 5,
      height: 50,
      borderColor: '#000000',
      borderWidth: 1,
      paddingLeft: 5
    },

     buttoninput: {
      height: 50,
     }
})
// On exporte toujours par défaut les components
//  un component = un fichier = un export par défaut.
export default Search
