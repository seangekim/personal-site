import NextLink from 'next/link'
import Image from 'next/image'
import { Box, Text, LinkBox, LinkOverlay } from '@chakra-ui/react'
import { Global } from '@emotion/react'

export const GridItem = ({ children, href, title, thumbnail }) => (
  <Box w="100%" textAlign="center">
    <LinkBox cursor="pointer">
      <Image
        src={thumbnail}
        alt={title}
        width={200}
        height={200}

        className="grid-item-thumbnail"
        placeholder="blur"
        loading="lazy"
        objectFit="cover"
        // layout="responsive"
        style={{ borderRadius: '12px' }}
        
      />
      <LinkOverlay href={href} target="_blank">
        <Text mt={2}>{title}</Text>
      </LinkOverlay>
      <Text fontSize={14}>{children}</Text>
    </LinkBox>
  </Box>
)

export const ProjectGridItem = ({
  children,
  category = 'projects',
  id,
  title,
  thumbnail
}) => (
  <Box w="80%" textAlign="center">
    <LinkBox
      as={NextLink}
      href={`/${category}/${id}`}
      scroll={false}
      cursor="pointer"
    >

      {/* Layout  */}
      <Image
        src={thumbnail}
        alt={title}
        loading="lazy"
        width={100}
        height={100}
        
        // THIS LAYOUT IS WHY IT THROWS A WARNING
        layout="responsive"
        className="grid-item-thumbnail"
        placeholder="blur"
        style={{ borderRadius: '12px' }}
      />





      
      <LinkOverlay as="div" href={`/${category}/${id}`}>
        <Text mt={2} fontSize={20}>
          {title}
        </Text>
      </LinkOverlay>
      <Text fontSize={14}>{children}</Text>
    </LinkBox>
  </Box>
)

export const GridItemStyle = () => (
  <Global
    styles={`
      .grid-item-thumbnail {
        border-radius: 12px;
      }
      .image-hover-wrapper:hover {
        transform: scale(5); // Increase the scale value to make the image grow more
      }
    
    `}
  />
)


