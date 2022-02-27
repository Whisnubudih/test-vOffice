import React from 'react'


function TableRoom({room}) {
   
  return (
    <tbody>
      <tr  className="table-row-2">
        <td  className="table-td">{room.roomName}</td>
        <td  className="table-td">{room.costPerHour}</td>
      </tr>
    </tbody>
  )
   
}

  export default  TableRoom;  