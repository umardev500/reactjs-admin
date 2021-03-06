import styled from 'styled-components'

const StyledSidebar = styled.div`
  height: 100%;
  width: 250px;
  background-color: #fff;
  box-shadow: 0px 0px 50px rgba(100, 116, 139, 0.4),
    inset -1px 0px 1px rgba(0, 0, 0, 0.15);
  position: fixed;
  top: 0;
  opacity: 1;
  transition-property: opacity, margin-left;
  transition-duration: 0.4s;
  transition-timing-function: ease-in-out;
`

export default StyledSidebar
