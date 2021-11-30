import { StarIcon } from "@heroicons/react/solid";
import Image from "next/image";
import { addToCart, removeFromCart } from "../slices/cartSlice";
import Currency from "react-currency-formatter";
import { useDispatch } from "react-redux";

function CheckoutProduct({
  id,
  title,
  price,
  rating,
  description,
  category,
  image,
  hasPrime,
}) {
  const dispacth = useDispatch();

  // this needs to be modified to show increasing the quantity rather than add to cart
  const addItemToCart = () => {
    const product = {
      id,
      title,
      price,
      rating,
      description,
      category,
      image,
      hasPrime,
    };
    dispacth(addToCart(product));
  };

  const removeItemFromCart = () => {
    dispacth(removeFromCart({ id }));
  };

  return (
    <div className="grid grid-cols-5">
      <Image src={image} height={200} width={200} objectFit="contain" />
      <div className="col-span-3 mx-5">
        <p>{title}</p>
        <div className="flex">
          {Array(rating)
            .fill()
            .map((_, i) => (
              <StarIcon className="h-5 text-yellow-500" />
            ))}
        </div>
        <p className="text-xs my-2 line-clamp-3">{description}</p>
        <Currency quantity={price} currency="USD" />

        {hasPrime && (
          <div className="flex items-center space-x-2">
            <img
              loading="lazy"
              className="w-12"
              src="https://links.papareact.com/fdw"
              alt=""
            />
            <p className="text-xs text-gray-500">FREE Next-day Delivery</p>
          </div>
        )}
      </div>
      <div className="flex flex-col space-y-2 my-auto justify-self-end">
        <button className="button mt-auto" onClick={addItemToCart}>
          Increase Quantity
        </button>
        <button className="button mt-auto" onClick={removeItemFromCart}>
          Delete
        </button>
      </div>
    </div>
  );
}

export default CheckoutProduct;
