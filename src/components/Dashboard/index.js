import {DevicesGrid} from "components/DevicesGrid"
import {HeaderFilterControls} from "components/HeaderFilterControls"
import {useApiHandler} from "hooks/useApiHandler"
import {useState} from "react"
import 'styles/Dashboard.css'

export const Dashboard = () => {

    const {deviceList,
        createOrUpdate,
        sortByCapacityOrName,
        filterByType,
        deleteDevice,
        refreshList} = useApiHandler()

    const [showModal, setShowModal] = useState(false)

    return (
        <div className='dashboard-container'>
            <div className='dashboard-grid-header'>
                <HeaderFilterControls
                    actions={{sortByCapacityOrName, filterByType, refreshList}}
                    setShowModal={setShowModal}/>
            </div>
            <DevicesGrid
                deviceList={deviceList}
                deleteDevice={deleteDevice}
                createOrUpdate={createOrUpdate}
                showModal={showModal}
                setShowModal={setShowModal}/>
        </div>
    )
}