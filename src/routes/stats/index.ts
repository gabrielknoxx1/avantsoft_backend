import { customerSalesFrequenceRoute } from "./customer-sales-frequence";
import { customerSalesMediaRoute } from "./customer-sales-media";
import { customerSalesVolumeRoute } from "./customer-sales-volume";
import { sellsByDayRoute } from "./sells-by-day";
import type { FastifyTypedInstance } from "../../types";

export async function statsRoutes(app: FastifyTypedInstance) {
	await customerSalesFrequenceRoute(app);
	await customerSalesMediaRoute(app);
	await customerSalesVolumeRoute(app);
	await sellsByDayRoute(app);
}
