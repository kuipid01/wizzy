import { FaPlus } from "react-icons/fa6";

const Alltransactions = () => {
  type transactionType = {
    title: string;
    category: string;
    amount: number;
  };
  const transactions = [
    {
      title: "Dropbox",
      category: "Starbucks",
      amount: 3000,
    },
    {
      title: "Dropbox",
      category: "Starbucks",
      amount: 3000,
    },
    {
      title: "Dropbox",
      category: "Starbucks",
      amount: 3000,
    },
    {
      title: "Dropbox",
      category: "Starbucks",
      amount: 3000,
    },
    {
      title: "Dropbox",
      category: "Starbucks",
      amount: 3000,
    },
    {
      title: "Dropbox",
      category: "Starbucks",
      amount: 3000,
    },
    {
      title: "Dropbox",
      category: "Starbucks",
      amount: 3000,
    },
  ];
  return (
    <div
      data-simplebar
      className="w-full scrollbar-thumb-gray-400 overflow-hidden overflow-y-scroll text-black flex flex-col gap-5 h-full   px-3"
    >
      <div className=" mt-2 rounded-t-[20px]  shadow-sm py-3 flex sticky top-0 bg-white  items-center justify-between">
        <h1 className=" font-bold text-[20px]">All Transactions</h1>
        <FaPlus className="font-extralight text-gray-500 text-normal" />
      </div>
      {transactions.map((item: transactionType, i) => (
        <div
          key={i}
          className="flex py-2  bg-gray-50 items-center justify-between "
        >
          <div className="flex gap-3 items-center">
            <img
              src="/register.png"
              className="w-10 border h-10 rounded-full object-cover"
              alt=""
            />
            <div className=" flex flex-col gap-1">
              <p className="font-bold text-small">{item.title}</p>
              <small className=" text-xs uppercase font-normal text-gray-600">
                {item.category}
              </small>
            </div>
          </div>
          <p className=" text-normal font-bold ">${item.amount}</p>
        </div>
      ))}
    </div>
  );
};

export default Alltransactions;
