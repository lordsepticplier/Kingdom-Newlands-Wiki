import './Contact.css';
import Header from './Header';
import Footer from './Footer';
import MyForm from './MyForm';
import ContactUs from './ContactUs';
import mainback from './images/Contact_main.jpg'

function Contact() {

  return (
    <main>
        <Header />
        <img src={mainback} alt="main background" className='back'/>
        <div id="ContactLayout">
            
            <div id="TheForm">
                <div> 
                    <ContactUs />
                </div>
                <MyForm />
            </div>

        </div>
        <Footer />
    </main>
  );
}
export default Contact;
