import { faBook, 
    faFolder, 
    faUserGraduate, 
    faUserEdit, 
    faBan, 
    faComment, 
    faLayerGroup, 
    faChartLine, 
    faCircle, 
    faPlus, 
    faTrashAlt, 
    faExclamation, 
    faExclamationTriangle} from '@fortawesome/free-solid-svg-icons';


export const iconMapping = {
    "Dashboard": "",
    "Modules": faBook,
    "Files": faFolder,
    "Exams": faUserEdit,
    "Grades": faChartLine,
    "Students": faUserGraduate,
    "Flashcards": faLayerGroup,
    "Discussions": faComment,
    "NotPublished": faBan,
    "Circle": faCircle,
    "Plus": faPlus,
    "Trash": faTrashAlt,
    "Exclamation":faExclamation,
    "Error": faExclamationTriangle
};