import React from 'react';
import Hero from '../components/hero';
import heroImageTop from '../assets/images/hero-image-top.jpg';
import Countdown from '../components/countdown';

function Names() {
  return (
    <>
      <h1 className="display-5 d-block d-sm-none">
        {'Conor '}
        <small>&</small>
        {' Amber Edwards'}
      </h1>
      <h1 className="display-4 d-none d-sm-block d-md-none">
        {'Conor '}
        <small>&</small>
        {' Amber Edwards'}
      </h1>
      <h1 className="display-3 d-none d-md-block d-lg-none">
        {'Conor '}
        <small>&</small>
        {' Amber Edwards'}
      </h1>
      <h1 className="display-2 d-none d-lg-block d-xl-none">
        {'Conor '}
        <small>&</small>
        {' Amber Edwards'}
      </h1>
      <h1 className="display-1 d-none d-xl-block">
        {'Conor '}
        <small>&</small>
        {' Amber Edwards'}
      </h1>
    </>
  );
}

function Date() {
  return (
    <>
      <h1 className="display-6 d-block d-sm-none">
        <small>September 24, 2022</small>
      </h1>
      <h1 className="display-5 d-none d-sm-block d-md-none">
        <small>September 24, 2022</small>
      </h1>
      <h1 className="display-4 d-none d-md-block d-lg-none">
        <small>September 24, 2022</small>
      </h1>
      <h1 className="display-3 d-none d-lg-block d-xl-none">
        <small>September 24, 2022</small>
      </h1>
      <h1 className="display-2 d-none d-xl-block">
        <small>September 24, 2022</small>
      </h1>
    </>
  );
}

export default function Home() {
  return (
    <>
      <div className="container-fluid">
        <div className="row">
          <div className="col px-0">
            <Hero image={heroImageTop}>
              <Names />
              <Date />
            </Hero>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="row d-flex justify-content-center">
          <div className="col-md-8">
            <Countdown />
          </div>
        </div>
        <div className="row pt-4">
          <div className="col">
            <h1 className="text-center">It&apos;s Finally Happening!</h1>
            <p className="pt-2">
              You can also read about our story, get to know our wedding party, help
              us cherish our loved ones that have passed, and check out our registry
              information!
            </p>
            <p>Have fun, take a look around, and don&apos;t forget to RSVP!</p>
            <p>
              Finally, thank you for your ongoing love and support throughout this
              journey. We would not be here today without all of you! We are looking
              forward to making memories and dancing the night away with our
              favorite people!
            </p>
          </div>
        </div>
        <div className="row">
          <div className="col">
            <h1 className="text-center">Our Story</h1>
            <p>
              Our love story began back in high school when we were brought together
              by our mutual friend, Taylor Hart (Matron of Honor). The three of us
              were good friends for over a year until our senior year when Conor
              finally asked Amber on a date to the movies (which Amber thought was a
              friendly gesture- but Conor thought otherwise). He dropped her off
              after the movie only to run up after her to the doorstep to give her
              the most unexpected and passionate kiss. She was taken back, to say
              the least. In fact, she was so unsure of what had happened that she
              avoided him for an entire week (the longest week of Conor&apos;s life). She
              finally came to her senses and realized that she had an opportunity
              with a truly amazing, genuine, and caring man- so she took it, and the
              rest was history!
            </p>
            <p>
              Six years later Conor and Amber have truly experienced life together.
              They have laughed together, cried together, supported one another,
              taken part in a long-distance relationship, and have been there for
              each other at both their highest and lowest moments. They have
              traveled together, experienced college life side-by-side, got their
              first apartment, and adopted their precious fur-baby, Moose.
            </p>
            <p>
              Finally, Conor popped the question after a night in. He realized that
              the love they shared was not about the fancy things, the good food, or
              the extravagant events, but the small moments in-between. Kneeling on
              the side of his bed, Conor asked Amber to marry him. This time she
              knew her answer instantly, it was a definite yes!
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
