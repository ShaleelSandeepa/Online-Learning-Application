import React from "react";
import colors from '../Colors';
import SearchBar from "react-native-dynamic-search-bar";
import {
    SafeAreaView,
    View,
    StyleSheet,
    Text,
    ScrollView,
    Image,
    TouchableWithoutFeedback,
    Linking,
} from "react-native";

const Web = () => {
    
    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.section1}>
                <SearchBar
                    placeholder="Search here"
                    onChangeText={(text) => console.log(text)}
                    style={{flex: 1}}
                />
            </View>
            <View style={styles.section2}>
                <ScrollView style={{padding: 30, paddingTop: 0}} >
                    <View style={{backgroundColor: 'white', flex: 1,}}>
                        <Image source={require('../assets/web.jpg')} style={styles.image} />
                        <View>
                            <Text style={{textAlign: 'justify', fontSize: 15}}>Web application development is the creation of application programs that reside on remote servers and are delivered to the user's device over the Internet.</Text>
                        </View>
                        <Text style={styles.topic}>Languages</Text>
                        <View style={styles.languages}>
                            <TouchableWithoutFeedback onPress={() => Linking.openURL('https://www.w3schools.com/html/default.asp')}>
                                <View style={styles.language}>
                                    <View style={styles.languageImage}>
                                        <Image source={require('../assets/html.png')} style={styles.languageLogo}/>
                                    </View>
                                    <View style={styles.languageTopic}>
                                        <Text style={{ fontSize: 16 }}>HTML</Text>
                                    </View>
                                </View>
                            </TouchableWithoutFeedback>
                            <TouchableWithoutFeedback onPress={() => Linking.openURL('https://www.w3schools.com/css/default.asp')}>
                                <View style={styles.language}>
                                    <View style={styles.languageImage}>
                                        <Image source={require('../assets/css.png')} style={styles.languageLogo}/>
                                    </View>
                                    <View style={styles.languageTopic}>
                                        <Text style={{ fontSize: 16 }}>CSS</Text>
                                    </View>
                                </View>
                            </TouchableWithoutFeedback>
                            <TouchableWithoutFeedback onPress={() => Linking.openURL('https://www.w3schools.com/js/default.asp')}>
                                <View style={styles.language}>
                                    <View style={styles.languageImage}>
                                        <Image source={require('../assets/js.png')} style={styles.languageLogo}/>
                                    </View>
                                    <View style={styles.languageTopic}>
                                        <Text style={{ fontSize: 16 }}>JavaScript</Text>
                                    </View>
                                </View>
                            </TouchableWithoutFeedback>
                            <TouchableWithoutFeedback onPress={() => Linking.openURL('https://www.w3schools.com/php/default.asp')}>
                                <View style={styles.language}>
                                    <View style={styles.languageImage}>
                                        <Image source={require('../assets/php.png')} style={styles.languageLogo}/>
                                    </View>
                                    <View style={styles.languageTopic}>
                                        <Text style={{ fontSize: 16 }}>PHP</Text>
                                    </View>
                                </View>
                            </TouchableWithoutFeedback>
                            <TouchableWithoutFeedback onPress={() => Linking.openURL('https://www.w3schools.com/php/default.asp')}>
                                <View style={styles.language}>
                                    <View style={styles.languageImage}>
                                        <Image source={require('../assets/ruby.png')} style={styles.languageLogo}/>
                                    </View>
                                    <View style={styles.languageTopic}>
                                        <Text style={{ fontSize: 16 }}>Ruby</Text>
                                    </View>
                                </View>
                            </TouchableWithoutFeedback>
                        </View>
                    </View>
                </ScrollView>
            </View>
        </SafeAreaView>
    )
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'lightgray',
    },
    section1: {
        height: 100,
        backgroundColor: colors.primary,
        alignItems: 'center',
        marginBottom: -20,
        paddingTop: 20,
        borderBottomLeftRadius: 40,
        borderBottomRightRadius: 40,
        flexDirection: 'row',
        paddingRight: 20,
        paddingLeft: 20,
        paddingBottom: 40,
    },
    section2: {
        flex: 1,       
        backgroundColor: 'white',
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
        marginLeft: 20,
        marginRight: 20,
        padding: 3,
        paddingTop: 0,
        paddingBottom: 30,
        elevation: 10,
        position: 'relative',
        backgroundColor: 'white'
    },
    image: {
        width: 200,
        height: 200,
        marginLeft: 'auto',
        marginRight: 'auto'
    },
    topic: {
        textAlign: 'center',
        fontSize: 20,
        fontWeight: 'bold',
        color: colors.primary,
        margin: 20
    },

    // ------------- Languages ---------------

    languages: {
        flex: 1,
        paddingBottom: 20
    },
    language: {
        flex: 1,
        backgroundColor: 'white',
        margin: 10,
        borderRadius: 10,
        flexDirection: 'row',
        justifyContent: 'space-between',
        elevation: 10
    },
    languageImage: {
        flex: .3,
        margin: 10,
        alignItems: 'center',
    },
    languageTopic: {
        flex: .65,
        margin: 10,
        justifyContent: 'center',
    },
    languageLogo: {
        width: 40,
        height: 40
    },

    // ------------ Navigation Bar -------------

    navigationBar: {
        height: 60,
        backgroundColor: colors.primary,
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-around',
        marginTop: -5
    }
});

export default Web;