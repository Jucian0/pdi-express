import React from 'react';
import { Flex, Avatar, Box, Text, Badge } from '@chakra-ui/core';

// import { Container } from './styles';

const PDICard: React.FC = () => {
   return (
      <Box p={5} shadow="md" borderWidth="1px">
         <Flex>
            <Avatar src="https://bit.ly/sage-adebayo" />
            <Box ml="3">
               <Text fontWeight="bold">
                  Segun Adebayo
               <Badge ml="1" variantColor="green">
                     New
               </Badge>
               </Text>
               <Text fontSize="sm">UI Engineer</Text>
            </Box>
         </Flex>
      </Box>
   )
}

export default PDICard;