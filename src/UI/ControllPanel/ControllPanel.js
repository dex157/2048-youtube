import React, { PureComponent } from 'react'
import styled from 'styled-components'

class ControllPanel extends PureComponent {
  render() {
    const { children } = this.props
    return <Container>{children}</Container>
  }
}

const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 20px 0;
  width: 100%;
  align-items: center;
`
export default ControllPanel
