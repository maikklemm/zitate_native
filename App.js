import React, {Component} from 'react';
import { Button, StyleSheet, View } from 'react-native';

import Quote from './js/components/Quote';
import NewQuote from './js/components/NewQuote';


const data = [
  {
    text: '...', author: '...'
},
  {
    text: 'Probleme kann man niemals mit derselben Denkweise lösen, durch die sie entstanden sind.',
  author: 'Albert Einstein'
},
  {
    text: 'Man braucht nichts im Leben zu fürchten, man muss nur alles verstehen.',
  author: 'Marie Curie'
},
  {
    text: 'Nichts ist so beständig wie der Wandel.',
  author: 'Heraklit'
}
];
export default class App extends Component {
  state ={ index: 0, showNewQuoteScreen: false, quotes: data };  //Initialzustand der Componente

  _addQuote = (text, author) => {
    let {quotes} = this.state;
    if(text !== null && author !== nul)
    quotes.push({text, author});
    this.setState({showNewQuoteScreen: false, quotes});
  };

        //Dartstellung im UI, Komponente erscheint im UI - init.Zustand
        //Zustand änder sich - state-  ==> this.setState
  render() {
    let { index, quotes } = this.state;
    const quote = quotes[index];   //quote.text und quote.author erlauben Zugriff a.d.jew.Array
    let nextIndex = index + 1;
    if(nextIndex === quotes.length) nextIndex = 0;
  return (
        //JSX
    <View style={styles.container}>
      <View style={styles.container}>
        <Button title="NEU" onPress={() => this.setState({ showNewQuoteScreen: true })} />
      </View>

      <NewQuote 
        visible={this.state.showNewQuoteScreen} 
        onSave={this._addQuote} 
      />

      <Quote text={quote.text} author={quote.author} />
      <View style={ styles.nextButton }>
      <Button 
        title="Nächstes Zitat" 
        onPress={() => this.setState({index: nextIndex})}
      />
      </View>
    </View>
    }
  
  




      //Styles für Aussehen und Layout
const styles = StyleSheet.create({
  container {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  }, 
  nextButton: {
    position: 'absolute', 
    bottom: 0
  },
  newButton: {
    position: 'absolute',
    right: 0,
    top: 30
  }

});
