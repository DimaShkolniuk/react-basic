function Main(props) {
  const h1Style = {
    fontSize: '2em',
    lineHeight: '2',
  }
  return <h1 style={h1Style}>My friend name: {props.name}</h1>
}
export default Main
