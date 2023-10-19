import './index.scss'
import Modal from '../../components/modal';
import { useState } from 'react';


export default function Index() {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const openModal = () => {
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
    };

    return (
        <main className='page-email'>
            <div className='container'>

            </div>
            <div className='card'>

                <div>
                    <h2>Sistema de enviar Email</h2>
                </div>

                <div>
                    <input type="email" placeholder="Ensira seu email" />
                </div>

                <div>
                    <button onClick={openModal}>Enviar</button>
                </div>
              


            </div>
            <Modal show={isModalOpen} onClose={closeModal} />

        </main>
    )
}