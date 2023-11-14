import BreadCrumb from "../components/BreadCrumb";
import Meta from "../components/Meta";
import { AiOutlineHome, AiOutlineMail } from "react-icons/ai";
import { BiInfoCircle, BiPhoneCall } from "react-icons/bi";
import Container from "../components/Container";

const Contact = () => {
  return (
    <>
      <Meta title="Contato" />
      <BreadCrumb title="Contato" />
      <Container class1="contact-wrapper home-wrapper-2 py-5">
        <div className="row">
          <div className="col-12">
            <iframe
              title="Mapa"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d240097.03724224804!2d-44.12886168639648!3d-19.902640425415104!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xa690cacacf2c33%3A0x5b35795e3ad23997!2sBelo%20Horizonte%2C%20MG!5e0!3m2!1spt-BR!2sbr!4v1699536752858!5m2!1spt-BR!2sbr"
              width="600"
              height="450"
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="border-0 w-100"
            ></iframe>
          </div>
          <div className="col-12 mt-5">
            <div className="contact-inner-wrapper d-flex justify-content-between">
              <div>
                <h3 className="contact-title mb-4">Contato</h3>
                <form action="" className="d-flex flex-column gap-15">
                  <div>
                    <input type="text" className="form-control" placeholder="Nome" />
                  </div>
                  <div>
                    <input type="email" className="form-control" placeholder="Email" />
                  </div>
                  <div>
                    <input type="tel" className="form-control" placeholder="Telefone" />
                  </div>
                  <div>
                    <textarea name="" id="" rows="4" className="form-control w-100" placeholder="Mensagem"></textarea>
                  </div>
                  <div>
                    <button className="button border-0">Enviar</button>
                  </div>
                </form>
              </div>
              <div>
                <h3 className="contact-title mb-4">Entre em contato com a gente</h3>
                <div>
                  <ul className="ps-0">
                    <li className="d-flex align-items-center gap-15 mb-3">
                      <AiOutlineHome className="fs-5" />
                      <address className="mb-0">
                        99 Lorem ipsum dolor sit. 999 Lorem, ipsum., AB, ABC 9898
                      </address>
                    </li>
                    <li className="d-flex align-items-center gap-15 mb-3">
                      <BiPhoneCall className="fs-5" />
                      <a href="tel:+99 987654321">+99 987654321</a>
                    </li>
                    <li className="d-flex align-items-center gap-15 mb-3">
                      <AiOutlineMail className="fs-5" />
                      <a href="mailto:email@email.com.br">email@email.com.br</a>
                    </li>
                    <li className="d-flex align-items-center gap-15 mb-3">
                      <BiInfoCircle className="fs-5" />
                      <p className="mb-0">Segunda - Sexta 10am - 8pm</p>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </>
  );
}

export default Contact;