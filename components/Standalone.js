import React, { useRef } from "react";
import { useNavigation } from "@react-navigation/native";
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

const Standalone = () => {

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
                        <Image source={require('../assets/standalone.jpg')} style={styles.image} />
                        <View>
                            <Text style={{textAlign: 'justify', fontSize: 15}}>A standalone application is an application that runs locally on the device and doesn't require anything else to be functional. All the logic is built into the app, so it doesn't need an internet connection nor any other services installed.</Text>
                        </View>
                        <Text style={styles.topic}>Languages</Text>
                        <View style={styles.languages}>
                            <TouchableWithoutFeedback onPress={() => Linking.openURL('https://youtube.com/playlist?list=PLTjRvDozrdlxj5wgH4qkvwSOdHLOCx10f')}>
                                <View style={styles.language}>
                                    <View style={styles.languageImage}>
                                        <Image source={require('../assets/python.png')} style={styles.languageLogo}/>
                                    </View>
                                    <View style={styles.languageTopic}>
                                        <Text style={{ fontSize: 16 }}>Python</Text>
                                    </View>
                                </View>
                            </TouchableWithoutFeedback>
                            <TouchableWithoutFeedback onPress={() => Linking.openURL('https://www.w3schools.com/cpp/default.asp')}>
                                <View style={styles.language}>
                                    <View style={styles.languageImage}>
                                        <Image source={require('../assets/c-plus.png')} style={styles.languageLogo}/>
                                    </View>
                                    <View style={styles.languageTopic}>
                                        <Text style={{ fontSize: 16 }}>C++</Text>
                                    </View>
                                </View>
                            </TouchableWithoutFeedback>
                            <TouchableWithoutFeedback onPress={() => Linking.openURL('https://www.w3schools.com/cs/index.php')}>
                                <View style={styles.language}>
                                    <View style={styles.languageImage}>
                                        <Image source={require('../assets/c-sharp.png')} style={styles.languageLogo}/>
                                    </View>
                                    <View style={styles.languageTopic}>
                                        <Text style={{ fontSize: 16 }}>C#</Text>
                                    </View>
                                </View>
                            </TouchableWithoutFeedback>
                            <TouchableWithoutFeedback onPress={() => Linking.openURL('https://youtube.com/playlist?list=PLdo5W4Nhv31a8UcMN9-35ghv8qyFWD9_S')}>
                                <View style={styles.language}>
                                    <View style={styles.languageImage}>
                                        <Image source={require('../assets/c.png')} style={styles.languageLogo}/>
                                    </View>
                                    <View style={styles.languageTopic}>
                                        <Text style={{ fontSize: 16 }}>C</Text>
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
        width: 250,
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

export default Standalone;