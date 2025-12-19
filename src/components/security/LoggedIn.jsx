import { useState, useEffect } from 'react'
import facade from '../../apiFacade'

function LoggedIn( { loggedIn }) {
  const [dataFromServer, setDataFromServer] = useState("Loading...")

  useEffect(() => { 
    const protectedendpointPromise = facade.fetchData('protected/user_demo', 'GET')
    protectedendpointPromise.then((json) => {
        setDataFromServer(json.msgs);
    })
  }, [])

  return (
    <div>
      <h2>Data Received from server</h2>
      <h3>{dataFromServer}</h3>
    </div>
  )
}
export default LoggedIn