
export async function getUsers(containerSelector) {
  fetch("https://jsonplaceholder.typicode.com/users")
    .then((response) => response.json())
    .then((json) => {
      let usersContainer = document.querySelector(containerSelector);
      json.forEach((user) => {
        let image = document.createElement("img");
        image.setAttribute("src", user.thumbnailUrl);
        usersContainer.append(image);
      });
    });
}