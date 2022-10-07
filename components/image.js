import { getStrapiMedia } from "../lib/media";
import { Image } from '@chakra-ui/react'

const Image = ({ image }) => {
  const { alternativeText, width, height } = image.data.attributes;

  return (
    <Image
      layout="responsive"
      width={width}
      height={height}
      objectFit="contain"
      src={getStrapiMedia(image)}
      alt={alternativeText || ""}
    />
  );
};

export default Image;