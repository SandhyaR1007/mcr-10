import { useNavigate } from "react-router-dom";
import { Card } from "../components";
import { departments } from "../utils/constants";

const Departments = () => {
  const navigate = useNavigate();
  return (
    <div className="flex gap-10  flex-wrap  py-10 px-5">
      {departments?.map((data) => (
        <section key={data} className="w-1/4">
          <Card
            cardText={data}
            isDashboard={false}
            clickHandler={() =>
              navigate("/products", {
                state: {
                  department: data,
                },
              })
            }
          />
        </section>
      ))}
    </div>
  );
};

export default Departments;
