import React from "react";

export type HeadingProps = {
  level?: 1 | 2 | 3 | 4 | 5 | 6;
} & React.HTMLAttributes<HTMLHeadingElement>;

export const Heading = ({ level = 1, children, ...props }: HeadingProps) => {
  const getStyle = () => {
    return {
      marginTop: 0,
      ...props.style,
    };
  };

  switch (level) {
    case 1: {
      return (
        <h1 {...props} style={getStyle()}>
          {children}
        </h1>
      );
    }
    case 2: {
      return (
        <h2 {...props} style={getStyle()}>
          {children}
        </h2>
      );
    }
    case 3: {
      return (
        <h3 {...props} style={getStyle()}>
          {children}
        </h3>
      );
    }
    case 4: {
      return (
        <h4 {...props} style={getStyle()}>
          {children}
        </h4>
      );
    }
    case 5: {
      return (
        <h5 {...props} style={getStyle()}>
          {children}
        </h5>
      );
    }
    case 6: {
      return (
        <h6 {...props} style={getStyle()}>
          {children}
        </h6>
      );
    }
  }
};
