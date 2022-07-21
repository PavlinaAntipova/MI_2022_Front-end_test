import { useEffect, useState } from 'react';

import { ReactComponent as CloseIcon } from '../../images/icons/close.svg';
import { ReactComponent as SuccessIcon } from '../../images/icons/success.svg';
import { ReactComponent as ErrorIcon } from '../../images/icons/error.svg';
import { ReactComponent as LoadingIcon } from '../../images/icons/loading.svg';

import { CloseBtn, Modal, UploadAvailability, UploadStatus, Text, Title, UploadArea, UploadText, UploadBtn, ImgBox } from './ModalContent.styled';

import { uploadImage } from 'services/catsApi';

export default function ModalContent({toggleModal, isDarkTheme}) {
    const [isSelected, setIsSelected] = useState(false);
    const [isUpload, setIsUpload] = useState(null);
    const [isUploading, setIsUploading] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const [file, setFile] = useState();
    const [preview, setPreview] = useState();

    useEffect(() => {
        if (!file) {
            setPreview(undefined);
            return;
        }
        const objectUrl = URL.createObjectURL(file);
        setPreview(objectUrl);
        setIsUploading(false);

        return () => URL.revokeObjectURL(objectUrl);
    }, [file])



    const handleChange = (e) => {
        const file = e.target.files;
        if (file.length) {
            setFile(file[0]);
            setIsSelected(true);
        }
    }


    return <Modal>
        <CloseBtn onClick={() => toggleModal()}><CloseIcon /></CloseBtn>
        <Title>Upload a .jpg or .png Cat Image</Title>
        <Text>Any uploads must comply with the <a href='https://thecatapi.com/privacy'>upload guidelines</a> or face deletion.</Text>
        <form onSubmit={e => {
            e.preventDefault();
            let formData = new FormData();
            formData.append('file', file);
            setIsLoading(true);
            uploadImage(formData).then(() => {
                setIsUpload(true);
                setPreview("");
                setIsSelected(false);
            }).catch(e => {
                console.log(e.response.data.message);
                 setIsUpload(false);
            }).finally(() => { setIsUploading(true); setIsLoading(false); });
            

        }}>
            
            <UploadArea isUpload={isUpload} isSelected={isSelected} isDarkTheme={isDarkTheme}>
               
                {isSelected ? <ImgBox><img src={preview} alt="cat" /> </ImgBox> :  <UploadText><span>Drag here</span> your file or <span>Click here</span> to upload</UploadText>}
                <input type="file" onChange={handleChange} accept="image/png, image/jpg"/>
            </UploadArea>
            
            { isSelected ? <><UploadAvailability>Image File Name: {file?.name}</UploadAvailability></> : <UploadAvailability>No file selected</UploadAvailability> }

            {isSelected && !isUploading && <UploadBtn type='submit'>{isLoading ? <><LoadingIcon/> UPLOADING</> : "UPLOAD PHOTO"}</UploadBtn>}
            
            {isUploading && <>
            {isUpload === true && <UploadStatus><SuccessIcon />Thanks for the Upload - Cat found!</UploadStatus>}
            {isUpload === false && <UploadStatus><ErrorIcon/>No Cat found - try a different one</UploadStatus>}
            </> }

            
        </form>
        <div>

        </div>
        
    </Modal>
}