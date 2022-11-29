import PropTypes from 'prop-types'
import Button from './Button'


const Header = ({title}) => {
    const onClick = (e) => {
        console.log(e)
    }
  
    return (
    <header className='header'>
        {/* <h1 style={headingStyle}>{title}</h1> */}
        <h1>{title}</h1>
        <Button color='green' text='Add' onClick={onClick}/>
    </header>
  )
}

// const headingStyle = {color: 'red', backgroundColor: 'black'}

Header.defaultProps = {
    title: 'Task Tracker'
}

Header.propTypes = {
    title: PropTypes.string.isRequired,
}

export default Header