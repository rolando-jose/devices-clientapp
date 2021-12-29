import {useState} from "react"
import {Button} from "components/Button"
import {FilterTypeSelect} from "components/FilterTypeSelect"
import "styles/HeaderFilterControls.css"

export const HeaderFilterControls = ({actions, setShowModal}) => {
    const [selectedType, setSelectedType] = useState('')
    const [selectedSortValue, setSelectedSortValue] = useState('')

    const handleChangeType = event => {
        setSelectedType(event.target.value)
        actions.filterByType(event.target.value)
    }

    const handleChangeSort = event => {
        setSelectedSortValue(event.target.value)
        actions.sortByCapacityOrName(event.target.value)
    }

    return <div className='header-filter-container'>
        <div className='header-filter-logo'>
            <span>Devices</span>
            <Button
                color='#0A58CA'
                onClick={() => setShowModal(true)}
                value={'Add device'}
                iconType={'fa fa-plus'}/>
            <Button onClick={actions.refreshList} color='#0A58CA' value='Refresh' />
        </div>
        <FilterTypeSelect handleChange={handleChangeType} selectedTypes={selectedType}/>
        <select
            name='type'
            value={selectedSortValue}
            onChange={handleChangeSort}>
            <option value="" defaultValue disabled>Order by...</option>
            <option value="system_name">System name</option>
            <option value="hdd_capacity">HDD capacity</option>
        </select>
    </div>
}