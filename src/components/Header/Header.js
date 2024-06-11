import './Header.css'

export default function Header()
{
    return(
        <div>
            <div className='header'>
                <div className='section left'>
                    <img className='logo' src='./images/logo.svg' alt='Logo'/>
                </div>
                <div className='section middle'>
                    <form>
                        <input className='input-search' type='text' name='search' placeholder="Search"></input>
                    </form>
                    <img className='icon-mic' src='./images/mic.svg' alt='Mic'/>
                </div>
                <div className='section right'>
                    <img src='./images/add-video.svg' alt='Video'/>
                    <img src='./images/notification-alarm-bell_svgrepo.com.svg' alt='Bell'/>
                    <img src='./images/acc.svg' alt='Profile'/>
                </div>
            </div>
            <div className='header-spacer'></div>
        </div>
    )
}