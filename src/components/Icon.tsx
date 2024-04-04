import * as React from 'react';
import { SvgXml } from 'react-native-svg';

type IconProps = {
  icon: any;
  width: number;
  height: number;
  style?: {};
};

export default function Icon({ icon, width, height, style }: IconProps) {
  return <SvgXml width={width} height={height} xml={icon} style={style} />;
}
