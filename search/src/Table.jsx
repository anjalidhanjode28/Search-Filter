import React from 'react'

export const Table = ({data}) => {
    
  return (
    <div>
      <table>
        <tbody>
          <tr>
            <th>Name</th>
            <th>Surface</th>
            <th>Email</th>
          </tr>
         {
            data.map((item) => (
                <tr key={item.id}>
                <td>{item.first_name}</td>
                <td>{item.last_name}</td>
                <td>{item.email}</td>
              </tr>
            ))
         }
        </tbody>
      </table>
    </div>
  )
}
