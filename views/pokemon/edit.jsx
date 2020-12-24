import React from 'react'
const Layout = require('../Layout.jsx')

class Edit extends React.Component {
    render() {
        const { pokemon, index } = this.props;
        return (
            <Layout>
                <h1>Pokedex!</h1>
                <form action={`/${index}/edit?_method=PUT`} method="post">
                    <label>Name:</label>
                    <input type="text" name="img" value={pokemon.name} />
                    <label>Img URL:</label>
                    <input type="text" name="img" value={pokemon.img} />
                </form>
            </Layout>
        )
    }
}

module.exports = Edit;
