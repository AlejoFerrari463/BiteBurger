import React from 'react'

import { useState, useEffect } from 'react'

import { useParams } from 'react-router-dom'

import { db } from '../../services/config'

import { collection,getDocs,query,where } from 'firebase/firestore'
import ItemList from '../ItemList/ItemList'

const ItemListContainer = () => {

    const [productos, setProductos] = useState([]);

   

    useEffect(()=>{

        const obtenerProductos = collection(db,"productos");

        getDocs(obtenerProductos)
        .then((res)=>{

            const misProductos = res.docs.map((doc)=>{

                const data = doc.data()

                return({id: doc.id,...data})


            })

            setProductos(misProductos)


        })
        .catch((error)=>{
           console.log(error) 
        })


    },[])

  return (
    <>
    
        <div className='container' >

            <ItemList produ={productos} />

        </div>
    
    
    </>
  )
}

export default ItemListContainer