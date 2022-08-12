import { IDashboardRoute, IOrderTableHeader } from "../interface";
import { faker } from "@faker-js/faker";
import {
  FcManager,
  FcHome,
  FcList,
  FcBusinessman,
  FcVoicePresentation,
  FcShop,
  FcReuse,
  FcPaid,
  FcQuestions,
  FcAnswers,
} from "react-icons/fc";
import OrderModel from "../../../model/OrderModel";
import constants from "../../../constants";
import { v4 as uuid } from "uuid";
import moment from "moment";
import { alignProperty } from "@mui/material/styles/cssUtils";
export default class Data {
  DashboardRoutes: IDashboardRoute[] = [
    { title: "Home", route: "/", Icon: FcHome },
    { title: "Management", route: "management", Icon: FcManager },
    { title: "Orders", route: "orders", Icon: FcPaid },
    { title: "Products", route: "products", Icon: FcShop, iconSize: "8px" },
    { title: "Vendors", route: "vendors", Icon: FcBusinessman },
    { title: "Users", route: "users", Icon: FcReuse },
    {
      title: "Category",
      route: "product/categories",
      Icon: FcList,
    },
    {
      title: "Notifications",
      route: "notifications",
      Icon: FcAnswers,
    },
    { title: "Reviews", route: "reviews", Icon: FcVoicePresentation },
    { title: "Help Center", route: "help-center", Icon: FcQuestions },
  ];

  OrderTableHeader: IOrderTableHeader[] = [
    { title: "Customer Name", props: { size: "small" } },
    { title: "Date Ordered", props: { size: "small", align: "center" } },
    { title: "Order Cost", props: { size: "small", align: "center" } },
    { title: "More", props: { size: "small", align: "center" } },
  ];

  getOrders(count?: number): OrderModel[] {
    const orders: OrderModel[] = [];

    Array.from({ length: count ? count : 20 }).forEach(() => {
      orders.push({
        customer_name: `${faker.name.findName()} ${faker.name.lastName()}`,
        cost: faker.commerce.price(50, 250, 2, constants.currency),
        id: uuid(),
        date_ordered: moment().format(),
      });
    });
    return orders;
  }
}
