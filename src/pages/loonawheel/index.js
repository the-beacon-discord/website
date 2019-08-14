/* global BigInt */

import React, { Component } from 'react';
import Layout from '../../components/layout';
import SEO from '../../components/seo';
import stanOrDie from './stan-or-die.png';
import pointer from './pointer.png';

const aliveMessages = [
  'Go Won and her butterflies shuttle you away safely.',
  'Olivia Hye scares Chuu away.',
  'BlockBerry creative has ran out of money to kill you.',
  'JinSoul causes the rain to wash Chuu away.',
  'Yves and Chuu decide to go on a shopping spree.',
  'ViVi deletes Chuu from the spinner software.',
  'HeeJin grabs Chuu and jumps away, dragging Chuu along with her.',
  'Choerry makes everybody happy again'
]

const deathMessages = [
  'Go Won\'s butterflies tries to save you, but any amount of butterflies can\'t lift you up into the air.',
  'With a fit of rage, Chuu shoots her arrow at you. Game over.',
  'Kim Lip brings the moon smashing down onto you.',
  'Olivia Hye pushes you off the diving board into the emptied swimming pool.'
]

const edgeMessages = [
  'HyunJin gives you a poke towards Chuu. Chuu shoots you.',
  'This website cannot handle the stress that you have just caused by landing exactly on the edge.'
]

const select = array => array[Math.floor(array.length * Math.random())]

class SecondPage extends Component {
  constructor(props) {
    super(props);

    this.spin = this.spin.bind(this);
    this.wheel = React.createRef();
    this.rotation = 0;
    this.state = {
      spinning: false,
      message: 'Will Chuu come and kill you with a heart attack?'
    }
  }
  spin() {
    this.setState({
      spinning: true
    })
    const toRotate = this.rotation + (360 * 5) + (360 * 2 * Math.random());
    const timeToRotate = toRotate / 360;

    this.wheel.current.style.transition = `transform ${timeToRotate}s cubic-bezier(.35,1,1,1)`;
    this.wheel.current.style.transform = `rotate(${toRotate}deg)`;
    
    setTimeout(() => {
      this.rotation = toRotate % 360;
      this.wheel.current.style.transition = 'unset';
      this.wheel.current.style.transform = `rotate(${this.rotation}deg)`;

      if (this.rotation < 90 || this.rotation > 270) {
        this.setState({
          message: select(aliveMessages)
        })
      } else if (this.rotation > 90 && this.rotation < 270) {
        this.setState({
          message: select(deathMessages)
        })
      } else if (this.rotation === 90 || this.rotation === 270) {
        this.setState({
          message: select(edgeMessages)
        })
      }

      this.setState({
        spinning: false
      })
    }, timeToRotate * 1000 + 200)
  }
  render() {
    return (
      <Layout>
        <SEO title="loonathewheel" />
        <h1>Spin the wheels!</h1>
        <button onClick={this.spin} disabled={this.state.spinning}>Spin</button>
        <p>
          { this.state.message }
        </p>
        <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
          <img src={pointer} />
          <img
            src={stanOrDie}
            ref={this.wheel}
            alt="A wheel with a horizontal split. The top half contains 'STAN' and the bottom half contains 'DIE'. This wheel rotates."
            style={{
              width: '300px',
              backgroundColor: 'transparent'
            }}
          />
        </div>
      </Layout>
    )
  }
}

export default SecondPage
