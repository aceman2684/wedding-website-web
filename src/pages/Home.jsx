import React from 'react';
import PageLayout from '../layouts/PageLayout';
import Hero from '../components/hero';
import heroImageTop from '../assets/images/hero-image-top.jpg';
import Countdown from '../components/countdown';
import HeroText from '../components/hero/text';
import HeroSubtext from '../components/hero/subtext/HeroSubtext';
import Carousel from '../components/carousel/Carousel';
import amberAndConorStairsImage from '../assets/images/amber_and_conor_stairs.jpg';
import amberAndConorMooseHandsImage from '../assets/images/amber_conor_moose_hands.jpg';
import amberAndConorPiggyBackImage from '../assets/images/amber_conor_piggyback.jpg';
import amberAndConorStarryNightImage from '../assets/images/amber_conor_starry_night.jpg';
import Divider from '../components/divider';
import TextSection from '../components/text-section';
import Section from '../components/section';

export default function Home() {
  const images = [
    amberAndConorStairsImage,
    amberAndConorMooseHandsImage,
    amberAndConorPiggyBackImage,
    amberAndConorStarryNightImage,
  ];

  return (
    <PageLayout>
      <div className="container-fluid">
        <div className="row">
          <div className="col px-0">
            <Hero image={heroImageTop}>
              <HeroText text="Amber & Conor Edwards" />
              <HeroSubtext subtext="September 24, 2022" />
            </Hero>
          </div>
        </div>
      </div>
      <div className="container mb-4">
        <Section className="mt-md-4">
          <Countdown />
        </Section>
        <Divider />
        <TextSection title="It&apos;s Finally Happening!">
          We are tying the knot and we cannot wait to celebrate our very special
          day with each and every one of you! We have created this website as a
          convenient and interactive way to keep you up-to-date with important details
          leading up to our wedding.
          <br />
          <br />
          You can also read about our story, get to know our wedding party, help
          us cherish our loved ones that have passed, and check out our registry
          information!
          <br />
          <br />
          Have fun, take a look around, and don&apos;t forget to RSVP!
          <br />
          <br />
          Finally, thank you for your ongoing love and support throughout this
          journey. We would not be here today without all of you! We are looking
          forward to making memories and dancing the night away with our
          favorite people!
        </TextSection>
        <Divider />
        <TextSection title="Our Story">
          Our love story began back in high school when we were brought together
          by our mutual friend, Taylor Hart (Matron of Honor). The three of us
          were good friends for over a year until our senior year when Conor
          finally asked Amber on a date to the movies (which Amber thought was a
          friendly gesture- but Conor thought otherwise). He dropped her off
          after the movie only to run up after her to the doorstep to give her
          the most unexpected kiss. She was taken back, to say
          the least. In fact, she was so unsure of what had happened that she
          avoided him for an entire week (the longest week of Conor&apos;s life). She
          finally came to her senses and realized that she had an opportunity
          with a truly amazing, genuine, and caring man- so she took it, and the
          rest was history!
          <br />
          <br />
          Six years later Conor and Amber have truly experienced life together.
          They have laughed together, cried together, supported one another,
          taken part in a long-distance relationship, and have been there for
          each other at both their highest and lowest moments. They have
          traveled together, experienced college life side-by-side, got their
          first apartment, and adopted their precious fur-baby, Moose.
          <br />
          <br />
          Finally, Conor popped the question after a night in. He realized that
          the love they shared was not about the fancy things, the good food, or
          the extravagant events, but the small moments in-between. Kneeling on
          the side of his bed, Conor asked Amber to marry him. This time she
          knew her answer instantly, it was a definite yes!
        </TextSection>
        <Section className="my-3 my-md-4">
          <Carousel images={images} />
        </Section>
      </div>
    </PageLayout>
  );
}
