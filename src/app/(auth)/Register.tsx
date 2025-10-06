import { router } from 'expo-router'
import React, { useState } from 'react'
import { Image, Keyboard, KeyboardAvoidingView, Platform, ScrollView, StatusBar, Text, TextInput, TouchableOpacity, View } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'

type Props = {}

const Register = (props: Props) => {
    const [ username, setUsername ] = useState('')
    const [ email, setEmail ] = useState('')
    const [ phone, setPhone ] = useState('')
    const [ password, setPassword ] = useState('')
    const [ confirmPassword, setConfirmPassword ] = useState('')

    const handleSignUp = () => {
        Keyboard.dismiss()
        console.log('Sign Up:', { username, email, phone, password, confirmPassword })
        // Add sign up logic here
        // router.push('/two')
    }

    const logo = require('@assets/images/logo.png')

    return (
        <SafeAreaView className='flex-1 bg-black'>
            <StatusBar barStyle='light-content' backgroundColor='#000' />
            <KeyboardAvoidingView
                behavior={Platform.OS === 'ios' ? 'padding' : undefined}
                className='flex-1'
                keyboardVerticalOffset={0}
            >
                <ScrollView
                    contentContainerStyle={{ flexGrow: 1 }}
                    keyboardShouldPersistTaps='handled'
                    showsVerticalScrollIndicator={false}
                >
                    <TouchableOpacity
                        activeOpacity={1}
                        onPress={Keyboard.dismiss}
                        className='flex-1'
                    >
                        <View className='flex-1 items-center justify-center px-6 py-8'>
                            {/* Logo */}
                            <View className='items-center mb-12'>
                                <Image
                                    source={logo}
                                    className='w-32 h-32 mb-4'
                                />
                                <Text className='text-white text-3xl font-bold'>
                                    Create Account
                                </Text>
                                <Text className='text-gray-400 text-base mt-2'>Sign up to get started</Text>
                            </View>

                            {/* Sign Up Form */}
                            <View className='w-full max-w-[400px]'>
                                {/* Username Field */}
                                <View className='mb-5'>
                                    <Text className='text-gray-300 text-sm font-medium mb-2 ml-1'>Username</Text>
                                    <TextInput
                                        className={`bg-gray-800 text-white px-4 rounded-xl border border-gray-700 text-base ${Platform.OS === 'ios' ? 'py-4' : 'py-3'
                                            }`}
                                        placeholder='Enter your username'
                                        placeholderTextColor='#9ca3af'
                                        value={username}
                                        onChangeText={setUsername}
                                        autoCapitalize='none'
                                        autoCorrect={false}
                                        returnKeyType='next'
                                    />
                                </View>

                                {/* Email Field */}
                                <View className='mb-5'>
                                    <Text className='text-gray-300 text-sm font-medium mb-2 ml-1'>Email</Text>
                                    <TextInput
                                        className={`bg-gray-800 text-white px-4 rounded-xl border border-gray-700 text-base ${Platform.OS === 'ios' ? 'py-4' : 'py-3'
                                            }`}
                                        placeholder='Enter your email'
                                        placeholderTextColor='#9ca3af'
                                        value={email}
                                        onChangeText={setEmail}
                                        keyboardType='email-address'
                                        autoCapitalize='none'
                                        autoCorrect={false}
                                        returnKeyType='next'
                                    />
                                </View>

                                {/* Phone Field */}
                                <View className='mb-5'>
                                    <Text className='text-gray-300 text-sm font-medium mb-2 ml-1'>Phone Number</Text>
                                    <TextInput
                                        className={`bg-gray-800 text-white px-4 rounded-xl border border-gray-700 text-base ${Platform.OS === 'ios' ? 'py-4' : 'py-3'
                                            }`}
                                        placeholder='Enter your phone number'
                                        placeholderTextColor='#9ca3af'
                                        value={phone}
                                        onChangeText={setPhone}
                                        keyboardType='phone-pad'
                                        returnKeyType='next'
                                    />
                                </View>

                                {/* Password Field */}
                                <View className='mb-5'>
                                    <Text className='text-gray-300 text-sm font-medium mb-2 ml-1'>Password</Text>
                                    <TextInput
                                        className={`bg-gray-800 text-white px-4 rounded-xl border border-gray-700 text-base ${Platform.OS === 'ios' ? 'py-4' : 'py-3'
                                            }`}
                                        placeholder='Enter your password'
                                        placeholderTextColor='#9ca3af'
                                        value={password}
                                        onChangeText={setPassword}
                                        secureTextEntry
                                        autoCapitalize='none'
                                        autoCorrect={false}
                                        returnKeyType='next'
                                    />
                                </View>

                                {/* Confirm Password Field */}
                                <View className='mb-8'>
                                    <Text className='text-gray-300 text-sm font-medium mb-2 ml-1'>Confirm Password</Text>
                                    <TextInput
                                        className={`bg-gray-800 text-white px-4 rounded-xl border border-gray-700 text-base ${Platform.OS === 'ios' ? 'py-4' : 'py-3'
                                            }`}
                                        placeholder='Confirm your password'
                                        placeholderTextColor='#9ca3af'
                                        value={confirmPassword}
                                        onChangeText={setConfirmPassword}
                                        secureTextEntry
                                        autoCapitalize='none'
                                        autoCorrect={false}
                                        returnKeyType='done'
                                        onSubmitEditing={handleSignUp}
                                    />
                                </View>

                                {/* Sign Up Button */}
                                <TouchableOpacity
                                    onPress={handleSignUp}
                                    activeOpacity={0.8}
                                    className='bg-blue-600 py-4 rounded-xl items-center shadow-lg shadow-blue-600/30'
                                >
                                    <Text className='text-white font-bold text-lg'>Sign Up</Text>
                                </TouchableOpacity>

                                {/* Login Link */}
                                <View className='flex-row justify-center mt-6'>
                                    <Text className='text-gray-400 text-sm'>Already have an account? </Text>
                                    <TouchableOpacity activeOpacity={0.7} onPress={() => router.replace('/LoginScreen')}>
                                        <Text className='text-blue-400 text-sm font-medium'>Login</Text>
                                    </TouchableOpacity>
                                </View>
                            </View>
                        </View>
                    </TouchableOpacity>
                </ScrollView>
            </KeyboardAvoidingView>
        </SafeAreaView>
    )
}

export default Register