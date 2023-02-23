import {TbCurrencyRupee} from 'react-icons/tb';
import seatImg from '../../../../assets/SeatFinal.png';
export const price = [
    {
        id:1,
        sp:'All',
        rup:<TbCurrencyRupee/>,
        p:699,
    },
    {
        id:2,
        name:'',
        rup:<TbCurrencyRupee/>,
        p:799,
    },
    {
        id:3,
        name:'',
        rup:<TbCurrencyRupee/>,
        p:899,
    },
    {
        id:4,
        name:'',
        rup:<TbCurrencyRupee/>,
        p:950,
    },
    {
        id:5,
        name:'',
        rup:<TbCurrencyRupee/>,
        p:999,
    },
]
export const detail = [
    {
        id:1,
        name:'Vaccant Seat',
    },
    {
        id:2,
        name:'Reserve Seat',
    },
    {
        id:3,
        name:'Selected Seat',
    },
]
export const seatData = [
{   
    id:1,
    seatFirstRow:[
        {src: seatImg,alt: 'Image 1',initialColor: 'white'},
        {src: seatImg,alt: 'Image 2',initialColor: 'white'},
        {src: seatImg,alt: 'Image 3',initialColor: 'white'},
        {src: seatImg,alt: 'Image 4',initialColor: 'white'},
        {src: seatImg,alt: 'Image 5',initialColor: 'white'},
        {src: seatImg,alt: 'Image 6',initialColor: 'white'},
        {src: seatImg,alt: 'Image 7',initialColor: 'white'},
    ],
    id:2,
    seatSecondRow:[
        {src: seatImg,alt: 'Image 1',initialColor: 'white'},
        {src: seatImg,alt: 'Image 2',initialColor: 'white'},
        {src: seatImg,alt: 'Image 3',initialColor: 'white'},
        {src: seatImg,alt: 'Image 4',initialColor: 'white'},
        {src: seatImg,alt: 'Image 5',initialColor: 'white'},
        {src: seatImg,alt: 'Image 6',initialColor: 'white'},
        {src: seatImg,alt: 'Image 7',initialColor: 'white'},
    ],
    id:3,
    seatLastRow:[
        {src: seatImg,alt: 'Image 1',initialColor: 'gray-300'},
        {src: seatImg,alt: 'Image 2',initialColor: 'gray-300'},
        {src: seatImg,alt: 'Image 3',initialColor: 'white'},
        {src: seatImg,alt: 'Image 4',initialColor: 'white'},
    ],
}
];
export const book = [
    {
            id:1,
            heading:'Picking and Dropping',
            from:'Guragon',
            timefr:'22:45',
            detail:'Gurgaon sleeper A/c'
    },
    {
        id:2,
        to:'New Delhi',
        timeto:'08:20',
        detailto:'fjdjf'
    },
    {
        id:3,
        seat:'Seat No',
        number:7,
        detailfair:'Fare Detail',
        text:'Amount',
        rup:<TbCurrencyRupee/>,
        fare:750,
    }
]

