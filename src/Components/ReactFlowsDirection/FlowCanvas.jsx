import React, { useState, useEffect } from "react";
import ReactFlow, { addEdge, Background, Controls } from "react-flow-renderer";
import axios from "axios";

const FlowCanvas = () => {
  const [nodes, setNodes] = useState([]);      // Stores all nodes
  const [edges, setEdges] = useState([]);      // Stores all edges
  const [loading, setLoading] = useState(false); 

  const [nodeType, setNodeType] = useState("default"); // Optional sidebar: type of node

  // Fetch API data for node labels (Bonus)
  useEffect(() => {
    const fetchUsers = async () => {
      setLoading(true);
      try {
        const res = await axios.get("https://jsonplaceholder.typicode.com/users");
        const userNodes = res.data.map((user) => ({
          id: `${user.id}`,
          data: { label: user.name },
          position: { x: Math.random() * 400, y: Math.random() * 400 },
        }));
        setNodes(userNodes);
      } catch (err) {
        console.log("API Error:", err.message);
      } finally {
        setLoading(false);
      }
    };
    fetchUsers();
  }, []);

  // Add a new node dynamically
  const addNode = () => {
    const newNode = {
      id: `${nodes.length + 1}`,
      data: { label: `Node ${nodes.length + 1} (${nodeType})` },
      position: { x: Math.random() * 400, y: Math.random() * 400 },
    };
    setNodes([...nodes, newNode]);
  };

  // Connect nodes dynamically
  const onConnect = (params) => setEdges((eds) => addEdge(params, eds));

  if (loading) return <p>Loading...</p>;

  return (
    <div style={{ display: "flex" }}>
      {/* Sidebar */}
      <div style={{ width: "200px", padding: "10px", borderRight: "1px solid #ddd" }}>
        <h3 className="font-bold">Node Type</h3>
        <select
          value={nodeType}
          onChange={(e) => setNodeType(e.target.value)}
          className="p-2 border rounded"
        >
          <option value="default">Default</option>
          <option value="input">Input</option>
          <option value="output">Output</option>
        </select>
        <button
          onClick={addNode}
          style={{
            marginTop: "10px",
            padding: "10px",
            backgroundColor: "#4ade80",
            color: "white",
            border: "none",
            borderRadius: "5px",
            cursor: "pointer",
          }}
        >
          Add Node
        </button>
      </div>

      {/* Flow Canvas */}
      <div style={{ height: "600px", flexGrow: 1 }}>
        <ReactFlow nodes={nodes} edges={edges} onConnect={onConnect}>
          <Background />
          <Controls />
        </ReactFlow>
      </div>
    </div>
  );
};

export default FlowCanvas;
