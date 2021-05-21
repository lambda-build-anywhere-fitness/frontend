import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useHistory } from 'react-router'
import ActivityDetails from './activitydetails'

const initialState = {
    name:'',
    type:'',
    time:'',
    duration:'',
    intensity:'',
    location:'',
    numberOfRegisteredAttendee:'',
    maxClassSize:0
}

export const InstructorPage = () => {
    const [activites, setActivities] = useState([initialState])
    const [addActivity, setAddActivity] = useState(initialState)
    const [edit, setEdit] = useState(false)
    const [editActivity, setEditActivity] =useState(initialState)

    const history = useHistory()

    useEffect(() => {
        axios.get(`https://anywhere-fitness-ptbw.herokuapp.com/classes`)
             .then((res) => {
                 console.log('GET REQUEST', res.data)
                 setActivities(res.data)
             })
             .catch((err) => {
                 console.log(err)
             })
            
    }, [editActivity, addActivity])


 const addActivityFunction = e => {
     const activity = {
        name:e.name,
        type:e.type,
        time:e.type,
        duration:e.duration,
        intensity:e.intensity,
        location:e.location,
        numberOfRegisteredAttendee:e.numberOfRegisteredAttendee,
        maxClassSize:e.maxClassSize
     }
     setAddActivity([activity])
 }

    const addSubmitHandler = e => {
        e.preventDefault()
        addActivityFunction(addActivity)
        setAddActivity(initialState)
    }

    axios.post(`https://anywhere-fitness-ptbw.herokuapp.com/classes`, {
        name:addActivity.name,
        type:addActivity.type,
        time:addActivity.time,
        duration:addActivity.duration,
        intensity:addActivity.intensity,
        location:addActivity.location,
        numberOfRegisteredAttendee: addActivity.numberOfRegisteredAttendee,
        maxClassSize:addActivity.maxClassSize
    })
        .then(res => {
            setAddActivity(res.data)
            localStorage.setItem('token', res.data)
            history.push('/instrut')
        })
        .catch(err => {
            console.log(err)
        })

const editChanagehandle = e => {
    e.persist()
    setEditActivity({
        ...editActivity, [e.target.name]: e.target.value
    })
}

return(
    <div>
        <ActivityList
            activites={activites}
            deleteActivity={deleteActivity}
            addSubmitHandler={addSubmitHandler}
            addChangeHandler={addChangeHandler}
            edit={edit}
            setEdit={setEdit}
            editActivity={editActivity}
            editActivityFunction={editActivityFunction}
            editSubmitHandler={editSubmitHandler}
            editChanageHandle={editSubmitHandler}/>
            <ActivityDetail activites={activites}/>
    </div>
)

}

