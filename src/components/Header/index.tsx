import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { styles } from './styles';
import { UserPhoto } from '../UserPhoto';
import LogoSvg from '../../assets/logo.svg';

export function Header() {
    return (
        <View style={styles.container} accessible={true}>
            <LogoSvg />
            <View style={styles.logoutButton} accessible={true}>
                <TouchableOpacity
                    accessible={true}
                    accessibilityLabel="Pressione-me para sair do App!"
                >
                    <Text style={styles.logoutText}>Sair</Text>
                </TouchableOpacity>
                <UserPhoto imageUri='https://e7.pngegg.com/pngimages/549/560/png-clipart-computer-icons-login-scalable-graphics-email-accountability-blue-logo-thumbnail.png' />
            </View>
        </View >
    );
}