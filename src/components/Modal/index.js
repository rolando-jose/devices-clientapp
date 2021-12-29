import {createPortal} from "react-dom"
import 'styles/Modal.css'

export const Modal = ({confirm, device, setDevice, handleClose, show, children}) => {
    const showHideClassName = show ? "overlay show" : "overlay hide"

    const closeModal = () => {
        handleClose(false)
        setDevice({})
    }

    return createPortal(
        <div className={showHideClassName}>
            <div className="modal">
                {!confirm &&
                    <div className='modal-header'>
                        <h2>{`${Object.keys(device).length > 0 ? 'Edit' : 'Add'} Device`}</h2>
                        <a className='modal-close-button' onClick={closeModal}>
                            <i className="fa fa-close"/>
                        </a>
                    </div>
                }
                <div className='modal-content'>
                    {children}
                </div>
            </div>
        </div>,
        document.getElementById('root')
    )
}