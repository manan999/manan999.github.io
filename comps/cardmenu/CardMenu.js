import React from 'react' ;
import { faTrashAlt, faHeart, faShareAlt, faDownload, faEdit, faFolderMinus, faFileSignature, faChartPie, faIdCard, faUserClock, faUserCog } from '@fortawesome/free-solid-svg-icons' ;

import NonEditableText from '../text/NonEditableText.js' ;
import {formatSize, formatDate} from '../format.js' ;
import IconName from './iconname/IconName.js' ;

import './carmenutextoverwrite.css' ;
import './cardmenu.css' ;

const CardMenu = ({file, token}) => {
	// console.log(file) ;

	const onDownloadClick = () => {
		// console.log('download click') ;
		fetch(`https://onekaoneapi.herokuapp.com/getDownload/${file._id}`,{
			method : 'get' ,
			headers : { 'Content-Type' : 'application/json',
						'Authorization' : `Bearer ${token}` } ,
		})
		.then(res => {
			if(res.ok)
				return res.json() ;
			else
				throw Error(res.statusText) ;
		})
		.then(data =>{	
			// const str = btoa(new Uint8Array(data.data.data).reduce( (data, byte) => data + String.fromCharCode(byte), '')); ;
			// setFileData(str) ;
		}) 
		.catch( err  => console.log(err) ) ;
	}

	const onFavClick = () => {
		fetch(`https://onekaoneapi.herokuapp.com/addToFav/${file._id}`,{
			method : 'get' ,
			headers : { 'Content-Type' : 'application/json',
						'Authorization' : `Bearer ${token}` } ,
		})
		.then(res => {
			if(res.ok)
				return res.json() ;
			else
				throw Error(res.statusText) ;
		})
		.then(data =>{	
			// const str = btoa(new Uint8Array(data.data.data).reduce( (data, byte) => data + String.fromCharCode(byte), '')); ;
			// setFileData(str) ;
		}) 
		.catch( err  => console.log(err) ) ;	
	}

	const onDeleteClick = () => {
		fetch(`https://onekaoneapi.herokuapp.com/delete/${file._id}`,{
			method : 'delete' ,
			headers : { 'Content-Type' : 'application/json',
						'Authorization' : `Bearer ${token}` } ,
		})
		.then(res => {
			if(res.ok)
				return res.json() ;
			else
				throw Error(res.statusText) ;
		})
		.then(data =>{	
			// const str = btoa(new Uint8Array(data.data.data).reduce( (data, byte) => data + String.fromCharCode(byte), '')); ;
			// setFileData(str) ;
		}) 
		.catch( err  => console.log(err) ) ;
	}

	return(
		<div className="cardmenu">
			<div className="cardmenu-data">
				<NonEditableText label={<IconName icon={faFileSignature} name='File Name' />} value={file.name} />
				<NonEditableText label={<IconName icon={faChartPie} name='File Size' />} value={formatSize(file.size)} />
				<NonEditableText label={<IconName icon={faIdCard} name='Owner Name' />} value={file.link.split('/')[0]} />
				<NonEditableText label={<IconName icon={faUserClock} name='Created At' />} value={formatDate(file.createdAt)} />
				<NonEditableText label={<IconName icon={faUserCog} name='Last Modified' />} value={formatDate(file.updatedAt)} />
			</div>
			<div className="cardmenu-data">
				<NonEditableText label={<IconName icon={faFileSignature} name='Description' />} value={file.description} />
				<NonEditableText label={<IconName icon={faFileSignature} name='Shared read' />} value={file.shared_with.read} />
				<NonEditableText label={<IconName icon={faFileSignature} name='Shared write' />} value={file.shared_with.write} />
				<NonEditableText label={<IconName icon={faFileSignature} name='Keywords' />} value={file.keywords} />
			</div>
			<div className="cardmenu-icons">
				<IconName icon={faDownload} name='Download' click={onDownloadClick} />
				<IconName icon={faEdit} name='Edit Details'  />
				<IconName icon={faShareAlt} name='Share File' />
				<IconName icon={faHeart} name='Add To Favorites' click={onFavClick} />
				<IconName icon={faTrashAlt} name='Delete To Bin' onIconClick={onDeleteClick}/>
				<IconName icon={faFolderMinus} name='Change Folder' />
			</div>
		</div>
	) ;
}

export default CardMenu ;

// discription...keywords....title....sharedwith
