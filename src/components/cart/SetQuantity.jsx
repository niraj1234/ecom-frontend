import React from 'react'

const btnStyles2 = "border-[1.2px] border-slate-800 px-3 py-1 rounded  bg-amber-100";
const btnStyles  = "border-[1.2px] border-slate-500 px-3 py-0 rounded  bg-amber-100 text-3xl font-bold";
const SetQuantity = ({
    quantity,
    cardCounter,
    handeQtyIncrease,
    handleQtyDecrease,
}) => {
   return (
   <div className="flex gap-8 items-center">
        {cardCounter ? null : <div className="font-semibold">QUANTITY</div>}
        <div className="flex md:flex-row flex-col gap-4 items-center lg:text-[22px] text-sm">
            <button 
                disabled={quantity<=1}
                className={btnStyles}
                onClick={handleQtyDecrease}>
                -
            </button>
                <div className="text-red-500 text-2xl font-semibold">{quantity}</div>
            <button
                className={btnStyles}
                onClick={handeQtyIncrease}>
                +
            </button>
        </div>
    </div>
   );
};

export default SetQuantity;