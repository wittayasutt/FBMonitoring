import React, { Component } from 'react'
import Link from 'next/link'
import styled from 'styled-components'
import Filter from './filter'
import FilterMobile from './filter-mobile'
import Feed from './feed'

const Wrapper = styled.div`
	min-height: 554px;
	display: flex;
	flex-direction: row;
	margin: 32px;
	padding: 24px;
	background: #ffffff;
	border: 1px solid #eaeaea;
	border-radius: 5px;

	@media screen and (max-width: 768px) {
		flex-direction: column;
		margin: 8px;
		padding: 0;
		background: initial;
		border: 0;
	}
`

class Data extends Component {
	constructor(props, context) {
		super(props, context)
	}

	render() {
		const { theme } = this.props

		return (
			<Wrapper>
				<Filter theme={theme} />
				<FilterMobile theme={theme} />
				<Feed theme={theme} />
			</Wrapper>
		)
	}
}

export default Data
