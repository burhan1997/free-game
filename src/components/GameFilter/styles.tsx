import styled from 'styled-components'
import { breakpoints } from 'styles/breakpoints'
import { fontFamily } from 'styles/fonts'
import {
	primaryColor,
	primaryTextColor,
	secondaryColor,
	secondaryTextColor,
} from 'styles/theme'

export const Form = styled.form`
	display: flex;
	justify-content: space-between;
	max-width: 542px;
	padding: 0 16px;
	margin: 24px auto;
	color: ${secondaryTextColor};
	box-sizing: border-box;

	@media (min-width: ${breakpoints.tablet}) {
		max-width: ${breakpoints.tablet};
	}

	@media (min-width: ${breakpoints.desktop}) {
		max-width: 1010px;
	}
`

export const Label = styled.label`
	margin-right: 16px;
	flex-basis: 25%;

	&last-of-type {
		margin-right: 0;
	}
`

export const Select = styled.select`
	width: 100%;
	margin-top: 0;
	color: ${primaryTextColor};
	background-color: ${secondaryColor};
	border: 1px solid ${primaryColor};
	border-radius: 4px;
	padding: 8px 12px;
	font-family: ${fontFamily};
`
