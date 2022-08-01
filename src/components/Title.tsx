import {Box, Heading, Text, useColorModeValue} from '@chakra-ui/react'
import Section from './section'

function Title({titlesquote}: any) {
  return (
    <div>
    <Section delay={0.1}>
    <Box bg={useColorModeValue('gray.100', 'gray.700')} boxShadow="md" borderRadius={5} mb={6}>
    <Heading fontSize="2xl" pl={6} pt={3} color={useColorModeValue('teal.500', 'teal.300')} fontFamily="Press Start 2P, cursive">Anime: {titlesquote.anime}</Heading>
    <Heading fontSize="xl" pl={6} my={3} color={useColorModeValue('teal.500', 'teal.300')} fontFamily="Press Start 2P, cursive">Character: {titlesquote.character}</Heading>
    <Text px={6} pb={6} fontFamily="Press Start 2P, cursive"> &quot;{titlesquote.quote}&quot;</Text>
  </Box>
  </Section>
  </div>
  )
}

export default Title