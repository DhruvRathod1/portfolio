import React, { useRef } from 'react';
import PropTypes from 'prop-types';
import { BentoGrid, BentoGridItem } from './ui/BentoGrid';
import { gridItems } from '@/data';
import Clients from './Clients';

const Grid = () => {
  const clientsRef = useRef(null);

  const handleTechStackClick = () => {
    if (clientsRef.current) {
      clientsRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  if (!Array.isArray(gridItems)) {
    return null; // or handle error as needed
  }

  return (
    <>
      <section id="about">
        <BentoGrid>
          {gridItems.map(({ id, title, description, className, img, imgClassName, titleClassName, spareImg }) => (
            <BentoGridItem
              id={id}
              key={id}
              title={title}
              description={description}
              className={className}
              img={img}
              imgClassName={imgClassName}
              titleClassName={titleClassName}
              spareImg={spareImg}
              onClick={title === "My tech stack" ? handleTechStackClick : null} // Add onClick handler for "My tech stack"
            />
          ))}
        </BentoGrid>
      </section>
      <Clients ref={clientsRef} />
    </>
  );
};

Grid.propTypes = {
  gridItems: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
      title: PropTypes.string.isRequired,
      description: PropTypes.string,
      className: PropTypes.string,
      img: PropTypes.string,
      imgClassName: PropTypes.string,
      titleClassName: PropTypes.string,
      spareImg: PropTypes.string,
    })
  ),
};

export default Grid;
