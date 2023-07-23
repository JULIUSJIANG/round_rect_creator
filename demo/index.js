const { createRoot } = require (`./node_modules/react-dom/client`);
const React = require (`./node_modules/react/index`);
console.log (`v2`);
const { Button, Space } = require (`./node_modules/antd/dist/antd`);
class Hello extends React.Component {
  render() {
    return React.createElement('div', null, `Hello ${this.props.props}`);
  }
}
window.addEventListener (`DOMContentLoaded`, () => {
    // Render your React component instead
    const root = createRoot(document.getElementById('app'));
    root.render(
        React.createElement (
            Space, 
            {
                props: `props`
            },

            React.createElement (
                Button,
                {
                    type: `primary`
                },

                `Primary Button`
            ),
            React.createElement (
                Button,
                {
                    
                },

                `Default Button`
            ),
            React.createElement (
                Button,
                {
                    type: `dashed`
                },

                `Dashed Button`
            ),
            React.createElement (
                Button,
                {
                    type: `text`
                },

                `Text Button`
            ),
            React.createElement (
                Button,
                {
                    type: `link`
                },

                `Link Button`
            ),
        )
    );
});