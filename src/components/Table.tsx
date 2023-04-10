import React, { FormEvent, useState } from 'react'

const Table = () => {
    const [data,setData] = useState([{"name":"Arzoo","email":"a@a.com","phone":"8855223366"}])
    const [name,setName] = useState('')
    const [email,setEmail] = useState('')
    const [phone,setPhone] = useState('')
function handleSubmit(event:FormEvent){
    event.preventDefault();
    setData([...data,{name, email, phone}])
    setName('')
    setEmail('')
    setPhone('')
}
  return (
    <div>
        <div>
          <form className="m-5" onSubmit={handleSubmit}>
        <div className="mb-3">
          <label className="form-label">Name :</label>
          <input
            type="text"
            className="form-control mb-3"
            id="exampleFormControlInput1"
            placeholder="Enter Your Name"
            value={name}
            onChange={(event)=>{setName(event.target.value)}}
          />
          <label className="form-label mb-2">Email :</label>
          <input
            type="email"
            className="form-control mb-3"
            id="exampleFormControlInput1"
            placeholder="name@example.com"
            value={email}
            onChange={(event)=>{setEmail(event.target.value)}}
          />
          <label className="form-label mb-2">Phone :</label>
          <input
            type="number"
            className="form-control mb-3"
            id="exampleFormControlInput1"
            placeholder="XXXXXXXXXX"
            value={phone}
            onChange={(event)=>{setPhone(event.target.value)}}
          />
          </div>
          <div className="col-auto">
            <button type="submit" className="btn btn-primary mb-3">
              Submit
            </button>
          </div>
          </form>
          </div>

        <table className="table">
            <thead  className="thead-dark">
                <tr>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Phone</th>
                </tr>
            </thead>
            <tbody>
                {data.map((row, index)=>( <tr key={row.email}>
                        <td>{row.name}</td>
                        <td>{row.email}</td>
                        <td>{row.phone}</td>
                    </tr>)
                   
                )}
            </tbody>
        </table>
    </div>
  )
}

export default Table