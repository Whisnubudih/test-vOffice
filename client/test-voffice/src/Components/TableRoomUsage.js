import React from 'react'


function TableRoomUsage({roomUsage}) {
    const formatDate =() => {
        // console.log(this.history.createdAt)
        let timeData = new Date(roomUsage.bookingDate) 
        const timeDate = timeData.getDate()
        const timeMonth = timeData.getMonth() + 1
        const timeYear = timeData.getFullYear()
        const timeHour = timeData.getHours()
        const timeMinute = timeData.getMinutes()
        const timeSecond = timeData.getSeconds()
        return `${timeDate}-${timeMonth}-${timeYear}`
    }
  return (
    <tbody>
      <tr  className="table-row-2">
        <td  className="table-td">{roomUsage.client.name}</td>
        <td  className="table-td">{roomUsage.room.roomName}</td>
        <td  className="table-td">{roomUsage.startTime} WIB - {roomUsage.endTime} WIB</td>
        <td  className="table-td">{formatDate()}</td>
        <td  className="table-td">{roomUsage.quotaUsed}</td>
      </tr>
    </tbody>
  )
   
}

  export default  TableRoomUsage;  