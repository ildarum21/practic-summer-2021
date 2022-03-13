import React from 'react'

import { Header } from 'components/Header'
import { NotesList } from 'components/NotesList'

export const PATH_ROOT = '/'

export const Main = () => {
  return (
    <>
      <Header />
      <NotesList />
    </>
  )
}
