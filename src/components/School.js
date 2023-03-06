import React from "react";

function School() {
    const data = [
        { "sid": 1, "sname": "kumar public school", "city": "vijayawada" },
        { "sid": 2, "sname": "trividha public school", "city": "hyderabad" },
        { "sid": 3, "sname": "bis", "city": "vizag" },
        { "sid": 4, "sname": "st.ann's ", "city": "gudiwada" },
        { "sid": 5, "sname": "st.thomas", "city": "nuzvid" },
    ]
    return <div className="container" style={{backgroundColor:"#eebefa"}}>
        <div className="card" style={{ marginTop: 50 }}>
            <div className="card-header" style={{backgroundColor:"#eebefa"}}>
                <h1 style={{color:"#38031d"}}><b>School list</b></h1>
            </div>
        </div>
        <div className="card-body">
            {
                <table className="table table-striped">
                    <thead>
                        <tr>
                            <th>Id</th>
                            <th>Name</th>
                            <th>city</th>
                            <th colSpan={2}>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            data.map((d, i) => {
                                return <tr key={i}>
                                    <td>{d.sid}</td>
                                    <td>{d.sname}</td>
                                    <td>{d.city}</td>
                                    <td>
                                        <button className="btn btn-success"style={{marginRight:20}}>Edit</button>
                                        <button className="btn btn-danger">Delete</button>
                                    </td>
                                </tr>
                            }
                            )
                        }
                    </tbody>
                </table>
            }
        </div>
    </div>
}
export default School;