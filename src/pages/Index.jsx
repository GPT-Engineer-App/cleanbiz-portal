import React from "react";
import { Box, Heading, Text, Button, VStack, HStack, Image, Divider, Link } from "@chakra-ui/react";
import { FaPhone, FaEnvelope, FaQuoteLeft } from "react-icons/fa";

const Index = () => {
  return (
    <Box>
      {/* Navigation */}
      <HStack as="nav" p={4} bg="blue.500" color="white" justify="space-between">
        <Heading size="md">Clean Sweep</Heading>
        <HStack spacing={8}>
          <Link href="#about">About Us</Link>
          <Link href="#services">Services</Link>
          <Link href="#quote">Request a Quote</Link>
          <Link href="#contact">Contact Us</Link>
        </HStack>
      </HStack>

      {/* Hero Section */}
      <Box p={8} textAlign="center">
        <Heading as="h1" size="2xl" mb={4}>
          Professional Commercial Cleaning Services
        </Heading>
        <Text fontSize="xl" mb={8}>
          Providing top-notch cleaning solutions for your business
        </Text>
        <Button colorScheme="blue" size="lg">
          Request a Quote
        </Button>
      </Box>

      {/* About Us Section */}
      <Box id="about" p={8}>
        <Heading as="h2" size="xl" mb={4}>
          About Us
        </Heading>
        <Text mb={4}>Clean Sweep is a leading commercial cleaning company dedicated to delivering exceptional cleaning services to businesses of all sizes. With our experienced team and state-of-the-art equipment, we ensure your premises are always clean, hygienic, and well-maintained.</Text>
        <Image src="https://images.unsplash.com/photo-1581578731548-c64695cc6952?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxjb21tZXJjaWFsJTIwY2xlYW5pbmclMjB0ZWFtfGVufDB8fHx8MTcxMjAzNDEzMHww&ixlib=rb-4.0.3&q=80&w=1080" alt="Cleaning Team" mb={4} />
        <Text>Our mission is to provide our clients with a clean and healthy work environment, allowing them to focus on their core business activities. We pride ourselves on our attention to detail, reliability, and customer satisfaction.</Text>
      </Box>

      {/* Services Section */}
      <Box id="services" p={8} bg="gray.100">
        <Heading as="h2" size="xl" mb={4}>
          Our Services
        </Heading>
        <VStack spacing={8} align="stretch">
          <Box>
            <Heading as="h3" size="lg" mb={2}>
              Office Cleaning
            </Heading>
            <Text>We provide comprehensive office cleaning services, including dusting, vacuuming, mopping, and sanitizing of all surfaces, ensuring a clean and productive work environment.</Text>
          </Box>
          <Box>
            <Heading as="h3" size="lg" mb={2}>
              Carpet Cleaning
            </Heading>
            <Text>Our professional carpet cleaning services remove dirt, stains, and allergens, leaving your carpets fresh and revitalized.</Text>
          </Box>
          <Box>
            <Heading as="h3" size="lg" mb={2}>
              Window Cleaning
            </Heading>
            <Text>We offer interior and exterior window cleaning services, ensuring your windows are spotless and streak-free.</Text>
          </Box>
          <Box>
            <Heading as="h3" size="lg" mb={2}>
              Restroom Cleaning
            </Heading>
            <Text>Our restroom cleaning services maintain a hygienic and pleasant environment for your employees and customers.</Text>
          </Box>
        </VStack>
      </Box>

      {/* Request a Quote Section */}
      <Box id="quote" p={8}>
        <Heading as="h2" size="xl" mb={4}>
          Request a Quote
        </Heading>
        <Text mb={4}>Interested in our commercial cleaning services? Request a quote today, and we'll get back to you with a customized cleaning plan tailored to your business needs.</Text>
        <Button colorScheme="blue" size="lg" leftIcon={<FaQuoteLeft />}>
          Request a Quote
        </Button>
      </Box>

      {/* Contact Us Section */}
      <Box id="contact" p={8} bg="gray.100">
        <Heading as="h2" size="xl" mb={4}>
          Contact Us
        </Heading>
        <VStack spacing={4} align="start">
          <HStack>
            <FaPhone />
            <Text>Phone: (123) 456-7890</Text>
          </HStack>
          <HStack>
            <FaEnvelope />
            <Text>Email: info@cleansweep.com</Text>
          </HStack>
        </VStack>
      </Box>

      {/* Footer */}
      <Box as="footer" p={4} bg="blue.500" color="white" textAlign="center">
        <Text>&copy; {new Date().getFullYear()} Clean Sweep. All rights reserved.</Text>
      </Box>
    </Box>
  );
};

export default Index;
