class Clock extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      currentTime: this.currentDateToString()
    }
    this.launchClock()
  }

  currentDateToString() {
    return (new Date()).toLocaleString()
  }

  launchClock() {
    setInterval(() => {
      this.setState({currentTime: this.currentDateToString()})
    }, 1000)
  }

  render() {
    console.log('Clock rendering...')
    return (
      <div>
        <AnalogDisplay time={this.state.currentTime}/>
        <DigitalDisplay time={this.state.currentTime}/>
      </div>
    )
  }
}