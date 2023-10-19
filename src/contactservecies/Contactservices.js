import axios from "axios";




        class Contactservices{
        // static serverURl='http://localhost:4000/contact'
        // static getAllcontact(){
        //     let dataURL =`${this.serverURl}` (any way )
        // }
        static getAllcontact(){
            return axios.get('http://localhost:3500/contacts');
        }

        // get the data by id ...it will display single contact  details 
        static getContact(Contactid){
            return axios.get(`http://localhost:3500/contacts/${Contactid}`);
        }
        // delet the contact 

        static deletContact(Contactid){
            return axios.delete(`http://localhost:3500/contacts/${Contactid}`);
            
        }
        // ADD THE CONTACT
        static addContact(contact){
            return axios.post("http://localhost:3500/contacts",contact);
        }
        static EditContact(Contactid , Contact){

            return axios.put(`http://localhost:3500/contacts${Contactid}`, Contact)
            
        }


}
export default Contactservices