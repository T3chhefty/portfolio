import Nav from "./Nav";
import Logo from "./Logo";
import HamburgerMenu from "./hamburger";
export default function Header() {
  return (
    <div className="header">
      <Logo />
      <HamburgerMenu />
      <Nav />
    </div>
  );
}
