import React, { Component } from 'react'
import Link from 'next/link'
import styled from 'styled-components'
import Sentiment from './sentiment'

const Wrapper = styled.div`
	min-height: 250px;
	width: 100%;
	display: flex;
	flex-direction: column;
	margin-top: 12px;
	border: 1px solid
		${props => (props.new ? props => props.borderColor : '#F2F1F1')};
	border-radius: 10px;
	padding: 24px 24px 16px;
	background: #ffffff;
`

const Divide = styled.div`
	height: 10px;
	width: 1px;
	background: #f2f1f1;
	margin: auto ${props => props.margin}px;
`

const Top = styled.div`
	margin-bottom: 24px;
	display: flex;
	flex-direction: row;
`

const UserPicture = styled.div`
	height: 40px;
	width: 40px;
	border-radius: 50%;
	margin-right: 24px;
	background: gray;
`

const Name = styled.div`
	flex: 1;
	display: flex;
	flex-direction: column;
`

const DateAndType = styled.div`
	font-size: 12px;
	display: flex;
	flex-direction: row;
`

const Type = styled.div`
	color: ${props => props.color};
`

const Save = styled.div`
	i {
		font-size: 18px;
		color: #eaeaea;
		cursor: pointer;

		:hover {
			color: #fbd771;
		}
	}
`

const Middle = styled.div`
	flex: 1;
	font-size: 18px;

	a {
		color: ${props => props.color};

		:hover {
			color: ${props => props.color};
		}
	}
`

const Text = styled.div`
	border: 1px solid
		${props => (props.new ? props => props.borderColor : 'none')};
	padding: ${props => (props.new ? '16px' : '0px')};
	border-radius: ${props => (props.new ? '10px' : '0px')};
`

const SeeFull = styled.div`
	height: 26px;
	width: 104px;
	display: ${props => (props.more ? 'flex' : 'none')};
	justify-content: center;
	align-items: center;
	margin: 16px auto 38px;
	text-align: center;
	font-size: 12px;
	color: #6d6b77;
	border: 1px solid #f2f1f1;
	border-radius: 20px;
	cursor: pointer;
	transition: 0.2s;

	:hover {
		background: ${props => props.hover};
		border: 1px solid ${props => props.hover};
		color: #ffffff;
	}
`

const Bottom = styled.div`
	display: flex;
	padding-top: 10px;
	font-size: 12px;
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

const More = styled.div`
	flex: 1;
	display: flex;
	justify-content: flex-end;

	a {
		color: ${props => props.color};

		:hover {
			color: ${props => props.color};
			opacity: 0.8;
		}
	}
`

class Box extends Component {
	constructor(props, context) {
		super(props, context)
	}

	render() {
		const { theme, data } = this.props

		return (
			<Wrapper borderColor={theme.accent} new={data.type === 'Post'}>
				<Top>
					<UserPicture />
					<Name>
						{data.name}
						<DateAndType color={theme.accent}>
							{data.date}
							<Divide margin={8} />
							<Type color={theme.accent}>{data.type}</Type>
						</DateAndType>
					</Name>
					<Save>
						<i className="fas fa-bookmark" />
					</Save>
				</Top>
				<Middle color={theme.accent}>
					<Text borderColor={theme.accent} new={data.type !== 'Post'}>
						{data.text}
					</Text>
					<SeeFull hover={theme.accent} more={data.type !== 'Post'}>
						ดูโพสทั้งหมด
					</SeeFull>
				</Middle>
				<Bottom>
					<Answer>
						<a>ตอบ</a>
					</Answer>
					<Divide margin={16} />
					<Sentiment>Sentiment</Sentiment>
					{/* <More color={theme.accent}>
						<a>ดูโพส</a>
					</More> */}
				</Bottom>
			</Wrapper>
		)
	}
}

export default Box
