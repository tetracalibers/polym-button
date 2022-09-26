import styled, { css } from 'styled-components'
import { CharacterProps } from './model'

const alertStyle = css`
  background-color: #ff0f6d;
  color: white;
  pointer-events: none;
  display: block;
`

/* インタラクティブコンテンツを子要素に持つ場合、警告 */
const checker = css`
  & button::after,
  & a::after,
  & [tabindex]::after {
    ${alertStyle}
    content: '[HTML WARMING] invalid child element : "a", "button", "[tabindex]"';
  }
`

const reset = css`
  background-color: transparent;
  border: none;
  cursor: pointer;
  outline: none;
  padding: 0;
  appearance: none;
  font-size: 1rem;
`

export const ButtonCore = styled.button<CharacterProps>`
  ${(props) => props.cssReset && reset}
  ${(props) => props.violationCheck && checker}
`
