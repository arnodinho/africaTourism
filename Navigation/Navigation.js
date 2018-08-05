// En React Native, on a pour habitude d'isoler toute la gestion de la navigation dans un fichier à part.
//  toute votre navigation est gérée par cette barre de navigation. Vos vues vont se placer au dessous à chaque fois.
import { createStackNavigator } from 'react-navigation'
import Search from '../Component/Search'
import FilmDetail from '../Component/FilmDetail'

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

export default SearchStackNavigator
