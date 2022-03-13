import React from 'react'
import { ThemeProvider } from 'styled-components/macro'
import { colors } from 'utils/styles/colors'

export const RootThemeProvider = ({ children }: { children: React.ReactNode }) => {
  return (
    <ThemeProvider
      theme={{
        colors
      }}>
      {children}
    </ThemeProvider>
  )
}
