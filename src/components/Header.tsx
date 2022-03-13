import React from 'react'
import styled from 'styled-components'
export const PATH_ROOT = '/'

export const Header = () => {
  return (
    <Wrapper>
      <Title>Заметки</Title>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  padding-top: 15px;
  width: 100%;
  height: 80px;
  background: #495bfb;
`

const Title = styled.div`
  color: #fff;
  font-size: 36px;
  font-weight: 700;
`
