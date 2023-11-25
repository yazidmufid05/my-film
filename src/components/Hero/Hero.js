import React, { useEffect, useState } from 'react';
import { Flex, Heading, Image, Stack, Text, Spinner, Box, Button } from '@chakra-ui/react';

const Hero = () => {
  const [movie, setMovie] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  async function getDataApi() {
    const url = "https://www.omdbapi.com/?apikey=fcf50ae6&i=tt2975590";

    try {
      const response = await fetch(url);

      if (!response.ok) {
        throw new Error("Gagal mengambil data");
      }

      const data = await response.json();
      setMovie(data);
    } catch (error) {
      console.error("Error mengambil data:", error);
      setError(error);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    getDataApi();
  }, []);

  if (loading) {
    return (
      <Flex minH={'100vh'} justify={'center'} align={'center'}>
        <Spinner size="xl" />
      </Flex>
    );
  }

  if (error) {
    return (
      <Flex minH={'100vh'} justify={'center'} align={'center'}>
        <Box>
          <Text color={'red.500'}>Error mengambil data: {error.message}</Text>
        </Box>
      </Flex>
    );
  }

  return (
    <Stack minH={'100vh'} direction={{ base: 'column', md: 'row' }}>
      <Flex p={8} flex={1} align={'center'} justify={'center'} bg={'gray.800'} color={'white'}>
        <Stack spacing={6} w={'full'} maxW={'lg'}>
          <Heading fontSize={{ base: '3xl', md: '4xl', lg: '5xl' }} mb={4} textAlign={'center'}>
            <Text color={'red.400'} as={'span'}>
              {movie.Title}
            </Text>{' '}
            <Text fontSize={{ base: 'md', lg: 'lg' }} color={'gray.400'}>
              {movie.Genre}
            </Text>
          </Heading>
          <Text fontSize={{ base: 'md', lg: 'lg' }} color={'gray.400'}>
            {movie.Plot}
          </Text>
          <Text fontSize={{ base: 'md', lg: 'lg' }} color={'red.500'}>
            Disutradarai oleh: {movie.Director}
          </Text>
          <Text fontSize={{ base: 'md', lg: 'lg' }} color={'red.500'}>
            Pemeran: {movie.Actors}
          </Text>
          <Text fontSize={{ base: 'md', lg: 'lg' }} color={'red.500'}>
            Bahasa: {movie.Language}
          </Text>
          <Text fontSize={{ base: 'md', lg: 'lg' }} color={'red.500'}>
            Durasi: {movie.Runtime}
          </Text>
          <Text fontSize={{ base: 'md', lg: 'lg' }} color={'red.500'}>
            Tanggal Rilis: {movie.Released}
          </Text>
          <Stack direction={{ base: 'column', md: 'row' }} spacing={4} mt={6}>
            <Button colorScheme="red" variant='solid' size="lg">
              Tonton
            </Button>
            <Button colorScheme="gray" variant='solid' size="lg">
              Trailer
            </Button>
          </Stack>
        </Stack>
      </Flex>
      <Flex flex={1} justify={'center'} align={'center'}>
        <Image
          alt={movie.Title}
          objectFit={'cover'}
          src={movie.Poster}
          borderRadius="md"
          boxShadow="md"
          maxH="1200px"
        />
      </Flex>
    </Stack>
  );
};

export default Hero;
