class Clock extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentTime: (new Date()).toLocaleString()
    }
    this.launchClock();
  }

  launchClock() {
    setInterval(() => {
      this.setState({currentTime: (new Date()).toLocaleString()})
    }, 1000)

  }

  render() {
    return (
      <div>
        {this.state.currentTime}
      </div>
    )
  }
}