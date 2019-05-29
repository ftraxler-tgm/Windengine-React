'use strict';

const React = require('react');
const ReactDOM = require('react-dom');
// end::vars[]

// tag::app[]
class App extends React.Component {

    constructor(props) {
        super(props);
        this.state = {windengines: []};
        this.headers = [
            {key: 'windengineID', label: 'Windengine ID'},
            {key: 'timestamp', label: 'Timestamp'},
            {key: 'parkrechnerID', label: 'Parkrechner ID'},
            {key: 'windspeed', label: 'Windspeed'},
            {key: 'temperature', label: 'Temperature'},
            {key: 'power', label: 'Power'},
            {key: 'blindpower', label: 'Blindpower'},
            {key: 'rotationspeed', label: 'Rotationspeed'},
            {key: 'bladeposition', label: 'Bladeposition'},

        ];
    }

    componentDidMount() {
        fetch('/api/zentrale')
            .then(response => {
                return response.json();
            }).then(result => {
            this.setState({
                windengines: result
            });
        });
    }

    render() {
        return (
            <table border={1}>
                <thead>
                <tr>
                    {
                        this.headers.map(function (h) {
                            return (
                                <th key={h.key}>{h.label}</th>
                            )
                        })
                    }
                </tr>
                </thead>
                <tbody>
                {
                    this.state.windengines.map(function (item, key) {
                        return (
                            <tr key={key}>
                                <td>{item.windengineID}</td>
                                <td>{item.timestamp}</td>
                                <td>{item.parkrechnerID}</td>

                                <td>{item.windspeed} {item.unitWindspeed}</td>


                                <td>{item.temperature} {item.unitTemperature}</td>

                                <td>{item.power} {item.unitPower}</td>

                                <td>{item.blindpower} {item.unitBlindpower}</td>

                                <td>{item.rotationspeed} {item.unitRotationspeed}</td>

                                <td>{item.bladeposition} {item.unitBladeposition}</td>
                            </tr>
                        )
                    })
                }
                </tbody>
            </table>
        )
    }
}


ReactDOM.render(
    <App />,
    document.getElementById('react')
)
// end::render[]