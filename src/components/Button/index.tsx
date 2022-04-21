import React from 'react';
import {
    Text,
    TouchableOpacity,
    TouchableOpacityProps,
    ColorValue,
    ActivityIndicator,
} from 'react-native';
import { styles } from './styles';
import { AntDesign } from '@expo/vector-icons'

export function Button({
    title,
    color,
    backgroundColor,
    isLoading = false,
    icon,
    ...rest
}) {
    return (

        <TouchableOpacity
            style={[styles.button, { backgroundColor }]}
            accessible={true}
            accessibilityLabel="Pressione-me para sair do App!"
            activeOpacity={0.7}
            disabled={isLoading}
        >
            {
                isLoading ? <ActivityIndicator color={color} /> :
                    <>
                        <AntDesign name={icon} size={24} style={styles.icon} />
                        <Text style={[styles.title, { color }]}>
                            {title}
                        </Text>
                    </>
            }
        </TouchableOpacity>

    );
}