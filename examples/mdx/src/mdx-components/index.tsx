import { forwardRef } from 'react';
import {
  Heading,
  Text,
  chakra,
  useColorModeValue,
  Box,
  Kbd,
  Table,
  Alert,
  Link,
  Code,
  UnorderedList,
  OrderedList,
  ListItem,
} from '@chakra-ui/react';
import NextLink from 'next/link';

import CodeBlock from './code-block';
import Image from './image';

const Pre = (props) => <chakra.div my="2em" borderRadius="sm" {...props} />

const THead = (props) => (
  <chakra.th
    bg={useColorModeValue("gray.50", "whiteAlpha.100")}
    fontWeight="semibold"
    p={2}
    fontSize="sm"
    {...props}
  />
)

const TData = (props) => (
  <chakra.td
    p={2}
    borderTopWidth="1px"
    borderColor="inherit"
    fontSize="sm"
    whiteSpace="normal"
    {...props}
  />
)

const MDXComponents = {
  h1: (props) => <Heading {...props} size="3xl" as="h1" apply="mdx.h1" />,
  h2: (props) => <Heading {...props} size="2xl" as="h2" apply="mdx.h2" />,
  h3: (props) => <Heading {...props} size="xl" as="h3" apply="mdx.h3" />,
  h4: (props) => <Heading {...props} size="lg" as="h4" apply="mdx.h4" />,
  h5: (props) => <Heading {...props} size="md" as="h5" apply="mdx.h5" />,
  h6: (props) => <Heading {...props} size="sm" as="h6" apply="mdx.h6s" />,
  p: (props) => <Text {...props} apply="mdx.p" />,
  inlineCode: (props) => <Code {...props} colorScheme="purple" />,
  hr: (props) => <chakra.hr apply="mdx.hr" {...props} />,
  strong: (props) => <Box as="strong" fontWeight="semibold" {...props} />,
  pre: Pre,
  kbd: Kbd,
  br: ({ reset, ...props }) => (
    <Box
      as={reset ? "br" : undefined}
      height={reset ? undefined : "24px"}
      {...props}
    />
  ),
  code: CodeBlock,
  table: Table,
  th: THead,
  td: TData,
  a: forwardRef(({ children, href }: any, ref: any) => (
    <NextLink passHref href={href}>
      <Link ref={ref} apply="mdx.a">{children}</Link>
    </NextLink>
  )),
  ul: (props) => <UnorderedList apply="mdx.ul" {...props} />,
  ol: (props) => <OrderedList apply="mdx.ul" {...props} />,
  li: (props) => <ListItem pb="4px" {...props} />,
  img: Image,
  blockquote: (props) => (
    <Alert
      mt="4"
      role="none"
      status="warning"
      variant="left-accent"
      as="blockquote"
      rounded="4px"
      my="1.5rem"
      {...props}
    />
  ),
}

export default MDXComponents;
