import React, { Component } from 'react'
import Link from 'next/link'
import styled from 'styled-components'

const Wrapper = styled.div`
	height: 24px;
	width: 24px;
	position: relative;
	border: 1px solid #eaeaea;
	border-radius: 5px;
	transition: 0.2s;
	cursor: pointer;

	:hover {
		color: ${props => props.accent};
		border-color: ${props => props.accent};
	}

	:hover .content {
		display: block;
	}

	i {
		height: 100%;
		display: flex;
		justify-content: center;
		align-items: center;
	}
`

const DropdownContent = styled.div`
	display: none;
	height: 188px;
	min-width: 250px;
	top: 28px;
	right: 0;
	position: absolute;
	background-color: #ffffff;
	padding: 16px;
	border: 1px solid ${props => props.accent};
	border-radius: 5px;
	z-index: 1;
`

class Filter extends Component {
	constructor(props, context) {
		super(props, context)
	}

	render() {
		const { theme } = this.props

		return (
			<Wrapper accent={theme.accent}>
				<i className="fas fa-filter" />
				<DropdownContent className="content" accent={theme.accent}>
					Dropdown
				</DropdownContent>
			</Wrapper>
		)
	}
}

export default Filter
