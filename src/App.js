import React from 'react'
import Navbar from './Component/navbar'
import MusicComp from './Component/musicComp'
import './Component/style.css'

const App = () => {

  const [imageUrl, setImageUrl] = React.useState('');

  React.useEffect(() => {
      const handleResize = () => {
        if (window.innerWidth < 744) {
          setImageUrl(
            'https://images.unsplash.com/photo-1616939750001-566f1e189f2c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80'
          );
        } else {
          setImageUrl(
            'https://images.unsplash.com/photo-1616939750001-566f1e189f2c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80'
          );
        }
      };
  
      // Initial call to set the image URL based on screen width
      handleResize();
  
      // Add a resize event listener to update the image URL when the screen size changes
      window.addEventListener('resize', handleResize);
  
      // Cleanup the event listener when the component unmounts
      return () => {
        window.removeEventListener('resize', handleResize);
      };
    }, []);

  return (
    <div className='Full-App-Bg' style={{background:`url(${imageUrl})`}}>
      <Navbar />
      <MusicComp />
    </div>
  )
}

export default App