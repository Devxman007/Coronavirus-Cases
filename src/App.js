import React from 'react';
//import Cards from './Components/Cards/Cards';
//import Chart from './Components/Chart/Chart';
//import CountryPicker from './Components/CountryPicker/CountryPicker'
import {Cards,Chart,CountryPicker} from './Components';
import style from './App.module.css';
import {fetchData} from './api/index';

class App extends React.Component
{
     state = { data:{}}
    async componentDidMount()
    {
        const fetcheData = await fetchData();
        this.setState({data:fetcheData})
       
    }
    render()
    {
        const {data} = this.state;
    return(
      <div className={style.container}>
      <Cards data={data}/>
      <Chart/>
      <CountryPicker/>
      </div>
    )
    }

}
export  default App;