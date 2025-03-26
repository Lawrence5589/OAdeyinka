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
        p={{ base: 4, md: 6 }}
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
        <Icon as={IconComponent} w={{ base: 8, md: 10 }} h={{ base: 8, md: 10 }} color="brand.500" mb={{ base: 3, md: 4 }} />
        <Text fontWeight="medium" color={textColor} mb={2} fontSize={{ base: 'sm', md: 'md' }}>{name}</Text>
        <Badge colorScheme="brand" variant="subtle" fontSize={{ base: 'xs', md: 'sm' }}>{level}</Badge>
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
        p={{ base: 4, md: 6 }}
        bg={bgColor}
        borderRadius="xl"
        borderWidth="1px"
        borderColor={borderColor}
        _hover={{
          borderColor: 'brand.500',
          boxShadow: 'lg',
        }}
      >
        <Heading size={{ base: 'sm', md: 'md' }} color={textColor} mb={2}>{title}</Heading>
        <Text color="brand.500" mb={{ base: 2, md: 4 }} fontSize={{ base: 'sm', md: 'md' }}>{period}</Text>
        <Text color="gray.500" fontSize={{ base: 'sm', md: 'md' }}>{description}</Text>
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
      title: 'Software Engineer',
      period: '2022 - Present',
      description: 'Working as a Software Engineer at various organizations, developing and maintaining web applications using modern technologies.',
    },
    {
      title: 'Software Developer',
      period: '2021 - 2022',
      description: 'Developed and maintained software applications, focusing on web development and software solutions.',
    },
    {
      title: 'Software Engineer',
      period: '2020 - 2021',
      description: 'Contributed to software development projects, working on both frontend and backend technologies.',
    },
    {
      title: 'Software Developer',
      period: '2019 - 2020',
      description: 'Started professional software development career, working on various web applications and software solutions.',
    }
  ];

  return (
    <Box minH="100vh" pt={{ base: 16, md: 20 }}>
      <Container maxW="1200px" px={{ base: 4, md: 6 }}>
        <VStack spacing={{ base: 12, md: 16 }} align="stretch">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Heading mb={6} fontSize={{ base: '2xl', md: '3xl' }}>About Me</Heading>
            <Text fontSize={{ base: 'md', md: 'lg' }} color={textColor} mb={6}>
              I am a passionate Full Stack Developer with expertise in building modern web applications.
              My journey in software development has equipped me with a strong foundation in both
              front-end and back-end technologies, allowing me to create seamless and efficient
              solutions for complex problems.
            </Text>
            <Text fontSize={{ base: 'md', md: 'lg' }} color="gray.500">
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
            <Heading size={{ base: 'lg', md: 'xl' }} mb={{ base: 6, md: 8 }}>Skills & Technologies</Heading>
            <SimpleGrid columns={{ base: 1, sm: 2, lg: 3, xl: 4 }} spacing={{ base: 4, md: 6 }}>
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
            <Heading size={{ base: 'lg', md: 'xl' }} mb={{ base: 6, md: 8 }}>Experience</Heading>
            <VStack spacing={{ base: 4, md: 6 }} align="stretch">
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