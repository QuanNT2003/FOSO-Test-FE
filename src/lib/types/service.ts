export interface ServiceData {
  name: string;
  description?: string;
  price: string;
}

export interface SectionData {
  id: string;
  title: string;
  image: string;
  items: ServiceData[];
}
