import Image from "next/image";
import Link from "next/link";
import { useDispatch } from "react-redux";
import {addData} from '../../slice/addToCartSlice'


export async function getServerSideProps() {
  const response = await fetch("http://localhost:8080/products");
  const data = await response.json();

  return { props: { data: data, length: data.length } };
}

export default function Cart({ data }) {

  const dispatch = useDispatch();
  function showItemDetails(item){
    console.log(item);
  }

  return (
    <div className=" m-4 scroll-smooth md:scroll-auto">
      <div div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
        {data &&
          data.map((item) => (
            <Link href={`/cart`} key={item.id}>
              {/* /${item.id} */}
              <div className="w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                <div className="flex justify-end px-4 pt-4">
                  <button
                    id="dropdownButton"
                    data-dropdown-toggle="dropdown"
                    className="inline-block text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 focus:ring-4 focus:outline-none focus:ring-gray-200 dark:focus:ring-gray-700 rounded-lg text-sm p-1.5"
                    type="button"
                  >
                    <span className="sr-only">Open dropdown</span>
                  </button>
                  <div
                    id="dropdown"
                    className="z-10 hidden text-base list-none bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700"
                  >
                    {/* <ul className="py-2" aria-labelledby="dropdownButton">
                      <li>
                        <a
                          href="#"
                          className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
                        >
                          Edit
                        </a>
                      </li>
                      <li>
                        <a
                          href="#"
                          className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
                        >
                          Export Data
                        </a>
                      </li>
                      <li>
                        <a
                          href="#"
                          className="block px-4 py-2 text-sm text-red-600 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
                        >
                          Delete
                        </a>
                      </li>
                    </ul> */}
                  </div>
                </div>
                <div className="flex flex-col items-center pb-10">
                  <Image
                    className="rounded-full shadow-lg"
                    src={"https://flowbite.com/images/logo.svg"}
                    alt="Bonnie image"
                    width={100} // Desired width
                    height={200} // Desired height
                  />
                  <h5 className="mb-1 text-xl font-medium text-gray-900 dark:text-white">
                    {item.title}
                  </h5>
                  <span className="text-sm text-gray-500 dark:text-gray-400">
                    Category : {item.category}
                  </span>
                  <span className="text-sm text-gray-500 dark:text-gray-400">
                    Brand : {item.brand}
                  </span>
                  <div className="flex mt-4 md:mt-6">
                    <a
                      href={"/cart"}
                      className="inline-flex items-center px-4 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                      onClick={() => {
                        showItemDetails(item);
                      }}
                    >
                      View Details
                    </a>
                    <a
                      href={"/cart"}
                      className="py-2 px-4 ms-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
                      onClick={() => {
                        dispatch({ type: addData, data: item })
                      }}
                    >
                      Add to cart
                    </a>
                  </div>
                </div>
              </div>
            </Link>
          ))}
      </div>
    </div>
  );
}
