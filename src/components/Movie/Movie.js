import { Box, Center, Heading, Image, Stack, Text, useColorModeValue } from '@chakra-ui/react';
import React from 'react';
import Button from '../ui/Button';
import { Link } from 'react-router-dom';

const Movie = ({ item }) => {
  const urlImage = `https://image.tmdb.org/t/p/w300/${item.poster_path}`;
  const bgImage = `https://image.tmdb.org/t/p/w300/${item.backdrop_path}`;

  return (
    <Center py={6} m={5}>
      <Box
        maxW="450px"
        w="250px"
        height="800px"
        bg={useColorModeValue('white', 'gray.800')}
        boxShadow="2xl"
        rounded="md"
        overflow="hidden"
        transition="transform 0.2s"
        _hover={{ transform: 'scale(1.1)' }}
        display={"flex"}
        flexDirection={"column"}
      >
       <Image
        h="400px"
        w="full"
        src={urlImage} 
        objectFit="cover"
        objectPosition="50% 50%" 
        alt="#"
        boxShadow="md"
        transition="transform 0.2s"
        borderRadius="md"
        maxH="800px" 
        />

<Box p={6} display="flex" flexDirection="column" alignItems="center">
          <Stack spacing={2} align="center" mb={4}>
          <Heading fontSize="xl" fontWeight="bold" color={useColorModeValue('gray.800', 'white')}>
              {item.title}
            </Heading>
          </Stack>

          <Stack direction="row" justify="center" spacing={4} mb={4}>
            <Stack align="center">
            <Text fontWeight="bold">{item.popularity}</Text>
              <Text fontSize="sm" color={useColorModeValue('gray.500', 'gray.300')}>
                Popularity
              </Text>
            </Stack>
            <Stack align="center">
            <Text fontWeight="bold">{item.vote_average}</Text>
            <Text fontSize="sm" color={useColorModeValue('gray.500', 'gray.300')}>
                Vote Average
              </Text>
            </Stack>
          </Stack>

          <Text fontSize="sm" color={useColorModeValue('gray.500', 'gray.300')}>
            Release Date: {item.release_date}
          </Text>

          <Link to={`/movie/${item.id}`} style={{ width: '100%' }}>
            <Button variant="secondary" mt={4}>
              Watch
            </Button>
            <Button variant="primary" mt={4}>
              Trailer
            </Button>
            <Button variant="secondary" mt={4}>
              Deskripsi
            </Button>
          </Link>
        </Box>
      </Box>
    </Center>
  );
};


export default Movie;