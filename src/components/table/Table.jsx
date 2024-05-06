import React, { useEffect, useState } from 'react'
import { collection, getDocs } from "firebase/firestore";
import { db } from '../../firebase'
import { ref } from '../../antities'
import Modal from '../modal/Modal';
const Table = () => {
  const [data, setData] = useState(null)
  const [modal, setModal] = useState(false)
  const [modalId, setModalId] = useState("")
  useEffect(()=>{
// getData()
  },[data])
  const getData = async () => {

    const querySnapshot = await getDocs(collection(db, ref));
    setData(querySnapshot.docs)
    // querySnapshot.forEach((doc) => {
    //   setData(doc.data());
    // });
  }

  getData()
  const showModal = (id)=>{
    setModal(true)
    setModalId(id)
  }
  return (
    <div>
      <div class="w-screen">

        <div class="mx-auto mt-8 max-w-screen-lg px-2">
          <div class="sm:flex sm:items-center sm:justify-between flex-col sm:flex-row">
            <p class="flex-1 text-base font-bold text-gray-900">Latest Employees</p>

            <div class="mt-4 sm:mt-0">
              <div class="flex items-center justify-start sm:justify-end">
                <button type="button" class="inline-flex cursor-pointer items-center rounded-lg border border-gray-400 bg-white py-2 px-3 text-center text-sm font-medium text-gray-800 shadow hover:bg-gray-100 focus:shadow">
                  Add Employee
                </button>
              </div>
            </div>
          </div>

          <div class="mt-6 overflow-hidden rounded-xl border shadow">
            <table class="min-w-full border-separate border-spacing-y-2 border-spacing-x-2">
              <thead class="hidden border-b lg:table-header-group">
                <tr class="">
                  <td width="50%" class="whitespace-normal py-4 text-sm font-medium text-gray-500 sm:px-6">Employee Name</td>

                  <td class="whitespace-normal py-4 text-sm font-medium text-gray-500 sm:px-6">Position</td>

                  <td class="whitespace-normal py-4 text-sm font-medium text-gray-500 sm:px-6">Supervisor</td>
                  <td class="whitespace-normal py-4 text-sm font-medium text-gray-500 sm:px-6">Action</td>
                </tr>
              </thead>

              <tbody class="lg:border-gray-300">
                {data && data.map((items, index) => {
                  return (


                    <tr id={items.id} key={items.id} class="">
                      <td width="50%" class="whitespace-no-wrap py-4 text-sm font-bold text-gray-900 sm:px-6">
                        {items?.data().name}
                      </td>

                      <td class="whitespace-no-wrap hidden py-4 text-sm font-normal text-gray-500 sm:px-6 lg:table-cell">{items.data().position}</td>

                      <td class="whitespace-no-wrap py-4 px-6 text-right text-sm text-gray-600 lg:text-left">
                        {items?.data().superVisor}
                        {/* <div class="flex mt-1 ml-auto w-fit items-center rounded-full bg-blue-600 py-2 px-3 text-left text-xs font-medium text-white lg:hidden">Complete</div> */}
                      </td>

                      <td class="whitespace-no-wrap hidden py-4 text-sm font-normal text-gray-500 sm:px-6 lg:table-cell">
                        <button onClick={()=>{showModal(items?.id)}} className='bg-blue-600 w-12 p-1 text-white rounded-lg' >View</button>
                        {/* <div class="inline-flex items-center rounded-full bg-blue-600 py-2 px-3 text-xs text-white">Complete</div> */}
                      </td>
                    </tr>

                  )
                })}

              </tbody>
            </table>

            {modal?<Modal idData={modalId} setModal={setModal}/>  : null}

          </div>
        </div>

      </div>
    </div>
  )
}

export default Table
