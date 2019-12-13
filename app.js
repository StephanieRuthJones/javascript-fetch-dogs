fetch('https://dogs-backend.herokuapp.com/dogs')
    .then(response => response.json())
    .then(createDogs)
    .catch(error => console.error(error))

function createDogs(dogs) {
    dogs.forEach(createDogCard)
}

function createDogCard(dog) {
    const dogsContainer = document.querySelector('.dogs-container')
    const dogInfo = document.createElement('div')
    dogInfo.classList.add('dog-info')
    dogInfo.innerHTML = `
            <img src=${dog.image} alt=${dog.id}/>
            <h1>${dog.name}</h1>
            <p>${dog.breed}</p>
            <p>${dog.age}</p>
        `
    dogsContainer.appendChild(dogInfo)
}

