import { Link } from 'gatsby';
import React from 'react';
import { ParallaxBanner } from 'react-scroll-parallax';
import Layout from '../components/Layout';
import SEO from '../components/SEO';
import DiscordServerButton from '../components/DiscordServerButton'

import one from '../images/parallax/1.png';
import two from '../images/parallax/2.png';
import three from '../images/parallax/3.png';
import four from '../images/parallax/4.png';

const IndexPage = () => (
  <Layout>
    <SEO />
    <ParallaxBanner
      layers={[
        {
          image: one,
          amount: 0.4
        },
        {
          image: two,
          amount: 0.2
        },
        {
          image: three,
          amount: -0.2
        },
        {
          image: four,
          amount: -0.4
        },
        {
          children: <h1 style={{marginTop: '1em', color: '#fff'}}>The Beacon</h1>,
          amount: 0.01
        }
      ]}
      style={{
        height: '40vh',
        width: '100vw',
        marginLeft: '50%',
        transform: 'translateX(-50%)',
        imageRendering: 'crisp-edges',
        backgroundColor: '#222',
        textAlign: 'center'
      }}
    />
    <DiscordServerButton />
  </Layout>
)

export default IndexPage
