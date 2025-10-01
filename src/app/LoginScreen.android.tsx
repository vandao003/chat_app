import React, { useState } from 'react'
import { Image, Keyboard, ScrollView, StatusBar, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'

type Props = {}

const LoginScreen = (props: Props) => {
    const [ username, setUsername ] = useState('')
    const [ phone, setPhone ] = useState('')
    const [ password, setPassword ] = useState('')

    const handleLogin = () => {
        Keyboard.dismiss()
        console.log('Login:', { username, phone, password })
        // Add your login logic here
    }

    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: '#000' }}>
            <StatusBar barStyle='light-content' backgroundColor='#000' />
            {/* Android doesn't need KeyboardAvoidingView - windowSoftInputMode handles this */}
            <ScrollView
                contentContainerStyle={{ flexGrow: 1 }}
                keyboardShouldPersistTaps='handled'
                showsVerticalScrollIndicator={false}
            >
                <TouchableOpacity
                    activeOpacity={1}
                    onPress={Keyboard.dismiss}
                    style={{ flex: 1 }}
                >
                    <View className='flex-1 items-center justify-center px-6 py-8'>
                        {/* Logo */}
                        <View className='items-center mb-10'>
                            <Image
                                source={require('../../assets/images/logo.png')}
                                className='w-32 h-32'
                                style={{ marginBottom: 16 }}
                            />
                            <Text className='text-white text-3xl font-bold'>Welcome</Text>
                            <Text className='text-gray-400 text-base mt-2'>Sign in to continue</Text>
                        </View>

                        {/* Login Form */}
                        <View className='w-full' style={{ maxWidth: 400 }}>
                            {/* Username Field */}
                            <View className='mb-5'>
                                <Text className='text-gray-300 text-sm font-medium mb-2 ml-1'>Username</Text>
                                <TextInput
                                    style={styles.input}
                                    placeholder='Enter your username'
                                    placeholderTextColor='#9ca3af'
                                    value={username}
                                    onChangeText={setUsername}
                                    autoCapitalize='none'
                                    autoCorrect={false}
                                    returnKeyType='next'
                                    underlineColorAndroid='transparent'
                                />
                            </View>

                            {/* Phone Field */}
                            <View className='mb-5'>
                                <Text className='text-gray-300 text-sm font-medium mb-2 ml-1'>Phone Number</Text>
                                <TextInput
                                    style={styles.input}
                                    placeholder='Enter your phone number'
                                    placeholderTextColor='#9ca3af'
                                    value={phone}
                                    onChangeText={setPhone}
                                    keyboardType='phone-pad'
                                    returnKeyType='next'
                                    underlineColorAndroid='transparent'
                                />
                            </View>

                            {/* Password Field */}
                            <View className='mb-8'>
                                <Text className='text-gray-300 text-sm font-medium mb-2 ml-1'>Password</Text>
                                <TextInput
                                    style={styles.input}
                                    placeholder='Enter your password'
                                    placeholderTextColor='#9ca3af'
                                    value={password}
                                    onChangeText={setPassword}
                                    secureTextEntry
                                    autoCapitalize='none'
                                    autoCorrect={false}
                                    returnKeyType='done'
                                    onSubmitEditing={handleLogin}
                                    underlineColorAndroid='transparent'
                                />
                            </View>

                            {/* Login Button */}
                            <TouchableOpacity
                                onPress={handleLogin}
                                activeOpacity={0.8}
                                style={styles.loginButton}
                            >
                                <Text className='text-white font-bold text-lg'>Login</Text>
                            </TouchableOpacity>

                            {/* Forgot Password Link */}
                            <TouchableOpacity
                                className='mt-16 items-center p-2 rounded-md'
                                activeOpacity={0.7}
                            >
                                <Text className='text-blue-400 text-sm font-medium mt-4'>Forgot Password?</Text>
                            </TouchableOpacity>

                            {/* Sign Up Link */}
                            <View className='flex-row justify-center'>
                                <Text className='text-gray-400 text-sm'>Don't have an account? </Text>
                                <TouchableOpacity activeOpacity={0.7}>
                                    <Text className='text-blue-400 text-sm font-medium'>Sign Up</Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                    </View>
                </TouchableOpacity>
            </ScrollView>
        </SafeAreaView>
    )
}

export default LoginScreen

const styles = StyleSheet.create({
    input: {
        backgroundColor: '#1f2937',
        color: '#fff',
        paddingHorizontal: 16,
        paddingVertical: 12,  // Android optimized padding
        borderRadius: 12,
        borderWidth: 1,
        borderColor: '#374151',
        fontSize: 16,
    },
    loginButton: {
        backgroundColor: '#2563eb',
        paddingVertical: 16,
        borderRadius: 12,
        alignItems: 'center',
        elevation: 8,  // Android elevation for shadow
    },
})
