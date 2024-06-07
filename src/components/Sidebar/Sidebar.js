import './Sidebar.css'

function renderPlaceholders(count) {
  const placeholders = [];
  for (let i = 0; i < count; i++) {
    placeholders.push(<a key={i}>Placeholder</a>);
  }
  return placeholders;
}

export default function Sidebar() {
  return (
    <div className="sidenav">
      <div className='sidenav--main'>
        <div className='section'>
          <a>First element</a>
          {renderPlaceholders(20)}
          <a>Last element</a>
        </div>
        <div className='section'>
          <a>First element</a>
          {renderPlaceholders(20)}
          <a>Last element</a>
        </div>
      </div>
    </div>
  );
}