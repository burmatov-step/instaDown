const button = document.querySelector('button');

button.addEventListener('click', () =>{
    const response = fetch('https://api.instagram.com/oauth/authorize?client_id=1043459259742712&redirect_uri=https://burmatov-step.github.io/instaDown/&scope=user_profile,user_media&response_type=code')
})