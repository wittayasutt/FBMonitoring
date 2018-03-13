import React, { Component } from 'react'
import Link from 'next/link'
import styled from 'styled-components'
import { connect } from 'react-redux'

import Sentiment from './sentiment'

const Wrapper = styled.div`
	width: 100%;
	display: flex;
	flex-direction: column;
	margin-top: 12px;
	border: 1px solid #eaeaea;
	border-radius: 10px;
	padding: 0 20px;
	background: #ffffff;
	color: #2f2c3d;

	@media screen and (max-width: 768px) {
		padding: 0 10px;
	}
`

const Divide = styled.div`
	height: 10px;
	width: 1px;
	background: #f2f1f1;
	margin: auto 10px;
`

const DivideDesktop = styled.div`
	display: block !important;
	height: 10px;
	width: 1px;
	background: #f2f1f1;
	margin: auto 10px;

	@media screen and (max-width: 768px) {
		display: none !important;
	}
`

const Left = styled.div`
	display: flex;
	flex-direction: row;
	align-items: center;
	flex: 1;
`

const Right = styled.div`
	display: flex;
	flex-direction: row;
	align-items: center;
`

const Top = styled.div`
	display: flex !important;
	height: 40px;
	flex-direction: row;
	align-items: center;
	margin-top: 8px;

	@media screen and (max-width: 768px) {
		display: none !important;
	}
`

const TopMobile = styled.div`
	display: none !important;
	height: 44px;
	display: flex;
	flex-direction: row;
	align-items: center;
	margin-top: 8px;

	@media screen and (max-width: 768px) {
		display: flex !important;
	}
`

const UserPicture = styled.div`
	height: 20px;
	width: 20px;
	border-radius: 50%;
	margin-right: 8px;
	background: gray;

	@media screen and (max-width: 768px) {
		min-height: 24px;
		min-width: 24px;
	}
`

const Name = styled.div``

const DateAndType = styled.div`
	display: flex;
	flex-direction: row;
	color: #6d6b77;
`

const Type = styled.div`
	color: #6d6b77;
`

const Middle = styled.div`
	margin: 10px 0 20px;
	font-size: 16px;

	a {
		color: ${props => props.accent};

		:hover {
			color: ${props => props.accent};
		}
	}
`

const Bottom = styled.div`
	height: 40px;
	display: flex;
	flex-direction: row;
	align-items: center;
	border-top: 1px solid #f2f1f1;
`

const Answer = styled.div`
	a {
		color: #6d6b77;

		:hover {
			color: #2f2c3d;
		}
	}
`

const Saved = styled.div`
	display: flex !important;
	align-items: center;
	cursor: pointer;

	@media screen and (max-width: 768px) {
		display: none !important;
	}

	i {
		font-size: 18px;
		color: #eaeaea;
		margin-right: 6px;
		transition: 0.2s;
	}

	:hover i {
		color: ${props => props.accent};
	}
`

const SavedMobile = styled.div`
	display: none !important;
	align-items: center;
	cursor: pointer;

	@media screen and (max-width: 768px) {
		display: flex !important;
	}

	i {
		font-size: 18px;
		color: #eaeaea;
		margin-right: 6px;
		transition: 0.2s;
	}

	:hover i {
		color: ${props => props.accent};
	}
`

const More = styled.div`
	color: ${props => props.accent};
	transition: 0.2s;
	cursor: pointer;

	:hover {
		color: ${props => props.accent};
		opacity: 0.8;
	}
`

class Box extends Component {
	constructor(props, context) {
		super(props, context)
	}

	render() {
		const { theme, data } = this.props

		return (
			<Wrapper>
				<Top>
					<Left>
						<UserPicture />
						{data.name}
						<Divide />
						<Type>{data.type}</Type>
					</Left>
					<Right>{data.date}</Right>
				</Top>
				<TopMobile>
					<Left>
						<UserPicture />
						<Name>
							{data.name}
							<DateAndType>
								{data.date}
								<Divide />
								<Type>{data.type}</Type>
							</DateAndType>
						</Name>
					</Left>
					<Right>
						<SavedMobile accent={theme.accent}>
							<i className="fas fa-bookmark" />
						</SavedMobile>
					</Right>
				</TopMobile>
				<Middle accent={theme.accent}>{data.text}</Middle>
				<Bottom>
					<Left>
						<Answer>
							<a>Read</a>
						</Answer>
						<Divide />
						<Sentiment>Sentiment</Sentiment>
						<DivideDesktop />
						<Saved accent={theme.accent}>
							<i className="fas fa-bookmark" />
							Saved
						</Saved>
					</Left>
					<Right>
						<More accent={theme.accent}>ดูโพส</More>
					</Right>
				</Bottom>
			</Wrapper>
		)
	}
}

const mapStateToProps = ({ theme }) => ({ theme })

export default connect(mapStateToProps)(Box)
