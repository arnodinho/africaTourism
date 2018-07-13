// Components/FilmItem.js

import React from 'react'
import { StyleSheet,View, Text,Image,TouchableOpacity } from 'react-native'
import { getImageFromApi }  from '../API/TMDBApi'

class FilmItem extends React.Component {

  render() {
    // le constructeur d'un component a, par défaut, un paramètre  props
    // Dès que vous passez des paramètres à vos components custom, React les récupére, les place dans un objet  props
  //  const film = this.props.film
    const { film, displayDetailForFilm } = this.props

    return (
      // Un TouchableOpacity n'est en soit qu'une "enveloppe" permettant à vos vues d'être cliquables
      <TouchableOpacity style={styles.main_container} onPress={() => displayDetailForFilm(film.id)}>
        <Image
          style={styles.image}
          source={{uri: getImageFromApi(film.poster_path)}}
        />
        {/*  il n'y a aucun moyen de récupérer un évènement sur un component View. */}
        <View style={styles.content_container}>
          <View style={styles.header_container}>
            <Text style={styles.title_text}>{film.original_title}</Text>
            <Text style={styles.vote_text}>{film.vote_average}</Text>
          </View>
          <View style={styles.description_container}>
            {/* la propriété  numberOfLines={6}  sur un Text qui, vous l'aurez compris, définit un nombre maximum de ligne pour un texte. Si le texte fait plus de 6 lignes, votre texte est coupé et l'application affiche "..." à la fin du texte; */}
            <Text style={styles.description_text} numberOfLines={6}>{film.overview}</Text>
            {/* La propriété numberOfLines permet de couper un texte si celui-ci est trop long, il suffit de définir un nombre maximum de ligne */}
          </View>
          <View style={styles.date_container}>
            <Text style={styles.date_text}>Sorti le {film.release_date}</Text>
          </View>
        </View>

    </TouchableOpacity>
    )
  }
}

const styles = StyleSheet.create({
  main_container: {
    height: 190,
    flexDirection: 'row'
  },
  image: {
    width: 120,
    height: 180,
    margin: 5,
    backgroundColor: 'gray'
  },
  content_container: {
    flex: 1,
    margin: 5
  },
  header_container: {
    flex: 3,
    flexDirection: 'row'
  },
  title_text: {
    fontWeight: 'bold',
    fontSize: 20,
    flex: 1,
    flexWrap: 'wrap',
    // le style  flexWrap: 'wrap'  sur le titre du film qui permet à notre texte de passer à la ligne si celui-ci est trop long
    paddingRight: 5
  },
  vote_text: {
    fontWeight: 'bold',
    fontSize: 26,
    color: '#666666'
  },
  description_container: {
    flex: 7
  },
  description_text: {
    fontStyle: 'italic',
    color: '#666666'
  },
  date_container: {
    flex: 1
  },
  date_text: {
    textAlign: 'right',
    fontSize: 14
  }
})

export default FilmItem
