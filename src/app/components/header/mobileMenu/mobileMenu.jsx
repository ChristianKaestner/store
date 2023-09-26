import { BurgerMenuBtn, BurgerMenuIcon } from './mobileMenu.styled';
export default function MobileMenu({ toggle }) {
  return (
    <BurgerMenuBtn
      color="inherit"
      aria-label="open drawer"
      edge="start"
      onClick={toggle}
    >
      <BurgerMenuIcon />
    </BurgerMenuBtn>
  );
}
