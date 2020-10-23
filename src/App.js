import React from "react";
import {Cards, Chart, CountryPicker} from './components';
import styles from './App.module.css';
import {fetchData} from "./api";

class App extends React.Component {

    state = {
        data: {}
    }
    async componentDidMount  () {
        const fetchDataІ = await fetchData();
        console.log(fetchDataІ);
        this.setState({data: fetchDataІ})
    }

    render() {
        const {data} = this.state;
        return (
            <div className={styles.container}>
                <Cards data={data}/>
                <Chart />
                <CountryPicker />
            </div>
        )
    }
}
export default App;
