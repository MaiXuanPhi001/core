import React from 'react';
import { StyleProp, TextStyle, View, ViewProps, ViewStyle } from 'react-native';

interface Props {
    flex?: number
    width?: number
    height?: number
    maxWidth?: number
    maxHeight?: number
    row?: boolean
    m?: number
    mx?: number
    my?: number
    mt?: number
    mr?: number
    mb?: number
    ml?: number
    p?: number
    px?: number
    py?: number
    pt?: number
    pr?: number
    pb?: number
    pl?: number
    bg?: string
    opacity?: number
    wrap?: boolean
    alignItems?: 'flex-start' | 'flex-end' | 'center' | 'stretch' | 'baseline'
    position?: 'absolute' | 'relative'
    center?: boolean
    justifyContent?: "flex-start" | "flex-end" | "center" | "space-between" | "space-around" | "space-evenly"
    radius?: number
    borderTopLeftRadius?: number
    borderTopRightRadius?: number
    borderBottomRightRadius?: number
    borderBottomLeftRadius?: number
    borderWidth?: number
    borderColor?: string
    zIndex?: number
    overflow?: "visible" | "hidden" | "scroll"
    children?: React.JSX.Element | React.JSX.Element[]
    styles?: StyleProp<TextStyle>
}

const Box: React.FC<Props & ViewProps> = ({
    flex,
    width,
    height,
    maxWidth,
    maxHeight,
    row,
    m,
    mx,
    my,
    mt,
    mr,
    mb,
    ml,
    p,
    px,
    py,
    pt,
    pr,
    pb,
    pl,
    bg,
    opacity,
    position,
    wrap,
    alignItems,
    justifyContent,
    center,
    radius,
    borderTopLeftRadius,
    borderTopRightRadius,
    borderBottomRightRadius,
    borderBottomLeftRadius,
    borderWidth,
    borderColor,
    zIndex,
    overflow,
    styles,
    children,
    ...rest
}) => {
    const boxStyle: StyleProp<ViewStyle> = [
        {
            flex,
            width,
            height,
            maxWidth,
            maxHeight,
            margin: m,
            marginHorizontal: mx,
            marginVertical: my,
            marginTop: mt,
            marginRight: mr,
            marginBottom: mb,
            marginLeft: ml,
            padding: p,
            paddingHorizontal: px,
            paddingVertical: py,
            paddingTop: pt,
            paddingRight: pr,
            paddingBottom: pt,
            paddingLeft: pl,
            backgroundColor: bg,
            opacity,
            position,
            justifyContent,
            alignItems,
            borderRadius: radius,
            borderTopLeftRadius,
            borderTopRightRadius,
            borderBottomRightRadius,
            borderBottomLeftRadius,
            borderWidth,
            borderColor,
            zIndex,
            overflow,
        },
        row && { flexDirection: 'row' },
        wrap && { flexWrap: 'wrap' },
        center && { alignItems: 'center', justifyContent: 'center' },
    ]

    return (
        <View
            style={[
                boxStyle,
                styles
            ]}
            {...rest}
        >
            {children}
        </View>
    )
}

export default Box