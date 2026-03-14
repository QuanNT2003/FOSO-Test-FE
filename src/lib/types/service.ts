export interface ServiceData {
  id: string;
  name: string;
  description?: string;
  price: string;
  image?: string;
  isEffect?: boolean;
  sectionId?: string;
}

export interface SectionData {
  id: string;
  title: string;
  image: string;
  items: ServiceData[];
}

export interface ServiceSectionProps {
  section: SectionData;
  isReversed: boolean;
}
