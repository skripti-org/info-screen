import './Sponsors.css';

const Sponsors = ({ filenames }) => {
  const mainSponsorIdx = [11, 14]

    return (
      <div className='container'>
        <h1 className="h1">Yhteistyössä</h1>
        <div className="grid-container">
          {
            filenames.map((filename, index)=> {
              return (
                  <div key={filename} className={`grid-item-${index}`} id="grid-item">
                    {mainSponsorIdx.includes(index) ? 
                      <img src={filename} alt={filename} width={300} />
                      :
                      <img src={filename} alt={filename} width={200} />
                    }
                  </div>
              )
            })
          }
        </div>
      </div>
    )
  }
  
  export default Sponsors