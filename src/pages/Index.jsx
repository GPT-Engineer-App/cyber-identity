import { Container, VStack, Heading, Text, Box, IconButton, HStack, Link, Image } from "@chakra-ui/react";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";

const Index = () => {
  return (
    <Container centerContent maxW="container.md" height="100vh" display="flex" flexDirection="column" justifyContent="center" alignItems="center">
      <VStack spacing={6}>
        <Box boxSize="150px">
          <Image src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxwcm9maWxlJTIwcGljdHVyZXxlbnwwfHx8fDE3MTcwOTk0MjF8MA&ixlib=rb-4.0.3&q=80&w=1080" alt="Profile Picture" borderRadius="full" />
        </Box>
        <Heading as="h1" size="2xl">
          John Doe
        </Heading>
        <Text fontSize="xl" textAlign="center">
          Full Stack Developer | JavaScript Enthusiast | Open Source Contributor
        </Text>
        <HStack spacing={4}>
          <Link href="https://github.com/johndoe" isExternal>
            <IconButton aria-label="GitHub" icon={<FaGithub />} size="lg" />
          </Link>
          <Link href="https://linkedin.com/in/johndoe" isExternal>
            <IconButton aria-label="LinkedIn" icon={<FaLinkedin />} size="lg" />
          </Link>
          <Link href="https://twitter.com/johndoe" isExternal>
            <IconButton aria-label="Twitter" icon={<FaTwitter />} size="lg" />
          </Link>
        </HStack>
        <Box textAlign="center" maxW="lg">
          <Text fontSize="md" mt={4}>
            Hi, I'm John Doe, a passionate full stack developer with experience in building web applications using JavaScript, React, Node.js, and more. I love contributing to open source projects and sharing knowledge with the community.
          </Text>
        </Box>
      </VStack>
    </Container>
  );
};

export default Index;
