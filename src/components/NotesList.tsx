import React, { useState, useContext, useEffect } from 'react'
import styled from 'styled-components'
import { NewNote } from 'components/NewNote'
import { EditNote } from 'components/EditNote'
import Button from '@mui/material/Button'
import { Note, NoteType } from 'components/Note'
import { NoteContext, NoteContextProps } from 'store/note-context'

export const PATH_ROOT = '/'

export const NotesList = () => {
  const { notesData, setNotesData } = useContext<NoteContextProps>(NoteContext)
  const [openNewNoteModal, setOpenNewNoteModal] = useState(false)
  const [openEditNoteModal, setOpenEditNoteModal] = useState(false)

  useEffect(() => {
    async function fetchData() {
      const data = await localStorage.getItem('user_notes_data')
      if (data) {
        setNotesData(JSON.parse(data))
      }
    }
    fetchData()
  }, [openNewNoteModal])

  return (
    <Wrapper>
      {notesData
        .sort((elementA, elementB) => elementA.priority - elementB.priority)
        .map((element: NoteType) => (
          <Note {...element} key={element.id} setOpenEditNoteModal={setOpenEditNoteModal} />
        ))}
      {openNewNoteModal && !openEditNoteModal ? (
        <NewNote notesData={notesData} setOpenNewNoteModal={setOpenNewNoteModal} />
      ) : (
        <Button
          onClick={() => {
            setOpenNewNoteModal(true)
          }}>
          Новая заметка
        </Button>
      )}
      {openEditNoteModal && <EditNote setOpenEditNoteModal={setOpenEditNoteModal} />}
    </Wrapper>
  )
}

const Wrapper = styled.div`
  margin: 0 auto;
  width: 65%;
  padding: 15px;
  border: 1px solid #242426;
`
