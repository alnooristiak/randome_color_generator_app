import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import React from 'react';

export default function CollorGenerator() {

    let randomColorGenerator = () => {
        const red = Math.floor(Math.random() * 256);
        const green = Math.floor(Math.random() * 256);
        const blue = Math.floor(Math.random() * 256);
        // console.log(red);
        console.log(`rgb ${red}, ${green}, ${blue}`);
        return `rgb ${red}, ${green}, ${blue}`;
    }

    return (
        <View>
            <TouchableOpacity
                onPress={() => {
                    randomColorGenerator();
                }}
            >
                <Text style={styles.textStyle}>CLICK me To Get New Color..</Text>
            </TouchableOpacity>
            <Text
                style={{
                    backgroundColor: "rgb(200, 222, 245)",
                    borderRadius: 6,
                    width: 100,
                    height: 100,
                    alignItems: "center"
                }}
            >

            </Text>
        </View>
    )
}

const styles = StyleSheet.create({
    textStyle:{
        backgroundColor: '#9980FA', 
        color: 'white', 
        fontWeight: 500, 
        textAlign: 'center', 
        marginTop: 20, 
        paddingTop: 8, 
        paddingBottom: 8,
    },
})