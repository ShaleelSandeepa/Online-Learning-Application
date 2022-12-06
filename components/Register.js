import React from "react";
import { useNavigation } from "@react-navigation/native";
import { TextInput } from 'react-native-element-textinput';
import colors from '../Colors';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import {
    View,
    SafeAreaView,
    Text,
    StyleSheet,
    Image,
    TouchableOpacity,
    ScrollView
} from "react-native";

const Register = () => {
    const navigation = useNavigation();
    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.section1}>
                <Text style={{color: 'white', paddingLeft: 50, paddingRight: 50}}>Don't you have an account already ?</Text>
            </View>
            <View style={styles.section2}>
                <ScrollView style={{paddingLeft: 10, paddingRight: 10}}>
                    <Image source={require('../assets/register.png')} style={styles.image}/>
                    <Text style={{textAlign: 'center', color: colors.primary, fontSize: 30, fontWeight: 'bold'}}>Register</Text>
                    <View>
                        <View style={styles.typingTab}>
                            <TextInput
                                style={styles.input}
                                labelStyle={styles.labelStyle}
                                inputStyle={{fontSize: 14}}
                                placeholderStyle={{fontSize: 14, color: 'gray'}}
                                textErrorStyle={{fontSize: 14}}
                                label="Username"
                                placeholder="user name"
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
                                label="Email"
                                placeholder="E mail"
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
                                label="Phone"
                                placeholder="Phone"
                                placeholderTextColor="gray"
                                focusColor= {colors.primary}
                                keyboardType="numeric"
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
                        <View style={styles.typingTab}>
                            <TextInput
                                style={styles.input}
                                labelStyle={styles.labelStyle}
                                inputStyle={{fontSize: 14}}
                                placeholderStyle={{fontSize: 14, color: 'gray'}}
                                textErrorStyle={{fontSize: 14}}
                                label="Confirm password"
                                placeholder="Confirm password"
                                placeholderTextColor="gray"
                                focusColor= {colors.primary}
                                secureTextEntry
                            />
                        </View>
                        <View style={{flexDirection: 'row', margin: 10, justifyContent: 'center'}}>
                            <MaterialCommunityIcons name="checkbox-blank-outline" size={20} color="black" />
                            <Text> Agree with </Text>
                            <Text style={{color: 'dodgerblue'}}>Terms & conditions</Text>
                        </View>
                        <View style={styles.buttons}>
                            <TouchableOpacity onPress={() => navigation.navigate('Login')}>
                                <View style={styles.registerBtn}>
                                    <Text style={{color: 'white', textAlign: 'center', fontSize: 16}}>Register</Text>
                                </View>
                            </TouchableOpacity>
                        </View>
                    </View>
                </ScrollView>
            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'lightgray',
    },
    section1: {
        height: 100,
        backgroundColor: colors.primary,
        alignItems: 'center',
        marginBottom: -30
    },
    section2: {
        flex: 1,
        backgroundColor: 'white',
        borderRadius: 30,
        marginLeft: 20,
        marginRight: 20,
        marginBottom: 20,
        marginTop: -40,
        paddingRight: 5,
        paddingLeft: 5,
        elevation: 10
    },
    image: {
        width: 180,
        height: 180,
        marginLeft: 'auto',
        marginRight: 'auto'
    },
    typingTab: {
        margin: 7,
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
    registerBtn: {
        marginTop: 10,
        padding: 10,
        backgroundColor: colors.primary,
        borderColor: colors.primary,
        borderWidth: 1,
        borderRadius: 8
    }
})

export default Register;