///
// const busSeatData = [
//     {
//       id: 1,
//       prices: "599",
//       seatInfo: [
//         { id: 1, value: "Vacant Seats", selected: false },
//         { id: 2, value: "Reserved Seats", selected: false },
//         { id: 3, value: "Selexted Seats", selected: false },
//       ],
//       seatLeft: [
//         { id: 1, price: "599", value: seat, selected: false },
//         { id: 2, price: "599", value: seat, selected: false },
//         { id: 3, price: "599", value: seat, selected: false },
//         { id: 4, price: "599", value: seat, selected: false },
//         { id: 5, price: "599", value: seat, selected: false },
//         { id: 6, price: "599", value: seat, selected: false },
//         { id: 7, price: "599", value: seat, selected: false },
//       ],
//       seatMid: [
//         { id: 8, price: "599", value: seat, selected: false },
//         { id: 9, price: "599", value: seat, selected: false },
//         { id: 10, price: "599", value: seat, selected: false },
//         { id: 11, price: "599", value: seat, selected: false },
//         { id: 12, price: "599", value: seat, selected: false },
//         { id: 13, price: "599", value: seat, selected: false },
//         { id: 14, price: "599", value: seat, selected: false },
//       ],
//       seatRight: [
//         { id: 15, price: "599", value: seat, selected: false },
//         { id: 16, price: "599", value: seat, selected: false },
//         { id: 17, price: "599", value: seat, selected: false },
//         { id: 18, price: "599", value: seat, selected: false },
//         { id: 19, price: "599", value: seat, selected: false },
//       ],
//     },
//     {
//       id: 2,
//       prices: "699",
//       seatInfo: [
//         { id: 1, value: "Vacant Seats", selected: false },
//         { id: 2, value: "Reserved Seats", selected: false },
//         { id: 3, value: "Selexted Seats", selected: false },
//       ],
//       seatLeft: [
//         { id: 1, price: "699", value: seat, selected: false },
//         { id: 2, price: "699", value: seat, selected: false },
//         { id: 3, price: "699", value: seat, selected: false },
//         { id: 4, price: "699", value: seat, selected: false },
//         { id: 5, price: "699", value: seat, selected: false },
//         { id: 6, price: "699", value: seat, selected: false },
//         { id: 7, price: "699", value: seat, selected: false },
//       ],
//       seatMid: [
//         { id: 8, price: "699", value: seat, selected: false },
//         { id: 9, price: "699", value: seat, selected: false },
//         { id: 10, price: "699", value: seat, selected: false },
//         { id: 11, price: "699", value: seat, selected: false },
//         { id: 12, price: "699", value: seat, selected: false },
//         { id: 13, price: "699", value: seat, selected: false },
//         { id: 14, price: "699", value: seat, selected: false },
//       ],
//       seatRight: [
//         { id: 15, price: "699", value: seat, selected: false },
//         { id: 16, price: "699", value: seat, selected: false },
//         { id: 17, price: "699", value: seat, selected: false },
//         { id: 18, price: "699", value: seat, selected: false },
//         { id: 19, price: "699", value: seat, selected: false },
//       ],
//     },
//     {
//       id: 3,
//       prices: "899",
//       seatInfo: [
//         { id: 1, value: "Vacant Seats", selected: false },
//         { id: 2, value: "Reserved Seats", selected: false },
//         { id: 3, value: "Selexted Seats", selected: false },
//       ],
//       seatLeft: [
//         { id: 1, price: "899", value: seat, selected: false },
//         { id: 2, price: "899", value: seat, selected: false },
//         { id: 3, price: "899", value: seat, selected: false },
//         { id: 4, price: "899", value: seat, selected: false },
//         { id: 5, price: "899", value: seat, selected: false },
//         { id: 6, price: "899", value: seat, selected: false },
//         { id: 7, price: "899", value: seat, selected: false },
//       ],
//       seatMid: [
//         { id: 8, price: "899", value: seat, selected: false },
//         { id: 9, price: "899", value: seat, selected: false },
//         { id: 10, price: "899", value: seat, selected: false },
//         { id: 11, price: "899", value: seat, selected: false },
//         { id: 12, price: "899", value: seat, selected: false },
//         { id: 13, price: "899", value: seat, selected: false },
//         { id: 14, price: "899", value: seat, selected: false },
//       ],
//       seatRight: [
//         { id: 15, price: "899", value: seat, selected: false },
//         { id: 16, price: "899", value: seat, selected: false },
//         { id: 17, price: "899", value: seat, selected: false },
//         { id: 18, price: "899", value: seat, selected: false },
//         { id: 19, price: "899", value: seat, selected: false },
//       ],
//     },
//     {
//       id: 4,
//       prices: "1199",
//       seatInfo: [
//         { id: 1, value: "Vacant Seats", selected: false },
//         { id: 2, value: "Reserved Seats", selected: false },
//         { id: 3, value: "Selexted Seats", selected: false },
//       ],
//       seatLeft: [
//         { id: 1, price: "1199", value: seat, selected: false },
//         { id: 2, price: "1199", value: seat, selected: false },
//         { id: 3, price: "1199", value: seat, selected: false },
//         { id: 4, price: "1199", value: seat, selected: false },
//         { id: 5, price: "1199", value: seat, selected: false },
//         { id: 6, price: "1199", value: seat, selected: false },
//         { id: 7, price: "1199", value: seat, selected: false },
//       ],
//       seatMid: [
//         { id: 8, price: "1199", value: seat, selected: false },
//         { id: 9, price: "1199", value: seat, selected: false },
//         { id: 10, price: "1199", value: seat, selected: false },
//         { id: 11, price: "1199", value: seat, selected: false },
//         { id: 12, price: "1199", value: seat, selected: false },
//         { id: 13, price: "1199", value: seat, selected: false },
//         { id: 14, price: "1199", value: seat, selected: false },
//       ],
//       seatRight: [
//         { id: 15, price: "1199", value: seat, selected: false },
//         { id: 16, price: "1199", value: seat, selected: false },
//         { id: 17, price: "1199", value: seat, selected: false },
//         { id: 18, price: "1199", value: seat, selected: false },
//         { id: 19, price: "1199", value: seat, selected: false },
//       ],
//     },
//   ];