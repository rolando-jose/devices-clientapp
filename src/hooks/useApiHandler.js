import {useEffect, useState} from "react"
import {toast} from "react-toastify"

export const useApiHandler = () => {

    const [deviceList, setDeviceList] = useState([])

    const createOrUpdate = async (device, method) => {
        const url = method === 'POST' ?
            'http://localhost:3000/devices/' : 'http://localhost:3000/devices/' + device?.id
        const requestOptions = {
            method: method,
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(device)
        }
        const result = await fetch(url, requestOptions)
            .then(response => response.json())
            .then(async () => {
                await fetch('http://localhost:3000/devices')
                    .then(resp => resp.json())
                    .then(resp => setDeviceList([...resp]))
                return true
            })
            .catch(error => {
                return false
            })
        return result

    }

    const deleteDevice = async (device) => {
        const requestOptions = {
            method: 'DELETE',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(device)
        }
        const result = await fetch('http://localhost:3000/devices/' + device.id, requestOptions)
            .then(response => response.json())
            .then(async () => {
                await fetch('http://localhost:3000/devices')
                    .then(resp => resp.json())
                    .then(resp => setDeviceList([...resp]))
                return true
            })
            .catch(error => {return false})
        return result
    }

    const sortByCapacityOrName = (property) => {
        switch (property) {
            case 'hdd_capacity':
                setDeviceList([...deviceList.sort((a, b) => parseInt(a.hdd_capacity) - parseInt(b.hdd_capacity))])
                break
            case 'system_name':
                setDeviceList([...deviceList.sort((a, b) => a.system_name.toLowerCase() > b.system_name.toLowerCase() ? 1 : -1)])
                break
            default:
                return false
        }
    }

    const filterByType = async (type) => {
        await fetch('http://localhost:3000/devices')
            .then(resp => resp.json())
            .then(resp => setDeviceList([...resp.filter(device => device.type === type)]))
    }

    const refreshList = async () => {
        return await fetch('http://localhost:3000/devices')
            .then(resp => resp.json())
            .then(resp => setDeviceList([...resp]))
    }

    useEffect(() => {
        async function getDevices() {
            const data = await fetch('http://localhost:3000/devices')
            return data
        }

        getDevices()
            .then(response => response.json())
            .then(response => setDeviceList([...response]))
            .catch(error => {
                toast(error + '', {
                    type: "error"
                })
            })
    }, [])

    return {deviceList, createOrUpdate, sortByCapacityOrName, filterByType, deleteDevice, refreshList}
}