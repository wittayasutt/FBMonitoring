import React, { Component } from 'react'
import Link from 'next/link'
import styled from 'styled-components'

const Wrapper = styled.div``

class DataKeywords extends Component {
	constructor(props, context) {
		super(props, context)
	}

	render() {
		const { theme } = this.props

		return <Wrapper>Keywords</Wrapper>
	}
}

export default DataKeywords
