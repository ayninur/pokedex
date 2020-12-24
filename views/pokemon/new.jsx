const React = require("react");

class New extends React.Component {
    render() {
        return (
            <Layout title="new">
                <form action="/pokemon/" method="post"></form>
                <label>Name:</label>
                <input type = "text" placeholder="Name" name="name"/>
                <label>Type:</label>
                <input type = "text" placeholder="Type" name="type"/>
                <label>Attack:</label>
                <input type = "text" placeholder="Attack" name="attack"/>
                <label>Defense:</label>
                <input type = "text" placeholder="Defense" name="defense"/>
            </Layout>
        )
    }
}

module.exports = New;