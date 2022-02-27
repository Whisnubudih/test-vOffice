import React, {useEffect} from 'react'
import TableRoom from '../Components/TableRoom';
import { useSelector,useDispatch } from 'react-redux';
import {setRooms} from '../store/actionCreator'
import NavbarHome from '../Components/NavbarHome'



function Room (){

  const {rooms,error }= useSelector(state =>state)
  const dispatch = useDispatch()
useEffect(() =>{
 dispatch(setRooms())
},[])



if(error){
  return <div>{JSON.stringify(error)}</div>
}

  
  return (
    <section>
         <NavbarHome />
    <div className="home">
      <h2>LIST ROOM</h2>
    <div className="table">
    <table>
        <thead>

        <tr className="table-row-1" >
          <th className="table-th">Room Name</th>
          <th className="table-th">Cost Per Hour</th>
        </tr>
        </thead>

    
        
   

        {rooms.map((room) =>(
                      <TableRoom key={room.id} room={room} />

                    ))}
       
       
     
    </table>
  </div>
  </div>
    </section>
  )
}

export default Room;
