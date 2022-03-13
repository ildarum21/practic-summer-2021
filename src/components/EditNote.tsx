import React, { useState, useContext } from 'react'
import styled from 'styled-components'

import Button from '@mui/material/Button'
import TextField from '@mui/material/TextField'
import Radio from '@mui/material/Radio'
import RadioGroup from '@mui/material/RadioGroup'
import FormControlLabel from '@mui/material/FormControlLabel'

import { NoteType } from 'components/Note'

import { NoteContext, NoteContextProps } from 'store/note-context'

export const PATH_ROOT = '/'

export const EditNote = ({
  setOpenEditNoteModal
}: {
  setOpenEditNoteModal: React.Dispatch<React.SetStateAction<boolean>>
}) => {
  const { notesData, setNotesData, redactedNoteId } = useContext<NoteContextProps>(NoteContext)
  const currentNote = notesData.find((note) => note.id === redactedNoteId)
  const [title, setTitle] = useState<string>(currentNote?.title || '')
  const [descr, setDescr] = useState<string>(currentNote?.descr || '')
  const [priority, setPriority] = useState<string>(String(currentNote?.priority) || '3')

  const handleTitleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setTitle(event.target.value)
  }

  const handleDescrChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setDescr(event.target.value)
  }

  const handleConfirmChange = () => {
    if (title.length !== 0 && descr.length !== 0) {
      let newData = notesData.map((note: NoteType) => {
        if (note.id === redactedNoteId) {
          return {
            title,
            descr,
            priority: Number(priority),
            id: redactedNoteId,
            edited_at: new Date().toISOString()
          }
        }
        return note
      })
      localStorage.setItem('user_notes_data', JSON.stringify(newData))
      setNotesData(newData)
      setOpenEditNoteModal(false)
    }
  }

  const handlePriorityRadio = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPriority(event.target.value)
  }

  return (
    <Wrapper>
      <TextInput error={title.length === 0} value={title} onChange={handleTitleChange} placeholder="Заголовок" />
      <TextInput error={descr.length === 0} value={descr} onChange={handleDescrChange} placeholder="Описание" />
      <RadioGroup
        onChange={handlePriorityRadio}
        aria-labelledby="demo-radio-buttons-group-label"
        defaultValue={currentNote?.priority || '3'}
        name="radio-buttons-group">
        <FormControlLabel value="1" control={<Radio />} label="Важно" />
        <FormControlLabel value="2" control={<Radio />} label="Поскорее" />
        <FormControlLabel value="3" control={<Radio />} label="Не важно" />
      </RadioGroup>
      <Button onClick={handleConfirmChange}>Изменить</Button>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
`
const TextInput = styled(TextField)`
  margin-top: 10px;
`
