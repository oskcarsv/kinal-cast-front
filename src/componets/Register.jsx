import { useState } from "react"
import { useRegister } from "../shared/hooks"
import {
    emailValidationMessage,
    passwordConfirmationMessage,
    validateConfirPassword,
    validateEmail,
    validatePassword,
    validatePasswordMessage,
    validateUsername,
    validateUsernameMessage
} from "../shared/validators"
import { Input } from "./Input"
import { Logo } from "./Logo"

export const Register = ({ switchAuthHandler }) => {
    
    const { register, isLoading } = useRegister()
    
    const [formState, setFormState] = useState({

        username: {
            value: '',
            isValid: false,
            showError: false
        },

        email: {
            value: '',
            isValid: false,
            showError: false
        },

        password: {
            value: '',
            isValid: false,
            showError: false
        },
        
        passwordconfirm: {
            value: '',
            isValid: false,
            showError: false
        }

    })

    const handleInputValueChange = (value, field) => {
        
        setFormState((prevState) => ({
            ...prevState,
            [field]: {
                ...prevState[field],
                value
            }
        }))
    }

    const handleInputValidationOnBlur = (value, field) => {
        
        let isValid = false

        switch (field) {
            
            case 'username':

                isValid = validateUsername(value)

                break

            case 'email':

                isValid = validateEmail(value)

                break
            
            case 'password':

                isValid = validatePassword(value)

              break
          
            case 'passwordconfirm':

                isValid = validateConfirPassword(formState.password.value, value)

                break
            
            default:

                break

        }

        setFormState((prevState) => ({
            ...prevState,
            [field]: {
                ...prevState[field],
                isValid,
                showError: !isValid
            }
        }))

    }

    const handleRegister = (event) => {
        
        event.preventDefault()

        register(formState.username.value, formState.email.value, formState.password.value)

    }

    const isSubmitButtonDisable = isLoading || !formState.email.isValid || !formState.password.isValid || !formState.username.isValid || !formState.passwordconfirm.isValid

  return (
      <div className="login-container">
          <Logo text={'Login Kinal Cast'} />
      <form className="auth-form">
              <Input
                  field='username'
                  label='Username'
                  value={formState.username.value}
                  onChangeHandler={handleInputValueChange}
                  type='text'
                  onBlurHandler={handleInputValidationOnBlur}
                  showErrorMessage={formState.username.showError}
                  validationMessage={validateUsernameMessage}
              />
              <Input
                  field='email'
                  label='Email'
                  value={formState.email.value}
                  onChangeHandler={handleInputValueChange}
                  type='text'
                  onBlurHandler={handleInputValidationOnBlur}
                  showErrorMessage={formState.email.showError}
                  validationMessage={emailValidationMessage}
              />
              <Input
                  field='password'
                  label='Password'
                  value={formState.password.value}
                  onChangeHandler={handleInputValueChange}
                  type='password'
                  onBlurHandler={handleInputValidationOnBlur}
                  showErrorMessage={formState.password.showError}
                  validationMessage={validatePasswordMessage}
              />
              <Input
                  field='passwordconfirm'
                  label='Password Confirmation'
                  value={formState.passwordconfirm.value}
                  onChangeHandler={handleInputValueChange}
                  type='password'
                  onBlurHandler={handleInputValidationOnBlur}
                  showErrorMessage={formState.passwordconfirm.showError}
                  validationMessage={passwordConfirmationMessage}
              />
              <button onClick={handleRegister} disabled={isSubmitButtonDisable}>
                  Register
              </button>
          </form>
          <span onClick={switchAuthHandler} className="auth-form-switch-label">
              ¿No tienes Cuenta? Registrate Aquí
          </span>
    </div>
  )
}