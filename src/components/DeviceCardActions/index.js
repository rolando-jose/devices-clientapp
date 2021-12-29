import {Button} from 'components/Button'
import 'styles/DeviceCardActionStyle.css'

export const DeviceCardActions = ({device, actions}) => {

    const handleEdit = () => {
        actions.setShowModal(true)
        actions.setDevice(device)
    }

    const handleDelete = () => {
        actions.setShowModal(true)
        actions.setDevice(device)
        actions.setShowConfirm(true)
    }

    return (
        <div className='card-action-container'>
            <Button color='#0A58CA' onClick={handleEdit} iconType='fa fa-pencil' value='Edit'/>
            <Button color='#B02A37' onClick={handleDelete} iconType='fa fa-trash' value='Delete'/>
        </div>
    )
}