//Arrays de Recursos
const pdf = [
    
    {id: 1, name:"A colorear! (Alimentos)", url:"/pdf/AcolorearAlimentos.pdf", category:"Colorear", img:"/img/pdfIcon.png" },
    {id: 2, name:"A colorear! (Animales)", url:"/pdf/AcolorearAnimales.pdf", category:"Colorear", img:"/img/pdfIcon.png" },
    {id: 3, name:"A colorear! (Mágicos)", url:"/pdf/AcolorearMagicos.pdf", category:"Colorear", img:"/img/pdfIcon.png" },
    {id: 4, name:"El Erizo y el Escorpión (Ee)", url:"/pdf/ElErizoYElEscorpion.pdf", category:"Leer", img:"/img/pdfIcon.png" },
    {id: 5, name:"El Unicornio y el huevo (Uu)", url:"/pdf/ElUnicornioYElHuevo.pdf", category:"Leer", img:"/img/pdfIcon.png" },
    {id: 6, name:"Imi el Indio (Ii)", url:"/pdf/ImiElIndio.pdf", category:"Leer", img:"/img/pdfIcon.png" },
    {id: 7, name:"La araña Ana (Aa)", url:"/pdf/LaAraniaAna.pdf", category:"Leer", img:"/img/pdfIcon.png" },
    {id: 8, name:"Ms Hilary (Jr Kinder)", url:"/pdf/LittleTracesJrKinderMsHilary.pdf", category:"Trazar", img:"/img/pdfIcon.png" },
    {id: 9, name:"Ms Hilary (Kinder Book)", url:"/pdf/MsHilaryKinderBook.pdf", category:"Trazar", img:"/img/pdfIcon.png" },
    {id: 10, name:"Octavio el Oso (Oo)", url:"/pdf/OctavioElOso.pdf", category:"Leer", img:"/img/pdfIcon.png" },
];

const titles = [
    {title:"¡Conoce nuestros cuentos!", category:"Leer"},
    {title: "¡Conoce nuestros trazos!", category: "Trazar"},
    {title: "¡Conoce nuestros dibujos!", category:"Colorear"},
];

const background = [
  { img:"/img/imageKidReading.jpg", category:"Leer"},
  { img:"/img/imageKidWriting.jpg", category:"Trazar"},
  { img:"/img/imageKidPainting.jpg", category:"Colorear"},
];

//funcion para manejar el array de pdf
export const getFiles = new Promise((resolve) => {
    setTimeout(() => {
      resolve(pdf);
    }, 2000);
  });
  
//funcion para manejar los titulos
export const getTitles = (category) => {
  const categoryObj = titles.find((cat) => cat.category === category);
  return categoryObj ? categoryObj.title : "";
}

//Funcion para manejar los fondos de pantallas
export const getBackground = (category) => {
  const categoryObj = background.find((cat) => cat.category === category);
  return categoryObj ? categoryObj.img : "";

}

//Array de servicios
const Service = [
  
  {id:1, title: "Acompañamiento", img: "/img/studentSupport02.jpg", category:"Acompañamiento", description: " ¿Necesitas a alguien que acompañe a tus hijos/as en sus clases? ¿Necesitas ayuda para explicarle alguna actividad?\n\n ¡El servicio de acompañamiento es perfecto para ti!\n\n Este servicio consiste en acompañar a tus hijos/as  en sus clases, pruebas, exámenes y actividades, ofreciéndoles las herramientas necesarias para realizar dichas actividades. Durante este período de acompañamiento tanto la maestra como el alumno trabajan a la par, este acompañamiento puede ser de manera presencial como también virtual."}, 
  {id:2, title: "Tutorías", img: "/img/studentSupport.jpg", category:"Tutorías", description: "¿Quieres que tus niños mejoren académicamente y alcanzar un mayor nivel en sus habilidades educativas?\n\n¡El servicio de tutorías es perfecto para ti!\n\nConsiste en acompañar a tu niño/a una o dos veces a la semana de manera presencial con la finalidad de ayudarlo a realizar sus actividades académicas de una manera que se acomode a su estilo de aprendizaje y a su necesidad para alcanzar y obtener el aprendizaje deseado de la actividad."}, 
  {id:3, title: "Maestra", img: "/img/CategoryTeacher.jpg", category:"Maestra", description: "¿Eres algún maestro/a o director/a de algún colegio o escuela y necesitas que te cubra alguien en tus clases?\n\n¡Este servicio de maestra es excelente para ti!\n\nConsiste en cubrirte en tus clases mientras te ausentas ya sea por citas u otros compromisos que te impiden en ese momento ir a dar tus clases, charlas o talleres, solo tienes que agendar el día y la hora en que necesitas de mi servicio, enviarme algún plan que hayas planificado y de tener un plan puedes enviarme el tema y yo me encargo del resto."}, 
];

//funcion para manejar el array de Servicios
export const getServices = new Promise((resolve) => {
  setTimeout(() => {
    resolve(Service);
  }, 2000);
});


