
export const calculateAndMoveCardWrapper = (
  cardItemWrapper: HTMLDivElement,
  itemClicked: HTMLDivElement,
  containerPadding: number
): void => {
  let moveLeft = null;
  let calculation = null;

  const itemClickedLeftEdge = itemClicked.getBoundingClientRect().x;
  const itemClickedRightEdge = itemClicked.getBoundingClientRect().right;
  const itemClickedWidth = itemClicked.getBoundingClientRect().width;

  if (itemClickedLeftEdge > 0) {
    moveLeft = true;
    calculation = itemClickedLeftEdge - containerPadding;

  } else if (itemClickedLeftEdge <= 0) {
    moveLeft = false;
    calculation = itemClickedWidth - itemClickedRightEdge + containerPadding;
  }
  cardItemWrapper.style.transform = `translate(${moveLeft ? '-' : ''}${calculation}px,0)`;
}

export const removeTransform = (cardItemWrapper: HTMLDivElement): void => {
  cardItemWrapper.style.transform = "translate(0,0)";
}
