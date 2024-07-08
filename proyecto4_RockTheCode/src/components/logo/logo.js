import './logo.css'

export const createLogo = (site, img, name) => {

     const logoContainer = document.createElement('div');
     logoContainer.classList.add('logo-container');
     logoContainer.id = name;
     site.append(logoContainer);
     const foto = document.createElement('div');
     foto.innerHTML = `<img src=${img}>`;
     foto.className = 'foto';
     logoContainer.append(foto);
}