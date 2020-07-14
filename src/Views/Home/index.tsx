import React from 'react';
import { SimpleGrid, Box } from '@chakra-ui/core';
import { Form } from 'Components/Form';
import PDICard from 'Components/PDICard';

const Home: React.FC = () => {
   return (
      <SimpleGrid columns={[1, 2]} spacing="20px" margin="20px">
         <Box p={5} shadow="md" borderWidth="1px">
            <Form />
         </Box>
         <Box>
            <PDICard />
         </Box>
      </SimpleGrid>
   )
}

export { Home };