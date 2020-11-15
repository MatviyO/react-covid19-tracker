import React from "react";
import {Cards, Chart, CountryPicker} from '../components';
import styles from '../App.module.css';
import {fetchData} from "../api";

class Tracker extends React.Component {

    state = {
        data: {},
        country: ''
    }
    async componentDidMount  () {
        const fetchDataІ = await fetchData();
        console.log(fetchDataІ);
        this.setState({data: fetchDataІ})
    }
    handleCountryChange = async (country) => {
        const fetchDataІ = await fetchData(country);
        this.setState({data: fetchDataІ, country: country})
    }

    render() {
        const {data, country} = this.state;
        return (
            <div className={styles.container}>
                <div>
                    <a href={"/maps"}>maps</a>
                </div>
                <Cards data={data}/>
                <CountryPicker handleCountryChange={this.handleCountryChange}  />
                <Chart data={data} country={country} />
            </div>
        )
    }
}
export default Tracker;
