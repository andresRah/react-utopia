import React from 'react'
import { FavsWithQuery } from '../container/GetFavorites'
import { Layout } from '../components/Layout'

export const Favs = () => (
  <Layout title='Petgram - Tu app de fotos de mascotas' subtitle='Aqui puedes encontrar tus favoritos'>
    <FavsWithQuery />
  </Layout>
)
