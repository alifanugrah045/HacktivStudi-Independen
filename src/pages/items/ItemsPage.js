import getItems from "../../data/items";
import { useNavigate, Outlet } from "react-router-dom";

const ItemRow = ({ item }) => {
  const navigate = useNavigate();
  return (
    <tr>
      <td>{item?.title}</td>
      <button onClick={() => navigate(`${item?.id}`)}>Show Detail</button>
    </tr>
  );
};

const ItemsPage = () => {
  const items = getItems();
  return (
    <div>
      <h2>Item Page</h2>
      <p>Select Item To BE Shown</p>

      <table>
        <tr>
          <th>Item</th>
          <th>Action</th>
        </tr>
        {items.map((item) => (
          <ItemRow item={item} key={item.id} />
        ))}
      </table>
      <Outlet />
    </div>
  );
};

export default ItemsPage;
