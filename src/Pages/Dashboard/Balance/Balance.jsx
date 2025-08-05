import { useEffect, useState, useRef } from "react";
import axios from "axios";
import { motion } from "framer-motion";
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer } from "recharts";
import * as htmlToImage from "html-to-image";
import Swal from "sweetalert2";

const api = "https://b8a12-server-side-seyam14.vercel.app/balances";

const Balance = () => {
  const [balances, setBalances] = useState([]);
  const [loading, setLoading] = useState(true);
  const [form, setForm] = useState({
    totalBalance: "",
    monthlyIncome: "",
    monthlyExpenses: "",
    savings: "",
    expenses: "",
    investments: "",
  });
  const [editId, setEditId] = useState(null);
  const chartRef = useRef();
  const [showModal, setShowModal] = useState(false);

  const fetchBalances = async () => {
    setLoading(true);
    try {
      const res = await axios.get(api);
      setBalances(res.data);
    } catch (err) {
      console.error("Error fetching balances", err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchBalances();
  }, []);

  const handleChange = e => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async e => {
    e.preventDefault();
    try {
      if (editId) {
        await axios.put(`${api}/${editId}`, form);
        Swal.fire("Updated!", "Balance updated.", "success");
        setEditId(null);
      } else {
        await axios.post(api, form);
        Swal.fire("Created!", "New balance added.", "success");
      }
      setForm({
        totalBalance: "",
        monthlyIncome: "",
        monthlyExpenses: "",
        savings: "",
        expenses: "",
        investments: "",
      });
      setShowModal(false);
      fetchBalances();
    } catch (err) {
      console.error("Submit error", err);
      Swal.fire("Error", "Could not save balance.", "error");
    }
  };

  const handleEdit = item => {
    setForm(item);
    setEditId(item._id);
    setShowModal(true);
  };

  const handleDelete = id => {
    Swal.fire({
      title: "Are you sure?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonText: "Yes, delete it!"
    }).then(async result => {
      if (result.isConfirmed) {
        await axios.delete(`${api}/${id}`);
        fetchBalances();
        Swal.fire("Deleted!", "Balance deleted.", "success");
      }
    });
  };

  const handleDownloadSVG = () => {
    htmlToImage.toSvg(chartRef.current).then(dataUrl => {
      const link = document.createElement("a");
      link.download = "balance-chart.svg";
      link.href = dataUrl;
      link.click();
    });
  };

  const totalSummary = balances.reduce((acc, cur) => {
    Object.keys(cur).forEach(key => {
      if (!isNaN(cur[key])) acc[key] = (acc[key] || 0) + Number(cur[key]);
    });
    return acc;
  }, {});

  return (
    <div className="max-w-5xl mx-auto p-4 space-y-8">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold">📊 Balance Dashboard</h1>
        <button
          onClick={() => {
            setEditId(null);
            setForm({
              totalBalance: "",
              monthlyIncome: "",
              monthlyExpenses: "",
              savings: "",
              expenses: "",
              investments: "",
            });
            setShowModal(true);
          }}
          className="bg-blue-500 text-white px-4 py-2 rounded"
        >➕ Add Balance</button>
      </div>

      <div className="bg-white p-4 rounded shadow grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-3">
        {Object.entries(totalSummary).map(([key, value]) => (
          <div key={key} className="text-center">
            <p className="text-sm text-gray-500">{key}</p>
            <p className="text-lg font-semibold text-blue-600">${value}</p>
          </div>
        ))}
      </div>

      <motion.div
        className="bg-white p-6 rounded-xl shadow"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
      >
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-lg font-semibold">📈 Chart</h2>
          <button
            onClick={handleDownloadSVG}
            className="bg-green-500 text-white px-3 py-1 rounded"
          >⬇️ Download SVG</button>
        </div>
        <div ref={chartRef} className="w-full h-64">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={balances}>
              <XAxis dataKey="_id" hide />
              <YAxis />
              <Tooltip />
              <Bar dataKey="monthlyIncome" fill="#4ade80" name="Income" />
              <Bar dataKey="monthlyExpenses" fill="#f87171" name="Expenses" />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </motion.div>

      <motion.div
        className="grid gap-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
      >
        {loading ? (
          <p className="text-center text-gray-500">Loading...</p>
        ) : balances.length === 0 ? (
          <p className="text-center text-gray-500">No balances found.</p>
        ) : (
          balances.map(item => (
            <div
              key={item._id}
              className="bg-white p-4 rounded-lg shadow flex flex-col sm:flex-row sm:items-center justify-between gap-3"
            >
              <div>
                <p><strong>Total:</strong> ${item.totalBalance}</p>
                <p><strong>Income:</strong> ${item.monthlyIncome}</p>
                <p><strong>Expenses:</strong> ${item.monthlyExpenses}</p>
              </div>
              <div className="space-x-2">
                <button
                  onClick={() => handleEdit(item)}
                  className="bg-yellow-400 px-3 py-1 rounded text-white"
                >Edit</button>
                <button
                  onClick={() => handleDelete(item._id)}
                  className="bg-red-500 px-3 py-1 rounded text-white"
                >Delete</button>
              </div>
            </div>
          ))
        )}
      </motion.div>

      {showModal && (
        <div className="fixed inset-0 bg-black bg-opacity-30 flex items-center justify-center z-50">
          <motion.form
            onSubmit={handleSubmit}
            className="bg-white p-6 rounded-lg shadow-lg w-full max-w-md space-y-4"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
          >
            <h2 className="text-xl font-semibold text-center">
              {editId ? "✏️ Edit Balance" : "➕ Create Balance"}
            </h2>
            {Object.keys(form).map(key => (
              <input
                key={key}
                name={key}
                placeholder={key}
                value={form[key]}
                onChange={handleChange}
                className="border p-2 rounded w-full"
                required
              />
            ))}
            <div className="flex justify-between">
              <button
                type="button"
                onClick={() => setShowModal(false)}
                className="bg-gray-300 px-4 py-2 rounded"
              >Cancel</button>
              <button
                type="submit"
                className="bg-blue-500 text-white px-4 py-2 rounded"
              >{editId ? "Update" : "Create"}</button>
            </div>
          </motion.form>
        </div>
      )}
    </div>
  );
};

export default Balance;
