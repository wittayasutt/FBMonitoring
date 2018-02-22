import React, { Component } from 'react'
import Link from 'next/link'
import styled from 'styled-components'
import Box from './box'

const Wrapper = styled.div``

const Title = styled.div`
	display: flex;
	flex-direction: row;
`

const LeftTitle = styled.div`
	flex: 1;
	font-size: 24px;
	font-weight: 500;
`
const RightTitle = styled.div``

const Noti = styled.div`
	height: 28px;
	width: 56px;
	display: flex;
	justify-content: center;
	align-items: center;
	background: ${props => props.background};
	color: #ffffff;
	border-radius: 20px;
	font-size: 14px;
`

class DataFeed extends Component {
	constructor(props, context) {
		super(props, context)
	}

	render() {
		const { theme } = this.props
		const data = [
			{
				name: 'Thanapa Suthisa-ngiam',
				type: 'Post',
				text:
					'กองของ<a>cimb</a>ที่ลงทุนในเวียดนามตอนนี้เปิดเพิ่มให้ซื้อได้แล้วคับเพื่อนๆตั้งแต่วันที่21-25เดือนนี้เท่านั้น ใครสนใจรีบๆก่อนหมดนะคับ',
				date: '20 Dec 2017 16:31:56',
				answer: true
			},
			{
				name: 'Ratthapon Wittayasuttikul',
				type: 'Comment',
				text:
					'กองของ<a>cimb</a>ที่ลงทุนในเวียดนามตอนนี้เปิดเพิ่มให้ซื้อได้แล้วคับเพื่อนๆตั้งแต่วันที่21-25เดือนนี้เท่านั้น ใครสนใจรีบๆก่อนหมดนะคับ',
				date: '20 Dec 2017 16:31:55',
				answer: false
			},
			{
				name: 'Phet Chaiyadech',
				type: 'Reply',
				text:
					'กองของ<a>cimb</a>ที่ลงทุนในเวียดนามตอนนี้เปิดเพิ่มให้ซื้อได้แล้วคับเพื่อนๆตั้งแต่วันที่21-25เดือนนี้เท่านั้น ใครสนใจรีบๆก่อนหมดนะคับ',
				date: '20 Dec 2017 16:31:55',
				answer: false
			}
		]

		return (
			<Wrapper>
				<Title>
					<LeftTitle>CIMB</LeftTitle>
					<RightTitle>
						<Noti background={theme.accent}>10</Noti>
					</RightTitle>
				</Title>
				{data.map((d, index) => <Box theme={theme} data={d} key={index} />)}
			</Wrapper>
		)
	}
}

export default DataFeed
