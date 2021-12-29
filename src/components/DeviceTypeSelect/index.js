export const DeviceTypeSelect = ({values, handleChange}) => {

    return (
        <select
            name='type'
            value={values?.type}
            onChange={handleChange}>
            <option value="" defaultValue>Select a system type</option>
            <option value="WINDOWS_WORKSTATION">Windows Workstation</option>
            <option value="WINDOWS_SERVER">Windows Server</option>
            <option value="MAC">Mac</option>
        </select>
    )
}