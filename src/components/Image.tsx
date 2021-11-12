import React, { InputHTMLAttributes } from 'react';
import styles from '../styles/components/Image';

interface ImageProps extends InputHTMLAttributes<HTMLImageElement>{
  source: string,
  alternativeText: string,
  widthPercentual?: number | string,
  heightPercentual?: number | string,
}

const defaultProps = {
  widthPercentual: 'auto',
  heightPercentual: 'auto',
};

const { ImageTag } = styles;

const Image: React.FC<ImageProps> = (props) => {
  const {
    source,
    alternativeText,
    heightPercentual,
    widthPercentual,
  } = props;

  const height = Number.isInteger(heightPercentual) && `${heightPercentual}%`;
  const width = Number.isInteger(widthPercentual) && `${widthPercentual}%`;

  return (
    <>
      <ImageTag
        src={source}
        alt={alternativeText}
        width={width}
        height={height}
      />
    </>
  );
};

Image.defaultProps = defaultProps;

export default Image;
