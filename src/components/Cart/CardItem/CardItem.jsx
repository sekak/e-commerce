import React from "react";
 const CardItem = ({ item ,onUpdateCartQty
     ,
    onRemoveFromQty}) => {
  return (
    
     <div className='container'>
            <div className='wrapp'> 
            <img className='image'  src={item.image.url} alt="d" />
            <div className='items'>
            <div className='nameprice'>
                <h2>{item.name}</h2>
                <span>{item.price.formatted_with_symbol}</span>
            </div>
            <div className='desc'>
                  <p className='pp' dangerouslySetInnerHTML={{ __html:item.description}} variant='body2' color='textSocandary'/>
            </div>
            </div>
                    <button onClick={()=> onUpdateCartQty(item.id, item.quantity -1)}>-</button>
                    <span>{item.quantity}</span>
                    <button onClick={()=>onUpdateCartQty(item.id, item.quantity +1) }>+</button>
                    <button onClick={()=> onRemoveFromQty(item.id)}>REMOVE</button>

                    </div>
        </div>
  
  );
};

export default CardItem;
