import React, { useState } from "react";

const seatData = [
    {
        id: 1,
        price: 50,
        category: "Category A",
    },
    {
        id: 2,
        price: 60,
        category: "Category A",
    },
    {
        id: 3,
        price: 70,
        category: "Category B",
    },
    {
        id: 4,
        price: 80,
        category: "Category B",
    },
    {
        id: 5,
        price: 90,
        category: "Category C",
    },
    {
        id: 6,
        price: 100,
        category: "Category C",
    },
    {
        id: 7,
        price: 110,
        category: "Category D",
    },
    {
        id: 8,
        price: 120,
        category: "Category D",
    },
];

const Seat = ({ seat, onClick }) => {
    const handleClick = () => {
        onClick(seat.price);
    };

    return (
        <div onClick={handleClick}>
            Seat ID: {seat.id}
            {/* , Price: {seat.price}, Category: {seat.category} */}
        </div>
    );
};

const Search = () => {
    const [selectedPrice, setSelectedPrice] = useState("");

    const handleSeatClick = (price) => {
        setSelectedPrice(price);
    };

    return (
        <div>
            {seatData.map((seat) => (
                <Seat key={seat.id} seat={seat} onClick={handleSeatClick} />
            ))}
            <div>Fare Detail: {selectedPrice}</div>
        </div>
    );
};

export default Search;
