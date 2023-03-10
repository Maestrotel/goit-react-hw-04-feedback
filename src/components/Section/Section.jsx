import css from './Section.module.css';
import PropTypes from 'prop-types';

export const Section = ({ title, children }) => {
  return (
    <section>
      <h2 className={css.originTitle}>{title}</h2>
      {children}
    </section>
  );
};

Section.propTypes = {
  title: PropTypes.string.isRequired,
};
