import { getOrders } from "@/lib/actions/action";
import { auth } from "@clerk/nextjs/server";
import Image from "next/image";

const Orders = async () => {
  const { userId } = auth(); // Dobija ID trenutno prijavljenog korisnika
  const orders = await getOrders(userId as string);  // Preuzima narudžbine za korisnika

  console.log(orders?.[0]?.products); // Ispisuje proizvode prve narudžbine u konzolu

  return (
    <div className="px-10 py-5 max-sm:px-3 font-noto">
      <p className="text-heading3-bold my-10 text-left">Your Orders</p>
      <hr className="w-full border-t-2 border-gray-400 my-4" />
      <div className="relative w-full h-[300px] md:h-[400px] lg:h-[500px] overflow-hidden">
        <div
          className="flex flex-col items-center gap-10 py-8 px-5 absolute inset-0"/>
        <div className="relative z-10">
           {/* Prikazuje poruku ako nema narudžbina */}
          {(!orders || orders.length === 0) && (
            <p className="font-playfair text-heading3-bold text-grey-2  text-center">You have no orders yet.</p>
          )}

        {/* Prikazuje listu narudžbina ako postoje */}
          {orders && orders.length > 0 && (
            <div className="flex flex-col gap-10">
              {orders.map((order: OrderType) => (
                <div key={order._id} className="flex flex-col gap-8 p-4 bg-grey-1 hover:bg-white rounded-lg shadow-lg">
                  <div className="flex gap-20 flex-col md:flex-row md:gap-10">
                    <p className="text-base-bold text-grey-2">Order ID: {order._id}</p>
                    <p className="text-base-bold">Total Amount: {order.totalAmount} EUR</p>
                  </div>

                  <div className="flex flex-col gap-5 text-gray-800">
                    {order.products.map((orderItem: OrderItemType) => (
                      <div key={orderItem.product._id} className="flex gap-4 items-start">
                        <Image
                          src={orderItem.product.media[0]}
                          alt={orderItem.product.title}
                          width={100}
                          height={100}
                          className="w-32 h-32 object-cover rounded-lg"
                        />
                        <div className="flex flex-col justify-between">
                          <p className="text-small-medium">
                            Title:{" "}
                            <span className="text-small-bold">{orderItem.product.title}</span>
                          </p>
                          {orderItem.size && (
                            <p className="text-small-medium">
                              Size:{" "}
                              <span className="text-small-bold">{orderItem.size}</span>
                            </p>
                          )}
                          <p className="text-small-medium">
                            Price:{" "}
                            <span className="text-small-bold">{orderItem.product.price} EUR</span>
                          </p>
                          <p className="text-small-medium">
                            Quantity:{" "}
                            <span className="text-small-bold">{orderItem.quantity}</span>
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Orders;
