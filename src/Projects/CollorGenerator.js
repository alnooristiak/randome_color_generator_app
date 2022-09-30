import React, { Component } from 'react'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'

export class CollorGenerator extends Component {
  render() {
    return (
        <View>
            <TouchableOpacity>
                <Text style={styles.textStyle}>CLICK me To Get New Color.</Text>
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
}

const styles = StyleSheet.create ({
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

export default CollorGenerator;
