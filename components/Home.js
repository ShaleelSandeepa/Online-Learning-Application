import React from "react";
import SearchBar from "react-native-dynamic-search-bar";
import colors from "../Colors";
import * as Progress from 'react-native-progress';
import { useNavigation } from '@react-navigation/native';
import { SimpleLineIcons } from '@expo/vector-icons';
import {
    View,
    Text,
    SafeAreaView,
    StyleSheet,
    ScrollView,
    Image,
    TouchableWithoutFeedback,
} from 'react-native';

const Home = ({progress}) => {
    const navigation = useNavigation();

    return (
        <SafeAreaView style={styles.container}>

            <View style={styles.section1}>
                <SimpleLineIcons name="logout" size={24} color="white" style={{flex: .2}}  onPress={() => navigation.navigate('Login')} />
                <SearchBar
                    placeholder="Search here"
                    onChangeText={(text) => console.log(text)}
                    style={{flex: 1}}
                />
            </View>

            <View style={styles.section2}>
                <ScrollView>
                    <View style={styles.category}>
                        <TouchableWithoutFeedback onPress={() => navigation.navigate('Web')}>
                            <View style={[styles.categoryItems, {backgroundColor: colors.category1}]}>
                                <Text style={styles.categoryTitle}>Web Application Development</Text>
                                <View style={styles.categoryImage}>
                                    <Image source={require('../assets/web.jpg')} style={styles.image} />
                                    <View style={styles.progressBar}>
                                        <Progress.Bar progress={progress= .4} width={270} color={colors.progressBar}/>
                                        <Text style={{fontSize: 12}}>{progress * 100}%</Text>
                                    </View>
                                </View>
                            </View>
                        </TouchableWithoutFeedback>
                        <TouchableWithoutFeedback onPress={() => navigation.navigate('Mobile')}>
                            <View style={[styles.categoryItems, {backgroundColor: colors.category2}]}>
                                <Text style={styles.categoryTitle}>Mobile Application Development</Text>
                                <View style={styles.categoryImage}>
                                    <Image source={require('../assets/mobile.jpg')} style={styles.image} />
                                    <View style={styles.progressBar}>
                                        <Progress.Bar progress={progress= .6} width={270} color={colors.progressBar}/>
                                        <Text style={{fontSize: 12}}>{progress * 100}%</Text>
                                    </View>
                                </View>
                            </View>
                        </TouchableWithoutFeedback>
                        <TouchableWithoutFeedback onPress={() => navigation.navigate('Standalone')}>
                            <View style={[styles.categoryItems, {backgroundColor: colors.category3}]}>
                                <Text style={styles.categoryTitle}>Standalone Application Development</Text>
                                <View style={styles.categoryImage}>
                                    <Image source={require('../assets/standalone.jpg')} style={styles.image} />
                                    <View style={styles.progressBar}>
                                        <Progress.Bar progress={progress= .2} width={270} color={colors.progressBar}/>
                                        <Text style={{fontSize: 12}}>{progress * 100}%</Text>
                                    </View>
                                </View>
                            </View>
                        </TouchableWithoutFeedback>
                        <TouchableWithoutFeedback>
                            <View style={[styles.categoryItems, {backgroundColor: colors.category4}]}>
                                <Text style={styles.categoryTitle}>Programming in Python</Text>
                                <View style={styles.categoryImage}>
                                    <Image source={require('../assets/python.jpg')} style={styles.image} />
                                    <View style={styles.progressBar}>
                                        <Progress.Bar progress={progress= .9} width={270} color={colors.progressBar}/>
                                        <Text style={{fontSize: 12}}>{progress * 100}%</Text>
                                    </View>
                                </View>
                            </View>
                        </TouchableWithoutFeedback>
                        <TouchableWithoutFeedback>
                            <View style={[styles.categoryItems, {backgroundColor: colors.category5}]}>
                                <Text style={styles.categoryTitle}>Database Managemnet</Text>
                                <View style={styles.categoryImage}>
                                    <Image source={require('../assets/database.jpg')} style={styles.image} />
                                    <View style={styles.progressBar}>
                                        <Progress.Bar progress={progress= .8} width={270} color={colors.progressBar}/>
                                        <Text style={{fontSize: 12}}>{progress * 100}%</Text>
                                    </View>
                                </View>
                            </View>
                        </TouchableWithoutFeedback>
                    </View>
                </ScrollView>
            </View>
        </SafeAreaView>
    )
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.primary,
    },
    section1: {
        height: 80,
        backgroundColor: colors.primary,
        alignItems: 'center',
        borderBottomLeftRadius: 40,
        borderBottomRightRadius: 40,
        flexDirection: 'row',
        paddingRight: 20,
        paddingLeft: 20,
    },
    section2: {
        flex: 1,
        paddingBottom: 20,
        backgroundColor: 'lightgray',
        borderTopLeftRadius: 40,
        borderTopRightRadius: 40,
    },
    image: {
        flex: 1,
        width: 300,
        height: 300,
        marginLeft: 'auto',
        marginRight: 'auto'
    },
    category: {
        flex: 1,
        marginTop: 30,
        marginBottom: 30
    },
    categoryItems: {
        height: 230,
        marginRight: 30,
        marginLeft: 30,
        marginBottom: 10,
        borderColor: colors.primary,
        borderRadius: 25,
        backgroundColor: 'white',
        elevation: 10,
        overflow: 'hidden',
    },
    categoryTitle: {
        fontSize: 19,
        textAlign: 'center',
        fontWeight: 'bold',
        color: 'white',
        marginTop: 10,
    },
    categoryImage: {
        flex: 1,
        backgroundColor: 'white',
        margin: 5,
        borderRadius: 20,
        position: 'relative',
        overflow: 'hidden'
    },
    progressBar: {
        flex: .1,
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        padding: 5,
        marginTop: 5
    },
    navigationBar: {
        height: 60,
        marginTop: -30,
        backgroundColor: colors.primary,
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-around',
    }
})

export default Home;