export interface HeadingProps {
  text: string;
  textAccent: string;
  id: string;
}

export interface NavBarProps {
  onClose?: () => void;
}

export interface MobileMenuProps {
  onClose: () => void;
}

export interface BtnProps {
  text: string;
}

export interface CareerForm extends ContactsForm {
  phone: string;
  policy: boolean;
  position?: string;
}

export interface ContactsForm {
  fullName: string;
  email: string;
  message?: string;
}

export interface ServicesListProps {
  handleSlideChange: (index: number) => void;
  activeIndex: number;
  slogan: string;
}
