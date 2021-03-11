// Add your code here
const submitData = (name, email) => {
  return fetch('http://localhost:3000/users', {
    headers: {
      "Content-Type": "application/json",
      "Accept": "application/json"
    },
    method: 'POST',
    body: JSON.stringify({
      name,
      email
    })  
  })
  .then(response => response.json())
  .then(user => document.body.innerHTML = user.id)
  .catch(error => document.body.innerHTML = error.message);
}

// submitData('Jim', 'Jim@jim.com');