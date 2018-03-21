import React, { Component } from 'react'
import Layout from 'UI/Layout'
import Field from 'UI/Field'

class App extends Component {
  render() {
    const { matrix } = this.state
    return (
      <Layout>
        <Field matrix={matrix} />
      </Layout>
    )
  }
}

export default App
