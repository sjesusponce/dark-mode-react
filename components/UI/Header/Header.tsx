import classes from './Header.module.css'

const Header =(props)=>{
    return(
        <header className={classes.header}>
            <nav className={classes.navigation}>
                <p onClick={()=>props.onColor('blue')}>Blue</p>
                <p onClick={()=>props.onColor('purple')}>Purple</p>
                <p onClick={()=>props.onColor('green')}>Green</p>
            </nav>
            <div className={classes.toggle} onClick={props.onToggle}>
                <p>{props.toggle === 'lightTheme' ? 'Night': 'Brigh'}</p>
            </div>
        </header>
    )
}

export default Header