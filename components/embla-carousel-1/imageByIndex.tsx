
export const images = [
        "https://placehold.co/480x300?font=roboto&text=Slide+1",
        "https://placehold.co/480x300?font=roboto&text=Slide+2",
        "https://placehold.co/480x300?font=roboto&text=Slide+3",
        "https://placehold.co/480x300?font=roboto&text=Slide+4",
      ];

const imageByIndex = (index: number): string => images[index % images.length]

export default imageByIndex
