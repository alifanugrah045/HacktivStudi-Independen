import getItems from '../../data/items';
import { useNavigate,useParams } from 'react-router-dom';


const ItemsDetailPage = () => {
  const items = getItems();
  const params = useParams()
  let item = items.find(item => item.id === Number(params.id))
  return (
    <div>
      <h3>======= Detail Page =======</h3>
      <h4>User Id : {item?.userId}</h4>
      <h4>Title : {item?.title}</h4>
      <p> {item?.body}</p>
    </div>
  );
};

export default ItemsDetailPage;
