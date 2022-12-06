import React from "react";
import colors from '../Colors';
import { useNavigation } from '@react-navigation/native';
import { Ionicons } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import { TextInput } from 'react-native-element-textinput';
import {
    StyleSheet,
    View,
    Text,
    SafeAreaView,
    ScrollView,
    Image,
    TouchableOpacity
} from 'react-native';

const Login = () => {
    const navigation = useNavigation();
    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.section1}>
                <Text style={{color: 'white', paddingLeft: 40, paddingRight: 40, textAlign: 'center'}}>Welcome... !</Text>
            </View>
            <View style={styles.section2}>
                <ScrollView style={{paddingLeft: 10, paddingRight: 10}}>
                    <Image source={require('../assets/login.jpg')} style={styles.image}/>
                    <Text style={{textAlign: 'center', color: colors.primary, fontSize: 30, fontWeight: 'bold'}}>Login</Text>
                    <View>
                        <View style={styles.typingTab}>
                            <TextInput
                                style={styles.input}
                                labelStyle={styles.labelStyle}
                                inputStyle={{fontSize: 14}}
                                placeholderStyle={{fontSize: 14, color: 'gray'}}
                                textErrorStyle={{fontSize: 14}}
                                label="Username"
                                placeholder="User name"
                                placeholderTextColor="gray"
                                focusColor= {colors.primary}
                            />
                        </View>
                        <View style={styles.typingTab}>
                            <TextInput
                                style={styles.input}
                                labelStyle={styles.labelStyle}
                                inputStyle={{fontSize: 14}}
                                placeholderStyle={{fontSize: 14, color: 'gray'}}
                                textErrorStyle={{fontSize: 14}}
                                label="Password"
                                placeholder="Password"
                                placeholderTextColor="gray"
                                focusColor= {colors.primary}
                                secureTextEntry
                            />
                        </View>
                        <View style={{flexDirection: 'row', justifyContent: 'space-between', marginLeft: 10, marginRight: 10}}>
                            <View style={{flexDirection: 'row'}}>
                                <MaterialCommunityIcons name="checkbox-blank-outline" size={20} color="black" />
                                <Text> Remember me</Text>
                            </View>
                            <Text style={{color: 'dodgerblue'}}>Forgotten password</Text>
                        </View>
                        <View style={styles.buttons}>
                            <TouchableOpacity onPress={() => navigation.navigate('TabNavigator', {screen : 'Home'}) }>
                                <View style={styles.loginBtn}>
                                    <Text style={{color: 'white', textAlign: 'center', fontSize: 16}}>Login</Text>
                                </View>
                            </TouchableOpacity>
                            <TouchableOpacity onPress={() => navigation.navigate('Register')}>
                                <View style={styles.registerBtn}>
                                    <Text style={{color: colors.primary, textAlign: 'center', fontSize: 16}}>Register</Text>
                                </View>
                            </TouchableOpacity>
                            <Text style={{margin: 20, textAlign: 'center'}}>OR</Text>
                            <View style={{flexDirection: 'row', justifyContent: 'space-around', alignItems: 'center'}}>
                                <View><AntDesign name="google" size={35} style={{color: colors.primary}} /></View>
                                <View><MaterialCommunityIcons name="facebook" size={41} style={{color: colors.primary}} /></View>
                                <View><Ionicons name="logo-twitter" size={35} style={{color: colors.primary}} /></View>
                            </View>
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
        marginBottom: -30,
        position: 'relative',
        marginTop: 0
    },
    section2: {
        flex: 1,
        backgroundColor: 'white',
        borderRadius: 30,
        marginLeft: 20,
        marginRight: 20,
        marginBottom: 20,
        marginTop: -40,
        paddingLeft: 5,
        paddingRight: 5,
        elevation: 10,
        position: 'relative',
    },
    image: {
        width: 200,
        height: 200,
        marginLeft: 'auto',
        marginRight: 'auto'
    },
    typingTab: {
        margin: 10,
    },
    input: {
        height: 45,
        paddingHorizontal: 12,
        borderRadius: 8,
        borderWidth: 1,
        borderColor: colors.primary,
    },
    labelStyle: {
        fontSize: 14,
        position: 'absolute',
        top: -10,
        backgroundColor: 'white',
        paddingHorizontal: 4,
        marginLeft: -4,
    },
    buttons: {
        margin: 10,
    },
    loginBtn: {
        marginTop: 20,
        padding: 10,
        backgroundColor: colors.primary,
        borderColor: colors.primary,
        borderWidth: 1,
        borderRadius: 8
    },
    registerBtn: {
        marginTop: 20,
        padding: 10,
        backgroundColor: 'white',
        borderColor: colors.primary,
        borderWidth: 1,
        borderRadius: 8
    }
    
});

export default Login;   