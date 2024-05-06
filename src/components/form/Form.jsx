import React, { useRef, useState } from 'react'
import { db } from "../../firebase"
import { collection, addDoc } from "firebase/firestore";
import { ref } from '../../antities';
const superVisors = [
    {
        name: "ABC"
    },
    {
        name: "EFG"
    },

]
const positions = [
    
    {
        name : "Team Lead"
    },
    {
        name : "Senior"
    },
    {
        name : "Jonior"
    }
]
const Form = () => {
    const e_name = useRef()
    const e_position = useRef()
    const e_supervisor = useRef()
    const [nameRequiredAlert, setNameRequiredAlert] = useState(true)

    const handleSubmit = async () => {
        if (e_name?.current?.value === "" || e_position?.current?.value === "" || e_supervisor?.current?.value === "") {
            return;
        } else {
            try {
            const docRef = await addDoc(collection(db, ref), {
                    name: e_name.current.value,
                    position: e_position.current.value,
                    superVisor : e_supervisor.current.value  
                });
                console.log("Document written with ID: ", docRef.id);
            } catch (e) {
                console.error("Error adding document: ", e);
            }
        }
    }


    return (
        <div>


            <form className="relative space-y-3 rounded-md bg-white p-6 shadow-xl lg:p-10 border border-gray-100 m-10">
                <h1 className="text-xl font-semibold lg:text-2xl">Add Employee Form</h1>

                <div>
                    <label className=""> Employee Name </label>
                    <input onChange={() => { e_name.current.value === "" ? setNameRequiredAlert(true) : setNameRequiredAlert(false) }} ref={e_name} type="text" placeholder="Name" className="mt-2 h-12 w-full rounded-md bg-gray-100 px-3 outline-none focus:ring" />
                    {nameRequiredAlert && <p className='text-red-600 text-lg  ' >Required *</p>}
                </div>
                <div className="inline-block relative w-64">
                    <label className=""> Employee's Position </label>

                    <select ref={e_position} className=" mt-1 block appearance-none w-full bg-white border border-gray-400 hover:border-gray-500 px-4 py-2 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline">
                        {positions && positions.map((items, index) => { return <option  value={items.name} key={index}>{items.name}</option> })}
                    </select>
                    <div className="pointer-events-none absolute inset-y-12 right-0 flex items-center px-2 text-gray-700">
                        <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" /></svg>
                    </div>
                </div>



                <div className="inline-block relative w-64">
                    <label className=""> Employee's Supervisor </label>

                    <select ref={e_supervisor} className=" mt-1 block appearance-none w-full bg-white border border-gray-400 hover:border-gray-500 px-4 py-2 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline">
                        {superVisors && superVisors.map((items, index) => { return <option  value={items.name} key={index}>{items.name}</option> })}
                    </select>
                    <div className="pointer-events-none absolute inset-y-12 right-0 flex items-center px-2 text-gray-700">
                        <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" /></svg>
                    </div>
                </div>

                <div>
                    <button onClick={() => { handleSubmit() }} type="button" className="mt-5 w-full rounded-md bg-blue-600 p-2 text-center font-semibold text-white outline-none focus:ring">Add Employee</button>
                </div>

            </form>

        </div>
    )
}

export default Form
