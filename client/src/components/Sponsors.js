import './Sponsors.css';

function importAll(r) {
    return r.keys().map(r);
  }
  
const Sponsors = () => {
    const filenames = importAll(require.context('../../public/sponsors', false, /\.(png|jpe?g|svg)$/));
    return (
      <div className='container'>
        <h1 className="h1">YHTEISTYÖSSÄ</h1>
        <div className="grid-container">
          {
            filenames.map((filename, index)=> {
              return (
                  <div className={`grid-item-${index}`} id="grid-item">
                      <img src={filename} alt={filename} width={200}/>
                  </div>
              )
            })
          }
        </div>
      </div>
    )
  }
  
  export default Sponsors