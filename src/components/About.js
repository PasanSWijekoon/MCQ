import React from 'react';
import { Link } from 'react-router-dom';
import { connectScreenSize } from 'react-screen-size';
import { mapScreenSizeToProps } from '../utils/helpers';

/* About Component */
export default connectScreenSize(mapScreenSizeToProps)(
class About extends React.Component {
  componentDidMount() {
    document.addEventListener('keydown', this.handleKeyDown);
  }
  componentWillUnmount() {
    document.removeEventListener('keydown', this.handleKeyDown, false);
  }
  handleKeyDown = ({ code }) => {
		if (code === 'Escape') this.props.history.push('/');
	}
  render() {
    const { screen } = this.props;
    return (
      <div className='studyWrapper reviewContainer'>
				<div className='studyContainer'>
          <div className='quizHeader'>
            <div className='quizTitle'>
              <a
                target="_blank"
                rel="noopener noreferrer"
                className="fccLink"
                href="https://mcq-kappa.vercel.app/">
                <img src="/assets/logo.png" alt="Logo" />
              </a>
            </div>
            {!screen.isMobile && <span id="return">
              <Link to='/'>
                <i className="fa fa-times-circle" aria-hidden="true"></i>
              </Link>
            </span>}
          </div>
          <div className='about'>
            <h1>About OOP I Exam Preparation</h1>
            <p>You can practice your knowledge of Object Oriented Programming through
              multiple choice quizzes here.</p>
            <p>These quizzes are being designed to cover a variety of Areas that otherwise
              are hard to teach through coding challenges. They are specifically targeted
              toward common programming exam questions.</p>
            <p>This is being actively developed and your feedback or contributions are very welcome.
            </p>
            <button className='aboutContribute'>
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://github.com/PasanSWijekoon/MCQ">
                Contribute</a>
            </button><br />
            <Link className='finishBtn' to='/'>
							<button>Return to Quiz Page</button>
						</Link>
          </div>
				</div>
			</div>
    )
  }
});
