import * as Yup from 'yup';

export const FormValues={
    name:"",
    email:"",
    topic:"",
    message:""
}
export const ValidationSchema=Yup.object().shape({
    name:Yup.string().min(3,'Name Should be atleast 3 characters!').max(15,'Name is Too long!').required("Name can't be empty!"),
    email:Yup.string().email('Invalid email').required("Email can't be empty!"),
    topic:Yup.string().required("Topic can't be empty!"),
    message:Yup.string().required("Message can't be empty!")
})