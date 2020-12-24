const React = require ('react');
const Layout = require('../Layout');

class Show extends React.Component{
    render() {
        const {pokemon, index} = this.props;
        return (
            <Layout title="Pokemon">
                <div className="card">
                <h1>{pokemon.name}</h1>
                    <img className="poke-img" src={pokemon.img} width="200px"></img>
                    <p>ID: {pokemon.id}
                    <br />
                    Type: {pokemon.type[0]}
                    <br />
                    Attack: {pokemon.stats.attack}
                    <br />
                    Defense: {pokemon.stats.defense}</p>
                        
                        <a href={`/pokemon/${index}/edit`} className="edit-button"><button>Edit</button></a>
                        <form action={`/pokemon/${index}?_method=DELETE`} method="POST"><input className="delete" type="submit" value="DELETE" /></form>
                        <a href="/pokemon"><button>HOME</button></a>
                </div>
            </Layout>

        )
    }
}

module.exports = Show