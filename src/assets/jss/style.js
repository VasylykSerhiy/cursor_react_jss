import styled from 'styled-components'

export const Form = styled.form`
  display: flex;
  max-width: 350px;
  flex-direction: column;
  width: 100%;
`;

export const Wrapper = styled.div`
  display: flex;
  height: calc(100vh - 60px);
  align-items: center;
  justify-content: center;
`;

export const Input = styled.input`
  background-color: transparent;
  border: 1px solid #888;
  padding: 10px;
  border-radius: 3px;
  width: 100%;
  margin-bottom: 15px;
  color: #888;

  ${props => 
    props.valid === undefined ? "border-color: #888; color: #888;" :
    props.valid ? 
      "border-color: #690; color: #690;" :
      "border-color: #905; color: #905;"
  }

  &:focus{
    outline: none
  }
`;

export const TitleBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  margin-bottom: 20px
`;

export const Title = styled.h3`
  color: #fff;
  font-size: 26px;
  margin-top: 10px
`;

export const Img = styled.img`
  font-size: 26px;
  background: #f38eb0;
  border-radius: 50%;
  height: 30px;
  width: 30px;
  object-fit: contain;
  object-position: center;
  padding: 5px;
`;

export const CheckboxWrap = styled.div`
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  display: flex;
`;

export const Checkbox = styled.input`
  display: none;

  &:checked ~ label {
    &::after{
      background-color: #fff;
    }
  }
`;

export const Label = styled.label`
  padding-left: 25px;
  color: #fff;
  position: relative;
  line-height: 1.3;

  &::after{
    content: "";
    position: absolute;
    width: 15px;
    height: 15px;
    border: 1px solid #fff;
    left: 0;
    top: 50%;
    transform: translateY(-50%);
    border-radius: 3px;
  }
`;

export const FormButton = styled.button`
  width: 100%;
  padding: 10px;
  color: black;
  background-color: #90caf8;
  text-transform: uppercase;
  font-weight: bold;
  margin-top: 35px;
  border-radius: 5px;
  ${props => props.isDisabled ? "cursor: no-drop;" : "cursor: auto;"}

  &:focus{
    outline: none
  }s
`;

export const Copyright = styled.div`
  text-align: center;
  margin-top: 60px;
  color: #888;
  font-size: 12px;
`;

export const LinkWrap = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 15px 0
`;

export const Link = styled.a`
  font-size: 13px;  
  color: #7e909e;
`;

export const NameWrap = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 15px;
  align-items: center;
`;

export const Menu = styled.nav`

`;

export const MenuList = styled.ul`
  display: flex;
  max-width: 550px;
  width: 100%;
  justify-content: center;
  margin: auto;
  height: 60px;
  align-items: center;
`;

export const MenuItem = styled.li`
  font-size: 20px;

  &:not(:last-of-type){
    margin-right: 15px;
  }
`;