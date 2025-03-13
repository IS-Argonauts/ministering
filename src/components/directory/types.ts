export interface User {
  name: string;
  imageUrl: string;
  altText: string;
  bgColor: string;
}

export interface KeyboardKey {
  label: string;
  type?: "letter" | "special";
  icon?: string;
}
