import {
  Box,
  Container,
  Heading,
  Text,
  VStack,
  HStack,
  Icon,
  useColorModeValue,
} from '@chakra-ui/react';
import { motion } from 'framer-motion';
import { FaReact, FaNodeJs, FaDatabase, FaGitAlt, FaDocker } from 'react-icons/fa';

const MotionBox = motion(Box);

const SkillCard = ({ icon: IconComponent, name }: { icon: any; name: string }) => {
  const bgColor = useColorModeValue('white', 'gray.800');
  const borderColor = useColorModeValue('gray.200', 'gray.700');

  return (
    <MotionBox
      whileHover={{ scale: 1.05 }}
      transition={{ duration: 0.2 }}
      p={4}
      bg={bgColor}
      borderRadius="lg"
      borderWidth="1px"
      borderColor={borderColor}
      textAlign="center"
    >
      <Icon as={IconComponent} w={8} h={8} color="brand.500" mb={2} />
      <Text>{name}</Text>
    </MotionBox>
  );
};

const About = () => {
  const textColor = useColorModeValue('gray.800', 'white');

  const skills = [
    { icon: FaReact, name: 'React' },
    { icon: FaNodeJs, name: 'Node.js' },
    { icon: FaDatabase, name: 'Databases' },
    { icon: FaGitAlt, name: 'Git' },
    { icon: FaDocker, name: 'Docker' },
  ];

  return (
    <Box minH="100vh" pt={20}>
      <Container maxW="1200px">
        <VStack spacing={12} align="stretch">
          <MotionBox
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Heading mb={6}>About Me</Heading>
            <Text fontSize="lg" color={textColor} mb={6}>
              I am a passionate Full Stack Developer with expertise in building modern web applications.
              My journey in software development has equipped me with a strong foundation in both
              front-end and back-end technologies, allowing me to create seamless and efficient
              solutions for complex problems.
            </Text>
          </MotionBox>

          <MotionBox
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <Heading size="lg" mb={6}>Skills & Technologies</Heading>
            <HStack spacing={6} wrap="wrap" justify="center">
              {skills.map((skill, index) => (
                <SkillCard
                  key={skill.name}
                  icon={skill.icon}
                  name={skill.name}
                />
              ))}
            </HStack>
          </MotionBox>

          <MotionBox
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <Heading size="lg" mb={6}>Experience</Heading>
            <VStack spacing={6} align="stretch">
              <Box>
                <Heading size="md" mb={2}>Full Stack Developer</Heading>
                <Text color="gray.500">2020 - Present</Text>
                <Text mt={2}>
                  Led the development of multiple web applications using React, Node.js, and various
                  databases. Implemented responsive designs and optimized application performance.
                </Text>
              </Box>
              <Box>
                <Heading size="md" mb={2}>Frontend Developer</Heading>
                <Text color="gray.500">2018 - 2020</Text>
                <Text mt={2}>
                  Developed and maintained user interfaces for web applications using modern
                  JavaScript frameworks and libraries.
                </Text>
              </Box>
            </VStack>
          </MotionBox>
        </VStack>
      </Container>
    </Box>
  );
};

export default About; 