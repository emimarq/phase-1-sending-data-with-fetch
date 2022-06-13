// Add your code here
function submitData(name, email) {
  return fetch("http://localhost:3000/users", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Accept": "application/json"
    },
    body: JSON.stringify({
      name,
      email
    })
  })
    .then(function (response) {
      return response.json()
    })
    .then(function (object) {
      const credentials = document.createElement('h1')
      credentials.innerHTML = `${object["id"]}`
      document.body.append(credentials)
    })
    .catch(function (error) {
      const errorMsg = document.createElement('h1')
      errorMsg.innerHTML = error.message
      document.body.append(errorMsg)
    })
}

// const formData = {
//   dogName: "Byron",
//   dogBreed: "Poodle",
// }

// const configurationObject = {
//   method: "POST",
//   headers: {
//     "Content-Type": "application/json",
//     "Accept": "application/json"
//   },
//   body: JSON.stringify(formData)
// }

// fetch("http://localhost:3000/dogs", configurationObject)
//   .then(function (response) {
//     return response.json()
//   })
//   .then(function (object) {
//     console.log(object)
//   })
//   .catch(function (error) {
//     document.body.style.background = "#050505"
//     setTimeout(() => {
//       alert("404: Nothing was found")
//     }, 50)
//   })