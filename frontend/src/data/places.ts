import { Place } from '@/types/place';

export const places: Place[] = [
  [30.429411162704433, 60.03284260416633],
  [30.304858814530306, 60.06681823868581],
].map(([longitude, latitude], i) => ({
  id: `${i}`,
  label: `Place ${i + 1}`,
  longitude,
  latitude,
  text: `Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry standard dummy text
          ever since the 1500s, when an unknown printer took a galley of
          type and scrambled it to make a type specimen book. It has
          survived not only five centuries, but also the leap into
          electronic typesetting, remaining essentially unchanged. It was
          popularised in the 1960s with the release of Letraset sheets
          containing Lorem Ipsum passages, and more recently with desktop
          publishing software like Aldus PageMaker including versions of
          Lorem Ipsum.`,
}));
