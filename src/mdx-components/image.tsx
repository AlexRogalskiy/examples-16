import NextImage from 'next/image';
import { chakra } from '@chakra-ui/react';

const Img = chakra(NextImage, {
  shouldForwardProp: (prop) => ['width', 'height', 'src', 'alt'].includes(prop),
});

const Image = (props) => (
  <Img {...props} width="100%" height="100%" />
);

export default Image;
