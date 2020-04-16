import React,{ useRef, useState } from 'react'

import {
  Form, Input, Wrapper, TitleBox, Label, FormButton,Link,
  Title, Img, CheckboxWrap, Checkbox, Copyright, LinkWrap,NameWrap
} from '../../assets/jss/style'

export default function SingUp() {
  const firstNameInput = useRef();
  const lastNameInput = useRef();
  const emailInput = useRef();
  const passwordInput = useRef();

  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [checkbox, setCheckbox] = useState(false)
  const [validForm, setValidForm] = useState(false)

  const emailReg = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
  const nameReg = /([іа-яА-ЯA-Za-z]{3,})/;
  const passwordReg = /(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{8,}/g;

  const changValue = (input, setValue) => {
    setValue(input.current.value)
    isValidForm()
  }

  const isValid = (el, reg) => {
    if(el.current){
      if(el.current.value !== ''){
        return reg.test(el.current.value)
      } else {
        return undefined
      }
    }
  }

  const isValidForm = () => {
    if(
      isValid(firstNameInput, nameReg) &&
      isValid(lastNameInput,nameReg) &&
      isValid(emailInput, emailReg) &&
      isValid(passwordInput, passwordReg)  
    ) {
      setValidForm(true)
      return true
    } else {
      setValidForm(false)
      return false
    }
  }

  const toggleCheckbox = () => {
    setCheckbox(!checkbox)
    isValidForm()
  }

  const onSabmit = (e) => {
    e.preventDefault();
    isValidForm()

    if (isValidForm()) {
      firstNameInput.current.value = '';
      lastNameInput.current.value = '';
      emailInput.current.value = '';
      passwordInput.current.value = '';
      setFirstName('')
      setLastName('')
      setEmail('')
      setPassword('')
      setCheckbox(false)
      setValidForm(false)
    }
  }

  return (
    <Wrapper>
      <Form >
        <TitleBox >
          <Img src="https://img.pngio.com/icon-png-login-3052-free-icons-and-png-backgrounds-login-icon-png-188_236.png" />
          <Title>Sign Up</Title>
        </TitleBox>
        <NameWrap>
          <Input
            type="text"
            placeholder="First Name *"
            ref={firstNameInput}
            onChange= {() => {
              changValue(firstNameInput, setFirstName)
            }}
            valid = { isValid(firstNameInput, nameReg) }
            value = {firstName}
          />
          <Input
            type="text"
            placeholder="Last Name *"
            ref={lastNameInput}
            onChange= {() => {
              changValue(lastNameInput, setLastName)
            }}
            valid = {isValid(lastNameInput,nameReg)}
            value = {lastName}
          />
        </NameWrap>
        <Input
          type="email"
          placeholder="Email Address *"
          ref={emailInput}
          onChange= {() => {
            changValue(emailInput, setEmail)
          }}
          valid = {isValid(emailInput,emailReg)}
          value = {email}
        />
        <Input
          type="password"
          placeholder="Password *"
          ref={passwordInput}
          onChange= {() => {
            changValue(passwordInput, setPassword)
          }}
          valid = {isValid(passwordInput, passwordReg)}
          value = {password}
        />

        <CheckboxWrap>
          <Checkbox 
            id="checkbox" 
            type="checkbox"
            onChange={toggleCheckbox}
          />
          <Label htmlFor="checkbox"><p>I want to receive inspiration, marketing promotions and updates via email.</p></Label>
        </CheckboxWrap>

        <FormButton 
         type="submit"
         onClick={onSabmit}
         isDisabled={!validForm}
        >
          SIGN In
        </FormButton>
        <LinkWrap>
          <Link href="#"></Link>
          <Link href="#">Already have an account? Sign in</Link>
        </LinkWrap>
        <Copyright>Copyright @ Yout Website 2020.</Copyright>
      </Form>
    </Wrapper>
  )
}
