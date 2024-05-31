import Link from 'next/link'
import { Text, useColorModeValue } from '@chakra-ui/react'
import styled from '@emotion/styled'

const LogoBox = styled.span`
  font-weight: bold;
  font-size: 18px;
  display: inline-flex;
  align-items: center;
  height: 30px;
  line-height: 20px;
  padding: 10px;

  > img {
    transition: 200ms ease;
    height: auto;
    width: 8%;
  }


  &:hover > img {
    animation: bounce 0.5s infinite;
  }

  @keyframes bounce {
    0%, 100% {
        transform: translateY(0);
    }
    50% {
        transform: translateY(-10px);
    }




  
`

const Logo = () => {
  return (
    (<Link href="/" scroll={false}>

      <LogoBox>
        <img src="/images/blob.png"></img>
        <Text
          color={useColorModeValue('gray.800', 'whiteAlpha.900')}
          fontFamily='M PLUS Rounded 1c", sans-serif'
          fontWeight="bold"
          ml={3}
      
        >
          Sean Kim
        </Text>
      </LogoBox>

    </Link>)
  );
}

export default Logo
