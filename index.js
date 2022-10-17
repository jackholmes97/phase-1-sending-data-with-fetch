// Add your code here
function submitData(userName, userEmail) {
    const userData = {
        name: userName,
        email: userEmail,
    }
    return fetch('http://localhost:3000/users', {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json",
        },
        body: JSON.stringify(userData),
    })
        .then( (response) => {
            return response.json(); 
        })
        .then( function(object) {
            document.body.append(object["id"])
        })
        .catch( function(error) {
            document.body.append(error.message);
        })
}

submitData("jdh97", "jdh97@comcast.net");
