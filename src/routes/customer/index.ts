import { createCustomerRoute } from "./create-customer";
import { updateCustomerRoute } from "./update-customer";
import { deleteCustomerRoute } from "./delete-customer";
import { listCustomerRoute } from "./list-customer";
import type { FastifyTypedInstance } from "../../types";

export async function customerRoutes(app: FastifyTypedInstance) {
	await createCustomerRoute(app);
	await updateCustomerRoute(app);
	await deleteCustomerRoute(app);
	await listCustomerRoute(app);
}
