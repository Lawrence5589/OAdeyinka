import {
  Box,
  Container,
  Heading,
  Text,
  VStack,
  HStack,
  Icon,
  useColorModeValue,
  Flex,
  Badge,
  Divider,
  SimpleGrid,
} from '@chakra-ui/react';
import { motion } from 'framer-motion';
import { FaReact, FaNodeJs, FaDatabase, FaGitAlt, FaDocker, FaAws, FaLinux } from 'react-icons/fa';

const SkillCard = ({ icon: IconComponent, name, level }: { icon: any; name: string; level: string }) => {
  const bgColor = useColorModeValue('white', 'gray.800');
  const borderColor = useColorModeValue('gray.200', 'gray.700');
  const textColor = useColorModeValue('gray.800', 'white');

  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      transition={{ duration: 0.2 }}
      style={{
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      <Box
        p={6}
        bg={bgColor}
        borderRadius="xl"
        borderWidth="1px"
        borderColor={borderColor}
        textAlign="center"
        position="relative"
        _before={{
          content: '""',
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          height: '4px',
          bg: 'brand.500',
          transform: 'scaleX(0)',
          transformOrigin: 'left',
          transition: 'transform 0.3s ease-in-out',
        }}
        _hover={{
          _before: { transform: 'scaleX(1)' },
          boxShadow: 'xl',
        }}
      >
        <Icon as={IconComponent} w={10} h={10} color="brand.500" mb={4} />
        <Text fontWeight="medium" color={textColor} mb={2}>{name}</Text>
        <Badge colorScheme="brand" variant="subtle">{level}</Badge>
      </Box>
    </motion.div>
  );
};

const ExperienceCard = ({ title, period, description }: { title: string; period: string; description: string }) => {
  const textColor = useColorModeValue('gray.800', 'white');
  const bgColor = useColorModeValue('white', 'gray.800');
  const borderColor = useColorModeValue('gray.200', 'gray.700');

  return (
    <motion.div
      whileHover={{ y: -2 }}
      transition={{ duration: 0.2 }}
    >
      <Box
        p={6}
        bg={bgColor}
        borderRadius="xl"
        borderWidth="1px"
        borderColor={borderColor}
        _hover={{
          borderColor: 'brand.500',
          boxShadow: 'lg',
        }}
      >
        <Heading size="md" color={textColor} mb={2}>{title}</Heading>
        <Text color="brand.500" mb={4}>{period}</Text>
        <Text color="gray.500">{description}</Text>
      </Box>
    </motion.div>
  );
};

const About = () => {
  const textColor = useColorModeValue('gray.800', 'white');

  const skills = [
    { icon: FaReact, name: 'React', level: 'Advanced' },
    { icon: FaNodeJs, name: 'Node.js', level: 'Advanced' },
    { icon: FaDatabase, name: 'Databases', level: 'Intermediate' },
    { icon: FaGitAlt, name: 'Git', level: 'Advanced' },
    { icon: FaDocker, name: 'Docker', level: 'Intermediate' },
    { icon: FaAws, name: 'AWS', level: 'Intermediate' },
    { icon: FaLinux, name: 'Linux', level: 'Intermediate' },
  ];

  const experiences = [
    {
      title: 'Full Stack Developer',
      period: '2020 - Present',
      description: 'Led the development of multiple web applications using React, Node.js, and various databases. Implemented responsive designs and optimized application performance.',
    },
    {
      title: 'Frontend Developer',
      period: '2018 - 2020',
      description: 'Developed and maintained user interfaces for web applications using modern JavaScript frameworks and libraries.',
    },
  ];

  return (
    <Box minH="100vh" pt={20}>
      <Container maxW="1200px">
        <VStack spacing={16} align="stretch">
          <motion.div
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
            <Text fontSize="lg" color="gray.500">
              With a keen eye for design and a commitment to writing clean, maintainable code,
              I strive to deliver exceptional user experiences while ensuring robust and scalable
              applications. I'm constantly learning and exploring new technologies to stay at the
              forefront of web development.
            </Text>
          </motion.div>

          <Divider />

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <Heading size="lg" mb={8}>Skills & Technologies</Heading>
            <SimpleGrid columns={{ base: 1, md: 2, lg: 3, xl: 4 }} spacing={6}>
              {skills.map((skill) => (
                <SkillCard
                  key={skill.name}
                  icon={skill.icon}
                  name={skill.name}
                  level={skill.level}
                />
              ))}
            </SimpleGrid>
          </motion.div>

          <Divider />

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <Heading size="lg" mb={8}>Experience</Heading>
            <VStack spacing={6} align="stretch">
              {experiences.map((exp, index) => (
                <ExperienceCard
                  key={index}
                  title={exp.title}
                  period={exp.period}
                  description={exp.description}
                />
              ))}
            </VStack>
          </motion.div>
        </VStack>
      </Container>
    </Box>
  );
};

export default About; 