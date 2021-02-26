import React, { Component } from 'react';

export default class Countdown extends Component {
  constructor() {
    super();
    this.state = {
      weddingDate: new Date('2022-09-24T00:00:00.000-06:00').getTime(),
      seconds: 0,
      minutes: 0,
      hours: 0,
      days: 0,
    };
  }

  componentDidMount() {
    const { weddingDate } = this.state;
    this.getCountdown = setInterval(() => {
      const now = new Date().getTime();
      const difference = weddingDate - now;
      const days = Math.floor(difference / (1000 * 60 * 60 * 24));
      const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((difference % (1000 * 60)) / 1000);

      this.setState({
        days,
        hours,
        minutes,
        seconds,
      });
    }, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.getCountdown);
  }

  render() {
    const {
      days, hours, minutes, seconds,
    } = this.state;

    return (
      <div className="d-flex justify-content-around text-center">
        <div>
          <h1>{days}</h1>
          days
        </div>
        <div>
          <h1>{hours}</h1>
          hours
        </div>
        <div>
          <h1>{minutes}</h1>
          minutes
        </div>
        <div>
          <h1>{seconds}</h1>
          seconds
        </div>
      </div>
    );
  }
}
