// fade.animation.ts

import { trigger, animate, transition, style, query, state } from '@angular/animations';

export const fadeAnimation =

    trigger('fadeAnimation', [

        transition('* => *', [

            query(':enter',
                [
                    style({ opacity: 0 })
                ],
                { optional: true }
            ),

            query(':leave',
                [
                    style({ opacity: 1 }),
                    animate('0.2s', style({ opacity: 0 }))
                ],
                { optional: true }
            ),

            query(':enter',
                [
                    style({ opacity: 0 }),
                    animate('0.2s', style({ opacity: 1 }))
                ],
                { optional: true }
            )

        ])

    ]);


export const fade = [
    trigger('fade', [
        state('in', style({ 'opacity': '1' })),
        state('out', style({ 'opacity': '0' })),
        transition('* <=> *', [
            animate(300)
        ])
    ])
];
