import {useEffect, useState} from "react"
import {DeviceCard} from "components/DeviceCard"
import {Modal} from "components/Modal"
import {DeviceForm} from "components/DeviceForm"
import {ConfirmDialogBody} from "components/ConfirmDialogBody";
import 'styles/DeviceGrid.css'

export const DevicesGrid = ({deleteDevice, showModal, setShowModal, createOrUpdate, deviceList}) => {

    const [device, setDevice] = useState({})
    const [showConfirm, setShowConfirm] = useState(false)

    useEffect(() => {
        if (!showModal) {
            setDevice({})
            setShowConfirm(false)
        }
    }, [showModal])

    return (
        <div className='devices-grid'>
            {
                showModal
                &&
                <Modal
                    confirm={showConfirm}
                    device={device}
                    setDevice={setDevice}
                    handleClose={setShowModal}
                    show={showModal}
                >
                    {!showConfirm ?
                        <DeviceForm
                            setDevice={setDevice}
                            device={device}
                            action={createOrUpdate}
                            showModal={setShowModal}
                        />
                        :
                        <ConfirmDialogBody showModal={setShowModal} device={device} deleteDevice={deleteDevice} show={setShowConfirm}/>
                    }
                </Modal>
            }

            {
                deviceList.length > 0 ? deviceList.map((device) => {
                        return (
                            <DeviceCard
                                actions={{setShowModal, setDevice, createOrUpdate, setShowConfirm}}
                                key={device.id}
                                device={device}/>
                        )
                    }) :
                    <h2>No data</h2>
            }
        </div>
    )
}