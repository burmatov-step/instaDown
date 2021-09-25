const button = document.querySelector('button');

const token = "IGQVJYaF9DeEppcy1MVnVrbkFBalBkSWJxeHhyU0kzcU9oYXJrQV93SGlSNEVYaUNrMHowbkVGeTBJZAHlIN1lRREd0eEw1cXhkSU93eWN3b0ozaVZAMMHQ2TUtFSGVKaTlFTHpqYWxzX2tvMVFKZAzUxWEdIM24zMUM0RmN3"
const userId = 17841402188388178
const id = 6116972978377283
button.addEventListener('click', async() =>{
    const response = await fetch(`https://graph.instagram.com/me/media?fields=id,caption&access_token=${token}`)
    const json  = await response.json()
    console.log(json)
})


