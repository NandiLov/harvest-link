"use client";

import { useEffect, useState } from "react";
import { supabase } from "@/lib/supabaseClient";

/* ---------------- TYPES ---------------- */

type Order = {
  id: number;
  customer_name?: string;
  status: string;
};

type InventoryItem = {
  id: number;
  product_name: string;
  quantity: number;
  price?: number;
};

/* ---------------- PAGE ---------------- */

export default function Admin() {
  const [orders, setOrders] = useState<Order[]>([]);
  const [inventory, setInventory] = useState<InventoryItem[]>([]);

  useEffect(() => {
    fetchOrders();
    fetchInventory();
  }, []);

  /* ---------------- FETCH ORDERS ---------------- */

  async function fetchOrders() {
    const { data } = await supabase
      .from("orders")
      .select("*");

    setOrders(data || []);
  }

  /* ---------------- FETCH INVENTORY ---------------- */

  async function fetchInventory() {
    const { data } = await supabase
      .from("inventory")
      .select("*");

    setInventory(data || []);
  }

  /* ---------------- UPDATE STATUS ---------------- */

  async function updateStatus(id: number, status: string) {
    await supabase
      .from("orders")
      .update({ status })
      .eq("id", id);

    fetchOrders();
  }

  /* ---------------- UI ---------------- */

  return (
    <div className="p-10 max-w-5xl mx-auto">

      <h1 className="text-3xl font-bold text-green-800">
        Admin Dashboard
      </h1>

      {/* ORDERS */}
      <h2 className="mt-8 text-xl font-bold">
        Orders
      </h2>

      <div className="mt-4 space-y-3">
        {orders.map((order) => (
          <div
            key={order.id}
            className="border rounded-lg p-4 flex justify-between items-center"
          >
            <p className="font-medium">
              {order.customer_name || "Unknown Customer"}
            </p>

            <select
              className="border p-2 rounded"
              value={order.status}
              onChange={(e) =>
                updateStatus(order.id, e.target.value)
              }
            >
              <option value="pending">Pending</option>
              <option value="processing">Processing</option>
              <option value="delivered">Delivered</option>
            </select>
          </div>
        ))}
      </div>

      {/* INVENTORY */}
      <h2 className="mt-10 text-xl font-bold">
        Inventory
      </h2>

      <div className="mt-4 space-y-2">
        {inventory.map((item) => (
          <div
            key={item.id}
            className="border rounded-lg p-3 flex justify-between"
          >
            <span>{item.product_name}</span>
            <span className="font-bold">
              {item.quantity}
            </span>
          </div>
        ))}
      </div>

    </div>
  );
}