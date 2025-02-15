import { useState, useEffect} from 'react'
import axios from 'axios'

function App() {
  const [data, setData] = useState([])

  const users = async () => {
    await axios.get('https://randomuser.me/api/?results=10')
    .then((res)=>{
      setData(res.data.results)
    })
  }

  useEffect(()=>{
    users();
  },[])

  return (
    <>
      <div className="container mx-auto p-4">
          <div className="row">
            {
              data.map((user,i)=>{
                return (
                  <div className="col-md-4" key={i}>
                    <div className="bg-light p-3">
                      <img
                        src={user.picture.large}
                        alt="頭像"
                        className="img-fluid rounded-circle"
                      />
                      <h2 className="mb-0">{user.name.first} {user.name.last }</h2>
                      <p className="mb-0">{user.email}</p>
                    </div>
                  </div>
                )
              })
            }
          </div>
      </div>
    </>
  )
}

export default App
