# Dynamic React Flow Node Project

## Overview
This project is a mini React Flow interface where users can dynamically add nodes and connect them with edges. It demonstrates interactive flow diagrams in React using the React Flow library.

## Features
- Start with an empty canvas for the flow diagram.
- Click "Add Node" to dynamically create nodes with unique IDs.
- Nodes are draggable and connectable with edges.
- Optional sidebar to select node type: default, input, or output.
- Bonus: Fetch API data from JSONPlaceholder and populate node labels dynamically.
- React Flow Controls and Background for better UX.

## Tech Stack
- React (JavaScript)
- React Flow Renderer
- Axios (for API requests)
- CSS / Tailwind (optional styling)

## Installation & Setup
1. Clone the repository: `git clone <repo-link>`
2. Install dependencies: `npm install`
3. Start the project: `npm start`
4. Open in browser at `http://localhost:3000`

## How it Works
- The canvas starts empty or pre-filled with API data nodes.
- Clicking "Add Node" creates a new node with a unique ID and random position.
- Nodes are draggable, and edges can be created by connecting nodes.
- Sidebar allows users to select the type of node before adding.
- Node labels can be dynamically fetched from an API (user names from JSONPlaceholder).
- All updates and connections are stored in React state.

## Usage
- Use the sidebar to select a node type.
- Click "Add Node" to create nodes dynamically.
- Drag nodes to reposition them.
- Connect nodes by dragging edges from one node to another.
- Inspect console to see API data fetching and node creation logs.

## Notes
- Axios is used for API requests.
- React Flow library handles smooth drag & drop and edge creation.
- Can be extended with node deletion, updating node data, or multiple node types.
