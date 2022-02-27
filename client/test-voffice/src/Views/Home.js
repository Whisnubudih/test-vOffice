import React, {useEffect} from 'react'
import Cards from '../Components/Cards'
import { useSelector,useDispatch } from 'react-redux';
import {setClients} from '../store/actionCreator'
import NavbarHome from '../Components/NavbarHome'



function Home (){

  const {clients,loading,error }= useSelector(state =>state)
  const dispatch = useDispatch()
useEffect(() =>{
 dispatch(setClients())
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
      <h2>LIST CLIENTS</h2>
    <div className="table">
    <table>
        <thead>

        <tr className="table-row-1" >
          <th className="table-th">Name</th>
          <th className="table-th">Email</th>
          <th className="table-th">Phone</th>
          <th className="table-th">Credit</th>
        </tr>
        </thead>

    
        
   

      {clients.map((client) =>(
                      <Cards key={client.id} client={client} />

                    ))}
       
       
     
    </table>
  </div>
  </div>
    </section>
  )
}

export default Home;
