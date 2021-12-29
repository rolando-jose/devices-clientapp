import {ErrorMessage, Formik} from 'formik'
import {toast} from 'react-toastify'
import {Button} from "components/Button"
import {FormErrorMessage} from "components/FormErrorMessage"
import {DeviceTypeSelect} from "components/DeviceTypeSelect"
import 'styles/DeviceForm.css'

export const DeviceForm = ({setDevice, device, action, showModal}) => {
    const initialValues = {system_name: '', type: '', hdd_capacity: ''}

    const handleSubmit = async (values, {resetForm}) => {
        const method = Object.keys(device).length === 0 ? 'POST' : 'PUT'
        const result = await action(values, method)

        switch (result) {
            case true:
                setDevice({})
                resetForm(initialValues)
                showModal(false)
                toast(`Device ${method === 'POST' ? 'added' : 'edited'} successfully`, {
                    type: "success"
                })
                break
            default:
                setDevice({})
                resetForm(initialValues)
                showModal(false)
                toast("Could not add the device, please try again later", {
                    type: "error"
                })
        }
    }

    const handleCancelButton = (resetForm) => {
        resetForm(initialValues)
        showModal(false)
        setDevice({})
    }

    const validate = (values) => {
        const errors = {}

        if (values.system_name === '') {
            errors.system_name = 'System name required'
        }
        if (values.type === '') {
            errors.type = 'System type required'
        }
        if (values.hdd_capacity === '') {
            errors.hdd_capacity = 'HDD capacity required'
        }

        return errors
    }

    return (
        <Formik
            initialValues={Object.keys(device).length === 0 ? initialValues : device}
            onSubmit={handleSubmit}
            validate={validate}
        >
            {({
                  values,
                  handleChange,
                  resetForm, errors,
                  submitForm,
                  setFieldValue
              }) => (
                <form className='form-container' action="">
                    <label htmlFor='name'>System name *</label>
                    <input
                        required
                        type="text"
                        name='system_name'
                        placeholder='Enter System name'
                        value={values?.system_name}
                        onChange={handleChange}
                    />
                    <ErrorMessage component={msg => <FormErrorMessage error={msg}/>} name="system_name"/>
                    <label htmlFor='type'>System type:</label>
                    <DeviceTypeSelect handleChange={handleChange} values={values}/>
                    <ErrorMessage component={msg => <FormErrorMessage error={msg}/>} name="type"/>
                    <label htmlFor='hdd_capacity'>HDD Capacity in GB:</label>
                    <input
                        type="text"
                        name='hdd_capacity'
                        placeholder='Enter HDD capacity'
                        value={values?.hdd_capacity}
                        onChange={e => {
                            e.preventDefault()
                            const {value} = e.target
                            const regex = /^[1-9]\d*$/
                            if (regex.test(value.toString())) {
                                setFieldValue("hdd_capacity", value)
                            }
                        }}
                    />
                    <ErrorMessage component={msg => <FormErrorMessage error={msg}/>} name="hdd_capacity"/>
                    <div className='form-footer'>
                        <Button onClick={() => handleCancelButton(resetForm)} color='#B02A37' value='Cancel'
                                iconType='fa fa-times'/>
                        <Button onClick={submitForm} value='Accept' iconType='fa fa-check' color='#0A58CA'/>
                    </div>
                </form>
            )}
        </Formik>
    )
}