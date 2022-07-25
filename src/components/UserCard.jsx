import React from 'react'

const UserCard = ({ user }) => {
const { name, email, address, company } = user

    return (
        <div className='user__Card'>
            <div className='user__Info'>
                {/*User name email*/}
                <p>User: {name}</p>
                <p> Email: {email}</p>
            </div>
            {/*Company & location*/}
            <div className='user__work'>
                <p> City: {address.city}</p>
                <p>Works at:{company.name}</p>
            </div>
        </div>

    )
}


export default UserCard