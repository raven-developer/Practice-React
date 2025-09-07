import * as btn from './buttons/buttons.jsx';

export function FirstApp() {
  return (
    <div className="px-first-app">
      <h1 className="px-first-app__title">First Section!</h1>
      <btn.PrimaryBtn label="Click Me" />
    </div>
  );
}

const second = {
  section_title: 'Second Section!',
  section_text: 'This is a text for the second section.',
  section_btn: <btn.SecondaryBtn label="Click Me" />,
  section_img: 'https://i.imgur.com/yXOvdOSs.jpg',
  section_img__size: '90px',
};

export function Markup() {
  return (
    <div className="px-markup">
      <h2 className="px-markup__title">{second.section_title}</h2>
      <p className="px-markup__text">{second.section_text}</p>
      {second.section_btn}
      <img
        className="px-markup__img"
        src={second.section_img}
        alt="A Random from Imgur"
        style={{ width: second.section_img__size }}
      />
    </div>
  );
}

const contents = [
  { label: 'First Item', id: 0 },
  { label: 'Last Item', id: 1 },
  { label: 'Phone Item', id: 2 },
  { label: 'Contact Item', id: 3 },
  { label: 'Message Item', id: 4 },
];

const listItems = contents.map((content) => (
  <li
    className={`px-list__item px-item-key-${content.id}`}
    key={content.id}
  >
    {content.label}
  </li>
));

export function List() {
  return (
    <div className="px-list">
      <h3 className="px-list__title">List Section!</h3>
      <ul className="px-list__items">{listItems}</ul>
    </div>
  );
}

export function AlertButton() {
  function btnClicked() {
    window.alert('Button Clicked!');
  }
  return (
    <button
      className="px-btn px-btn--primary"
      onClick={btnClicked}
    >
      <span className="px-btn__label">Click Me!</span>
    </button>
  );
}
