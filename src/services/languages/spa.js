export default {
  // Common
  comingSoon: () => 'Próximamente',

  // Home
  'home.name.introduction': () => 'Hola, soy',
  'home.profession': () => 'Desarrollador Fullstack',
  'home.introduction.description1': ({ age }) =>
    `Tengo ${age} años. Trabajo en desarrollo de software desde los 19 años, aunque previamente ya había aprendido las bases de programación de forma autodidacta.`,
  'home.introduction.description2': () =>
    'Me encanta lo que hago, y estoy constantemente buscando aprender nuevas tecnologías para incrementar mis conocimientos y mejorar mis habilidades.',
  'home.aboutMe.button': () => 'Acerca de mí',

  'home.navBar.selectLanguage': () => 'Cambiar Idioma',
  'home.navBar.english': () => 'Inglés',
  'home.navBar.spanish': () => 'Español',

  'home.aboutMeModal.location.title': () => 'Ubicación',
  'home.aboutMeModal.location.description': () =>
    'He vivido en Campana toda mi vida, una ciudad al norte de la provincia de Buenos Aires, Argentina. Gracias al auge del teletrabajo ahora puedo trabajar desde cualquier lugar, algo de lo que píenso sacar ventaja en un futuro cercano. Aunque estoy muy a gusto trabajando de esta forma, también estaría dispuesto a volver a las oficinas en un nuevo país. Esto se debe a un deseo personal de asentarme en un nuevo e interesante lugar.',
  'home.aboutMeModal.hobbies.title': () => 'Hobbies',
  'home.aboutMeModal.hobbies.description': () =>
    'Además de programar, en mi tiempo libre me gusta juntarme con amigos, tocar la guitarra, ir al gimnasio, y pasar tiempo en casa con mis dos hermosos gatos. También me gusta mucho cocinar, mayormente cosas saladas, pero ocasionalmente disfruto de hacer una torta o algo dulce',
  'home.aboutMeModal.longTermPlan.title': () => 'Plan a futuro',
  'home.aboutMeModal.longTermPlan.description': () =>
    'Aunque actualmente estoy trabajando como desarrollador fullstack, en el futuro me interesa dedicarme al mundo de data science y machine learning. Encuentro esta área muy interesante, y extremadamente importante en el futuro de la tecnología.',

  // Experience
  'experience.title': () => 'Experiencia',
  'experience.card.international': () =>
    'Trabajado para clientes de distintos países alrededor del mundo. Con muy buenas habilidades de comunicación tanto en inglés como en español, he desarrollado aplicaciones para clientes de +8 distintos países.',
  'experience.card.responsive': () =>
    'Desarrollado interfaces flexibles que se adaptan a distintos tamaños de pantalla. Gran experiencia en diseño responsivo, para asegurar una buena experiencia para el usuario, sin importar el tamaño de su pantalla o dispositivo.',
  'experience.card.courses': ({ coursesCount }) =>
    `Constantemente mejorando mis habilidades, practicando en proyectos personales, resolviendo algoritmos, y tomando cursos para aprender cosas nuevas. Actualmente, he tomado más de ${coursesCount} cursos.`,
  'experience.card.excellence': () =>
    'Apuntando a la excelencia. Como regla incuestionable, siempre las mejores prácticas son aplicadas. Un código limpio y escalable está garantizado, con tests meticulosos para evitar código propenso a errores.',
  'experience.card.agile': () =>
    'Experimentado en trabajar con metodologías ágiles, mayormente scrum. Aplicación de fundamentos Agile para asegurar que el cliente tiene una clara noción de todo progreso, estar preparado para cambios en los requerimientos del producto, y para siempre priorizar el proveer valor para el usuario final.',
  'experience.card.fullstack': () =>
    'Conocimientos técnicos desde desarrollo frontend web y mobile hasta lógica de backend, diseño y creación de entidades, manejo de bases de datos y deploy en servidores productivos.',

  // Portfolio
  'portfolio.title': () => 'Portfolio',
  'portfolio.card.personalPortfolio.title': () => 'Página de portfolio personal',
  'portfolio.card.personalPortfolio.description': () =>
    'Clickee en la carta para ver el repositorio de Github correspondiente a este sitio web',

  // Footer
  'footer.customizeTitle': () => 'No te gusta la página?',
  'footer.customizeButton': () => 'Personalizala',
  'footer.customizableOption.primary': () => 'Primario',
  'footer.customizableOption.secondary': () => 'Secundario',
  'footer.customizableOption.background': () => 'Fondo',
  'footer.customizableOption.text': () => 'Texto',
};
