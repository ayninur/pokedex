const React = require('react');

class Layout extends React.Component {
    render() {
        return (
            <html>
                <head>
                  <title>{this.props.title}</title>
                    <link rel="stylesheet" href="style.css"/>
                </head>
                <body>
                    <main>{this.props.children}</main>
                </body>
            </html>
        )
    }
}

module.exports = Layout;

