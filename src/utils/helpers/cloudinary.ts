const CLOUD_NAME = import.meta.env.VITE_CLOUDINARY_CLOUD_NAME as string;

export function cldImageUrl(publicId: string) {
  return `https://res.cloudinary.com/${CLOUD_NAME}/image/upload/f_auto,q_auto/${publicId}`;
}

export function cldVideoUrl(publicId: string) {
  return `https://res.cloudinary.com/${CLOUD_NAME}/video/upload/f_auto,q_auto/${publicId}.mp4`;
}
