import React, { Component } from 'react'
import Link from 'next/link'
import styled from 'styled-components'
import Keywords from './keywords'
import KeywordsMobile from './keywords-mobile'
import Graph from './graph'
import Feed from './feed'
import forEach from 'lodash/forEach'

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

class Data extends Component {
	constructor(props, context) {
		super(props, context)
	}

	render() {
		const { theme } = this.props

		const data = {
			dataKeywords: [
				{ text: 'CIMB', noti: 10 },
				{ text: 'TMB', noti: 10 },
				{ text: 'SCB', noti: 10 },
				{ text: 'KBANK', noti: 10 }
			],
			allKeywords: 0,
			dataGroup: [{ text: 'หุ้น', noti: 10 }, { text: 'กองทุน', noti: 10 }],
			allGroup: 0
		}

		forEach(data.dataKeywords, value => (data.allKeywords += value.noti))
		forEach(data.dataGroup, value => (data.allGroup += value.noti))

		return (
			<Wrapper>
				<KeywordsWrapper>
					<Keywords theme={theme} data={data} />
					<KeywordsMobile theme={theme} data={data} />
				</KeywordsWrapper>
				<Content>
					<Graph />
					<Feed theme={theme} />
				</Content>
			</Wrapper>
		)
	}
}

export default Data
