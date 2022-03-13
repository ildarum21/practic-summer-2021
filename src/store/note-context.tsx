import React, { useState } from 'react'
import { NoteType } from 'components/Note'

export interface NoteContextProps {
  setNotesData: React.Dispatch<React.SetStateAction<NoteType[]>>
  notesData: NoteType[]
  redactedNoteId: number
  setRedactedNoteId: React.Dispatch<React.SetStateAction<number>>
}

interface NoteContextProviderProps {
  children: React.ReactNode
}

export const NoteContext = React.createContext<NoteContextProps>({
  setNotesData: () => {},
  notesData: [],
  redactedNoteId: 0,
  setRedactedNoteId: () => {}
})

export const NoteContextProvider = ({ children }: NoteContextProviderProps) => {
  const [notesData, setNotesData] = useState<NoteType[]>([])
  const [redactedNoteId, setRedactedNoteId] = useState<number>(0)

  return (
    <NoteContext.Provider value={{ notesData, setNotesData, redactedNoteId, setRedactedNoteId }}>
      {children}
    </NoteContext.Provider>
  )
}
