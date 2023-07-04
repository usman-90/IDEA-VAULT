import myimage from 'C:\project\Web-Eng-Project-\public\frontend\src\images\logo.png'; 
const loginPage=() => {
    return (
        <div className="parent_">
            <div className="logo_">
                <img src='{myimage}' alt='logo'/>
                <h1>Idea Vault</h1>
                <h2>wowwoowow</h2>

            </div>
            <div className="loginform_">
                <div className='Idea_'>Idea Vault</div>
                <input type='text' value={username} placeholder='Phone number, username or email'/>
                <input type='text' value={password} placeholder='password'/>
            </div>
        </div>
    )
}