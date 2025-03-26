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
} from '@chakra-ui/react';
import { motion } from 'framer-motion';
import { useQuery } from '@tanstack/react-query';
import { githubService, GitHubRepo } from '../services/github';

const MotionBox = motion(Box);

const ProjectCard = ({ repo }: { repo: GitHubRepo }) => {
  const bgColor = useColorModeValue('white', 'gray.800');
  const borderColor = useColorModeValue('gray.200', 'gray.700');

  return (
    <MotionBox
      whileHover={{ y: -5 }}
      transition={{ duration: 0.2 }}
      p={6}
      bg={bgColor}
      borderRadius="lg"
      borderWidth="1px"
      borderColor={borderColor}
      height="100%"
    >
      <VStack align="start" spacing={4}>
        <Heading size="md">{repo.name}</Heading>
        <Text color="gray.500">{repo.description}</Text>
        <HStack spacing={4}>
          <Text fontSize="sm" color="gray.500">
            ⭐ {repo.stargazers_count}
          </Text>
          <Text fontSize="sm" color="gray.500">
            🔄 {repo.forks_count}
          </Text>
          {repo.language && (
            <Text fontSize="sm" color="gray.500">
              {repo.language}
            </Text>
          )}
        </HStack>
        <Text fontSize="sm" color="gray.500">
          Last updated: {new Date(repo.updated_at).toLocaleDateString()}
        </Text>
        <Box as="a" href={repo.html_url} target="_blank" rel="noopener noreferrer">
          <Text color="brand.500" _hover={{ textDecoration: 'underline' }}>
            View on GitHub →
          </Text>
        </Box>
      </VStack>
    </MotionBox>
  );
};

const Projects = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [sortBy, setSortBy] = useState<'updated' | 'stars'>('updated');

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
        <VStack spacing={8} align="stretch">
          <MotionBox
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Heading mb={8}>My Projects</Heading>
            <HStack spacing={4} mb={8}>
              <Input
                placeholder="Search projects..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                maxW="300px"
              />
              <Select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value as 'updated' | 'stars')}
                maxW="200px"
              >
                <option value="updated">Last Updated</option>
                <option value="stars">Most Stars</option>
              </Select>
            </HStack>
          </MotionBox>

          {isLoading ? (
            <Text>Loading projects...</Text>
          ) : (
            <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing={6}>
              {filteredRepos.map((repo) => (
                <ProjectCard key={repo.id} repo={repo} />
              ))}
            </SimpleGrid>
          )}
        </VStack>
      </Container>
    </Box>
  );
};

export default Projects; 