//your code here
const draggables = document.querySelectorAll('.grid-item');

draggables.forEach(draggable => {
  draggable.addEventListener('dragstart', () => {
    draggable.classList.add('dragging');
  });

  draggable.addEventListener('dragend', () => {
    draggable.classList.remove('dragging');
  });
});

draggables.forEach(draggable => {
  draggable.addEventListener('dragover', (e) => {
    e.preventDefault();
    const draggableElement = document.querySelector('.dragging');
    const draggableId = draggableElement.id;
    const droppableId = draggable.id;
    const draggableImage = document.getElementById(draggableId).style.backgroundImage;
    const droppableImage = document.getElementById(droppableId).style.backgroundImage;
    document.getElementById(draggableId).style.backgroundImage = droppableImage;
    document.getElementById(droppableId).style.backgroundImage = draggableImage;
  });
});