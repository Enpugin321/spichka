import React, { useState } from 'react';
import {
    View,
    Text,
    StyleSheet,
    TouchableOpacity,
    LayoutChangeEvent,
} from 'react-native';
import Svg, { Defs, LinearGradient, Stop, Rect } from 'react-native-svg';

export default function ExpandableText({ children }: { children: string }) {
    const [expanded, setExpanded] = useState(false);
    const toggleExpanded = () => setExpanded(!expanded);

    return (
        <View style={styles.container}>
            <Text
                numberOfLines={expanded ? undefined : 3}
                style={styles.text}
            >
                {children}
            </Text>

            {!expanded && (
                <View style={styles.gradientOverlay}>
                    <Svg height="100%" width="100%">
                        <Defs>
                            <LinearGradient id="fade" x1="0" y1="0" x2="0" y2="1">
                                <Stop offset="0" stopColor="white" stopOpacity="0" />
                                <Stop offset="1" stopColor="white" stopOpacity="1" />
                            </LinearGradient>
                        </Defs>
                        <Rect
                            x="0"
                            y="0"
                            width="100%"
                            height="100%"
                            fill="url(#fade)"
                        />
                    </Svg>
                </View>
            )}

            <TouchableOpacity onPress={toggleExpanded}>
                <Text style={styles.readMore}>{expanded ? 'Скрыть' : 'Читать далее'}</Text>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        position: 'relative',
        paddingBottom: 12,
        backgroundColor: '#fff',
    },
    text: {
        fontSize: 16,
        color: '#000',
        lineHeight: 22,
    },
    gradientOverlay: {
        position: 'absolute',
        bottom: 36,
        left: 0,
        right: 0,
        height: 40,
    },
    readMore: {
        color: '#888',
        fontSize: 14,
        marginTop: 8,
    },
});

