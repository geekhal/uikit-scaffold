import React, { ReactNode } from 'react';

export interface TitleProps {
  /**
   * Optional click handler
   */
  onClick?: () => void;
  /**
   * Element custom style
   */
  style?: React.StyleHTMLAttributes<HTMLHeadingElement>;
  /**
   * Element class name
   */
  className?: string;
  /**
   * Element heading level
   */
  heading?: number;
  /**
   * Element children content
   */
  children?: ReactNode;
}

export const Title = ({ heading = 1, ...rest }) => {
  const headingTag = 'h' + (heading >= 1 && heading <= 6 ? heading : 1);
  return React.createElement(headingTag, { ...rest });
};
