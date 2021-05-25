import React from 'react'

export const ActivitiesList = ({activities, deleteActivity, addChangeHandler, addChangeHandle, editing, setEditing, editActivity, editActivityFunction, editSubmithandler, editChangeHandler}) => {
    console.log('ACTIVITIES STATE', activities)

    return(
        <div>
            <h2> Activities List</h2>
            <div>
                <ul>
                   { activites.map(item) => {
                     <li key={item.id} onClick{() => {editActivityFunction(item) console.log(item)}}>
                     <span> 
                     <span onClick={e => {
                         deleteActivity(item)
                     }}>

                     </span> {item.name}
                     </span>
                     </li>  
                    }}
                </ul>
                {editing && (<form onSubmit = {editSubmithandler}>
                    <h3>Edit Activity</h3>
                    <div>
                        <input
                            name='name'
                            onChange={editChangeHandler}
                            value={editActivity.name}/>
                    </div>
                    <div>
                        <input
                            name='type'
                            onChange={editChangeHandler}
                            value={editActivity.type}/>
                    </div>
                    <div>
                        <input
                            name='date'
                            onChange={editChangeHandler}
                            value={editActivity.date}/>
                    </div>
                    <div>
                        <input
                            name='duration'
                            onChange={editChangeHandler}
                            value={editActivity.duration}/>
                    </div>
                    <div>
                        <input
                            name='intensity'
                            onChange={editChangeHandler}
                            value={editActivity.intensity}/>
                    </div>
                    <div>
                        <input
                            name='location'
                            onChange={editChangeHandler}
                            value={editActivity.location}/>
                    </div>
                    <div>
                        <button type='submit'>Save</button>
                        <button onClick={() => setEditing(false)}>Cancel</button>
                    </div>
           
                </form>)}
                <div>
                    <form onSubmit={addSubmitHandler}>
                        <div>
                            <h3>Add Activity</h3>
                            <input
                                type='text'
                                name='name'
                                value={activites.name}
                                onChange={addChangeHandle}
                                placeholder='Name'/>
                        </div>
                        <div>
                        <input
                                type='text'
                                name='type'
                                value={activites.type}
                                onChange={addChangeHandle}
                                placeholder='Type'/> 
                        </div>
                        <div>
                        <input
                                type='text'
                                name='date'
                                value={activites.date}
                                onChange={addChangeHandle}
                                placeholder='Date'/> 
                        </div><div>
                        <input
                                type='text'
                                name='duration'
                                value={activites.duration}
                                onChange={addChangeHandle}
                                placeholder='Duration'/> 
                        </div><div>
                        <input
                                type='text'
                                name='intensity'
                                value={activites.intensity}
                                onChange={addChangeHandle}
                                placeholder='Intensity'/> 
                        </div><div>
                        <input
                                type='text'
                                name='location'
                                value={activites.location}
                                onChange={addChangeHandle}
                                placeholder='Location'/> 
                        </div><div>
                        <input
                                type='text'
                                name='numberOfRegisteredAttendees'
                                value={activites.numberOfRegisteredAttendees}
                                onChange={addChangeHandle}
                                placeholder='Number Of Attendees'/> 
                        </div><div>
                        <input
                                type='text'
                                name='maxClassSize'
                                value={activites.maxClassSize}
                                onChange={addChangeHandle}
                                placeholder='Max Class Size'/> 
                        </div>
                        <div>
                            <button type='submit'>Add</button>
                            <button>Cancel</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    
)}