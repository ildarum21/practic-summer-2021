import React, { SetStateAction, useContext } from 'react'
import styled from 'styled-components'

import Button from '@mui/material/Button'

import { NoteContext, NoteContextProps } from 'store/note-context'

export const PATH_ROOT = '/'

export interface NoteType {
  title: string
  descr: string
  priority: number
  id: number
  edited_at: string
}
interface NoteProps extends NoteType {
  setOpenEditNoteModal: React.Dispatch<SetStateAction<boolean>>
}
export const Note = ({ title, descr, id, priority, setOpenEditNoteModal }: NoteProps) => {
  const { notesData, setNotesData } = useContext<NoteContextProps>(NoteContext)

  const handleDeleteNote = () => {
    const newData = notesData.filter((note: NoteType) => note.id !== id)
    localStorage.setItem('user_notes_data', JSON.stringify(newData))
    setNotesData(newData)
  }
  const handleNoteEdit = () => {
    setOpenEditNoteModal(true)
  }

  const getPriority = (priorityId: number) => {
    switch (priorityId) {
      case 1:
        return 'Важно'
      case 2:
        return 'Поскорее'
      case 3:
        return 'Не важно'
    }
  }
  const getPriorityColor = (priorityId: number) => {
    switch (priorityId) {
      case 1:
        return 'red'
      case 2:
        return 'green'
      case 3:
        return 'gray'
    }
  }

  return (
    <Wrapper>
      <Text>
        <Title>{title}</Title>
        <Descr>{descr}</Descr>
        <Notice color={getPriorityColor(priority)}>{getPriority(priority)}</Notice>
      </Text>
      <div>
        <Button onClick={handleNoteEdit}>Редактировать</Button>
        <Button onClick={handleDeleteNote}>Удалить</Button>
      </div>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
`

const Text = styled.div`
  display: flex;
  flex-direction: column;
`

const Title = styled.div`
  font-size: 36px;
  font-weight: 700;
`

const Descr = styled.div`
  font-size: 18px;
  font-weight: 400;
`

const Notice = styled.div<{ color?: string }>`
  color: ${({ color }) => color || 'black'};
  font-size: 14px;
`
