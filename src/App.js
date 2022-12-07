const categories = [
  {
    id: 1,
    title: 'hats',
  }
];

const App = () => {
  return (
    <div className="categories-container">
    {categories.map(({ title }) => (
      <div className="category-container">
        {/* <img /> */}
        <div className="category-body">
          <h2>{ title }</h2>
          <p>Show now</p>
        </div>
      </div>
    ))}
    </div>
    )
};

export default App;
