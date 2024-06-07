import './Header.css'

export default function Header()
{
    return(
        <div className='header'>
            <div className='section left'>
                <img className='logo' src='./images/logo.svg'/>
            </div>
            <div className='section middle'>
                <form>
                    <input className='input-search' type='text' name='search' placeholder="Search"></input>
                </form>
                <img className='icon-mic' src='./images/mic.svg'/>
            </div>
            <div className='section right'>
                <img src='./images/add-video.svg'/>
                <img src='./images/notification-alarm-bell_svgrepo.com.svg'/>
                <img src='./images/acc.svg'/>
            </div>
        </div>
    )
}