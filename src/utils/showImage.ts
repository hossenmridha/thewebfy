let moveImageHandler: ((e: MouseEvent) => void) | null = null;

export function showImage(event: React.MouseEvent<HTMLLIElement, MouseEvent>) {
  const hoverOnItem = event.currentTarget;
  const hoverOnImage = hoverOnItem.querySelector(".hover-on-image") as HTMLImageElement | null;
  const hoveredImage = document.getElementById("hoveredImage") as HTMLImageElement | null;

  if (!hoverOnImage || !hoveredImage) return;

  hoveredImage.src = hoverOnImage.src;
  hoveredImage.style.display = "block";

  moveImageHandler = (e: MouseEvent) => {
    hoveredImage.style.transform = `translate(${e.clientX}px, ${e.clientY}px)`;
  };

  document.addEventListener("mousemove", moveImageHandler);
}

export function hideImage() {
  const hoveredImage = document.getElementById("hoveredImage") as HTMLImageElement | null;
  if (!hoveredImage) return;

  hoveredImage.style.display = "none";

  if (moveImageHandler) {
    document.removeEventListener("mousemove", moveImageHandler);
    moveImageHandler = null;
  }
}
