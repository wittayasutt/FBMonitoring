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

const FilterWrapper = styled.div`
	width: 250px;
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

class Data extends Component {
	constructor(props, context) {
		super(props, context)
	}

	render() {
		const { theme } = this.props

		const dataKeywords = [
			{ text: 'CIMB', noti: 10 },
			{ text: 'TMB', noti: 10 },
			{ text: 'SCB', noti: 10 },
			{ text: 'KBANK', noti: 10 }
		]

		return (
			<Wrapper>
				<FilterWrapper>
					<Keywords theme={theme} dataKeywords={dataKeywords} />
					<KeywordsMobile theme={theme} dataKeywords={dataKeywords} />
				</FilterWrapper>
				<Content>
					<Graph />
					<Feed theme={theme} />
				</Content>
			</Wrapper>
		)
	}
}

export default Data
