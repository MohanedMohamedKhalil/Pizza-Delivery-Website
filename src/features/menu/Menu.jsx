import { useLoaderData } from "react-router-dom";
import { getMenu } from "../../api/apiRestaurant";
import MenuItem from "./MenuItem";
function Menu() {
  // Fetch Data From " loader" with component mounting
  const menu = useLoaderData();
  return (
    <ul className=" divide-y divide-stone-200 px-2">
      {menu.map((pizza) => (
        <MenuItem pizza={pizza} key={pizza.id} />
      ))}
    </ul>
  );
}

export async function loader() {
  const menu = await getMenu();
  return menu;
}

export default Menu;
