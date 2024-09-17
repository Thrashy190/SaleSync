import HomeIcon from "@mui/icons-material/Home";
import PeopleAltIcon from "@mui/icons-material/PeopleAlt";
import SellIcon from "@mui/icons-material/Sell";
import CategoryIcon from "@mui/icons-material/Category";
import PaymentIcon from "@mui/icons-material/Payment";
import ArticleIcon from "@mui/icons-material/Article";
import LogoutIcon from "@mui/icons-material/Logout";

import { Link } from "react-router-dom";

const routes = [
  {
    path: "/dashboard",
    element: <HomeIcon />,
    label: "Dashboard",
  },
  {
    path: "/dashboard/clientes",
    element: <PeopleAltIcon />,
    label: "Clientes",
  },
  {
    path: "/dashboard/ventas",
    element: <SellIcon />,
    label: "Ventas",
  },
  {
    path: "/dashboard/productos",
    element: <CategoryIcon />,
    label: "Productos",
  },
  {
    path: "/dashboard/pagos",
    element: <PaymentIcon />,
    label: "Pagos",
  },
  {
    path: "/dashboard/reportes",
    element: <ArticleIcon />,
    label: "Reportes",
  },
];

const Sidebar = () => {
  return (
    <div className="bg-gray-900 text-gray-300 h-screen w-64 flex flex-col ">
      <div className="p-4">
        <h2 className="text-white text-lg font-semibold">Punto de venta</h2>
      </div>
      <div className="px-4 py-2 text-sm text-gray-500 uppercase">
        Sistemas distribuidos
      </div>
      <nav className="flex-1 px-2 space-y-1">
        {routes.map((route, index) => (
          <Link
            key={index}
            to={route.path}
            className="flex items-center px-2 py-2 text-sm font-semibold text-gray-300 hover:bg-gray-800 hover:text-white"
          >
            {route.element}
            <span className="ml-2">{route.label}</span>
          </Link>
        ))}
        <Link
          to="/login"
          className="flex items-center px-2 py-2 text-sm font-semibold text-gray-300 hover:bg-gray-800 hover:text-white"
        >
          <LogoutIcon />
          <span className="ml-2">Salir</span>
        </Link>
      </nav>
    </div>
  );
};

export default Sidebar;
