import { ReactComponent } from "../assets/footer.md";
import { Md } from "../components/Md";

export const Footer = () => (
  <footer className="flex justify-center p-4 print:hidden">
    <ReactComponent MyComponent={Md} />
  </footer>
);
