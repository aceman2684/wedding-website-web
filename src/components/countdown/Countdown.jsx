import React, { Component } from 'react';
import CountdownBox from './countdown-box';

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
      <div className="row d-flex flex-column align-items-center flex-sm-row justify-content-sm-evenly">
        <CountdownBox time={days} label="Days" />
        <div className="w-100 d-sm-none" />
        <CountdownBox time={hours} label="Hours" />
        <div className="w-100 d-sm-none" />
        <CountdownBox time={minutes} label="Minutes" />
        <div className="w-100 d-sm-none" />
        <CountdownBox time={seconds} label="Seconds" />
      </div>
    );
  }
}
