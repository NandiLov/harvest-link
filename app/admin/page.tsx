"use client";

import { useEffect, useState } from "react";
import { supabase } from "@/lib/supabaseClient";

export default function Admin() {

const [orders,setOrders]=useState([]);
const [inventory,setInventory]=useState([]);

useEffect(()=>{
fetchOrders();
fetchInventory();
},[]);

async function fetchOrders(){

const {data}=await supabase
.from("orders")
.select("*");

setOrders(data || []);

}

async function fetchInventory(){

const {data}=await supabase
.from("inventory")
.select("*");

setInventory(data || []);

}

async function updateStatus(id:number,status:string){

await supabase
.from("orders")
.update({status})
.eq("id",id);

fetchOrders();

}

return(

<div className="p-10">

<h1 className="text-2xl font-bold">
Admin Dashboard
</h1>

<h2 className="mt-6 font-bold">
Orders
</h2>

{orders.map((order:any)=>(

<div
key={order.id}
className="border p-4 mb-3"
>

<p>{order.customer_name}</p>

<select
value={order.status}
onChange={(e)=>
updateStatus(
order.id,
e.target.value
)
}
>

<option value="pending">
Pending
</option>

<option value="processing">
Processing
</option>

<option value="delivered">
Delivered
</option>

</select>

</div>

))}

<h2 className="mt-10 font-bold">
Inventory
</h2>

{inventory.map((item:any)=>(

<div
key={item.id}
className="border p-3 mb-2"
>

{item.product_name}

{" — "}

{item.quantity}

</div>

))}

</div>

)

}