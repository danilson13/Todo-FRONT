const url = "http://localhost:8082/"

function hideLoader(){
    document.getElementById("loading").style.display = "none";
}



function show(tasks){
    let tab = `
            <thead>
                <th scope="col">#</th>
                <th scope="col">Description</th>
                <th scope="col">Username</th>
                <th scope="col">Actions</th>
            </thead>
    `;

    for(let task of tasks){
        tab += `
        <tr>
            <td scope="row">${task.id}</td>
            <td>${task.description}</td>
            <td>${task.user.username}</td>
            <td>
            <a class="btn btn-info " href="EditTask.html/${task.id}">
                <i class="fa fa-edit"></i>
            </a>
            <a class="btn btn-danger " href="EditTask.html/${task.id}">
            <i class="fa fa-trash"></i>
        </a>
            </td>
        </tr>
        `
    }

    document.getElementById("tasks").innerHTML= tab;
}

function showBtn(){
    let btn = ` <a href="AdicionarTask/}" class="btn btn-success border-5 ">
    <i class="fa fa-plus"></i>
</a>`;
    let mBtn = document.getElementById("btn_add").innerHTML = btn

    // mBtn.append(btn);
}

showBtn()

async function getAPI(url){
    const response = await fetch(`${url}task/user/1`, {method: "GET"})

    var data = await response.json();
    console.log(data);
    if(response)
        hideLoader()
    show(data)
}

getAPI(url);
