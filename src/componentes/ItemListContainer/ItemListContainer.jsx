import React from 'react'

import { useState, useEffect } from 'react'

import { useParams } from 'react-router-dom'

import { db } from '../../services/config'

import { collection,getDocs,query,where,orderBy } from 'firebase/firestore'
import ItemList from '../ItemList/ItemList'
import ExtrasList from '../ExtrasList/ExtrasList'
import BiteaList from '../BiteaList/BiteaList'

const ItemListContainer = () => {

    const [productos, setProductos] = useState([]);
    const [extras, setExtras] =  useState([]);
    const [bitea, setBitea] =  useState([]);
   

    useEffect(()=>{

       // Crea una referencia a la colección con ordenación
       

            
            const obtenerProductos = query(collection(db, "productos"),orderBy("precio", "desc"));

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

    useEffect(()=>{

        const obtenerBitea= query(collection(db, "bitea"),orderBy("precio", "desc"));

        getDocs(obtenerBitea)
        .then((res)=>{

            const misBitea = res.docs.map((doc)=>{

                const data = doc.data()

                return({id: doc.id,...data})


            })

            setBitea(misBitea)


        })
        .catch((error)=>{
           console.log(error) 
        })


    },[])

    useEffect(()=>{

        const obtenerExtras = query(collection(db, "extras"),orderBy("precio", "desc"));

        getDocs(obtenerExtras)
        .then((res)=>{

            const misExtras = res.docs.map((doc)=>{

                const data = doc.data()

                return({id: doc.id,...data})


            })

            setExtras(misExtras)


        })
        .catch((error)=>{
           console.log(error) 
        })


    },[])


  return (
    <>
        
        <div className='container mb-5' >
        
            <h1 className='text-center mt-5 mb-5' >NUESTRAS BURGAS</h1>
            <ItemList produ={productos} />

            <h1 className='text-center mt-4 mb-4' >BITEA TU HAMBURGUESA</h1>
            <BiteaList bitea={bitea} />

            <h1 className='text-center mt-5 mb-4' >EXTRA</h1>
            <ExtrasList extras={extras} />

        </div>
            
        


    
    </>
  )
}

export default ItemListContainer