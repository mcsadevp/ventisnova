/**
 * @file AlertModal.jsx
 * @description Componente de modal para mostrar alertas en la aplicación.
 * @version 1.0.0
 * @date 2024-09-30
 * @author McKinstong
 * @company Ventisnova
 * @license Copyright © 2024 Vebtisnova
 * @notes Este componente se utiliza para mostrar mensajes de alerta al usuario y requiere un arreglo de mensajes.
 */


const AlertModal = ({ alerts, isOpen, onClose }) => {
    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
            <div className="modal-content bg-customFormGreen text-white p-6 rounded-lg shadow-lg">
                <ul className="mb-4">
                    {alerts.map((alert, index) => (
                        <li key={index} className="mb-2">{alert}</li>
                    ))}
                </ul>
                <div className="flex justify-center">
                    <button 
                        className="bg-teal-500 text-white py-2 px-4 rounded hover:bg-teal-600 transition duration-300"
                        onClick={onClose}
                    >
                        Aceptar
                    </button>
                </div>
            </div>
        </div>
    );
};

export default AlertModal;
