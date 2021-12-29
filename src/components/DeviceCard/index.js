import "styles/DeviceCard.css"
import {DeviceCardActions} from "components/DeviceCardActions"

export const DeviceCard = ({actions, device}) => {

    return (
        <div className='card'>
            <h2>
                <i className="fa fa-laptop"/>
                {device.system_name}
            </h2>
            <p>{`Type: ${device.type}`}</p>
            <p>{`Storage: ${device.hdd_capacity} GB`}</p>
            <DeviceCardActions device={device} actions={actions}/>
        </div>
    )
}