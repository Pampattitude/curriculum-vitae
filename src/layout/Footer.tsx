import { ReactComponent } from "../assets/footer.md";
import { Md } from "../components/Md";

export const Footer = () => (
  <footer className="dark:bg-gray-900 flex justify-center p-4 print:hidden">
    <Md className="text-center">
      <ReactComponent />
    </Md>
  </footer>
);
