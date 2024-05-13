// __mocks__/swiper/react.js

// Mocked implementation of 'swiper/react'
const React = require('react');

// Mocked Swiper component
const Swiper = ({ children }) => {
  return <div className="mocked-swiper">{children}</div>;
};

module.exports = {
  ...jest.requireActual('swiper/react'), // Use the actual module when needed
  Swiper, // Export the mocked Swiper component
};


jest.mock('swiper/react', () => ({
  Swiper: ({ children }) => <div data-testid="swiper-testid">{children}</div>,
  SwiperSlide: ({ children }) => (
    <div data-testid="swiper-slide-testid">{children}</div>
  ),
}))