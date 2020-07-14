import React from 'react';
import { Flex, Avatar, Box, Text, Badge, Button, IconButton } from '@chakra-ui/core';
import firebase from 'firebase'

interface PDiCardProps {
   pdi: any
}
const PDICard: React.FC<PDiCardProps> = ({ pdi }) => {

   const deletePdi = () => {
      const pdiQuery = firebase.firestore().collection('pdi').where('hashTag', '==', pdi?.hashTag);
      pdiQuery.get().then(function (querySnapshot) {
         querySnapshot.forEach(function (doc) {
            console.log(doc)
            doc.ref.delete();
         });
      });
   }

   return (
      <Box p={5} shadow="md" borderWidth="1px">
         <Flex>
            <Avatar src="https://bit.ly/sage-adebayo" />
            <Box ml="3">
               <Text fontWeight="bold">
                  <span>HashTag: </span>{pdi?.hashTag}
                  <Badge ml="1" variantColor="green">
                     New
               </Badge>
               </Text>
               <Text fontSize="sm"><span>Improvident: </span> {pdi?.improvementPoint}</Text>
               <IconButton onClick={deletePdi} aria-label="delete" size="sm" icon="delete" rounded="50%" variant="outline" variantColor="red" />
            </Box>
         </Flex>
      </Box>
   )
}

export default PDICard;