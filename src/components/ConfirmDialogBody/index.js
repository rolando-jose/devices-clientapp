import {Button} from "components/Button";
import {toast} from "react-toastify";

export const ConfirmDialogBody = ({device, deleteDevice, show, showModal}) => {

    const handleDelete = async () => {
      await deleteDevice(device) ?
          toast('Device deleted',{type:'success'})
          :
          toast('Could not delete the device', {type: 'error'})
        showModal(false)
    }

    const handleCancel = () => {
        showModal(false)
        show(false)
    }

    return (
        <div>
            <h4>
                Are you sre you want to delete this device?
            </h4>
            <div>
                <Button onClick={handleDelete} color='#0A58CA' value='Accept'/>
                <Button onClick={handleCancel} color='#B02A37' value='Cancel'/>
            </div>
        </div>
    )
}