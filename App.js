/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 * @lint-ignore-every XPLATJSCOPYRIGHT1
 */
 // para llamar una imgen uri para una imagen de la nube
//  para llamar de un directorio local es require

import React, { Component } from 'react';
import {
  Text,View,
} from 'react-native';

import Home from './src/screens/containers/home';
import Header from './src/sections/components/header';
import SuggestionList from './src/videos/containers/suggestion-list';
import CategoryList from './src/videos/containers/category-list';
import API from './utils/api';
import Player from './src/players/containers/player';


type Props = {};
export default class App extends Component<Props> {
  state={
    suggestionList: [],
    categoryList: [],
  }
  async componentDidMount() {
    const movies = await API.getSuggestion(10);
    const categories = await API.getMovies();
    console.log(movies);
    console.log(categories);
    this.setState({
        suggestionList:movies,
        categoryList: categories,
      })
  }
  render() {
    return (
      <Home>
        <Header />
        <Player />
        <Text>buscador</Text>
        <Text>categorías</Text>
        <CategoryList
          list={this.state.categoryList}
        />
        <SuggestionList
          list={this.state.suggestionList}
        />
      </Home>
    );
  }
}
