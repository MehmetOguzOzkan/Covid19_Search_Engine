import React,{useEffect,useState} from 'react'
import axios from 'axios'

function App() {

  const [veri,setVeri]=useState();
  const [tarih,setTarih]=useState("");

  useEffect(()=>{
    axios.get("https://raw.githubusercontent.com/ozanerturk/covid19-turkey-api/master/dataset/timeline.json")
    .then(res => setVeri(res.data[tarih]))
    .catch(err=>console.log(err))
  },[veri,tarih])
  
  return (
    <div className="App">
      <div className="container">
        <div className="row">
          <div className="col-md-12 mx-auto mt-4">
            <h2 className="text-center text-white display-2">Covid-19 Arama Motoru</h2>
            <br/>
            <input type="text" placeholder="GG/AA/YYYY" className="form-control text-center" onChange={(b)=>setTarih(b.target.value)}/>
            <br/>
            <div className="row">
              <div className='col-md-4'>
                <table className="table table-responsive table-striped table-hover table-borderless">
                  <tbody  className={veri===undefined ? "bg-warning" : "bg-info"}>
                    <tr>
                      <th scope='row'>Toplam Test</th>
                      <td>{veri===undefined ? "Bekleniyor" : veri.totalTests}</td>
                    </tr>
                    <tr>
                      <th scope='row'>Toplam Hasta</th>
                      <td>{veri===undefined ? "Bekleniyor" : veri.totalPatients}</td>
                    </tr>
                    <tr>
                      <th scope='row'>Toplam Vefat</th>
                      <td>{veri===undefined ? "Bekleniyor" : veri.totalDeaths}</td>
                    </tr>
                    <tr>
                      <th scope='row'>Toplam Iyilesen</th>
                      <td>{veri===undefined ? "Bekleniyor" : veri.totalRecovered}</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <div className='col-md-4 text-white text-center display-5 mt-1'>
                <table className="table table-responsive table-striped table-hover table-borderless">
                  <thead className={veri===undefined ? "bg-warning" : "bg-info"}>
                    <tr>
                      <th>Tarih</th>
                    </tr>
                  </thead>
                  <tbody  className={veri===undefined ? "bg-warning" : "bg-info"}>
                    <tr>
                      <td>{veri===undefined ? "Bekleniyor" : veri.date}</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <div className='col-md-4'>
                <table className="table table-responsive table-striped table-hover table-borderless">
                  <tbody  className={veri===undefined ? "bg-warning" : "bg-info"}>
                    <tr>
                      <th scope='row'>Günlük Test</th>
                      <td>{veri===undefined ? "Bekleniyor" : veri.tests}</td>
                    </tr>
                    <tr>
                      <th scope='row'>Günlük Hasta</th>
                      <td>{veri===undefined ? "Bekleniyor" : veri.patients}</td>
                    </tr>
                    <tr>
                      <th scope='row'>Günlük Vefat</th>
                      <td>{veri===undefined ? "Bekleniyor" : veri.deaths}</td>
                    </tr>
                    <tr>
                      <th scope='row'>Günlük Iyilesen</th>
                      <td>{veri===undefined ? "Bekleniyor" : veri.recovered}</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;