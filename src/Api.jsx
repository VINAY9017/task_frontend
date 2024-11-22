export const getTask = async () => {
  const res = await fetch("http://localhost:4500/api/tasks/get", {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  });
  return res.json();
};


export const addTask = async (bodydata) => {
    const res = await fetch("http://localhost:4500/api/tasks/create", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(bodydata)
    })
    return await res.json()
}


export const deleteTasks= async (i) => {
    const res = await fetch(`http://localhost:4500/api/tasks/delete/${i}`, {
        method: "DELETE",
        headers: {
            "Content-type": "application/json",

        }
    })
    return res.json()
}


export const updateTasks = async (id, update) => {
    const res = await fetch(`http://localhost:4500/api/tasks/update/${id}`, {
        method: "PUT",
        headers: {
            "Content-type": "application/json",

        },
        body: JSON.stringify(update)

    })
    return res.json()
}


export const singleTasks = async (i) => {
    const res = await fetch(`http://localhost:4500/api/tasks/get/${i}`, {
        method: "GET",
        headers: {
            "Content-type": "application/json",

        }
    })
    return res.json()
}