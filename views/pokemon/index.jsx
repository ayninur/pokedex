const React = require('react');
const Layout = require('../Layout.jsx');


class Index extends React.Component {
    render() {
        const { pokemon } = this.props;
        return (
            <Layout title="Index">
                <h1>Pokedex!</h1>
                <ul> 
                    {pokemon.map(( pokemon, index) => {
                    return (
                        <div className="pokedex">
                        <a href={`/pokemon/${index}`}>
                        <li>{pokemon.name}</li>
                        <img
                    className="pokemon-image"
                    src={pokemon.img} 
                    width="100px"
                  ></img>
                        </a>
                    </div>
                    );
                    })}
                    </ul>
            </Layout>
            
        );
    }
}

module.exports = Index;