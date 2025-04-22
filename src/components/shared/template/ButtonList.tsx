import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { Outlet } from "react-router-dom";

interface IlinkItmes {
  path: string;
  label: string;
}

export interface ButtonListTempltateProps {
  title: string;
  linkItems: IlinkItmes[];
}

const ButtonListTemplate = ({ title, linkItems }: ButtonListTempltateProps) => {
  const navigate = useNavigate();
  return (
    <main className="p-6 max-w-[1024px] mx-auto">
      <header className="p-4 flex items-center">
        <button
          onClick={() => navigate("/")}
          className="text-3xl font-semibold"
        >
          &lt;
        </button>
        <h1 className="flex-1 text-center text-6xl font-bold">{title}</h1>
      </header>
      <ul className="flex flex-col gap-2 items-center mb-4">
        {linkItems.map((link, linkIndex) => (
          <li key={`link-item__${linkIndex}`}>
            <Link className="p-2 text-2xl font-semibold" to={link.path}>
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
      <section>
        <Outlet />
      </section>
    </main>
  );
};

export default ButtonListTemplate;
