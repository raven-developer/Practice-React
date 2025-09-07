import './buttons.scss';

export function PrimaryBtn({ label }) {
  return (
    <a
      className="px-btn px-btn--primary"
      href="#"
    >
      <span className="px-btn__label">{label}</span>
    </a>
  );
}

export function SecondaryBtn({ label }) {
  return (
    <a
      className="px-btn px-btn--secondary"
      href="#"
    >
      <span className="px-btn__label">{label}</span>
    </a>
  );
}
