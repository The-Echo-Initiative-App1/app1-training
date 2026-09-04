import PropTypes from 'prop-types';
function List(props){
    const category=props.category;
    const itemList=props.items;
    //fruits.sort((a,b)=>a.calories-b.calories);
    //const lowcalfruit=fruits.filter(fruit=>fruit.calories<100);
    //const heightcalfruit=fruits.filter(fruit=>fruit.calories>=100)
    const listItems=itemList.map(item=>
           <li key={item.id}>
            {item.name}:&nbsp;<b>{item.calories}</b></li>
    );
    return(<><h3 className="list-category">{category}</h3>
          <ol className="list-items">{listItems}</ol></>);

}
List.protoTypes={
    category:PropTypes.string,
    items:PropTypes.arrayof(PropTypes.shape({id:PropTypes.number,
                                             name:PropTypes.string,
                                             calories:PropTypes.number})),

}
List.defaultProps= {
    category:"category",
    items:[],
}
export default List