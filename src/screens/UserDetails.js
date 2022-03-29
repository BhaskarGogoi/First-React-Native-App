import { StyleSheet, Text, View, ScrollView, ActivityIndicator} from 'react-native'
import React ,  {useState, useEffect} from 'react'
import { useRoute } from '@react-navigation/native';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';


const UserDetails = () => {
  const route = useRoute();
  const { id } = route.params;
  const [data, setData] = useState();
  const [isLoading, setIsLoading] = useState([true]);
  const url = 'https://jsonplaceholder.typicode.com/users/' + id;
  const getUserDetails = () => {
      fetch(url)
      .then((response) => response.json())
      .then((json) =>{
          setData(json)
          setIsLoading(false)
      });
  }
  useEffect (() => getUserDetails(), []);
  return (
    isLoading ?  <ActivityIndicator size="large" color="#000" style={styles.loader}/> :
    <ScrollView>
    <View style={styles.container}>
        <Text style={styles.initial}>{data.name.charAt(0)}</Text>
        <Text style={styles.name}>{data.name}</Text>
        <View style={styles.card}>
            <Text style={styles.cardHeading}>Contact Details</Text>
            <Text style={styles.detailsText}><FontAwesome5 name={'envelope'} solid style={styles.icon} /> &nbsp; {data.email}</Text>
            <Text style={styles.detailsText}><FontAwesome5 name={'phone'} solid style={styles.icon} /> &nbsp; {data.phone}</Text>
            <Text style={styles.detailsText}><FontAwesome5 name={'link'} solid style={styles.icon} /> &nbsp; {data.website}</Text>
        </View>
        <View style={styles.card}>
            <Text style={styles.cardHeading}>Address</Text>
            <Text style={styles.detailsText}>Street: &nbsp; {data.address.street}</Text>
            <Text style={styles.detailsText}>City: &nbsp; {data.address.city}</Text>
            <Text style={styles.detailsText}>Zip: &nbsp; {data.address.zipcode}</Text>
        </View>
        <View style={styles.card}>
            <Text style={styles.cardHeading}>Company Details</Text>
            <Text style={styles.detailsText}>Name: &nbsp; {data.company.name}</Text>
            <Text style={styles.detailsText}>Catch Phrase: &nbsp; {data.company.catchPhrase}</Text>
            <Text style={styles.detailsText}>Zip: &nbsp; {data.address.zipcode}</Text>
        </View>
        
    </View>
    </ScrollView>
  )
}


const styles = StyleSheet.create({
    container: {
        backgroundColor: '#FBF1E6',
        flex: 1,
    },
    loader :{
        display: 'flex',
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    initial : {
        color: "#e9ad6b",
        borderRadius: 50,
        height: 70,
        width: 70,
        marginRight: 15,
        textAlign: 'center',
        paddingTop: 14,
        fontSize: 30,
        fontWeight: 'bold',
        backgroundColor: '#fff',
        alignSelf: 'center',
        marginTop: 20,
    },
    name: {
        fontSize: 20,
        fontWeight: 'bold',
        textAlign: 'center',
        marginTop: 20,
    },
    card: {
        borderRadius: 7,
        backgroundColor: '#fff',
        marginHorizontal: 10,
        marginVertical: 15,
        elevation: 6,
        padding: 15,
    },
    cardHeading : {
        fontSize: 20,
        marginVertical: 10,
        fontWeight: 'bold',
        color: '#e9ad6b'
    },

    detailsText: {
        fontSize: 18,
        marginVertical: 4,
        color: '#000'
    },
    icon :{
        fontSize: 18,
        marginRight: 10,
    }

})

export default UserDetails