import { Box, Container, Heading, Text, Button, VStack, useColorModeValue } from '@chakra-ui/react';
import { motion } from 'framer-motion';
import { Link as RouterLink } from 'react-router-dom';

const MotionBox = motion(Box);

const Home = () => {
  const textColor = useColorModeValue('gray.800', 'white');

  return (
    <Box minH="100vh" pt={20}>
      <Container maxW="1200px">
        <VStack spacing={8} align="center" textAlign="center">
          <MotionBox
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Heading
              as="h1"
              size="2xl"
              color={textColor}
              mb={4}
            >
              Olalekan Lawrence Adeyinka
            </Heading>
            <Text fontSize="xl" color="gray.500" mb={8}>
              Full Stack Developer | Problem Solver | Tech Enthusiast
            </Text>
          </MotionBox>

          <MotionBox
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <Text fontSize="lg" color="gray.600" maxW="800px" mb={8}>
              Welcome to my portfolio! I'm passionate about creating elegant solutions
              to complex problems using modern web technologies. Explore my projects
              and get in touch to discuss how we can work together.
            </Text>
          </MotionBox>

          <MotionBox
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <Button
              as={RouterLink}
              to="/projects"
              size="lg"
              colorScheme="brand"
              mr={4}
            >
              View Projects
            </Button>
            <Button
              as={RouterLink}
              to="/contact"
              size="lg"
              variant="outline"
              colorScheme="brand"
            >
              Contact Me
            </Button>
          </MotionBox>
        </VStack>
      </Container>
    </Box>
  );
};

export default Home; 