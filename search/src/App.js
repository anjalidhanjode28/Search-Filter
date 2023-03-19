import './App.css';
import {useEffect, useState} from "react"
import { Users } from './users';
import { Table } from './Table';
import axios from "axios";

//////////////////////BASIC SEARCH

// function App() {
//   const [query,setQuery] = useState("")
  
//   //console.log(Users.filter(user => user.first_name.toLowerCase().includes("f")))
//   return (
//     <div className="App">
//       <input type="text" className="search"
//        onChange={(e) => setQuery(e.target.value)}
//       placeholder="Search" />
//       <ul className="list">
//       {
//         Users.filter((user) => 
//         user.first_name.toLowerCase().includes(query)
//         ).map((user) => (
//           <li key={user.id} className="listItem">
//           {user.first_name}
//           </li>

//         ))
//       }
//       </ul>
//     </div>
//   );
// }


///////////////////////SEARCH ON A DATATABLE

// function App() {
//   const [query,setQuery] = useState("")

//   const keys = ["first_name", "last_name", "email"]
//   console.log(Users[0]["email"])
//  const search = (data) => {
//   return data.filter((item) => 
//   // item.first_name.toLowerCase().includes(query) ||
//   // item.last_name.toLowerCase().includes(query) ||
//   // item.email.toLowerCase().includes(query)

//   keys.some(key => item[key].toLowerCase().includes(query))
//   )
//  }

//   return (
//     <div className="App">
//       <input 
//        type="text" className="search"
//        onChange={(e) => setQuery(e.target.value)}
//       placeholder="Search" />
      
//       <Table data={search(Users)}/>
//     </div>
//   );
// }

////////////////////// API SEARCH

function App() {
  const [query,setQuery] = useState("")
  const [data,setData] = useState([])


 useEffect(() => {
    const fetchUsers = async () => {
      const res = await axios.get(`http://localhost:5000?q=${query}`);
      setData(res.data)
    }
    // fetchUsers()

    if (query.length === 0 || query.length > 2) fetchUsers();

 },[query])

  return (
    <div className="App">
      <input 
       type="text" className="search"
       onChange={(e) => setQuery(e.target.value)}
      placeholder="Search" />
      
      <Table data={data}/>
    </div>
  );
}
export default App;


