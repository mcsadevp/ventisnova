const AlertModal = ({ alerts, isOpen, onClose }) => {
    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
            <div className="modal-content bg-customFormGreen text-white p-6 rounded-lg shadow-lg">
                <span className="close cursor-pointer" onClick={onClose}>&times;</span>
                <ul>
                    {alerts.map((alert, index) => (
                        <li key={index} className="mb-2">{alert}</li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default AlertModal;