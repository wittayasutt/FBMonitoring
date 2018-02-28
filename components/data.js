import React, { Component } from 'react'
import Link from 'next/link'
import styled from 'styled-components'
import Filter from './filter'
import Feed from './feed'

const Wrapper = styled.div`
	display: flex;
	flex-direction: row;
	padding: 24px;

	@media screen and (max-width: 768px) {
		flex-direction: column;
	}
`

const FeedTitle = styled.div``

class Data extends Component {
	constructor(props, context) {
		super(props, context)
	}

	render() {
		const { theme } = this.props

		return (
			<Wrapper>
				{/* <Keywords>Keywords</Keywords> */}
				{/* <Keywords className="column is-3">
					<DataKeywords theme={theme} />
				</Keywords> */}
				<Filter theme={theme} />
				<Feed theme={theme} />
			</Wrapper>
		)
	}
}

export default Data
