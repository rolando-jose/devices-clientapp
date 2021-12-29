export const FilterTypeSelect = ({selectedTypes, handleChange}) => {

    return (
        <select
            name='type'
            value={selectedTypes}
            onChange={handleChange}>
            <option value="" defaultValue disabled>Filter by...</option>
            <option value="WINDOWS_WORKSTATION">Windows Workstation</option>
            <option value="WINDOWS_SERVER">Windows Server</option>
            <option value="MAC">Mac</option>
        </select>
    )
}