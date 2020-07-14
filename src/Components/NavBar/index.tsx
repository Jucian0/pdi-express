import React from 'react';
import { Flex, Heading, Box, Text, Button, Link } from '@chakra-ui/core';
import { IoLogoGithub } from "react-icons/io";


const MenuItems: React.FC = ({ children }) => (
   <Text mt={{ base: 4, md: 0 }} mr={6} display="block">
      {children}
   </Text>
);


const NavBar: React.FC = (props) => {

   const [show, setShow] = React.useState(false);
   const handleToggle = () => setShow(!show);

   return <Flex
      as="nav"
      align="center"
      justify="space-between"
      wrap="wrap"
      padding="1.5rem"
      bg="gray.50"
      borderBottom="1px solid"
      borderBottomColor="teal.400"
      color="teal.400"
      {...props}
   >
      <Flex align="center" mr={5}>
         <Heading as="h1" size="lg" letterSpacing={"-.1rem"}>
            PDI Express
     </Heading>
      </Flex>

      <Box as={Link} display={{ base: "block", md: "none" }} onClick={handleToggle}>
         <svg
            fill="white"
            width="12px"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
         >
            <title>Menu</title>
            <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
         </svg>
      </Box>

      <Box
         display={{ sm: show ? "block" : "none", md: "flex" }}
         width={{ sm: "full", md: "auto" }}
         alignItems="center"
         flexGrow={1}
      >
      </Box>

      <Box
         display={{ sm: show ? "block" : "none", md: "block" }}
         mt={{ base: 4, md: 0 }}
      >
         <MenuItems>
            <Button rightIcon={IoLogoGithub} variantColor="teal.400" variant="outline">
               GitHub
            </Button>
         </MenuItems>
      </Box>
   </Flex>
}

export { NavBar };