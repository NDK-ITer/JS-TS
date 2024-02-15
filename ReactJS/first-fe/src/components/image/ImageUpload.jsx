// ImageCropperModal.js
import React, { useState } from 'react';
import { Modal, Button } from 'react-bootstrap';
import AvatarEditor from 'react-avatar-editor';

const ImageCropperModal = ({ show, onHide, onSave }) => {
  const [image, setImage] = useState(null);
  const editorRef = React.createRef();

  const handleSave = () => {
    const canvas = editorRef.current.getImage();
    onSave(canvas);
    onHide();
  };

  return (
    <Modal show={show} onHide={onHide}>
      <Modal.Header closeButton>
        <Modal.Title>Cắt ảnh</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <AvatarEditor
          ref={editorRef}
          image={image}
          width={250}
          height={250}
          border={50}
          color={[255, 255, 255, 0.6]} // RGBA
          scale={1.2}
        />
        <input type="file" onChange={(e) => setImage(e.target.files[0])} />
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={onHide}>
          Đóng
        </Button>
        <Button variant="primary" onClick={handleSave}>
          Lưu
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default ImageCropperModal;
