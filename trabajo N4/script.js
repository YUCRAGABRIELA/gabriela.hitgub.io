// Funcionalidad para mostrar/ocultar el menú en dispositivos móviles  
const menuToggle = document.querySelector('.menu-toggle');  
const navigation = document.querySelector('nav');  

menuToggle.addEventListener('click', () => {  
  navigation.classList.toggle('active');  
});  

// Función para generar las tarjetas de proyectos  
function generateProjectCards() {  
  const projectsContainer = document.getElementById('projects-container');  

  // Datos de los proyectos  
  const projects = [  
    {  
      title: 'Proyecto 1',  
      description: 'Descripción del proyecto 1',  
      image: 'proyecto1.jpg',  
      link: 'https://ejemplo.com/proyecto1'  
    },  
    {  
      title: 'Proyecto 2',  
      description: 'Descripción del proyecto 2',  
      image: 'proyecto2.jpg',  
      link: 'https://ejemplo.com/proyecto2'  
    },  
    // Agrega más proyectos aquí  
  ];  

  projects.forEach(project => {  
    const card = document.createElement('div');  
    card.classList.add('project-card');  

    const image = document.createElement('img');  
    image.src = project.image;  
    image.alt = project.title;  

    const cardContent = document.createElement('div');  
    cardContent.classList.add('card-content');  

    const title = document.createElement('h3');  
    title.textContent = project.title;  

    const description = document.createElement('p');  
    description.textContent = project.description;  

    const link = document.createElement('a');  
    link.href = project.link;  
    link.textContent = 'Ver proyecto';  

    cardContent.appendChild(title);  
    cardContent.appendChild(description);  
    cardContent.appendChild(link);  

    card.appendChild(image);  
    card.appendChild(cardContent);  

    projectsContainer.appendChild(card);  
  });  
}  

// Llamada a la función para generar las tarjetas de proyectos  
generateProjectCards();