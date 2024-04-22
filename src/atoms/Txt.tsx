import React from 'react';
import { StyleProp, Text, TextProps, TextStyle } from 'react-native';
import { colors } from '~/themes/colors';

interface Props {
    text: string
    color?: string
    size?: number
    fontStyle?: any
    font?: string
    flex?: number
    alignSelf?: 'auto' | 'baseline' | 'center' | 'flex-end' | 'flex-start' | 'stretch'
    fontWeight?: "normal" | "bold" | "100" | "200" | "300" | "400" | "500" | "600" | "700" | "800" | "900";
    bold?: boolean
    m?: number
    mx?: number
    my?: number
    mt?: number
    mr?: number
    mb?: number
    ml?: number
    bg?: string
    opacity?: number
    position?: 'absolute' | 'relative'
    styles?: StyleProp<TextStyle>
}

const Txt: React.FC<Props & TextProps> = ({
    text = '',
    color = colors.black,
    size = 14,
    fontStyle,
    font,
    flex,
    alignSelf,
    fontWeight,
    bold,
    m,
    mx,
    my,
    mt,
    mr,
    mb,
    ml,
    bg,
    opacity,
    position,
    styles,
    ...rest
}) => {
    const txtStyle: StyleProp<TextStyle> = [
        {
            color,
            fontSize: size,
            fontStyle,
            fontFamily: font,
            flex,
            alignSelf,
            fontWeight,
            margin: m,
            marginHorizontal: mx,
            marginVertical: my,
            marginTop: mt,
            marginRight: mr,
            marginBottom: mb,
            marginLeft: ml,
            backgroundColor: bg,
            opacity,
            position,
        },
        bold && { fontWeight: 'bold' }
    ]

    return (
        <Text
            style={[
                txtStyle,
                styles
            ]}
            {...rest}
        >
            {text}
        </Text>
    )
}

export default Txt