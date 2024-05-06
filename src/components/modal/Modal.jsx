import {  doc, getDoc } from 'firebase/firestore'
import React, { useEffect, useState } from 'react'
import { db } from '../../firebase'
import { ref } from '../../antities'
import { AnimatedTree } from 'react-tree-graph'
// import Ani
const staticData = {
  name: 'Team lead',
  children: [{
      name: 'senior developer',
      children:[{
          name :"jonior developer"
      }]
  }, {
      name: 'Child Two'
  }],

  
};

const Modal = ({idData,setModal}) => {
    const [data,setData]=useState(null)

    useEffect(()=>{
        getData()
        
    },[])
      const getData =  async()=>{
          const data = await  getDoc(doc(db,ref,idData))
          setData(data.data());
      }
      
    return (
    <div>
          <div
            className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none"
          >
            <div className="relative w-auto my-6 mx-auto max-w-3xl">
              {/*content*/}
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                {/*header*/}
                <div className="flex items-start justify-between p-5 border-b border-solid border-blueGray-200 rounded-t">
                  <h3 className="text-3xl font-semibold">
                    Modal {idData}
                  </h3>
                  <button
                    className="ml-auto border-0 text-black h-12 w-12  float-right text-5xl  font-semibold "
                    onClick={() => setModal(false)}
                  >
                    <span className="bg-white font-extrabold  text-black   ">
                      ×
                    </span>
                  </button>
                </div>
                {/*body*/}
                <div className="relative p-6 flex-auto">
                  <Card/>
                {/* <AnimatedTree  
            data={staticData}
            height={400}
            width={400} /> */}
                </div>
                {/*footer*/}
              </div>
            </div>
          </div>
          <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
 

      
    </div>
  )
}
const Card = ()=>{
            // for (let index = 0; index < array.length; index++) {
            //   const element = array[index];
              
            // }
  return <>
    <AnimatedTree
            data={staticData}
            height={400}
            width={400} />
            {
            }
            {/* {staticData.children.map((items,i)=>{
              return<AnimatedTree data={items} height={400}
              width={400} />

            }) } */}
  </>
}

export default Modal
