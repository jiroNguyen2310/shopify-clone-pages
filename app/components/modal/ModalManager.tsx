// app/routes/index.tsx
import { useState } from "react";
import { useAppBridge, Modal, TitleBar } from "@shopify/app-bridge-react";

export default function IndexRoute() {
    const shopify = useAppBridge();
    const [isOpen, setIsOpen] = useState(false);

    const closeModal = () => {
        shopify.modal.hide("my-modal");
        setIsOpen(false);
    };

    return (
        <div style={{ padding: 20 }}>

            <Modal id="my-modal" open={true} onHide={closeModal}>
                <div>
                    <p>Nội dung trong modal</p>
                </div>
                <TitleBar title="Tiêu đề Modal">
                    <button variant="primary" onClick={() => {
                        console.log("Primary action");
                        closeModal();
                    }}>
                        Xác nhận
                    </button>
                    <button onClick={closeModal}>Đóng</button>
                </TitleBar>
            </Modal>
        </div>
    );
}
