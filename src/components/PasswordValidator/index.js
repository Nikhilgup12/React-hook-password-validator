import {useState} from 'react'
import {
  PasswordValidatorMainContainer,
  PasswordValidatorContainer,
  PasswordValidatorHeading,
  PasswordValidatorPara,
  PasswordError,
  PasswordInput,
} from './styledComponents'

const PasswordValidator = () => {
  const [Passlen, setPass] = useState('')
  const onPassword = event => {
    setPass(event.target.value)
  }
  return (
    <>
      <PasswordValidatorMainContainer>
        <PasswordValidatorContainer>
          <PasswordValidatorHeading>
            Password Validator
          </PasswordValidatorHeading>
          <PasswordValidatorPara>
            {' '}
            Check how strong and secure is your password{' '}
          </PasswordValidatorPara>
          <PasswordInput
            type="password"
            onChange={onPassword}
            value={Passlen}
          />
          {Passlen.length < 8 ? (
            <PasswordError>
              Your password must be at least 8 characters{' '}
            </PasswordError>
          ) : (
            ' '
          )}
        </PasswordValidatorContainer>
      </PasswordValidatorMainContainer>
    </>
  )
}

export default PasswordValidator
