import React from 'react';
import { StyleSheet, Text } from 'react-native';


export default function Quote(props) {
      const {text, author} = props;
      return (
          <View style={styles.container}>
              <Text style={styles.text}>{text}</Text>
              <Text style={styles.author}>&mdash; {author}</Text>
          </View>
      );
}

// //definition mit Klasse
// export default class Quote extents Component {
//   render() {
//     const {text, author} = this.props;
//     return (
//         <Fragment>
//             <Text>{text}</Text>
//             <Text>{author}</Text>
//         </Fragment>
//     );
//   }
// }

const styles = StyleSheet.create({
    container: {
        borderWidth: 1,
        paddingHorizontal: 20
    }
    text: {
        fontSize: 36, 
        fontStyle: 'italc',
        margin: 10,
        textAlign: 'center'    //wird auf Android auf left angezeigt
    }
    author: {
        fontSize: 20,
        textAlign: 'right'
    }
});