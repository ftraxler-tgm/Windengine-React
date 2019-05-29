const React = require('react');
const ReactDOM = require('react-dom');
// const client = require('./client');
// end::vars[]

// tag::app[]
class App extends React.Component {
    render() {
        return (
            <div className="shopping-list">
                <h1>Shopping List for {this.props.name}</h1>
                <ul>
                    <li>Instagram</li>
                    <li>WhatsApp</li>
                    <li>Oculus</li>
                </ul>
            </div>
        );
    }

}
// end::app[]



ReactDOM.render(
    <App />,
    document.getElementById('react')
)
// end::render[]