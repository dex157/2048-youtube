import React, { PureComponent } from 'react'
import styled from 'styled-components'

class Layout extends PureComponent {
  render() {
    const { children } = this.props
    return (
      <Main>
        <Content>{children}</Content>
      </Main>
    )
  }
}

const Main = styled.main`
  align-items: center;
  display: flex;
  height: 100%;
  justify-content: center;
  width: 100%;
`

const Content = styled.div`
  min-height: 600px;
  width: 600px;
  display: flex;
  flex-direction: column;
  align-items: center;
`

export default Layout
