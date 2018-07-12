// Components/Search.js
// Avant de pouvoir utiliser les components React Native, il faut les importer de la librairie du même nom
import React from 'react'
import { StyleSheet,View, TextInput,Text, Button,FlatList,ActivityIndicator } from 'react-native'
import { getFilmsFromApiWithSearchedText } from '../API/TMDBApi' // import { } from ... car c'est un export nommé dans TMDBApi.js
import films from '../Helpers/filmsData'
import FilmItem from './FilmItem'

class Search extends React.Component {
  //En React, on a pour habitude de définir nos propriétés dans le constructeur du component
  //Les props sont fixés par le component parent et ne peuvent pas être modifiés par le component qui les reçoit.
  constructor(props) {
    super(props)
    // Ici on va créer les propriétés de notre component custom Search
    //this._films = []
    this.searchedText = "" // Initialisation de notre donnée searchedText en dehors du state
    // Dès lors que vous souhaitez modifier votre component et ses données affichées, vous allez utiliser son state.
    this.state = {
      films: [],
      isLoading: false // Par défaut à false car il n'y a pas de chargement tant qu'on ne lance pas de recherche
     }

  }


  //  En fait en Javascrip, il n'y a pas de modificateur public / private. Du coup, on a pour habitude de précéder le nom des méthodes (et aussi des propriétés) d'un underscore pour indiquer qu'elles sont privées.
    _loadFilms() {
      if (this.searchedText.length > 0) { // Seulement si le texte recherché n'est pas vide
        this.setState({ isLoading: true }) // Lancement du chargement
        getFilmsFromApiWithSearchedText(this.searchedText).then(data => {
          // setState  récupère les modifications de vos données et indique à React que le component a besoin d'être re-rendu avec ces  nouvelles données.
        this.setState({
                        films: data.results,
                        isLoading: false
                      })

        })
      }
  }

  _searchTextInputChanged(text) {
    this.searchedText = text // Modification du texte recherché à chaque saisie de texte, sans passer par le setState
  }


  _displayLoading() {
       if (this.state.isLoading) {
         return (
           <View style={styles.loading_container}>
             <ActivityIndicator size='large' />
             {/* Le component ActivityIndicator possède une propriété size pour définir la taille du visuel de chargement : small ou large. Par défaut size vaut small, on met donc large pour que le chargement soit bien visible */}
           </View>
         )
       }
     }


  // render() {...}  équivaut à  render = function() {...}
  //React préconise fortement de n'utiliser que les données provenant des props et du state dans le  render de vos component
  render() {
      return (
          // Ici on rend à l'écran les éléments graphiques de notre component custom Search
          <View style={styles.main_container}>
            <TextInput style={styles.textinput}  onSubmitEditing={() => this._loadFilms()} placeholder='Titre du film'  onChangeText={(text) => this._searchTextInputChanged(text)}/>
            {/* onPress={() => {}} equivaut a onPress={function() {}} */}
            <Button style={styles.buttoninput}  title='Rechercher' onPress={() => {this._loadFilms()}}/>
            {/* syntaxe ES6 renderItem={function ({item}) { return <Text>{item.title}</Text> }} */}
            {/* keyExtractor tells the list to use the ids for the react keys instead of the default key property.  */}
            <FlatList
                data={this.state.films}
                keyExtractor={(item) => item.id.toString()}
                renderItem={({item}) => <FilmItem film={item}/>}
                onEndReachedThreshold={0.5}
                onEndReached={() => {
                  if (this.state.films.length > 0) {
                     console.log("onEndReached")
                  }
                }}
              />
                {/* Lorsque vous définissez une key, React peut rapidement identifier de manière unique un item et faire l'action adéquate : ajout, suppression voir modification */}
                {this._displayLoading()}
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
    },
    loading_container: {
      position: 'absolute',
      left: 0,
      right: 0,
      top: 100,
      bottom: 0,
      alignItems: 'center',
      justifyContent: 'center'
    }
})
// On exporte toujours par défaut les components
//  un component = un fichier = un export par défaut.
export default Search
