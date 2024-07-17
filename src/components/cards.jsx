import React from 'react'

const Cards = () => {
    const images = [
        "https://mykeralafood.com/wp-content/uploads/2022/12/Cita-Pani-Fried-And-Grilled-Restaurant.jpg",
        "https://procargo.com/wp-content/uploads/2018/07/APS-1.png",
        "https://procargo.com/wp-content/uploads/2018/07/Portacool-1.png",
        "https://procargo.com/wp-content/uploads/2018/11/Albemarle.png",
        "https://procargo.com/wp-content/uploads/2018/11/Besco-Manufacturing.png",
        "https://procargo.com/wp-content/uploads/2018/11/Lamprell.png",
        "https://procargo.com/wp-content/uploads/2018/11/BL-Harbert-Intl.png",
        "https://procargo.com/wp-content/uploads/2018/11/Rectorseal.png",
        "https://procargo.com/wp-content/uploads/2018/11/MAASS-Global-Group.png",
        "https://procargo.com/wp-content/uploads/2018/11/Martech-Services.png"
    ]
  return (
    <div className='mb-12'>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 lg:mx-24' >
            {
                images.map((image,index) => (
                    <div key={index} className='w-full'>
                        <img src={image} alt="" width={800} />
                    </div>
                ))
            }
        </div>
    </div>
  )
}

export default Cards