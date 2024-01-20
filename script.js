document.addEventListener("DOMContentLoaded", function () {
  const userForm = document.getElementById("userForm");

  userForm.addEventListener("submit", function (event) {
    event.preventDefault(); // Prevent the default form submission

    const nameInput = document.getElementById("name");
    const ageInput = document.getElementById("age");

    // Check if inputs are not empty
    if (nameInput.value.trim() === "" || ageInput.value.trim() === "") {
      alert("Please fill in all fields");
      return;
    }

    // Create a promise to handle asynchronous processing
    const agePromise = new Promise((resolve, reject) => {
      setTimeout(() => {
        const age = parseInt(ageInput.value);

        if (age >= 18) {
          resolve(`Welcome, ${nameInput.value}. You can vote.`);
        } else {
          reject(`Oh sorry ${nameInput.value}. You aren't old enough.`);
        }
      }, 4000); // Resolve after 4 seconds
    });

    // Handle the promise
    agePromise
      .then((message) => {
        alert(message);
      })
      .catch((message) => {
        alert(message);
      });
  });
});
