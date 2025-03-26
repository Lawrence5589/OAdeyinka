import { useState } from 'react';
import {
  Box,
  Container,
  Heading,
  Text,
  VStack,
  FormControl,
  FormLabel,
  Input,
  Textarea,
  Button,
  useToast,
  useColorModeValue,
  HStack,
  Icon,
  Flex,
} from '@chakra-ui/react';
import { motion } from 'framer-motion';
import { collection, addDoc } from 'firebase/firestore';
import { db } from '../config/firebase';
import { FaEnvelope, FaPhone, FaMapMarkerAlt } from 'react-icons/fa';

const MotionBox = motion(Box);

const ContactInfo = ({ icon: IconComponent, title, content }: { icon: any; title: string; content: string }) => {
  const textColor = useColorModeValue('gray.800', 'white');
  const bgColor = useColorModeValue('white', 'gray.800');
  const borderColor = useColorModeValue('gray.200', 'gray.700');

  return (
    <Flex
      align="center"
      p={{ base: 3, md: 4 }}
      bg={bgColor}
      borderRadius="lg"
      borderWidth="1px"
      borderColor={borderColor}
      _hover={{
        transform: 'translateY(-2px)',
        boxShadow: 'md',
        borderColor: 'brand.500',
      }}
      transition="all 0.2s"
    >
      <Icon as={IconComponent} w={{ base: 5, md: 6 }} h={{ base: 5, md: 6 }} color="brand.500" mr={{ base: 3, md: 4 }} />
      <Box>
        <Text fontWeight="medium" color={textColor} fontSize={{ base: 'sm', md: 'md' }}>{title}</Text>
        <Text color="gray.500" fontSize={{ base: 'sm', md: 'md' }}>{content}</Text>
      </Box>
    </Flex>
  );
};

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const toast = useToast();
  const textColor = useColorModeValue('gray.800', 'white');
  const bgColor = useColorModeValue('white', 'gray.800');
  const borderColor = useColorModeValue('gray.200', 'gray.700');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      await addDoc(collection(db, 'messages'), {
        ...formData,
        timestamp: new Date(),
      });

      toast({
        title: 'Message sent!',
        description: 'Thank you for your message. I will get back to you soon.',
        status: 'success',
        duration: 5000,
        isClosable: true,
      });

      setFormData({ name: '', email: '', message: '' });
    } catch (error) {
      toast({
        title: 'Error',
        description: 'Failed to send message. Please try again later.',
        status: 'error',
        duration: 5000,
        isClosable: true,
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <Box minH="100vh" pt={{ base: 16, md: 20 }}>
      <Container maxW="1200px" px={{ base: 4, md: 6 }}>
        <Flex
          direction={{ base: 'column', lg: 'row' }}
          gap={{ base: 8, lg: 12 }}
          align="stretch"
        >
          <VStack flex={1} align="stretch" spacing={{ base: 6, md: 8 }}>
            <MotionBox
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <Heading mb={4} fontSize={{ base: '2xl', md: '3xl' }}>Get in Touch</Heading>
              <Text fontSize={{ base: 'md', md: 'lg' }} color="gray.500">
                Have a question or want to work together? Feel free to reach out!
                I'm always open to discussing new projects, creative ideas, or
                opportunities to be part of your visions.
              </Text>
            </MotionBox>

            <MotionBox
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <VStack spacing={{ base: 3, md: 4 }} align="stretch">
                <ContactInfo
                  icon={FaEnvelope}
                  title="Email"
                  content="lawrenceadeyinka.10@gmail.com"
                />
                <ContactInfo
                  icon={FaPhone}
                  title="Phone"
                  content="+7 926 9192 166"
                />
              </VStack>
            </MotionBox>
          </VStack>

          <MotionBox
            flex={1}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <Box
              p={{ base: 6, md: 8 }}
              bg={bgColor}
              borderRadius="xl"
              borderWidth="1px"
              borderColor={borderColor}
              boxShadow="lg"
            >
              <form onSubmit={handleSubmit}>
                <VStack spacing={{ base: 4, md: 6 }}>
                  <FormControl isRequired>
                    <FormLabel fontSize={{ base: 'sm', md: 'md' }}>Name</FormLabel>
                    <Input
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Your name"
                      size={{ base: 'md', md: 'lg' }}
                      _focus={{
                        borderColor: 'brand.500',
                        boxShadow: '0 0 0 1px var(--chakra-colors-brand-500)',
                      }}
                    />
                  </FormControl>

                  <FormControl isRequired>
                    <FormLabel fontSize={{ base: 'sm', md: 'md' }}>Email</FormLabel>
                    <Input
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="your.email@example.com"
                      size={{ base: 'md', md: 'lg' }}
                      _focus={{
                        borderColor: 'brand.500',
                        boxShadow: '0 0 0 1px var(--chakra-colors-brand-500)',
                      }}
                    />
                  </FormControl>

                  <FormControl isRequired>
                    <FormLabel fontSize={{ base: 'sm', md: 'md' }}>Message</FormLabel>
                    <Textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Your message"
                      rows={6}
                      size={{ base: 'md', md: 'lg' }}
                      _focus={{
                        borderColor: 'brand.500',
                        boxShadow: '0 0 0 1px var(--chakra-colors-brand-500)',
                      }}
                    />
                  </FormControl>

                  <Button
                    type="submit"
                    colorScheme="brand"
                    size={{ base: 'md', md: 'lg' }}
                    width="full"
                    isLoading={isSubmitting}
                    loadingText="Sending..."
                  >
                    Send Message
                  </Button>
                </VStack>
              </form>
            </Box>
          </MotionBox>
        </Flex>
      </Container>
    </Box>
  );
};

export default Contact; 