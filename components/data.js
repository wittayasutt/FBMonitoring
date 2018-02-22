import React, { Component } from 'react'
import Link from 'next/link'
import styled from 'styled-components'
import DataKeywords from './dataKeywords'
import DataFeed from './dataFeed'

const Wrapper = styled.div`
	/* padding: 40px 0; */

	@media screen and (max-width: 768px) {
		/* padding: 40px 0.75rem; */
	}
`

const Keywords = styled.div``

const Feed = styled.div``

const FeedTitle = styled.div``

class Data extends Component {
	constructor(props, context) {
		super(props, context)
	}

	render() {
		const { theme } = this.props

		return (
			<Wrapper className="columns">
				<Keywords className="column is-3">
					<DataKeywords theme={theme} />
				</Keywords>
				<Feed className="column is-9">
					<DataFeed theme={theme} />
				</Feed>
			</Wrapper>
		)
	}
}

export default Data
