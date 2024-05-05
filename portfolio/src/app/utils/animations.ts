import { trigger, state, style, animate, transition } from "@angular/animations";


export const floatAnimation = trigger('float', [
    state('visible', style({
        opacity: 1,
        transform: 'translateY(0)'
    })),
    state('hidden', style({
        opacity: 0,
        transform: 'translateY(50px)'
    })),
    transition('hidden => visible', [
        animate('700ms ease-in')
    ]),
    transition('visible => hidden', [
        animate('700ms ease-out')
    ])
]);

export const rightFloatAnimation = trigger('right-float', [
    state('visible', style({
        opacity: 1,
        transform: 'translateX(0)'
    })),
    state('hidden', style({
        opacity: 0,
        transform: 'translateX(-50px)'
    })),
    transition('hidden => visible', [
        animate('700ms ease-in')
    ]),
    transition('visible => hidden', [
        animate('700ms ease-out')
    ])
]);

export const leftFloatAnimation = trigger('left-float', [
    state('visible', style({
        opacity: 1,
        transform: 'translateX(0)'
    })),
    state('hidden', style({
        opacity: 0,
        transform: 'translateX(50px)'
    })),
    transition('hidden => visible', [
        animate('700ms ease-in')
    ]),
    transition('visible => hidden', [
        animate('700ms ease-out')
    ])
]);

export const introAnimationFloat = trigger('intro-float', [
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