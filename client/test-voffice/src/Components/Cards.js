import React from 'react'


function Cards ({client}) {


  return (
    <tbody>
      <tr  className="table-row-2">
        <td  className="table-td">{client.name}</td>
        <td  className="table-td">{client.email}</td>
        <td  className="table-td">{client.phone}</td>
        <td  className="table-td">{client.credit}</td>
      </tr>
    </tbody>
  )
   
}

  export default  Cards;  