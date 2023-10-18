
export const calcAndMoveLeft = (
  cardItemWrapper: HTMLDivElement,
  itemClicked: HTMLDivElement,
  containerPadding: number
): void => {

  const calculation = itemClicked.getBoundingClientRect().x - containerPadding;
  cardItemWrapper.style.transform = `translate(-${calculation}px, 0)`;

  console.log('called: calcAndMoveLeft')
  console.log('calculation:', calculation);
  console.log(' ')
}

export const calcAndMoveRight = (
  cardItemWrapper: HTMLDivElement,
  itemClicked: HTMLDivElement,
  containerPadding: number
): void => {

  const calculation = itemClicked.getBoundingClientRect().width -
    itemClicked.getBoundingClientRect().right +
    containerPadding;

  cardItemWrapper.style.transform = `translate(${calculation}px, 0)`;

  console.log('called: calcAndMoveRight')
  console.log('');
}

export const removeTransform = (cardItemWrapper: HTMLDivElement): void => {
  cardItemWrapper.style.transform = "translate(0,0)";
}
