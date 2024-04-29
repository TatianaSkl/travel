export interface HeadingProps {
  text: string;
  textAccent: string;
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
  position?: string;
  phone: string;
  policy: boolean;
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
