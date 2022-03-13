import React, { useState } from 'react'
import styled from 'styled-components'

import Button from '@mui/material/Button'
import TextField from '@mui/material/TextField'

import Radio from '@mui/material/Radio'
import RadioGroup from '@mui/material/RadioGroup'
import FormControlLabel from '@mui/material/FormControlLabel'
import FormLabel from '@mui/material/FormLabel'

import { NoteType } from 'components/Note'

export const PATH_ROOT = '/'

export const NewNote = ({
  setOpenNewNoteModal,
  notesData
}: {
  notesData: NoteType[]
  setOpenNewNoteModal: React.Dispatch<React.SetStateAction<boolean>>
}) => {
  const [title, setTitle] = useState<string>('')
  const [descr, setDescr] = useState<string>('')
  const [priority, setPriority] = useState<string>('1')

  const handleTitleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setTitle(event.target.value)
  }

  const handleDescrChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setDescr(event.target.value)
  }

  const handleConfirmChange = () => {
    if (title.length !== 0 && descr.length !== 0) {
      let newData = [...notesData]
      newData.push({
        title,
        descr,
        priority: Number(priority),
        id: newData.length,
        edited_at: new Date().toISOString()
      })
      localStorage.setItem('user_notes_data', JSON.stringify(newData))
      setOpenNewNoteModal(false)
    }
  }
  const handlePriorityRadio = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPriority(event.target.value)
  }
  return (
    <Wrapper>
      <TextInput error={title.length === 0} value={title} onChange={handleTitleChange} placeholder="Заголовок" />
      <TextInput error={descr.length === 0} value={descr} onChange={handleDescrChange} placeholder="Описание" />
      <FormLabel id="demo-radio-buttons-group-label"></FormLabel>
      <RadioGroup
        onChange={handlePriorityRadio}
        aria-labelledby="demo-radio-buttons-group-label"
        defaultValue="1"
        name="radio-buttons-group">
        <FormControlLabel value="1" control={<Radio />} label="Важно" />
        <FormControlLabel value="2" control={<Radio />} label="Поскорее" />
        <FormControlLabel value="3" control={<Radio />} label="Не важно" />
      </RadioGroup>
      <Button onClick={handleConfirmChange}>Добавить</Button>
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
