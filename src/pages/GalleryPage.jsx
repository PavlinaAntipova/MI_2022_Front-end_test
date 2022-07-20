import { useEffect, useState } from "react";
import { toast } from "react-toastify";

import GridContainer from "components/GridContainer";
import GridItem from "components/GridItem";
import Loader from "components/Loader";
import ModalUpload from "components/ModalUpload";
import ModalContent from "components/ModalContent";

import { deleteFavourite, getFavourite, getImgsWithConditions, makeFavourite } from "services/catsApi";

import { ReactComponent as RefreshIcon } from '../images/icons/update.svg';
import { ReactComponent as UploadIcon } from '../images/icons/upload.svg';
import { ReactComponent as FavIcon } from '../images/icons/fav.svg';
import { ReactComponent as FullFavIcon } from '../images/icons/fav-full.svg';

import { BtnBox, Form, Label, Select, UpdateBtn, UploadBtn } from "./style/GalleryPage.styled";

import { gridRows } from "helper/styleHelper";
import { theme } from "helper/theme";


export default function GalleryPage({breeds}) {
    const [gallery, setGallery] = useState([]);
    const [order, setOrder] = useState();
    const [breed, setBreed] = useState();
    const [type, setType] = useState();
    const [limit, setLimit] = useState();
    const [isLoading, setIsLoading] = useState(false);
    const [showModal, setShowModal] = useState(false);

    const [favourite, setFavourite] = useState([]);

     useEffect(() => {

         fetchFavoriteData().then(data => { setFavourite(data) }).catch(err => {
             console.log(err.message);
             toast("🙀 Ooops, something went wrong! Try again.");
         });

         setIsLoading(true);
         getImgsWithConditions().then(data => { setGallery(data) }).catch(err => {
            console.log(err.message);
            toast("🙀 Ooops, something went wrong! Try again.");
        }).finally(() => setIsLoading(false));
     }, []);
    
    
        async function fetchFavoriteData() {
          const allFavouriteData = await getFavourite();
            setFavourite(allFavouriteData);
            return allFavouriteData;
        }

  
  const toggleModal = () => {
    setShowModal(prevState => !prevState);
  }

 
    const handleSelect = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        
        switch (name) {
            case "order":
                setOrder(value);
                return;
            case "breed":
                setBreed(value);
                return;
            case "type":
                setType(value);
                return;
            case "limit":
                setLimit(value);
                return;
            default: return;
        }
    }

    const isActiveBtn = (id) => {
        return favourite.some(item => item.image_id === id);
    };

    const findDeletedItem = (id) => favourite.find(item => item.image_id === id);

    const handleClick = e => {
        const itemId = e.currentTarget.dataset.id;
        
        if (isActiveBtn(itemId) === false) {
            makeFavourite({ image_id: itemId }).then(() => {
                fetchFavoriteData().catch(err => {
                    console.log(err.message);
                    toast("🙀 Ooops, something went wrong! Try again.");
                });
            }).catch(err => {
                    console.log(err.message);
                    toast("🙀 Ooops, something went wrong! Try again.");
                });
        } else {
             
            const id = findDeletedItem(itemId).id;
            deleteFavourite(id).catch(err => {
                console.log(err.message);
                toast("🙀 Ooops, something went wrong! Try again.");
            });
                fetchFavoriteData().catch(err => {
                    console.log(err.message);
                    toast("🙀 Ooops, something went wrong! Try again.");
                });
        }

    }
    
    return <>
        <UploadBtn type="button" onClick={() => toggleModal()}><UploadIcon/>Upload</UploadBtn>
        <Form onSubmit={(e) => {
            e.preventDefault();
            setIsLoading(true);
            getImgsWithConditions(limit, order, type, breed).then(data => setGallery(data)).catch(err => {
            console.log(err.message);
            toast("🙀 Ooops, something went wrong! Try again.");
        }).finally(() => setIsLoading(false));
        }}>
            <Label>order
            <Select name="order" value={order} onChange={handleSelect}>
                <option value="Rand">Random</option>
                <option value="Desc">Desc</option>
                <option value="Asc">Asc</option>
            </Select>
            </Label>
                
            <Label>breed
            <Select name="breed" value={breed} onChange={handleSelect}>
                <option value="">None</option>
                {breeds.map(breed => <option key={breed.id} value={breed.id}>{breed.name}</option>)}
                </Select>
                </Label>
                
            <Label>type
            <Select name="type" value={type} onChange={handleSelect}>
                <option value="gif,jpg,png">All</option>
                <option value="jpg,png">Static</option>
                <option value="gif">Animated</option>
            </Select>
            </Label>
            <BtnBox>
                <Label>limit
            <Select name="limit" value={limit} onChange={handleSelect}>
                <option value="5">5 items per page</option>
                <option value="10">10 items per page</option>
                <option value="15">15 items per page</option>
                <option value="20">20 items per page</option>
            </Select>
            </Label>
                <UpdateBtn type="submit"><RefreshIcon/></UpdateBtn>
                </BtnBox>
            
                
            
        </Form>
        {isLoading ? <Loader/> : <GridContainer>
            {gallery.map((item, index) => {
                return <GridItem index={index} key={index} amountData={gallery.length} gridRows={gridRows}>
                    <div></div>
                    <button data-id={item.id} type="button" onClick={handleClick}>
                         {isActiveBtn(item.id) ? <FullFavIcon width="20" height="20" fill={theme.mainAccentColor}/> : <FavIcon fill={theme.mainAccentColor} />}
                        </button>
                        <img src={item?.url ? item.url : "https://cdn.pixabay.com/photo/2016/03/17/06/49/renovation-1262389_1280.png"} alt="cat" loading="lazy"/>
                    
                </GridItem>
            })}
        </GridContainer>}
        {showModal && <ModalUpload toggleModal={toggleModal}><ModalContent toggleModal={toggleModal} /></ModalUpload>}
    </>
}