import { useFetcher } from "react-router-dom";
import Button from "../../ui-components/Button";
import { updateOrder } from "../../api/apiRestaurant";

function UpdateOrder() {
  const fetcher = useFetcher();

  return (
    <fetcher.Form method="PATCH" className="text-right">
      <Button type="primary">Prioritize this order</Button>
    </fetcher.Form>
  );
}

export default UpdateOrder;

// Even if we put action in child comp of or main comp => Router-Dom smart enough to deal with it

export async function action({ request, params }) {
  const updatedData = { priority: true };
  await updateOrder(params.orderId, updatedData);
  return null;
}
