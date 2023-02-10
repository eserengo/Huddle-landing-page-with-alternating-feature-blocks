class Image extends React.Component {
  constructor(props) {
    super();
  }
  render() {
    return <img className={this.props.class} src={this.props.src} alt={this.props.alt} />;
  }
}

export default Image;