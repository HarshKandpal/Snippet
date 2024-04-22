import React,{useEffect, useState} from 'react'

function Slidebar() {
    const[active,setActive]=useState(0)

    const imagesSlide=[
        {
            id:0,
            url:'https://cdn.vox-cdn.com/thumbor/6I-IQtvx29OSQp0nZscVi7Ev9rA=/0x0:1920x1080/1200x675/filters:focal(807x387:1113x693)/cdn.vox-cdn.com/uploads/chorus_image/image/68510166/jbareham_201201_ecl1050_goty_2020_top_50_02.0.jpg',
            alt: "img1 not appearing"
        },
        {
            id:1,
            url:'https://assets-prd.ignimgs.com/2022/09/23/top25modernpcgames-blogroll-1663951042311.jpg',
            alt: "img1 not appearing"
        },
        {
            id: 2,
            url: 'https://img.utdstc.com/screen/08b/541/08b5416dbe9366941d6f55f15a72c51e49c1d4a65dd212fc259342600a4e8bd1:400',
            alt: "img1 not appearing"
        },
        {
            id:3,
            url: 'https://assets.mspimages.in/gear/wp-content/uploads/2023/01/actio-games.jpg',
            alt: "img1 not appearing"
        }
    ]
    const next=()=>{
        active==imagesSlide.length-1?setActive(0):setActive((active)=>active+1)
    }
    const prev=()=>{
        active==0?setActive(imagesSlide.length-1):setActive((active)=>active-1)
    }
    useEffect(()=>{
        let interval = setInterval(() => {
            console.log(active)
            setActive((prev) => (prev + 1) % imagesSlide.length); 
        }, 4000);
    },[])
    // useEffect(()=>{
    //     setInterval(() => {
    //         console.log(active)
    //         if(active==imagesSlide.length-1)
    //             setActive(0)
    //         setActive((active)=>active+1);  
    //     }, 3000);
    // },[])
  return (
    <>
    <div className='flex flex-col'>
        <div className='flex'>
    <img className='justify-center' style={{height:'300px',width:'800px'}} src={imagesSlide[active].url} />
    </div>
    <div className='flex flex-wrap justify-between'>
    <button onClick={prev} className='bg-green-400 text-white-400'>Prev</button>
    <button onClick={next} className='bg-green-400 text-white-400'>Next</button>
    </div>
    </div>
    </>

  )
}

export default Slidebar