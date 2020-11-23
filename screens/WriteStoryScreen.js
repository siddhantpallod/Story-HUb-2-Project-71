import * as React from 'react';
import { StyleSheet, Text, View,TouchableOpacity } from 'react-native';
import {Header} from 'react-native-elements';
import { TextInput } from 'react-native-gesture-handler';
import db from '../conifig';
import * as firebase from 'firebase';

export default class WriteStoryScreen extends React.Component{

    constructor(){
        super();
        this.state = {
            storyTitle : '',
            storyAuthor : '',
            story : ''
        }
    }

    render(){
        return(
            <View style = {styles.container}>
                <Header 
                backgroundColor = 'pink'
                centerComponent = {{
                  text: 'Story Hub',
                  style : {color : 'black', fontSize : 28, width : 200,textAlign : 'center  '}
                }}
                />

                <TextInput
                    style = {styles.inputBox}
                        placeholder = 'STORY TITLE'
                        onChangeText = {text => {
                            this.setState({
                                storyTitle : text
                            })
                        }}
                        value = {this.state.storyTitle}
                        
                    />

                <TextInput
                    style = {styles.inputBox}
                        placeholder = 'AUTHOR'
                        onChangeText = {text => {
                            this.setState({
                                storyAuthor : text
                            })
                        }}
                        value = {this.state.storyAuthor}
                    />

                <TextInput
                    multiline = {true}
                    style = {styles.inputBox2}
                        placeholder = 'STORY'
                        onChangeText = {text => {
                            this.setState({
                                story : text
                            })
                        }} 
                        value = {this.state.story}
                    />

                <TouchableOpacity style = {styles.submitButton}
                onPress = {async()=> {
                    this.setState({
                        story : '',
                        storyAuthor : '',
                        storyTitle : ''
                    })
                }}>
                    <Text style = {styles.buttonText} > Submit </Text>    
                </TouchableOpacity>    
            </View>
        )
    }
}

const styles = StyleSheet.create({
    
    container : {
        flex : 1
    },
    
    inputBox : {
        width : 400,
        height : 50,
        borderWidth : 2,
        fontSize : 20,
        alignSelf : 'center',
        marginTop : 50
    },

    inputBox2 : {
        width : 400,
        height : 150,
        borderWidth : 2,
        fontSize : 20,
        alignSelf : 'center',
        marginTop : 50
    },

    submitButton : {
        backgroundColor : 'pink',
        margin : 20,
        borderWidth : 3,
        borderRadius : 20,
        width : 90,
        alignSelf : 'center'
    },

    buttonText : {
        color : 'black',
        fontSize : 20,
        fontFamily : 'bold',
        alignSelf : 'center'
    },
})