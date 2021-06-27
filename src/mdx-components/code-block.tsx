import React from "react";
import Highlight, { defaultProps } from "prism-react-renderer";
import theme from "prism-react-renderer/themes/nightOwl";
import { chakra } from '@chakra-ui/react';

const CodeBlock = ({ children, className }) => {
  const language = className.replace("language-", "");

  return (
    <Highlight {...defaultProps} code={children} language={language} theme={theme}>
      {({ className, style, tokens, getLineProps, getTokenProps }) => (
        <chakra.pre py={2} px={3} className={className} style={style}>
          {tokens.map((line, i) => i < tokens.length - 1 && (
              <div {...getLineProps({ line, key: i })}>
                {line.map((token, key) => (
                  <span {...getTokenProps({ token, key })} />
                ))}
              </div>
          ))}
        </chakra.pre>
      )}
    </Highlight>
  )
};

export default CodeBlock;
