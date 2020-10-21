import {useState, useEffect} from 'react'
import classNames from 'classnames'

const Slideshow = ({slides}) => {

  const [currentSlide, setCurrentSlide] = useState(0)
  const [slidesState, setSlidesState] = useState(Object.assign({}, slides))

  const incrementCount = (slideNum) => {
    setSlidesState(prevState => ({ ...prevState, [slideNum] : { ...prevState[slideNum], count: slidesState[slideNum].count + 1 } }))
  }

  useEffect(() => {
    incrementCount(0)
  }, [])

  const renderSlides = slides.map((slide, i) => {
    var slideClass = classNames('rz-slideshow__slide', {
      'rz-slideshow__slide--active': i === currentSlide,
      'rz-slideshow__slide--previous': i === currentSlide - 1,
      'rz-slideshow__slide--next': i === currentSlide + 1
    });

    return (
      <div
        key={i}
        className={slideClass}
        style={{backgroundImage: 'url(/images/' + slide.image + ')' }}
      />
    )
  })

  const advanceSlide = (direction) => {
    if (direction === 'previous') {
      if (currentSlide > 0) {
        setCurrentSlide(currentSlide - 1)
        incrementCount(currentSlide - 1)
      }
    }

    if (direction === 'next') {
      if ((currentSlide + 1) < slides.length) {
        setCurrentSlide(currentSlide + 1)
        incrementCount(currentSlide + 1)
      }
    }
  }

  return (
    <div className="rz-slideshow">
      <dl className="rz-slideshow__meta">
        <dt className="rz-slideshow__meta-name">
            <span className="rz-slideshow__meta-label">Name:</span> {slidesState[currentSlide].name}
        </dt>
        <dd className="rz-slideshow__meta-count">
            <span className="rz-slideshow__meta-label">View Count:</span> {slidesState[currentSlide].count}
        </dd>
      </dl>
      <div className="rz-slideshow__frame">
        <button
          aria-label="previous slide"
          className="rz-slideshow__button rz-slideshow__button--previous"
          onClick={() => advanceSlide('previous')}
          disabled={currentSlide === 0}
        />
        <div className="rz-slideshow__track">
          {renderSlides}
        </div>
        <button
          aria-label="next slide"
          className="rz-slideshow__button rz-slideshow__button--next"
          onClick={() => advanceSlide('next')}
          disabled={(currentSlide + 1) === slides.length}
        />
      </div>
    </div>
  )
}

export default Slideshow
