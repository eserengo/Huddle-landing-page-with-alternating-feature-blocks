class Button extends React.Component {
  constructor(props) {
    super();
  }
  render() {
    return <button className={this.props.class}>{this.props.content}</button>;
  }
}

export default Button;