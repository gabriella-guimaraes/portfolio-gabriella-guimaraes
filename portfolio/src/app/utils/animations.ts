import { trigger, state, style, animate, transition } from "@angular/animations";


export const floatAnimation = trigger('float', [
    state('void', style ({
        transform: 'translateY(-50px)',
        opacity:0
    })),
    transition('void => *', [
        animate('700ms ease-out')
    ]),
    transition('* => void', [
        animate('700ms ease-in')
    ])
]);