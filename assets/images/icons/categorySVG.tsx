import React from "react";
import Svg, {ClipPath, Defs, G, Path, Rect} from "react-native-svg";

const CategorySVG = () => {

    return (
        <Svg width="24" height="24" viewBox="0 0 24 24" fill="none">
            <G clip-path="url(#clip0_89_705)">
                <Path d="M0 0L24 24" stroke="black" strokeWidth="2" strokeLinecap="round"/>
                <Path d="M0 5L19 24" stroke="black" strokeWidth="2" strokeLinecap="round"/>
                <Path d="M0 10L14 24" stroke="black" strokeWidth="2" strokeLinecap="round"/>
                <Path d="M0 15L9 24" stroke="black" strokeWidth="2" strokeLinecap="round"/>
                <Path d="M0 20L4 24" stroke="black" strokeWidth="2" strokeLinecap="round"/>
                <Path d="M5 0L24 19" stroke="black" strokeWidth="2" strokeLinecap="round"/>
                <Path d="M10 0L24 14" stroke="black" strokeWidth="2" strokeLinecap="round"/>
                <Path d="M15 0L24 9" stroke="black" strokeWidth="2" strokeLinecap="round"/>
                <Path d="M20 0L24 4" stroke="black" strokeWidth="2" strokeLinecap="round"/>
            </G>
            <Defs>
                <ClipPath id="clip0_89_705">
                    <Rect width="24" height="24" fill="white"/>
                </ClipPath>
            </Defs>
        </Svg>

    )
}

export default CategorySVG;