import React from 'react'

const Logos = () => {
    const SongPosterArray = [];

    for(let i=0;i<10;i++)
    {
        SongPosterArray.push(`./images/${i}.png`);
    }

    let imageSource = SongPosterArray[0];
    // const [imageSource , setImageSource] = React.useState(`${SongPosterArray[0]}`)
  return (
    <div>
        <img src={imageSource} alt="" />
    </div>
  )
}

export default Logos