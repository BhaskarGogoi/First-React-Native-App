import { StyleSheet, Text, View, SafeAreaView, ScrollView, StatusBar, FlatList, TouchableOpacity, ActivityIndicator} from 'react-native'
import React, {useState, useEffect} from 'react'
import PostsCard from '../components/PostsCard';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';


const Home = ({navigation}) => {
    const [data, setData] = useState();
    const [isLoading, setIsLoading] = useState([true]);
    const getData = () => {
        fetch('https://jsonplaceholder.typicode.com/users')
        .then((response) => response.json())
        .then((json) =>{
            setData(json);
            setIsLoading(false);
        });
    }
    useEffect (() => getData(), []);

    return (
        isLoading ?  <ActivityIndicator size="large" color="#000" style={styles.loader}/> :
        <SafeAreaView style={styles.container}>
            {/* <ScrollView> */}
            <View style={styles.flatList}>
                <View style={styles.head}>
                    <Text style={styles.heading}>User Details</Text>
                    <TouchableOpacity onPress={() => { 
                        navigation.navigate('About')
                    }}>
                        <FontAwesome5 name={'question-circle'} solid style={styles.icon} />
                    </TouchableOpacity>
                </View>
                <FlatList
                    nestedScrollEnabled 
                    keyExtractor={(key) => {
                        return key.id;
                    }}
                    showsHorizontalScrollIndicator={false}
                    data={data}
                    renderItem={({ item }) => {
                        return <PostsCard 
                            id={item.id} 
                            title={item.name}
                            navigation = {navigation} 
                        />
                    }}
                />
            </View>
            {/* </ScrollView> */}
        </SafeAreaView>
    )
}


const styles = StyleSheet.create({
    container: {
        backgroundColor: "#FBF1E6",
        marginTop:StatusBar.currentHeight,
    },
    flatList : {
        marginBottom: 70,
    },
    heading: {
        fontSize: 30,
        fontWeight: 'bold',
        textAlign: 'center',
        marginVertical: 20,
    },
    head : {
        display: 'flex',
        flexDirection: 'row',
        marginHorizontal: 10,
        justifyContent: 'space-between'

    },
    icon : {
        fontSize: 25,
        marginVertical: 28,
        marginRight: 15
    }
})

export default Home