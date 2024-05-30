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
          <Text fontSize="md" mt={4}>
            I am currently pursuing a PhD in Autonomous Driving at the University of Toronto. I hold a Master's degree from McGill University and a Bachelor's degree from Beijing Institute of Technology, where I graduated top of my class.
          </Text>
          <Text fontSize="md" mt={4}>
            I have extensive internship experience, having worked on various AI projects at companies like Momenta, Megvii Technology, Sinovation Ventures, and QCraft. I have strong project management and research skills, having undertaken multiple research projects.
          </Text>
          <Text fontSize="md" mt={4}>
            During my undergraduate studies, I conducted research internships at UC Berkeley. During my graduate studies, I interned at the Montreal Institute for Learning Algorithms (MILA), one of Canada's top three AI research institutes.
          </Text>
          <Text fontSize="md" mt={4}>
            I have published several high-level papers in conferences such as IEEE IV, IEEE ITSC, ICML, and NeurIPS, with nearly 100 citations on Google Scholar. During my PhD at the University of Toronto, I received the Faculty New Student Entrance Scholarship and the DiDi AI Autonomous Driving Scholarship, and achieved straight A's in my courses.
          </Text>
          <Text fontSize="md" mt={4}>
            I have also served as a teaching assistant for several courses at the University of Toronto, including AI, Robotics, Mathematical Logic, and Traffic Engineering.
          </Text>
        </Box>
      </VStack>
    </Container>
  );
};

export default Index;
