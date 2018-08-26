// En React Native, on a pour habitude d'isoler toute la gestion de la navigation dans un fichier à part.
//  toute votre navigation est gérée par cette barre de navigation. Vos vues vont se placer au dessous à chaque fois.
import React from 'react'
import { StyleSheet, Image } from 'react-native';
import { createStackNavigator, createBottomTabNavigator } from 'react-navigation'

import Search from '../Component/Search'
import FilmDetail from '../Component/FilmDetail'
import Favorites from '../Component/Favorites'
import Home from '../Component/Home'

//home
const HomeStackNavigator = createStackNavigator({
  Home: { // Ici j'ai appelé la vue "Search" mais on peut mettre ce que l'on veut. C'est le nom qu'on utilisera pour appeler cette vue
    screen: Home,
    navigationOptions: {
      title: 'My movies '
    }
  },

})

//initialise un StackNavigator avec toutes les vues qu'il va contenir
const SearchStackNavigator = createStackNavigator({
  Search: { // Ici j'ai appelé la vue "Search" mais on peut mettre ce que l'on veut. C'est le nom qu'on utilisera pour appeler cette vue
    screen: Search,
    navigationOptions: {
      title: 'Rechercher'
    }
  },
  FilmDetail: { // Encore une fois j'ai mis le même nom que celui du component mais libre à vous de choisir un nom différent
    screen: FilmDetail
  }
})

const FavoritesStackNavigator = createStackNavigator({
  Favorites: {
    screen: Favorites,
    navigationOptions: {
      title: 'Favoris'
    }
  },
  FilmDetail: {
    screen: FilmDetail
  }
})


const MoviesTabNavigator = createBottomTabNavigator(
  {

    Home: {
      screen: HomeStackNavigator,
      navigationOptions: {
        tabBarIcon: () => {
            return <Image
                    source={require('../Images/home.png')}
                    style={styles.icon}/> // On applique un style pour les redimensionner comme il faut
        }
      }
    },
      Search: {
        screen: SearchStackNavigator,
        navigationOptions: {
          tabBarIcon: () => { // On définit le rendu de nos icônes par les images récemment ajoutés au projet
              return <Image
                      source={require('../Images/ic_search.png')}
                      style={styles.icon}/> // On applique un style pour les redimensionner comme il faut
          }
        }
      },
      Favorites: {
        screen: FavoritesStackNavigator,
        navigationOptions: {
          tabBarIcon: () => {
            return <Image
              source={require('../Images/ic_favorite.png')}
              style={styles.icon}/>
          }
            }
      }
  },
  {
  tabBarOptions: {
    activeBackgroundColor: '#DDDDDD', // Couleur d'arrière-plan de l'onglet sélectionné
    inactiveBackgroundColor: '#FFFFFF', // Couleur d'arrière-plan des onglets non sélectionnés
    showLabel: false, // On masque les titres
    showIcon: true // On informe le TabNavigator qu'on souhaite afficher les icônes définis
  }
}
)



const styles = StyleSheet.create({
  icon: {
    width: 30,
    height: 30
  }
})


export default MoviesTabNavigator
