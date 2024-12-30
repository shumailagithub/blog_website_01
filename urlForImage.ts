export const urlForImage = (image: { path: string }) => {
    return {
      url: () => `https://your-image-service.com/${image.path}`
    };
  };