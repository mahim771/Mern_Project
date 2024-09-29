/* eslint-disable react/prop-types */
import React, { useEffect, useState } from 'react'

export default function Scroll({url}) {

    const [data,setData] = useState([])
    const [loading,setLoading] = useState(false);
    const [scrollPercen,setScrollPercen] = useState(0)

    const fetchdata = async(getUrl) => {

        try{
            setLoading(true);
            const response = await fetch(getUrl);
            const data = await response.json();
            console.log(data)
            if(data && data.products && data.products.length > 0)
            {
                setData(data.products);
                setLoading(false);
            }

        }catch(e)
        {
            console.log(e.message)
        }
    }

    useEffect(() =>
    {
        fetchdata(url);
    },[url])

    const handleScrollPercen = () => {
        console.log(
            document.body.scrollTop,
            document.documentElement.scrollTop,
            document.documentElement.scrollHeight,
            document.documentElement.clientHeight
        )

        const howMuchScroll = document.body.scrollTop || document.documentElement.scrollTop;

        const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
        setScrollPercen((howMuchScroll / height) * 100)
    }
    console.log(data,scrollPercen)

    useEffect(() => {
        window.addEventListener('scroll',handleScrollPercen)

        return() =>{
            window.removeEventListener('scroll', () => {})
        }
    })

    if(loading)
    {
        return <h2>Loading Data...! Please wait</h2>
    }
  return (
    <div>
      <h1>Custom Scroll Indicator</h1>
      <div className="container">
        {
            data && data.length > 0 ?
            data.map((dataItem) =>
                <div key={dataItem.id}>
                    <p>{dataItem.title}</p>
                </div>
            
            ) :null
        }
      </div>
    </div>
  )
}
