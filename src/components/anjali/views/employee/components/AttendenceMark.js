import React,{useEffect} from 'react'
import axios from 'axios';





function AttendenceMark({employeeId,today,empData}) {
    const [count,setCount] = React.useState(0);
    const APButtons = ({status,empData,id})=>{
        if(status === 'A') {
            return (
                <div>
                    <button className="btn btn-success" onClick={()=>editAttendence(true,id)}>Present</button>
                </div>
            )
        }else if(status === 'P'){
            return (
                <div>
                    <button className="btn btn-danger" onClick={()=>editAttendence(false,id)}>Absent</button>
                </div>
            )
        }
        else{
            return (
                <div>
                    <button className="btn btn-danger" onClick={()=>addAttendence(false,empData)}>Absent</button>
                    <button className="btn btn-success" onClick={()=>addAttendence(true,empData)}>Present</button>
                </div>
            )
        }
    }

    const editAttendence = (mode,id)=>{
        axios.patch('https://furniture-store-backend.herokuapp.com/api/attendence/'+id,{attendence: mode}).then(res => {
            console.log(res.data);
            alert('Done')
            setCount(count+1);
        })
    
    }
    
    const addAttendence = (mode,empData)=>{
        const today = new Date().toISOString().slice(0,10);
        const data = {
            date: today,
            firstName: empData.firstName,
            lastName: empData.lastName,
            position: empData.position,
            attendence: mode,
            employeeId: empData.employeeId
        }
    
        axios.post('https://furniture-store-backend.herokuapp.com/api/attendence',data).then(res => {
            alert('done');
            setCount(count+1);
        })
    
    
    }

    const [rowData,setRowData] = React.useState([]);
    useEffect(() => {
        axios.get(`https://furniture-store-backend.herokuapp.com/api/attendence/${today}/${employeeId}`)
        .then(res => {
            console.log(res.data);
            setRowData(res.data[0]);
            if(res.data.length === 0) {
                setRowData({
                    employeeId: employeeId,
                    date: today,
                    status: 'NM'
                });
            }else{
                // TODO read absent or present from DB
                if(res.data[0].attendence){
                    //present
                    setRowData({
                        id: res.data[0]._id,
                        employeeId: employeeId,
                        date: today,
                        status: 'P'
                    });
                }else{
                    //absent
                    setRowData({
                        id: res.data[0]._id,
                        employeeId: employeeId,
                        date: today,
                        status: 'A'
                    });
                    

                }
                
            }
        }).catch(err => {
            console.log(err);
        });
    },[count]);




    
    return (
        <div>
            <APButtons  status={rowData?.status} empData={empData} id={rowData?.id}/>
        </div>
    )
}



export default AttendenceMark
