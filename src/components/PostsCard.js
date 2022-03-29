import { StyleSheet, Text, View, TouchableOpacity} from 'react-native'
import React from 'react'

const PostsCard = ({title, id, navigation}) => {
    const userId = title.toString().charAt(0);
  return (
    <TouchableOpacity onPress={() => { 
        navigation.navigate('User Details', {title: title, id: id})
    }}>
        <View style={styles.card}>
            <View style={styles.row}>
                <Text style={styles.id}>{userId}</Text>
                <Text style={styles.title}>{title}</Text>
            </View>
        
        </View>
    </TouchableOpacity>
  )
}


const styles = StyleSheet.create({
    row : {
        display: 'flex',
        flexDirection: 'row',
    },
    card : {
        marginHorizontal:10,
        height: 90,
        padding: 20,
        borderRadius: 8,
        shadowOffset: { width: 1, height: 10 },
        shadowColor: '#999',
        shadowOpacity: .3,
        elevation: 5,
        marginTop: 14, 
        backgroundColor: "#fff"       
    },
    title : {
        fontSize: 20,
        fontWeight: "bold",
        marginTop: 8

    },
    id : {
        color: "#000",
        borderRadius: 50,
        height: 50,
        width: 50,
        marginRight: 15,
        textAlign: 'center',
        paddingTop: 10,
        fontSize: 20,
        fontWeight: 'bold',
        backgroundColor: '#FBF1E6'
        
    }
})

export default PostsCard