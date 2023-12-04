import './MainInfo.css';

function maininfo({ item}) {
    return (
      <div className='boxed'>
        <h3 className='names'>{item.name}</h3>
        <p className='descr'>{item.desc}</p>
        <p className='imaged'>{item.image}</p>
      </div>
    );
  }
  
  export default maininfo;