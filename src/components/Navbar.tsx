import { Box, Flex, Button, useColorModeValue, useColorMode, IconButton, useBreakpointValue, Menu, MenuButton, MenuList, MenuItem } from '@chakra-ui/react';
import { Link as RouterLink } from 'react-router-dom';
import { motion } from 'framer-motion';
import { SunIcon, MoonIcon, HamburgerIcon } from '@chakra-ui/icons';

const Navbar = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  const bgColor = useColorModeValue('rgba(255, 255, 255, 0.8)', 'rgba(26, 32, 44, 0.8)');
  const textColor = useColorModeValue('gray.800', 'white');
  const isMobile = useBreakpointValue({ base: true, md: false });

  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'Projects', path: '/projects' },
    { name: 'About', path: '/about' },
    { name: 'Contact', path: '/contact' },
  ];

  const DesktopNav = () => (
    <Flex gap={4} align="center">
      {navItems.map((item) => (
        <RouterLink key={item.path} to={item.path}>
          <Button
            variant="ghost"
            color={textColor}
            position="relative"
            _hover={{
              color: 'brand.500',
              _after: { width: '100%' }
            }}
            _after={{
              content: '""',
              position: 'absolute',
              width: '0%',
              height: '2px',
              bottom: '0',
              left: '0',
              bg: 'brand.500',
              transition: 'width 0.2s ease-in-out',
            }}
          >
            {item.name}
          </Button>
        </RouterLink>
      ))}
      <IconButton
        aria-label="Toggle color mode"
        icon={colorMode === 'light' ? <MoonIcon /> : <SunIcon />}
        onClick={toggleColorMode}
        variant="ghost"
        color={textColor}
        _hover={{ color: 'brand.500' }}
      />
    </Flex>
  );

  const MobileNav = () => (
    <Menu>
      <MenuButton
        as={IconButton}
        aria-label="Open menu"
        icon={<HamburgerIcon />}
        variant="ghost"
        color={textColor}
        _hover={{ color: 'brand.500' }}
      />
      <MenuList bg={bgColor} borderColor={useColorModeValue('gray.200', 'gray.700')}>
        {navItems.map((item) => (
          <MenuItem
            key={item.path}
            as={RouterLink}
            to={item.path}
            color={textColor}
            _hover={{ bg: useColorModeValue('gray.100', 'gray.700') }}
          >
            {item.name}
          </MenuItem>
        ))}
        <MenuItem
          onClick={toggleColorMode}
          color={textColor}
          _hover={{ bg: useColorModeValue('gray.100', 'gray.700') }}
        >
          {colorMode === 'light' ? 'Dark Mode' : 'Light Mode'}
        </MenuItem>
      </MenuList>
    </Menu>
  );

  return (
    <motion.div
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      style={{
        position: 'fixed',
        width: '100%',
        backgroundColor: bgColor,
        boxShadow: 'sm',
        zIndex: 1000,
        backdropFilter: 'blur(10px)',
      }}
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
              transition="color 0.2s"
            >
              Olalekan Lawrence Adeyinka
            </Box>
          </RouterLink>
        </Flex>

        {isMobile ? <MobileNav /> : <DesktopNav />}
      </Flex>
    </motion.div>
  );
};

export default Navbar; 