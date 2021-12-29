import 'styles/Button.css'

export const Button = ({onClick, color = 'none', value, iconType}) => {
    return (
        <a onClick={onClick} style={{backgroundColor: color}} className='button'>
            {value}
            <i className={iconType+' icon'}/>
        </a>
    )
}