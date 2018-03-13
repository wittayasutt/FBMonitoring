import React, { Component } from 'react'
import Link from 'next/link'
import styled from 'styled-components'

import Keywords from './keywords'
import KeywordsMobile from './keywords-mobile'
import Graph from './graph'
import Feed from './feed'

const Wrapper = styled.div`
	display: flex;
	flex-direction: row;
	margin: 24px;

	@media screen and (max-width: 768px) {
		flex-direction: column;
		margin: 8px;
	}
`

const KeywordsWrapper = styled.div`
	width: 250px;

	@media screen and (max-width: 768px) {
		width: 100%;
		margin-bottom: 8px;
	}
`

const Content = styled.div`
	flex: 1;
	display: flex;
	flex-direction: column;
	margin-left: 24px;

	@media screen and (max-width: 768px) {
		margin-left: 0px;
	}
`

class Monitoring extends Component {
	render() {
		return (
			<Wrapper>
				<KeywordsWrapper>
					<Keywords />
					<KeywordsMobile />
				</KeywordsWrapper>
				<Content>
					<Graph />
					<Feed />
				</Content>
			</Wrapper>
		)
	}
}

export default Monitoring
