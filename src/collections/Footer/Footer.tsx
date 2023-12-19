import { useNavigate } from "react-router";
import { Button } from "../../components";
import { navigation } from "../../config";

const Footer = () => {
  const navigate = useNavigate();
  return (
    <footer className='flex container w-full flex-row justify-between items-center mt-1 rounded-t px-4 h-16 py-2 gap-2 bg-white'>
      {navigation.map((navItem, i) => {
        return (
          <Button
            padding={0}
            background={`bg-slate-200`}
            height={7}
            width={7}
            onClick={() => navigate(`${navItem.path}`)}
            type={`round`}
            iconPath={navItem.iconSrc}
            key={i}
          />
        );
      })}
    </footer>
  );
};

export default Footer;
