import { IconBtnNavigate, IconNext, IconPrev } from './navigateBtn.styled';

export function NavigateNext({ next, color }) {
  return (
    <IconBtnNavigate next={0} onClick={next} color={color}>
      <IconNext />
    </IconBtnNavigate>
  );
}

export function NavigatePrev({ prev, color }) {
  return (
    <IconBtnNavigate prev={0} onClick={prev} color={color}>
      <IconPrev />
    </IconBtnNavigate>
  );
}
