import React, { useState, useEffect } from 'react';
import { SimpleGrid, Box } from '@chakra-ui/core';
import { Form } from 'Components/Form';
import PDICard from 'Components/PDICard';
import firebase from 'firebase'

const Home: React.FC = () => {

   const [pdis, setPdis] = useState([])

   useEffect(() => {

      firebase.firestore().collection("pdi").get()
         .then(resp => {
            setPdis(resp.docs.map(doc => doc.data().pdi) as any)
         })
         .catch(err => {
            console.log(err)
         })

   }, [])

   return (
      <SimpleGrid columns={[1, 2]} spacing="20px" margin="20px">
         <Box p={5} shadow="md" borderWidth="1px">
            <Form />
         </Box>
         <Box>
            {
               pdis.map(pdi => (
                  <PDICard pdi={pdi} />
               ))
            }
         </Box>
      </SimpleGrid>
   )
}

export { Home };