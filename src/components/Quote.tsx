import { Box, Heading, Text, useColorModeValue } from '@chakra-ui/react'
import Section from './section'

function Quote({animequote}: any) {
  return (
    <Section delay={0.1}>
    <Box bg={useColorModeValue('gray.100', 'gray.700')} boxShadow="md" borderRadius={5} mb={6}>
    <Heading fontSize="2xl" pl={6} pt={3} color={useColorModeValue('teal.500', 'teal.300')} fontFamily="Press Start 2P, cursive">Anime: {animequote.anime}</Heading>
    <Heading fontSize="xl" pl={6} my={3} color={useColorModeValue('teal.500', 'teal.300')} fontFamily="Press Start 2P, cursive">Character: {animequote.character}</Heading>
    <Text px={6} pb={6} fontFamily="Press Start 2P, cursive"> &quot;{animequote.quote}&quot;</Text>
  </Box>
  </Section>
  )
}

export default Quote