// TASK 1
fetch("https://api.github.com/users/DanaviW")
    .then((response) => response.json())
    .then((users) => {
        // users is an array
        // loop thru the array
        // users.forEach((user) => {

        //Q1
        console.log(users.public_repos)
        //Q2
        console.log(users.followers)
    });



//Q3
fetch("https://api.github.com/users/DanaviW/followers")
    .then((response) => response.json())
    .then((users) => {
        users.forEach((user) => {
            console.log(user.id)
        })

    });


// TASK 2
//Q1
fetch("https://jsonplaceholder.typicode.com/comments")
    .then((response) => response.json())
    .then((x) => {
        let idCount = 0;
        x.forEach((comment) => {
            idCount++
        });

        console.log("This is the number of IDs: " +
            idCount);

    });


//Q2
fetch("https://jsonplaceholder.typicode.com/photos")
    .then((response) => response.json())
    .then((x) => {
        let idCount = 0;
        x.forEach((photo) => {
            idCount++
        });

        console.log("This is the number of photos: " +
            idCount);

    });


//Q3
fetch("https://jsonplaceholder.typicode.com/users")
    .then((response) => response.json())
    .then((users) => {
        let userData1 = []
        users.forEach((user) => {
            userData1.push({
                name: user.name,
                email: user.email
            })



        })

        console.log(JSON.stringify(userData1, null, 2))
    });

//Q4
fetch("https://jsonplaceholder.typicode.com/users")
    .then((response) => response.json())
    .then((users) => {
        let userData2 = []
        users.forEach((user) => {
            userData2.push({
                name: user.name,
                city: user.address.city
            })



        })

        console.log(JSON.stringify(userData2, null, 2))
    });

//Q5
fetch("https://jsonplaceholder.typicode.com/todos")
    .then((response) => response.json())
    .then((todos) => {
        let completeCount = 0;
        todos.forEach((todo) => {
            if (todo.completed === true) {
                completeCount++
            }

        });

        console.log("This is the number of completed todos: " +
            completeCount);

    });


//Q6
fetch("https://jsonplaceholder.typicode.com/todos")
    .then((response) => response.json())
    .then((todos) => {
        let todoData = []
        todos.forEach((todo) => {
            if (todo.completed === true) {
                todoData.push({
                    id: todo.id,
                    title: todo.title
                })

            }



        })

        console.log(JSON.stringify(todoData, null, 2))
    });


//Q7
Promise.all([
        fetch("https://jsonplaceholder.typicode.com/todos"),
        fetch("https://jsonplaceholder.typicode.com/users")
    ])
    .then((responses) => Promise.all(responses.map((response) => response.json())))
    .then(([todos, users]) => {
        let nameID = []
        let incompleteIDs = []
        todos.forEach((todo) => {
            if (todo.completed === false) {
                incompleteIDs.push(todo.userId)
            }
        })

        users.forEach((user) => {
            if (incompleteIDs.includes(user.id)) {
                nameID.push({
                    name: user.name,
                    UserId: user.id
                })
            }
        })

        console.log(JSON.stringify(nameID, null, 2))
    });


//Q8
Promise.all([
        fetch("https://jsonplaceholder.typicode.com/albums"),
        fetch("https://jsonplaceholder.typicode.com/users")
    ])
    .then((responses) => Promise.all(responses.map((response) => response.json())))
    .then(([albums, users]) => {
        let usernameID = []
        let albumUserID = []
        albums.forEach((album) => {
            if (album.title === "quidem molestiae enim") {
                albumUserID.push(album.userId)
            }
        })

        users.forEach((user) => {
            if (albumUserID.includes(user.id)) {
                usernameID.push({
                    name: user.name,

                })
            }
        })

        console.log(JSON.stringify(usernameID, null, 2))
    });