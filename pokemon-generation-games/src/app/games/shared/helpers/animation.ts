import {
  trigger,
  animate,
  transition,
  style,
} from '@angular/animations';

export const fadeInOut = trigger('fadeInOut', [
  transition(':enter', [
    style({ opacity: 0 }),
    animate(200, style({ opacity: 1 })),
  ]),
  transition(':leave', [animate(200, style({ opacity: 0 }))]),
]);
