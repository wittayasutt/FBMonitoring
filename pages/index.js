import React, { Component } from 'react'
import Link from 'next/link'
import styled from 'styled-components'
import Head from '../components/head'
import Side from '../components/side'
import Graph from '../components/graph'
import Data from '../components/data'

import stylesheet from 'styles/index.scss'

const Wrapper = styled.div`
	display: flex;
	flex-direction: row;
	background: #fafafa;
`

const Content = styled.div`
	width: 100%;
	margin: 0 auto;
`

const ContentHead = styled.div`
	height: 60px;
	display: flex;
	flex-direction: row;
	align-items: center;
	background: #ffffff;
	font-size: 16px;
	box-shadow: 0 2px 6px 0px rgba(0, 0, 0, 0.1);
`

const ContentHeadHamburger = styled.div`
	display: none;

	@media screen and (max-width: 1023px) {
		display: flex;
		justify-content: center;
		align-items: center;
		height: 60px;
		min-width: 60px;
		cursor: pointer;
	}
`

const ContentHeadMenu = styled.div`
	height: 100%;
	width: 100%;
	display: flex;
	justify-content: flex-end;
	align-items: center;
	padding: 0 32px;

	@media screen and (max-width: 1023px) {
		padding: 0 16px;
	}
`

const GraphWrapper = styled.div`
	height: 100vh;
	background: ${props => props.background};
`

const DataWrapper = styled.div`
	background: ${props => props.background};
`

class Index extends Component {
	static getInitialProps({ req }) {
		// Ensures material-ui renders the correct css prefixes server-side
		let userAgent
		if (process.browser) {
			userAgent = navigator.userAgent
		} else {
			userAgent = req.headers['user-agent']
		}

		let theme = {}
		theme.primary = '#71aeef'
		theme.accent = '#1abaed'
		theme.dark = '#2f2c3d'
		theme.light = '#f2f1f1'

		return { userAgent, theme }
	}

	constructor(props, context) {
		super(props, context)

		this.state = {
			open: false
		}
	}

	toggleSideBar = () => {
		const open = !this.state.open
		this.setState({ open })
	}

	render() {
		const { userAgent, theme } = this.props
		const { open } = this.state

		return (
			<Wrapper>
				<style dangerouslySetInnerHTML={{ __html: stylesheet }} />
				<Head title="Home" />
				<Side theme={theme} open={open} toggleSideBar={this.toggleSideBar} />
				<Content>
					<ContentHead>
						<ContentHeadHamburger onClick={this.toggleSideBar}>
							<i className="fas fa-bars" />
						</ContentHeadHamburger>
						<ContentHeadMenu>Thanapa Suthisa-ngiam</ContentHeadMenu>
					</ContentHead>
					<Data theme={theme} />
				</Content>

				{/* <GraphWrapper background={theme.dark}>
					<div className="container">
						<Nav theme={theme} />
						<Graph theme={theme} />
					</div>
				</GraphWrapper>
				<DataWrapper background={theme.light}>
					<div className="container">
						<Data theme={theme} />
					</div>
				</DataWrapper> */}
			</Wrapper>
		)
	}
}

export default Index
