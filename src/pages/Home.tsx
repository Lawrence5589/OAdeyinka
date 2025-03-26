import { Box, Container, Heading, Text, Button, VStack, HStack, Icon, useColorModeValue, Flex, Image, IconButton } from '@chakra-ui/react';
import { motion } from 'framer-motion';
import { Link as RouterLink } from 'react-router-dom';
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';

const Home = () => {
  const textColor = useColorModeValue('gray.800', 'white');
  const bgColor = useColorModeValue('white', 'gray.800');

  const socialLinks = [
    { icon: FaGithub, href: 'https://github.com/Lawrence5589', label: 'GitHub' },
    { icon: FaLinkedin, href: 'https://linkedin.com/in/your-profile', label: 'LinkedIn' },
    { icon: FaTwitter, href: 'https://twitter.com/your-handle', label: 'Twitter' },
  ];

  return (
    <Box minH="100vh" pt={20}>
      <Container maxW="1200px">
        <Flex
          direction={{ base: 'column', lg: 'row' }}
          align="center"
          justify="space-between"
          gap={8}
          py={12}
        >
          <VStack
            flex={1}
            align={{ base: 'center', lg: 'flex-start' }}
            spacing={8}
            textAlign={{ base: 'center', lg: 'left' }}
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <Heading
                as="h1"
                size="2xl"
                color={textColor}
                mb={4}
                lineHeight="1.2"
              >
                Olalekan Lawrence
                <Box as="span" color="brand.500">Adeyinka</Box>
              </Heading>
              <Text fontSize="xl" color="gray.500" mb={8}>
                Full Stack Developer | Problem Solver | Tech Enthusiast
              </Text>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <Text fontSize="lg" color="gray.600" maxW="600px" mb={8}>
                Welcome to my portfolio! I'm passionate about creating elegant solutions
                to complex problems using modern web technologies. With expertise in
                full-stack development, I build scalable and user-friendly applications
                that make a difference.
              </Text>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <HStack spacing={4} mb={8}>
                <Button
                  as={RouterLink}
                  to="/projects"
                  size="lg"
                  colorScheme="brand"
                  rightIcon={<Icon as={FaGithub} />}
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
              </HStack>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.6 }}
            >
              <HStack spacing={6}>
                {socialLinks.map((social) => (
                  <IconButton
                    key={social.label}
                    as="a"
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.label}
                    icon={<Icon as={social.icon} />}
                    variant="ghost"
                    color={textColor}
                    _hover={{ color: 'brand.500' }}
                    size="lg"
                  />
                ))}
              </HStack>
            </motion.div>
          </VStack>

          <motion.div
            style={{ flex: 1 }}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <Box
              position="relative"
              w="full"
              h="400px"
              bg={bgColor}
              borderRadius="2xl"
              overflow="hidden"
              boxShadow="2xl"
            >
              <Image
                src="/your-profile-image.jpg"
                alt="Profile"
                objectFit="cover"
                w="full"
                h="full"
              />
            </Box>
          </motion.div>
        </Flex>
      </Container>
    </Box>
  );
};

export default Home; 