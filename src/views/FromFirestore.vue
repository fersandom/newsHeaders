<script setup>
import { collection, getDocs } from 'firebase/firestore'
import { db } from '../../firebase.js'

async function getRegs() {
  const colRef = collection(db, 'prueba')
  const docs = await getDocs(colRef)
  docs.forEach((doc) => {
    console.log(doc.id, '=>', doc.data())
  })
}

getRegs()
</script>

<template>
  <h1>News from Firestore</h1>
</template>

<style scoped></style>
