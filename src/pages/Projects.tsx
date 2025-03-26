import { useState } from 'react';
import {
  Box,
  Container,
  SimpleGrid,
  Heading,
  Text,
  Input,
  Select,
  VStack,
  HStack,
  useColorModeValue,
  Icon,
  Badge,
  Flex,
  InputGroup,
  InputLeftElement,
} from '@chakra-ui/react';
import { motion } from 'framer-motion';
import { useQuery } from '@tanstack/react-query';
import { githubService, GitHubRepo } from '../services/github';
import { FaSearch, FaStar, FaCodeBranch, FaCode } from 'react-icons/fa';

const ProjectCard = ({ repo }: { repo: GitHubRepo }) => {
  const bgColor = useColorModeValue('white', 'gray.800');
  const borderColor = useColorModeValue('gray.200', 'gray.700');
  const textColor = useColorModeValue('gray.800', 'white');

  return (
    <motion.div
      whileHover={{ y: -5 }}
      transition={{ duration: 0.2 }}
      style={{
        height: '100%',
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
        height="100%"
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
        <VStack align="start" spacing={4}>
          <Flex justify="space-between" w="full" align="center">
            <Heading size="md" color={textColor}>{repo.name}</Heading>
            {repo.language && (
              <Badge colorScheme="brand" variant="subtle">
                {repo.language}
              </Badge>
            )}
          </Flex>
          <Text color="gray.500" noOfLines={2}>{repo.description}</Text>
          <HStack spacing={4} color="gray.500">
            <HStack>
              <Icon as={FaStar} />
              <Text fontSize="sm">{repo.stargazers_count}</Text>
            </HStack>
            <HStack>
              <Icon as={FaCodeBranch} />
              <Text fontSize="sm">{repo.forks_count}</Text>
            </HStack>
            <HStack>
              <Icon as={FaCode} />
              <Text fontSize="sm">{repo.language}</Text>
            </HStack>
          </HStack>
          <Text fontSize="sm" color="gray.500">
            Last updated: {new Date(repo.updated_at).toLocaleDateString()}
          </Text>
          <Box
            as="a"
            href={repo.html_url}
            target="_blank"
            rel="noopener noreferrer"
            color="brand.500"
            _hover={{ color: 'brand.600' }}
            fontWeight="medium"
          >
            View on GitHub →
          </Box>
        </VStack>
      </Box>
    </motion.div>
  );
};

const Projects = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [sortBy, setSortBy] = useState<'updated' | 'stars'>('updated');
  const textColor = useColorModeValue('gray.800', 'white');

  const { data: repos = [], isLoading } = useQuery({
    queryKey: ['repos'],
    queryFn: githubService.getRepositories,
  });

  const filteredRepos = repos
    .filter((repo) =>
      repo.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      repo.description.toLowerCase().includes(searchTerm.toLowerCase())
    )
    .sort((a, b) => {
      if (sortBy === 'stars') {
        return b.stargazers_count - a.stargazers_count;
      }
      return new Date(b.updated_at).getTime() - new Date(a.updated_at).getTime();
    });

  return (
    <Box minH="100vh" pt={20}>
      <Container maxW="1200px">
        <VStack spacing={12} align="stretch">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Heading mb={4}>My Projects</Heading>
            <Text fontSize="lg" color="gray.500" mb={8}>
              A collection of my work and contributions to the open-source community.
            </Text>
            <Flex
              direction={{ base: 'column', md: 'row' }}
              gap={4}
              align={{ base: 'stretch', md: 'center' }}
            >
              <InputGroup maxW={{ base: 'full', md: '300px' }}>
                <InputLeftElement pointerEvents="none">
                  <Icon as={FaSearch} color="gray.400" />
                </InputLeftElement>
                <Input
                  placeholder="Search projects..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
              </InputGroup>
              <Select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value as 'updated' | 'stars')}
                maxW={{ base: 'full', md: '200px' }}
              >
                <option value="updated">Last Updated</option>
                <option value="stars">Most Stars</option>
              </Select>
            </Flex>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            {isLoading ? (
              <Text>Loading projects...</Text>
            ) : (
              <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing={6}>
                {filteredRepos.map((repo) => (
                  <ProjectCard key={repo.id} repo={repo} />
                ))}
              </SimpleGrid>
            )}
          </motion.div>
        </VStack>
      </Container>
    </Box>
  );
};

export default Projects; 