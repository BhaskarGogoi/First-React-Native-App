import { StyleSheet, Text, View, Linking  } from 'react-native'
import React from 'react'
import Unorderedlist from 'react-native-unordered-list';

const About = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.heading}>About</Text>
      <View style={styles.content}>
            <Text style={{fontSize: 15, marginBottom: 20}}>This is a demo app created using React-Native</Text>
            <Text style={{fontSize: 15, fontWeight: 'bold', marginBottom: 20}}>Concepts Implemented:</Text>
            <Unorderedlist><Text style={styles.contentText}>Functional Component</Text></Unorderedlist>
            <Unorderedlist><Text style={styles.contentText}>Hooks</Text>
                <Unorderedlist><Text style={styles.contentText}>useState</Text></Unorderedlist>
                <Unorderedlist><Text style={styles.contentText}>useEffect</Text></Unorderedlist>
            </Unorderedlist>
            <Unorderedlist><Text style={styles.contentText}>Fetch API</Text></Unorderedlist>
            <Unorderedlist><Text style={styles.contentText}>Navigation</Text></Unorderedlist>
            <Unorderedlist><Text style={styles.contentText}>Adding Icons</Text></Unorderedlist>
            <Text style={{fontSize: 15, fontWeight: 'bold', marginVertical: 20}}>API Used From:</Text>
            <Unorderedlist>
                <Text style={{color: 'blue', fontSize: 15}}  onPress={() => Linking.openURL('http://google.com')}>https://jsonplaceholder.typicode.com/</Text>
            </Unorderedlist>
      </View>
    </View>
  )
}

export default About

const styles = StyleSheet.create({
    container : {
        backgroundColor: '#FBF1E6',
        flex: 1
    },
    heading : {
        fontSize: 25,
        fontWeight: 'bold',
        alignSelf: 'center',
        marginVertical: 20
    },
    content : {
        fontSize: 20,
        padding: 20,
    },
    contentText : {
        fontSize: 15,
    }
})