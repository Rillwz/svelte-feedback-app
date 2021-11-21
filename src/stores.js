import { writable } from 'svelte/store'

export const FeedbackStore = writable([
    {
        id: '1',
        rating: 10,
        text: 'Lorem ipsum'
    },
    {
        id: '2',
        rating: 9,
        text: 'Lorem ipsam'
    },
    {
        id: '3',
        rating: 8,
        text: 'Lorem ipsim'
    }
])

