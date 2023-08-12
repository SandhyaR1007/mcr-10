import { Card } from "../components";
import { useProductsContext } from "../context/ProductsContext";

const Dashboard = () => {
  const {
    dashboardAnalytics: { total, delivered, lowStock },
  } = useProductsContext();

  const dashboardItems = [
    {
      name: "Total Stock",
      value: total,
      color: "text-green-500",
    },
    {
      name: "Total Delivered",
      value: delivered,
      color: "text-yellow-500",
    },
    {
      name: "Low Stock Items",
      value: lowStock,
      color: "text-red-500",
    },
  ];
  return (
    <div className="flex gap-10  flex-wrap  py-10 px-5">
      {dashboardItems.map((data) => (
        <section key={data.name} className="w-1/4">
          <Card
            cardText={data.name}
            cardValue={data.value}
            textColor={data.color}
            isDashboard={true}
          />
        </section>
      ))}
    </div>
  );
};

export default Dashboard;
