
function App() {
  return (

    <h1>habibur Rahman</h1>
    <h1>habibur Rahman</h1><h1>habibur Rahman</h1>
    <h1>habibur Rahman</h1><h1>habibur Rahman</h1><h1>habibur Rahman</h1><h1>habibur Rahman</h1><h1>habibur Rahman</h1><h1>habibur Rahman</h1>
  );
}
function formatName(user) {
  return user.firstName + ' ' + user.lastName;
}

const user = {
  firstName: 'Harper',
  lastName: 'Perez'
};

const element = (
  <h1>
    Hello, {formatName(user)}!
  </h1>
);
export default App;
