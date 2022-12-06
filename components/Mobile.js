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

const Mobile = () => {
    
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
                <ScrollView style={{padding: 30, paddingTop: 0}}>
                    <View style={{backgroundColor: 'white', flex: 1,}}>
                        <Image source={require('../assets/mobile.jpg')} style={styles.image} />
                        <View>
                            <Text style={{textAlign: 'justify', fontSize: 15}}>Mobile application development is the process of creating software applications that run on a mobile device, and a typical mobile application utilizes a network connection to work with remote computing resources.</Text>
                        </View>
                        <Text style={styles.topic}>Languages</Text>
                        <View style={styles.languages}>
                            <TouchableWithoutFeedback onPress={() => Linking.openURL('https://youtube.com/playlist?list=PLTjRvDozrdlyjm_nKyYt4b5C1zx4Xdaut')}>
                                <View style={styles.language}>
                                    <View style={styles.languageImage}>
                                        <Image source={require('../assets/java.png')} style={styles.languageLogo}/>
                                    </View>
                                    <View style={styles.languageTopic}>
                                        <Text style={{ fontSize: 16 }}>Java</Text>
                                    </View>
                                </View>
                            </TouchableWithoutFeedback>
                            <TouchableWithoutFeedback onPress={() => Linking.openURL('https://kotlinlang.org/')}>
                                <View style={styles.language}>
                                    <View style={styles.languageImage}>
                                        <Image source={require('../assets/kotlin.png')} style={styles.languageLogo}/>
                                    </View>
                                    <View style={styles.languageTopic}>
                                        <Text style={{ fontSize: 16 }}>Kotlin</Text>
                                    </View>
                                </View>
                            </TouchableWithoutFeedback>                   
                            <TouchableWithoutFeedback onPress={() => Linking.openURL('https://developer.apple.com/swift/')}>
                                <View style={styles.language}>
                                    <View style={styles.languageImage}>
                                        <Image source={require('../assets/swift.png')} style={styles.languageLogo}/>
                                    </View>
                                    <View style={styles.languageTopic}>
                                        <Text style={{ fontSize: 16 }}>Swift</Text>
                                    </View>
                                </View>
                            </TouchableWithoutFeedback>                          
                            <TouchableWithoutFeedback onPress={() => Linking.openURL('https://www.digitalocean.com/community/tutorials/objective-c-hello-world-tutorial')}>
                                <View style={styles.language}>
                                    <View style={styles.languageImage}>
                                        <Image source={require('../assets/objectivec.png')} style={styles.languageLogo}/>
                                    </View>
                                    <View style={styles.languageTopic}>
                                        <Text style={{ fontSize: 16 }}>Objective C</Text>
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
        width: 180,
        height: 180,
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

    // ------------ Navigation Bar ------------

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

export default Mobile;