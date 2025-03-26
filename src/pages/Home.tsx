import { Box, Container, Heading, Text, Button, VStack, HStack, Icon, useColorModeValue, Flex, Image, IconButton } from '@chakra-ui/react';
import { motion } from 'framer-motion';
import { Link as RouterLink } from 'react-router-dom';
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';

const Home = () => {
  const textColor = useColorModeValue('gray.800', 'white');
  const bgColor = useColorModeValue('white', 'gray.800');

  const socialLinks = [
    { icon: FaGithub, href: 'https://github.com/Lawrence5589', label: 'GitHub' },
    { icon: FaLinkedin, href: 'https://www.linkedin.com/in/olalekan-adeyinka-2961ba124/', label: 'LinkedIn' },
  ];

  return (
    <Box minH="100vh" pt={{ base: 16, md: 20 }}>
      <Container maxW="1200px" px={{ base: 4, md: 6 }}>
        <Flex
          direction={{ base: 'column', lg: 'row' }}
          align="center"
          justify="space-between"
          gap={{ base: 6, lg: 8 }}
          py={{ base: 8, md: 12 }}
        >
          <VStack
            flex={1}
            align={{ base: 'center', lg: 'flex-start' }}
            spacing={{ base: 6, md: 8 }}
            textAlign={{ base: 'center', lg: 'left' }}
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <Heading
                as="h1"
                size={{ base: 'xl', md: '2xl' }}
                color={textColor}
                mb={4}
                lineHeight="1.2"
                px={{ base: 4, md: 0 }}
              >
                Olalekan Lawrence
                <Box as="span" color="brand.500"> Adeyinka</Box>
              </Heading>
              <Text fontSize={{ base: 'lg', md: 'xl' }} color="gray.500" mb={{ base: 6, md: 8 }}>
                Full Stack Developer | Problem Solver | Tech Enthusiast
              </Text>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <Text fontSize={{ base: 'md', md: 'lg' }} color="gray.600" maxW="600px" mb={{ base: 6, md: 8 }} px={{ base: 4, md: 0 }}>
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
              <HStack spacing={{ base: 3, md: 4 }} mb={{ base: 6, md: 8 }} flexWrap="wrap" justify={{ base: 'center', lg: 'flex-start' }}>
                <Button
                  as={RouterLink}
                  to="/projects"
                  size={{ base: 'md', md: 'lg' }}
                  colorScheme="brand"
                  rightIcon={<Icon as={FaGithub} />}
                >
                  View Projects
                </Button>
                <Button
                  as={RouterLink}
                  to="/contact"
                  size={{ base: 'md', md: 'lg' }}
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
              <HStack spacing={{ base: 4, md: 6 }}>
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
                    size={{ base: 'md', md: 'lg' }}
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
              h={{ base: '300px', md: '400px' }}
              bg={bgColor}
              borderRadius="2xl"
              overflow="hidden"
              boxShadow="2xl"
              mt={{ base: 8, lg: 0 }}
            >
              <Image
                src="/images/Designer.webp"
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