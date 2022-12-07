const categories = [
  {
    id: 1,
    title: 'hats',
  },
  {
    id: 2,
    title: 'jackets',
  },
  {
    id: 3,
    title: 'sneakers',
  },
  {
    id: 4,
    title: 'womens',
  },
  {
    id: 5,
    title: 'mans',
  },
];

const App = () => {
  return (
    <div className="categories-container">
    {categories.map(({ title }) => (
      <div className="category-container">
        <div className="background-image" />
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
