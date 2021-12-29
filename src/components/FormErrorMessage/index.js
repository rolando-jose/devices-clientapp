import 'styles/FormErrorMessage.css'

export const FormErrorMessage = ({error}) => {
    return (
        <span className='form-error-message'>
            {error.children}
        </span>
    )

}