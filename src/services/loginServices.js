const googleLogin = (response)=>{
  const profile = response.profileObj;
  const users = JSON.parse(localStorage.getItem('users')) || {};
  console.log(users)
  if(users.hasOwnProperty(profile.email))
  {
    console.log(`El usuario con email ${profile.email} ya estaba registrado previamente`);
    return;
  }
  const nuevoUsuario = {
    'image' : profile.imageUrl
  } 
  users[`${profile.email}`] = nuevoUsuario;
  localStorage.setItem('users',JSON.stringify(users))
  console.log(`El usuario con email ${profile.email} se acaba de registrar previamente`)
}
const logins={googleLogin}
export default logins