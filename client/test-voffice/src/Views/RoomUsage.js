import React, {useEffect} from 'react'
import TableRoomUsage from '../Components/TableRoomUsage';
import { useSelector,useDispatch } from 'react-redux';
import {setRoomUsage} from '../store/actionCreator'
import NavbarHome from '../Components/NavbarHome'



function RoomUsage (){

  const {roomUsages,loading,error }= useSelector(state =>state)
  const dispatch = useDispatch()
useEffect(() =>{
 dispatch(setRoomUsage())
},[])

if(loading === undefined){
  return <div>LOADING........</div>
}

if(error){
  return <div>{JSON.stringify(error)}</div>
}

  
  return (
    <section>
         <NavbarHome />
    <div className="home">
      <h2>LIST ROOM USAGE</h2>
    <div className="table">
    <table>
        <thead>

        <tr className="table-row-1" >
          <th className="table-th">Client</th>
          <th className="table-th">Room</th>
          <th className="table-th">Start Time - End Time</th>
          <th className="table-th">Booking Date</th>
          <th className="table-th">Quota Used</th>
        </tr>
        </thead>

    
        
   

      {roomUsages.map((roomUsage) =>(
                      <TableRoomUsage key={roomUsage.id} roomUsage={roomUsage} />

                    ))}
       
       
     
    </table>
  </div>
  </div>
    </section>
  )
}

export default RoomUsage;
