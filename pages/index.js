import React, { Component } from 'react'
import Link from 'next/link'
import styled from 'styled-components'
import Head from '../components/head'
import Nav from '../components/nav'
import Graph from '../components/graph'
import Data from '../components/data'

import stylesheet from 'styles/index.scss'

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

	render() {
		const { userAgent, theme } = this.props

		return (
			<div>
				<style dangerouslySetInnerHTML={{ __html: stylesheet }} />
				<Head title="Home" />
				<GraphWrapper background={theme.dark}>
					<div className="container">
						<Nav theme={theme} />
						<Graph theme={theme} />
					</div>
				</GraphWrapper>
				<DataWrapper background={theme.light}>
					<div className="container">
						<Data theme={theme} />
					</div>
				</DataWrapper>
			</div>
		)
	}
}

export default Index
