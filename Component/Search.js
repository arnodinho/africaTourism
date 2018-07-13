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
    // Dès lors que vous souhaitez modifier votre component et ses données affichées, vous allez utiliser son state.
    this.searchedText = ""
    this.page = 0 // Compteur pour connaître la page courante
    this.totalPages = 0 // Nombre de pages totales pour savoir si on a atteint la fin des retours de l'API TMDB
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
        getFilmsFromApiWithSearchedText(this.searchedText,this.page+1).then(data => {
        this.page = data.page
        this.totalPages = data.total_pages
          // setState  récupère les modifications de vos données et indique à React que le component a besoin d'être re-rendu avec ces  nouvelles données.
        this.setState({
                        films:  [ ...this.state.films, ...data.results ], //ajouter les films à ceux qu'on a déjà récupéré. equivalent a this.state.films.concat(data.results)
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

     _searchFilms() {
         // Ici on va remettre à zéro les films de notre state et toutes les variables d'appel a l'api
         this.page = 0
         this.totalPages = 0
         // setState  est une fonction asynchrone. setState  possède un paramètre  callback  qui permet d'exécuter une action dès que notre state a fini de se mettre à jour.
         this.setState({ films: []}, () => {
           this._loadFilms()
         })

         // this._loadFilms()
     }

     // ça équivaut à : _displayDetailForFilm(idFilm) { }
     _displayDetailForFilm = (idFilm) => {
       console.log("Display film with id " + idFilm)
       this.props.navigation.navigate("FilmDetail", { idFilm: idFilm })
     }


  // render() {...}  équivaut à  render = function() {...}
  //React préconise fortement de n'utiliser que les données provenant des props et du state dans le  render de vos component
  render() {
      return (
          // Ici on rend à l'écran les éléments graphiques de notre component custom Search
          // onSubmitEditing validation de la recherche avec le clavier
          <View style={styles.main_container}>
            <TextInput style={styles.textinput}  onSubmitEditing={() => this._searchFilms()} placeholder='Titre du film'  onChangeText={(text) => this._searchTextInputChanged(text)}/>
            {/* onPress={() => {}} equivaut a onPress={function() {}} */}
            <Button style={styles.buttoninput}  title='Rechercher' onPress={() => {this._searchFilms()}}/>
            {/* syntaxe ES6 renderItem={function ({item}) { return <Text>{item.title}</Text> }} */}
            {/* keyExtractor tells the list to use the ids for the react keys instead of the default key property.  */}
            <FlatList
                data={this.state.films}
                keyExtractor={(item) => item.id.toString()}
                renderItem={({item}) => <FilmItem film={item} displayDetailForFilm={this._displayDetailForFilm}/>}
                // pour que l'évènement  onReachEnd  se déclenche quand il ne reste plus qu'une moitié (0.5) de longueur de notre FlatList à afficher.
                onEndReachedThreshold={0.5}
                onEndReached={() => {
                  if (this.state.films.length > 0 && this.page < this.totalPages) {
                    // On vérifie également qu'on n'a pas atteint la fin de la pagination (totalPages) avant de charger plus d'éléments
                    this._loadFilms()
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
