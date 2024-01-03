import React, { useEffect, useState } from "react";
import AdminHeader from "./AdminHeader";
import getAllpets from "../../Services/Admin/getAllpets";

function AdminPets() {

  const [pets, setPets] = useState([""]);

  useEffect(()=>{
    
    fetchdata();
  
  },[]);
  async function fetchdata(){
    try {
      const response =await getAllpets();
      console.log(response);
      setPets(response.pets)

      
    } catch (error) {
      console.error(error);  
    }
  }

  const people = [
    {
      name: "John Doe",
      title: "Front-end Developer",
      department: "Engineering",
      email: "john@devui.com",
      role: "Developer",
      image:
        "https://images.unsplash.com/photo-1628157588553-5eeea00af15c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1160&q=80",
    },
    {
      name: "Jane Doe",
      title: "Back-end Developer",
      department: "Engineering",
      email: "jane@devui.com",
      role: "CTO",
      image:
        "https://images.unsplash.com/photo-1639149888905-fb39731f2e6c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=928&q=80",
    },
  ];
  return (
    <div className="flex">
      <AdminHeader />
      
      <div className="flex-grow">
        <section className="mx-auto w-full max-w-7xl px-4 py-4">
          <div className="flex flex-col space-y-4 md:flex-row md:items-center md:justify-between md:space-y-0">
            <div>
              <h2 className="text-lg font-semibold">All Pets in sell</h2>
              <p className="mt-1 text-sm text-gray-700">
                This is a list of all pets. You can, edit
                or delete existing ones.
              </p>
            </div>
            <div>
             
            </div>
          </div>
          <div className="mt-6 flex flex-col">
            <div className="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
              <div className="inline-block min-w-full py-2 align-middle md:px-6 lg:px-8">
                <div className="overflow-hidden border border-gray-200 md:rounded-lg">
                  <table className="min-w-full divide-y divide-gray-200">
                    <thead className="bg-gray-50">
                      <tr>
                        <th
                          scope="col"
                          className="px-4 py-3.5 text-left text-sm font-normal text-gray-700"
                        >
                          <span>Name</span>
                        </th>
                        <th
                          scope="col"
                          className="px-12 py-3.5 text-left text-sm font-normal text-gray-700"
                        >
                          Description
                        </th>

                        <th
                          scope="col"
                          className="px-4 py-3.5 text-left text-sm font-normal text-gray-700"
                        >
                          Categorie
                        </th>

                        <th
                          scope="col"
                          className="px-4 py-3.5 text-left text-sm font-normal text-gray-700"
                        >
                          Price
                        </th>
                        <th scope="col" className="relative px-4 py-3.5">
                          <span className="sr-only">Edit</span>
                        </th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-200 bg-white">
                      {pets.map((pet) => (
                        <tr key={pet.id}>
                          <td className="whitespace-nowrap px-4 py-4">
                            <div className="flex items-center">
                              <div className="h-10 w-10 flex-shrink-0">
                                <img
                                  className="h-10 w-10 rounded-full object-cover"
                                  src={pet.image_url}
                                  alt=""
                                />
                              </div>
                              <div className="ml-4">
                                <div className="text-sm font-medium text-gray-900">
                                  {pet.name}
                                </div>
                                <div className="text-sm text-gray-700">
                                  {pet.email}
                                </div>
                              </div>
                            </div>
                          </td>
                          <td className="whitespace-nowrap px-12 py-4">
                            <div className="text-sm text-gray-900 ">
                              {pet.description}
                            </div>
                            <div className="text-sm text-gray-700">
                              {pet.id}
                            </div>
                          </td>
                          <td className="whitespace-nowrap px-4 py-4">
                            <span className="inline-flex rounded-full bg-green-100 px-2 text-xs font-semibold leading-5 text-green-800">
                              Active
                            </span>
                          </td>
                          <td className="whitespace-nowrap px-4 py-4 text-sm text-gray-700">
                            {pet.price}
                          </td>
                          <td className="whitespace-nowrap px-4 py-4 text-right text-sm font-medium">
                            <a href="#" className="text-gray-700">
                              Edit
                            </a>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

export default AdminPets;
