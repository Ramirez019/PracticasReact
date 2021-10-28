import React,{useContext} from 'react';
import  {userContext} from './Context/userContext'

const ListUser = () => {
    
     const {users}= useContext(userContext)

     console.log(users.data)

     const dataUsers = users.data;

    return (
        <>
            <ul>
                {
                    dataUsers.map(item=>(
                        <li key={item.id}>
                            {item.id}<br/>
                            {item.name}<br/>
                            {item.phone}<br/>
                            {item.username}<br/><br/>
                        </li>
                    ))
                }
            </ul>
        </>
    )
}
export default ListUser
