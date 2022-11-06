import './Sponsors.css';

function importAll(r) {
    return r.keys().map(r);
  }
  
const Sponsors = () => {
    const filenames = importAll(require.context('../../public/sponsors', false, /\.(png|jpe?g|svg)$/));
    return (
      <div className="grid-container">
        {
          filenames.map((filename, index)=> {
            console.log(index)
            return (
                <div className={`grid-item-${index}`} id="grid-item">
                    <img src={filename} alt={filename} width={200}/>
                </div>
            )
          })
        }
      </div>
    )
  }
  
  export default Sponsors