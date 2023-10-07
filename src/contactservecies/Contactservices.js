import axios from "axios";

class Contactservices{
        // static serverURl='http://localhost:4000/contact'
        // static getAllcontact(){
        //     let dataURL =`${this.serverURl}` (any way )
        // }
        static getAllcontact(){
            return axios.get('http://localhost:4000/contact');
        }


        static getContact(Contactid){
            return axios.get(`http://localhost:4000/contact/${Contactid}`);
        }

}
export default Contactservices