import { Box, Flex, Button, useColorModeValue, useColorMode } from '@chakra-ui/react';
import { Link as RouterLink } from 'react-router-dom';
import { motion } from 'framer-motion';
import { SunIcon, MoonIcon } from '@chakra-ui/icons';

const MotionBox = motion(Box);

const Navbar = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  const bgColor = useColorModeValue('white', 'gray.800');
  const textColor = useColorModeValue('gray.800', 'white');

  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'Projects', path: '/projects' },
    { name: 'About', path: '/about' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <MotionBox
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      position="fixed"
      w="100%"
      bg={bgColor}
      boxShadow="sm"
      zIndex="sticky"
    >
      <Flex
        maxW="1200px"
        mx="auto"
        px={4}
        py={4}
        align="center"
        justify="space-between"
      >
        <Flex align="center">
          <RouterLink to="/">
            <Box
              fontSize="xl"
              fontWeight="bold"
              color={textColor}
              _hover={{ color: 'brand.500' }}
            >
              OAdeyinka
            </Box>
          </RouterLink>
        </Flex>

        <Flex gap={4} align="center">
          {navItems.map((item) => (
            <RouterLink key={item.path} to={item.path}>
              <Button
                variant="ghost"
                color={textColor}
                _hover={{ color: 'brand.500' }}
              >
                {item.name}
              </Button>
            </RouterLink>
          ))}
          <Button onClick={toggleColorMode}>
            {colorMode === 'light' ? <MoonIcon /> : <SunIcon />}
          </Button>
        </Flex>
      </Flex>
    </MotionBox>
  );
};

export default Navbar; 