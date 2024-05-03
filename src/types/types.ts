export interface HeadingProps {
  text: string;
  textAccent: string;
  id?: string;
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

export interface CareerForm {
  fullName: string;
  email: string;
  phone: string;
  policy: boolean;
  message?: string;
  position?: string;
}

export interface ContactsForm {
  fullNameContacts: string;
  emailContacts: string;
  messageContacts?: string;
}

export interface ServicesListProps {
  handleSlideChange: (index: number) => void;
  activeIndex: number;
  slogan: string;
}
