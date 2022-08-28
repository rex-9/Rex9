import { useState, useEffect } from 'react';
// import style from '../scss/Comet.module.scss';

const Comet = () => {
  const [globalCoords, setGlobalCoords] = useState({ x: 0, y: 0 });

  useEffect(() => {
    // 👇️ get global mouse coordinates
    const handleWindowMouseMove = (event) => {
      setGlobalCoords({
        x: event.screenX,
        y: event.screenY,
      });
    };
    window.addEventListener('mousemove', handleWindowMouseMove);

    return () => {
      window.removeEventListener('mousemove', handleWindowMouseMove);
    };
  }, []);

  const inlineStyle = {
    position: 'fixed',
    left: `${globalCoords.x}px`,
    top: `${globalCoords.y - 70}px`,
    backgroundColor: 'red',
    fontSize: '40px',
    color: 'white',
    width: '100px',
    height: '100px',
  };

  return (
    <div style={inlineStyle}>
      <img weight="100px" height="100px" src="../assets/design/spot.png" alt="" />
      {/* Global coords:
      {' '}
      {globalCoords.x}
      {' '}
      {globalCoords.y} */}
    </div>
  );
};

export default Comet;
