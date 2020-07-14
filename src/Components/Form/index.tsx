import React, { useEffect } from 'react';
import { FormControl, FormLabel, Input, Textarea, Button } from '@chakra-ui/core';
import { useForm } from 'useforms'
import firebase from 'firebase'


const initialValues = {
   hashTag: "",
   improvementPoint: "",
   evidence: "",
   deadLine: ""
}

const Form: React.FC = () => {

   const [{ values }, { input }] = useForm({ initialValues, onChange: true })

   useEffect(() => {
      console.log(values)
   }, [values])

   const save = (e: any) => {
      e.preventDefault()
      firebase.auth().signInAnonymously().then((e) => {
      })


      firebase.database().ref(`pdi`).push({ pdi: values })
         .then(resp => console.log(resp))
         .catch(err => console.log(err))
   }

   return (
      <form>
         <FormControl isRequired>
            <FormLabel htmlFor="hashTag">Competência</FormLabel>
            <Input {...input("hashTag")} placeholder="Qual competência vou trabalhar." />
         </FormControl>

         <FormControl isRequired>
            <FormLabel htmlFor="improvementPoint">Ponto que vou desenvolver</FormLabel>
            <Textarea {...input("improvementPoint")} placeholder="Here is a sample placeholder." />
         </FormControl>

         <FormControl isRequired>
            <FormLabel htmlFor="evidence">Evidência</FormLabel>
            <Textarea {...input("evidence")} placeholder="Como será mensurado o ponto que esta sendo trabalhado." />
         </FormControl>

         <FormControl isRequired>
            <FormLabel htmlFor="deadLine">Prazo final</FormLabel>
            <Textarea {...input("deadLine")} placeholder="Qual o prazo para a conclusão dessa evolução." />
         </FormControl>
         <Button
            mt={4}
            variantColor="teal"
            type="submit"
            onClick={save}
         >
            Adicionar
          </Button>
      </form>
   )
}

export { Form };