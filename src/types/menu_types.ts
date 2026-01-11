
// types/menuTypes.ts
export interface SubMenuItem {
  title: string;
  link: string;
}

export interface InnerDropdown extends SubMenuItem {
  has_inner_dropdown: boolean;
  sub_menus: SubMenuItem[];
}

 

export type MenuItem = {
  title: string;
  link: string;
  has_dropdown: boolean;
  sub_menus?: (SubMenuItem | InnerDropdown)[];
};
