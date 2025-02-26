document.getElementsByid("save_note").addEventListener("submit", async (e) => {
    
    const title = document.getElementById("title").value
    const description = document.getElementById("description").value

    const data = {
        title : title,
        description : description
    }

    const response = await fetch('http://127.0.0.1:8000/NT_App/', {

        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    });
})