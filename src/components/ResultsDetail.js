import React from 'react';
import {View,Text,StyleSheet, FlatList, Image} from 'react-native'

const ResultsDetail = ({result}) => {
    return(
        <View>
            <Image style={styles.image} source={{uri:result.image_url}}/>
            <Text>{result.name}</Text>
            <Text>{result.rating} Starts, {result.review_count} Reviews</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    image:{
        width:250,
        borderRadius:5,
        height:120
    },
    name:{
        fontSize:16,
        fontWeight:'bold'
    }
})

export default ResultsDetail