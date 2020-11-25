import * as React from 'react';
import { StyleSheet, Text, View,TouchableOpacity,TextInput,Alert } from 'react-native';
import {Header} from 'react-native-elements';
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

    submit = async () => {
        db.collection('stories'),add({
            'title' : this.state.storyTitle,
            'author' : this.state.storyAuthor,
            'story' : this.state.story
        })
        Alert.alert('Story Submitted')
        this.setState({
            storyAuthor : '',
            storyTitle : '',
            story : ''
        })

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
                    />

                <TextInput
                    style = {styles.inputBox}
                        placeholder = 'AUTHOR'
                        onChangeText = {text => {
                            this.setState({
                                storyAuthor : text
                            })
                        }}
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
                    />

                <TouchableOpacity style = {styles.submitButton}
                onPress = {this.submit}
                >
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